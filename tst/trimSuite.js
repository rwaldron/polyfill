var trimSuite = {
    suiteName: 'trimSuite',
    
    testBasics: function () {
        jsUnity.assertIdentical('a', ' \v   \n\r  a \t  '.trim());
    }

};
