// const assert = require('assert')  nodejs
const assert = require('chai').assert;
const app = require('../app');
const sayHello = require('../app').sayHello;

describe('App',function () {
    it('sayHello should return hello',function(){
        let result = sayHello();
        assert.equal(result, 'hello');
    })
    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result,'string');
    })
})