var nowSuite = {
    suiteName: 'nowSuite',
    
    testBasics: function () {
        jsUnity.assertIdentical('number', typeof Date.now());
    }

};
