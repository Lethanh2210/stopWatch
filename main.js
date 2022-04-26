"use strict";
exports.__esModule = true;
var StopWatch_1 = require("./StopWatch");
var time = new StopWatch_1.StopWatch();
var arr = new Array(10000);
// time.start();
// console.log(time.getStartTime());
// time.stop();
// console.log(time.getEndTime());
function sort() {
    for (var i = 0; i < arr.length; i++) {
        var min = 0;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}
time.start();
sort();
time.stop();
console.log(time.getElapsedTime());
