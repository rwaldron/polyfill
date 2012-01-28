var reduceSuite = {
    suiteName: 'reduceSuite',
    
    testBasics: function () {
        jsUnity.assertIdentical('', [].reduce(function(acc, e){return acc + e;}, ''));
        jsUnity.assertIdentical('abc', ['a','b','c'].reduce(function(acc, e){return acc + e;}, ''));
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'c', 'd'];
        delete arr[1];
        jsUnity.assertIdentical('acd', arr.reduce(function(acc, e){return acc + e;}, ''));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'b', 2:'c', 3:'d', length:4};
        jsUnity.assertIdentical('abcd', Array.prototype.reduce.call(obj, function(acc, e){return acc + e;}, ''));
    },
    
    testFunction: function() {
        var str;
        str = '';
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'c';
        fn[3] = 'd';
        jsUnity.assertIdentical('abcd', Array.prototype.reduce.call(fn, function(acc, e){return acc + e;}, ''));
    }

};
