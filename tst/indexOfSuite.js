var indexOfSuite = {
    suiteName: 'indexOfSuite',

    testBasics: function() {
        jsUnity.assertIdentical(-1, [].indexOf('b'    ));
        var arr = ['a', 'b', 'c', 'b'];
        jsUnity.assertIdentical( 1, arr.indexOf('b'    ));
        jsUnity.assertIdentical( 1, arr.indexOf('b',  1));
        jsUnity.assertIdentical( 3, arr.indexOf('b',  2));
        jsUnity.assertIdentical( 3, arr.indexOf('b', -2));
        jsUnity.assertIdentical( 3, arr.indexOf('b', -1));
        jsUnity.assertIdentical(-1, arr.indexOf('b', 10));
        jsUnity.assertIdentical(-1, arr.indexOf('z'    ));
    },
    
    testSparse: function() {
        var arr = ['a', 'b', 'c', 'b'];
        delete arr[1];
        jsUnity.assertIdentical( 3, arr.indexOf('b'));
    },
    
    testCoercion: function() {
        var arr = ['a', 'b', 'c', 'b'];
        jsUnity.assertIdentical( 1, arr.indexOf('b',  null));
        jsUnity.assertIdentical( 1, arr.indexOf('b',  true));
        jsUnity.assertIdentical( 1, arr.indexOf('b',  '1'));
        jsUnity.assertIdentical( 1, arr.indexOf('b',  1.1));
        jsUnity.assertIdentical( 3, arr.indexOf('b', -2.1));
    },
    
    testObject: function() {
        var obj = {0:'a', 1:'b', 2:'c', 3:'b', length:4};
        jsUnity.assertIdentical( 1, Array.prototype.indexOf.call(obj, 'b'));
    },
    
    testFunction: function() {
        var fn = function(w, x, y, z){}; // four formal parameters means fn.length is 4
        fn[0] = 'a';
        fn[1] = 'b';
        fn[2] = 'c';
        fn[3] = 'b';
        jsUnity.assertIdentical( 1, Array.prototype.indexOf.call(fn, 'b'));
    }

};
