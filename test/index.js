var assert = require('assert');
var nfUtil = require('../lib');

describe('Version Numbers', function() {

    it('Can convert git number to v0.0.0 format', function() {
        var v = nfUtil.convertGitVersionNumber('v0.9-217-g17ca8ba');
        assert.equal(v, 'v0.9.217');
    });

    it('Can convert git number to v0.0.0.0 format', function() {
        var v = nfUtil.convertGitVersionNumber('v1.2.3-219-g17ca8ba');
        assert.equal(v, 'v1.2.3.219');
    });

    it('throws error on nulls', function() {
        var fn = function() {
            nfUtil.convertGitVersionNumber(null);
        };
        assert.throws(fn, Error);
    });

    it('throws error on empty strings', function() {
        var fn = function() {
            nfUtil.convertGitVersionNumber('');
        };
        assert.throws(fn, Error);
    });

    it('throws error on invalid string', function() {
        var fn = function() {
            nfUtil.convertGitVersionNumber('garbage');
        };
        assert.throws(fn, Error);
    });

});
