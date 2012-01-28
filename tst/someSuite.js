var someSuite = {
    suiteName: 'someSuite',
    
    testBasics: function () {
        jsUnity.assertIdentical(false,      [].some(function(e){return e === 1;}));
        jsUnity.assertIdentical(true , [1,1,1].some(function(e){return e === 1;}));
        jsUnity.assertIdentical(false, [0,0,0].some(function(e){return e === 1;}));
        jsUnity.assertIdentical(true , [1,0,1].some(function(e){return e === 1;}));
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'a', 'a'];
        jsUnity.assertIdentical(true, arr.some(function(e){return e === 'b';}));
        delete arr[1];
        jsUnity.assertIdentical(false, arr.some(function(e){return e === 'b';}));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'b', 2:'a', 3:'a', length:4};
        jsUnity.assertIdentical(true, Array.prototype.some.call(obj, function(e){return e === 'b';}));
    },
    
    testFunction: function() {
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'a';
        fn[3] = 'a';
        jsUnity.assertIdentical(true, Array.prototype.some.call(fn, function(e){return e === 'b';}));
    }

};
