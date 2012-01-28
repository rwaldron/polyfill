var filterSuite = {
    suiteName: 'filterSuite',
    
    testBasics: function () {
        jsUnity.assertArrayIdentical([], [].filter(function(e){return true;}));
        jsUnity.assertArrayIdentical(['b', 'b'], ['a','b','c','b'].filter(function(e){return 'b' === e;}));
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'c', 'b'];
        jsUnity.assertArrayIdentical(['b','b'],  arr.filter(function(e){return 'b' === e;}));
        delete arr[1];
        jsUnity.assertArrayIdentical(['b'],  arr.filter(function(e){return 'b' === e;}));
    },
    
    testFnModifiesArr: function() {
        var arr = ['a', 'b', 'c', 'b'];
        jsUnity.assertArrayIdentical(['b','b'],  arr.filter(function(e, i){arr[i]='z';return 'b' === e;}));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'b', 2:'c', 3:'b', length:4};
        jsUnity.assertArrayIdentical(['b','b'], Array.prototype.filter.call(obj, function(e){return 'b' === e;}));
    },
    
    testFunction: function() {
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'c';
        fn[3] = 'b';
        jsUnity.assertArrayIdentical(['b','b'], Array.prototype.filter.call(fn, function(e){return 'b' === e;}));
    }

};
