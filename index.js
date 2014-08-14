module.exports = function (key) {
    return function (obj) {
        return obj[key];
    };
};