export class StopWatch{
    private startTime : number;
    private endTime : number;
    constructor() {
        this.startTime = Date.now();
        this.endTime = Date.now();
    }
    getStartTime(){
        return this.startTime;
    }
    getEndTime(){
        return this.endTime;
    }
    start(){
        this.startTime = Date.now();
    }
    stop(){
        this.endTime = Date.now();
    }
    getElapsedTime(){
        return this.getEndTime() - this.getStartTime();
    }
}