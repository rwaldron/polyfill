var mapSuite;

(function() {

    var mapping = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        'd': 'w'
    };

    mapSuite = {
        suiteName: 'mapSuite',

        testBasics: function () {
            jsUnity.assertArrayIdentical([], [].map(function(e){return mapping[e];}));
            jsUnity.assertArrayIdentical(['z', 'y', 'x', 'y'], ['a','b','c','b'].map(function(e){return mapping[e];}));
        },

        testSparse: function() {
            var arr = ['a', 'b', 'c', 'b'];
            jsUnity.assertArrayIdentical(['z', 'y', 'x', 'y'],  arr.map(function(e){return mapping[e];}));
            delete arr[1];
            var res = [];
            res[0] = 'z';
            res[2] = 'x';
            res[3] = 'y';
            jsUnity.assertArrayIdentical(res,  arr.map(function(e){return mapping[e];}));
        },
        
        testObject: function() {
            var obj = {0:'a', 1:'b', 2:'c', 3:'b', length:4};
            jsUnity.assertArrayIdentical(['z', 'y', 'x', 'y'], Array.prototype.map.call(obj, function(e){return mapping[e];}));
        },
        
        testFunction: function() {
            var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
            fn[0] = 'a';
            fn[1] = 'b';
            fn[2] = 'c';
            fn[3] = 'b';
            jsUnity.assertArrayIdentical(['z', 'y', 'x', 'y'], Array.prototype.map.call(fn, function(e){return mapping[e];}));
        }

    };
    
}());
