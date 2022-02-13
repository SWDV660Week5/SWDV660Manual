var Browser = require('zombie')
var assert = require('assert')
var app = require('../helloworld')


describe('main page', function() { 
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3333' })
  })
  before(function(done) {
    this.browser.visit('/', done)
  })
  it('should say hello AWS_Week2', function() { 
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello AWS_Week2")
  })
})
