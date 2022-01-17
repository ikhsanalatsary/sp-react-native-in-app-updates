"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeSiren = _interopRequireDefault(require("react-native-siren"));

var _utils = require("./utils");

var _InAppUpdatesBase = _interopRequireDefault(require("./InAppUpdatesBase"));

var _reactNativeDeviceInfo = require("react-native-device-info");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const noop = () => {};

class InAppUpdates extends _InAppUpdatesBase.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "installUpdate", noop);

    _defineProperty(this, "addStatusUpdateListener", noop);

    _defineProperty(this, "removeStatusUpdateListener", noop);

    _defineProperty(this, "addIntentSelectionListener", noop);

    _defineProperty(this, "removeIntentSelectionListener", noop);
  }

  checkNeedsUpdate(checkOptions) {
    const {
      curVersion,
      toSemverConverter,
      customVersionComparator,
      country
    } = checkOptions || {};
    let appVersion;

    if (curVersion) {
      appVersion = curVersion;
    } else {
      appVersion = (0, _reactNativeDeviceInfo.getVersion)();
    }

    this.debugLog('Checking store version (iOS)');
    return _reactNativeSiren.default.performCheck({
      country
    }).then(checkResponse => {
      this.debugLog(`Received response from app store: ${JSON.stringify(checkResponse)}`);
      const {
        version
      } = checkResponse || {};

      if (version != null) {
        let newAppV = `${version}`;

        if (toSemverConverter) {
          newAppV = toSemverConverter(version);
          this.debugLog(`Used custom semver, and converted result from store (${version}) to ${newAppV}`);

          if (!newAppV) {
            this.throwError(`Couldnt convert ${version} using your custom semver converter`, 'checkNeedsUpdate');
          }
        }

        const vCompRes = customVersionComparator ? customVersionComparator(newAppV, appVersion) : (0, _utils.compareVersions)(newAppV, appVersion);

        if (vCompRes > 0) {
          this.debugLog(`Compared cur version (${curVersion}) with store version (${newAppV}). The store version is higher!`); // app store version is higher than the current version

          return {
            shouldUpdate: true,
            storeVersion: newAppV,
            other: { ...checkResponse
            }
          };
        }

        this.debugLog(`Compared cur version (${curVersion}) with store version (${newAppV}). The current version is higher!`);
        return {
          shouldUpdate: false,
          storeVersion: newAppV,
          reason: `current version (${curVersion}) is already later than the latest store version (${newAppV}${toSemverConverter ? ` - originated from ${version}` : ''})`,
          other: { ...checkResponse
          }
        };
      }

      this.debugLog('Failed to fetch a store version');
      return {
        shouldUpdate: false,
        reason: 'Couldn\t fetch the latest version',
        other: { ...checkResponse
        }
      };
    }).catch(err => {
      this.debugLog(err);
      this.throwError(err, 'checkNeedsUpdate');
    });
  }

  startUpdate(updateOptions) {
    return Promise.resolve(_reactNativeSiren.default.promptUser(updateOptions));
  }

}

exports.default = InAppUpdates;
//# sourceMappingURL=InAppUpdates.ios.js.map