var lastIndexOfSuite = {
    suiteName: 'lastIndexOfSuite',
    
    testBasics: function() {
        jsUnity.assertIdentical(-1, [].lastIndexOf('b'    ));
        var arr = ['a', 'b', 'c', 'b'];
        jsUnity.assertIdentical( 3, arr.lastIndexOf('b'    ));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b',  1));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b',  2));
        jsUnity.assertIdentical( 3, arr.lastIndexOf('b',  3));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b', -2));
        jsUnity.assertIdentical( 3, arr.lastIndexOf('b', -1));
        jsUnity.assertIdentical( 3, arr.lastIndexOf('b', 10));
        jsUnity.assertIdentical(-1, arr.lastIndexOf('z'    ));
    },

    testSparse: function() {
        var arr = ['a', 'b', 'c', 'b'];
        delete arr[3];
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b'));
    },
    
    testCoercion: function() {
        var arr = ['a', 'b', 'c', 'b'];
        jsUnity.assertIdentical( -1, arr.lastIndexOf('b',  null));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b',  true));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b',  '2'));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b',  2.1));
        jsUnity.assertIdentical( 1, arr.lastIndexOf('b', -2.1));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'b', 2:'c', 3:'b', length:4};
        jsUnity.assertIdentical( 3, Array.prototype.lastIndexOf.call(obj, 'b'));
    },
    
    testFunction: function() {
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'c';
        fn[3] = 'b';
        jsUnity.assertIdentical( 3, Array.prototype.lastIndexOf.call(fn, 'b'));
    }

};
