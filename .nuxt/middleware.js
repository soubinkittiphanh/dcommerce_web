const middleware = {}

middleware['auths'] = require('..\\middleware\\auths.js')
middleware['auths'] = middleware['auths'].default || middleware['auths']

middleware['error-boundary'] = require('..\\middleware\\error-boundary.js')
middleware['error-boundary'] = middleware['error-boundary'].default || middleware['error-boundary']

export default middleware
