import {StopWatch} from "./StopWatch";
let time = new StopWatch();
let arr = new Array(10000);
function sort(){
    for (let i = 0; i < arr.length; i++) {
        let min = 0;
        for (let j = i+1; j < arr.length ; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}
time.start();
sort();
time.stop();
console.log(time.getElapsedTime());