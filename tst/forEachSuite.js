var forEachSuite = {
    suiteName: 'forEachSuite',
    
    testBasics: function () {
        var str;
        str = '';
        [].forEach(function(e){str += e;});
        jsUnity.assertIdentical('', str);
        str = '';
        ['a','b','c'].forEach(function(e){str += e;});
        jsUnity.assertIdentical('abc', str);
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'a', 'a'];
        var str;
        str = '';
        arr.forEach(function(e){str += e;});
        jsUnity.assertIdentical('abaa', str);
        delete arr[1];
        str = '';
        arr.forEach(function(e){str += e;});
        jsUnity.assertIdentical('aaa', str);
    },
    
    testObject: function() {
        var str;
        str = '';
        var obj = {0:'a', 1:'b', 2:'c', 3:'d', length:4};
        Array.prototype.forEach.call(obj, function(e){str += e;});
        jsUnity.assertIdentical('abcd', str);
    },
    
    testFunction: function() {
        var str;
        str = '';
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'c';
        fn[3] = 'd';
        Array.prototype.forEach.call(fn, function(e){str += e;});
        jsUnity.assertIdentical('abcd', str);
    }

};
