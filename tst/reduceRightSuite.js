var reduceRightSuite = {
    suiteName: 'reduceRightSuite',
    
    testBasics: function () {
        jsUnity.assertIdentical('', [].reduceRight(function(acc, e){return acc + e;}, ''));
        jsUnity.assertIdentical('cba', ['a','b','c'].reduceRight(function(acc, e){return acc + e;}, ''));
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'c', 'd'];
        delete arr[1];
        jsUnity.assertIdentical('dca', arr.reduceRight(function(acc, e){return acc + e;}, ''));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'b', 2:'c', 3:'d', length:4};
        jsUnity.assertIdentical('dcba', Array.prototype.reduceRight.call(obj, function(acc, e){return acc + e;}, ''));
    },
    
    testFunction: function() {
        var str;
        str = '';
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'c';
        fn[3] = 'd';
        jsUnity.assertIdentical('dcba', Array.prototype.reduceRight.call(fn, function(acc, e){return acc + e;}, ''));
    }

};
