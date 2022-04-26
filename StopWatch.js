"use strict";
exports.__esModule = true;
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this.startTime = Date.now();
        this.endTime = Date.now();
    }
    StopWatch.prototype.getStartTime = function () {
        return this.startTime;
    };
    StopWatch.prototype.getEndTime = function () {
        return this.endTime;
    };
    StopWatch.prototype.start = function () {
        this.startTime = Date.now();
    };
    StopWatch.prototype.stop = function () {
        this.endTime = Date.now();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this.getEndTime() - this.getStartTime();
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
