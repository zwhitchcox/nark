'use strict'
const through = require('through2')
function executeServer(nark) {
  let stream = through.obj(function(file, enc, cb) {
		// dependency inject nark into each file
		require(file.path)(nark)
    cb()
  })
  return stream
}
module.exports = executeServer
