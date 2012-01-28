var everySuite = {
    suiteName: 'everySuite',
    
    testBasics: function () {
        jsUnity.assertIdentical(true, [].every(function(e){return e === 1;}));
        jsUnity.assertIdentical(true , [1,1,1].every(function(e){return e === 1;}));
        jsUnity.assertIdentical(false, [1,0,1].every(function(e){return e === 1;}));
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'a', 'a'];
        jsUnity.assertIdentical(false, arr.every(function(e){return e === 'a';}));
        delete arr[1];
        jsUnity.assertIdentical(true, arr.every(function(e){return e === 'a';}));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'a', 2:'a', 3:'a', length:4};
        jsUnity.assertIdentical(true, Array.prototype.every.call(obj, function(e){return e === 'a';}));
    },
    
    testFunction: function() {
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'a';
        fn[2] = 'a';
        fn[3] = 'a';
        jsUnity.assertIdentical(true, Array.prototype.every.call(fn, function(e){return e === 'a';}));
    }

};
