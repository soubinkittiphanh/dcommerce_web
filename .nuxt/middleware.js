const middleware = {}

middleware['auths'] = require('../middleware/auths.js')
middleware['auths'] = middleware['auths'].default || middleware['auths']

export default middleware
