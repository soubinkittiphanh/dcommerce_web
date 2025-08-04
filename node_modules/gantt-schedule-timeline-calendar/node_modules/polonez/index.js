const http = require('http');
const Router = require('@neuronet.io/rrrouter');
const parser = require('@polka/url');

const mount = (fn) => (fn instanceof Polonez ? fn.attach : fn);

function onError(err, req, res, next) {
	let code = (res.statusCode = err.code || err.status || 500);
	if (typeof err === 'string' || Buffer.isBuffer(err)) res.end(err);
	else res.end(err.message || http.STATUS_CODES[code]);
}

class Polonez extends Router {
	constructor(opts = {}) {
		super();
		const version = Number(process.version.split('.')[0].replace(/\D/gi, ''));
		if (version < 11) {
			console.error(
				`\n\nYou need at least nodejs version 11 or higher (your version: ${process.version}).\n\n`
			);
			process.exit();
		}
		this.opts = opts;
		this.parse = parser;
		this.wares = [];
		this.bwares = {};
		this.parse = parser;
		this.server = opts.server;
		this.handler = this.handler.bind(this);
		this.onError = opts.onError || onError; // catch-all handler
		this.onNoMatch = opts.onNoMatch || this.onError.bind(null, { code: 404 });
		this.attach = (req, res) => setImmediate(this.handler, req, res);
	}

	listen() {
		(this.server = this.server || http.createServer()).on(
			'request',
			this.handler
		);
		this.server.listen.apply(this.server, arguments);
		return this;
	}

	use(base, ...fns) {
		if (base === '/') {
			super.use(base, fns.map(mount));
		} else if (typeof base === 'function' || base instanceof Polonez) {
			super.use('/', [base, ...fns].map(mount));
		} else {
			super.use(
				base,
				(req, _, next) => {
					if (typeof base === 'string') {
						let len = base.length;
						base.startsWith('/') || len++;
						req.url = req.url.substring(len) || '/';
						req.path = req.path.substring(len) || '/';
					} else {
						req.url = req.url.replace(base, '') || '/';
						req.path = req.path.replace(base, '') || '/';
					}
					if (req.url.charAt(0) !== '/') {
						req.url = '/' + req.url;
					}
					next();
				},
				fns.map(mount),
				(req, _, next) => {
					req.url = req._parsedUrl.href;
					req.path = req._parsedUrl.pathname;
					next();
				}
			);
		}
		return this; // chainable
	}

	handler(req, res, next) {
		// @ts-ignore
		let info = this.parse(req, true);
		let obj = this.find(req.method, (req.path = info.pathname));

		req.params = obj.params;
		req.originalUrl = req.originalUrl || req.url;
		req.query = info.query || {};
		req.search = info.search;

		try {
			let i = 0,
				arr = obj.handlers.concat(this.onNoMatch),
				len = arr.length;
			let loop = () => res.finished || (i < len && arr[i++](req, res, next));
			next =
				next || ((err) => (err ? this.onError(err, req, res, next) : loop()));
			loop(); // init
		} catch (err) {
			this.onError(err, req, res, next);
		}
	}
}

module.exports = (opts) => new Polonez(opts);
