module.exports = function (key) {
    'use strict';

    return function (obj) {
        return obj[key];
    };
};