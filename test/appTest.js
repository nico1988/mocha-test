// const assert = require('assert')  nodejs
const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// results 

/**
 * describe 就是一个包裹了一堆测试的函数  可以分组 可以嵌套 
 * 在回掉函数中执行我们的测试
 * 每个test 用it函数进行调用 it('描述信息',回调函数)
*/
describe('App',function () {
    describe('sayhello',function(){
        it('sayHello should return hello',function(){
            let result = app.sayHello();
            assert.equal(result, 'hello');
        })
        it('sayHello should return type string', function(){
            let result = app.sayHello();
            assert.typeOf(result,'string');
        })    
    })
    describe("addNumbers", function(){
        it("the return value should be above 5", function(){
            let result = app.addNumbers(5,5);
            assert.isAbove(result, 5);
        })
        it("the return value should be above 5", function(){
            let result = app.addNumbers(1,2);
            assert.isAbove(result, 5);
        })
        it("the addNumbers value should be return number", function(){
            let result = app.addNumbers(1,"2");
            assert.typeOf(result, 'number');
        })
    })
})