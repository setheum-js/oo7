var should = require('chai').should();
var oo7sparity = require('../src/index');

describe('bonds', () => {
	it('should be constructable', () => {
		let t = new oo7sparity.Bonds();

		t.should.be.a('object');
	});
});
