"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareVersions = void 0;

var _semver = _interopRequireDefault(require("semver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const compareVersions = (versionToCheck, checkAgainst) => {
  if (versionToCheck && checkAgainst) {
    // The version consists of 3 parts.
    // 1 MAJOR, 2 MINOR, 3 LIVE_RELOAD_REV each of which contain 3 digits
    return _semver.default.compare( // @ts-ignore
    _semver.default.coerce(versionToCheck), _semver.default.coerce(checkAgainst));
  }

  if (versionToCheck && checkAgainst == null) {
    return 1;
  }

  if (checkAgainst && versionToCheck == null) {
    return -1;
  }

  return 0;
};

exports.compareVersions = compareVersions;
//# sourceMappingURL=utils.js.map