"use strict";
exports.__esModule = true;
exports.get = void 0;
var axios_1 = require("axios");
var constants_1 = require("./constants");
function get(url) {
    return axios_1["default"].get(constants_1.BASE_API_URL + "/" + url);
}
exports.get = get;
