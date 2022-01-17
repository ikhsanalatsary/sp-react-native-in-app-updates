"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AndroidUpdateType = exports.AndroidAvailabilityStatus = exports.AndroidOther = exports.AndroidInstallStatus = void 0;
let AndroidInstallStatus;
exports.AndroidInstallStatus = AndroidInstallStatus;

(function (AndroidInstallStatus) {
  AndroidInstallStatus[AndroidInstallStatus["UNKNOWN"] = 0] = "UNKNOWN";
  AndroidInstallStatus[AndroidInstallStatus["PENDING"] = 1] = "PENDING";
  AndroidInstallStatus[AndroidInstallStatus["DOWNLOADING"] = 2] = "DOWNLOADING";
  AndroidInstallStatus[AndroidInstallStatus["INSTALLING"] = 3] = "INSTALLING";
  AndroidInstallStatus[AndroidInstallStatus["INSTALLED"] = 4] = "INSTALLED";
  AndroidInstallStatus[AndroidInstallStatus["FAILED"] = 5] = "FAILED";
  AndroidInstallStatus[AndroidInstallStatus["CANCELED"] = 6] = "CANCELED";
  AndroidInstallStatus[AndroidInstallStatus["DOWNLOADED"] = 11] = "DOWNLOADED";
})(AndroidInstallStatus || (exports.AndroidInstallStatus = AndroidInstallStatus = {}));

let AndroidOther;
exports.AndroidOther = AndroidOther;

(function (AndroidOther) {
  AndroidOther["IN_APP_UPDATE_RESULT_KEY"] = "in_app_update_result";
  AndroidOther["IN_APP_UPDATE_STATUS_KEY"] = "in_app_update_status";
})(AndroidOther || (exports.AndroidOther = AndroidOther = {}));

let AndroidAvailabilityStatus;
exports.AndroidAvailabilityStatus = AndroidAvailabilityStatus;

(function (AndroidAvailabilityStatus) {
  AndroidAvailabilityStatus[AndroidAvailabilityStatus["UNKNOWN"] = 0] = "UNKNOWN";
  AndroidAvailabilityStatus[AndroidAvailabilityStatus["AVAILABLE"] = 2] = "AVAILABLE";
  AndroidAvailabilityStatus[AndroidAvailabilityStatus["UNAVAILABLE"] = 1] = "UNAVAILABLE";
  AndroidAvailabilityStatus[AndroidAvailabilityStatus["DEVELOPER_TRIGGERED"] = 3] = "DEVELOPER_TRIGGERED";
})(AndroidAvailabilityStatus || (exports.AndroidAvailabilityStatus = AndroidAvailabilityStatus = {}));

let AndroidUpdateType;
exports.AndroidUpdateType = AndroidUpdateType;

(function (AndroidUpdateType) {
  AndroidUpdateType[AndroidUpdateType["FLEXIBLE"] = 0] = "FLEXIBLE";
  AndroidUpdateType[AndroidUpdateType["IMMEDIATE"] = 1] = "IMMEDIATE";
})(AndroidUpdateType || (exports.AndroidUpdateType = AndroidUpdateType = {}));
//# sourceMappingURL=types.js.map