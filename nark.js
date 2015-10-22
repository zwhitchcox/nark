'use strict'
const koa      = require('koa'),
	router       = require('koa-router'),
	serve        = require('koa-static'),
	sendfile     = require('koa-sendfile'),
	thinky       = require('thinky'),
	EventEmitter = require('events').EventEmitter,
	gulp         = require('gulp'),
	path         = require('path'),
	serverCode = require('./server-code')

module.exports = Nark

function Nark(config) {
	if (!(this instanceof Nark)) return new Nark(config)
	EventEmitter.call(this)
	let self        = this
	self.config     = config
	self.app        = koa()
	self.router     = router()
	self.thinky     = thinky(self.config.rethinkdb)
	self.serve      = serve
	self.sendfile   = sendfile
	self.BASEPATH   = path.normalize(__dirname + '/../..')
	// dependency inject nark into
	// all server side js files (sjs)
	// kind of ugly... I know ... :/
	let stream = gulp
		.src(['logic/{,**/}*.sjs','!logic/{,**/}*spec.sjs'], {buffer:false})
		.pipe(serverCode(self))
		.pipe(gulp.dest('doesntdoanything'))
	stream.on('end', () => {
		self.emit('built')
	})
}
Nark.prototype = Object.create(EventEmitter.prototype)
