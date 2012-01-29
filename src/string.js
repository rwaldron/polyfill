/*
    Copyright (c) 2009, 280 North Inc. http://280north.com/
    MIT License. http://github.com/280north/narwhal/blob/master/README.md
*/

/*
    I've modified to check for this object that is undefined or null as
    required by the ECMAScript 5 specification.
*/

(function() {

    var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
        "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
        "\u2029\uFEFF";

    if (!String.prototype.trim) {
        
        // http://blog.stevenlevithan.com/archives/faster-trim-javascript
        // http://perfectionkills.com/whitespace-deviations/
        ws = "[" + ws + "]";
        var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
            trimEndRegexp = new RegExp(ws + ws + "*$");

        String.prototype.trim = function trim() {
            if (this === undefined || this === null) {
                throw new TypeError("can't convert "+this+" to object");
            }
            return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
        };

    }

}());
