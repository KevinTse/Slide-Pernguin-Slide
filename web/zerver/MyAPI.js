// in website-dir/zerver/MyAPI.js
// this runs on your server
exports.logStuff = function (str) {
    console.log(str); // 'hi from client'
    callback('hi from server');
};