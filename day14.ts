'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    const length = parseInt(readLine());
    const elements = readLine().split(" ").map((n)=> parseInt(n))
    
    const difference = new Difference(...elements);
    difference.computeDifference();
    
    console.log(difference.maximumDifference);
}

class Difference {
    maximumDifference: number
    elements: number[]
    constructor(...elements: number[]){
        this.elements = elements;
    }
    computeDifference(){
        const min = Math.min(...this.elements);
        const max = Math.max(...this.elements);
        this.maximumDifference = max - min;
    }
}
