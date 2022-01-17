"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventListenerCollection {
  constructor() {
    _defineProperty(this, "listenerCollection", []);
  }

  emitEvent(valueToEmit) {
    if (this.listenerCollection && this.listenerCollection.length > 0) {
      for (const aListener of this.listenerCollection) {
        if (aListener) {
          aListener(valueToEmit);
        }
      }
    }
  }

  addListener(callback) {
    if (!_underscore.default.contains(this.listenerCollection, callback)) {
      this.listenerCollection.push(callback);
    }
  }

  removeListener(callback) {
    if (_underscore.default.contains(this.listenerCollection, callback)) {
      this.listenerCollection = _underscore.default.reject(this.listenerCollection, item => item === callback);
    }
  }

  hasListeners() {
    return this.listenerCollection.length > 0;
  }

}

exports.default = EventListenerCollection;
//# sourceMappingURL=EventListenerCollection.js.map