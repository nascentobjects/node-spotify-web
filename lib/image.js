
/**
 * Module dependencies.
 */

var gid2id = require('./util').gid2id;
var Image = require('./schemas').build('metadata','Image');

/**
 * Module exports.
 */

exports = module.exports = Image;

/**
 * Image HTTP link getter.
 */

Object.defineProperty(Image.prototype, 'uri', {
  get: function () {
    var spotify = this._spotify;
    var base = spotify.sourceUrls.DEFAULT;
    return base + gid2id(this.fileId);
  },
  enumerable: true,
  configurable: true
});
