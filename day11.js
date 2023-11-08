'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function getHourglassSum(a, i, j){
    const ag = [
        a[i][j], a[i][j+1], a[i][j+2],
        a[i+1][j+1],
        a[i+2][j], a[i+2][j+1],a[i+2][j+2]
    ]
    return ag.reduce((acc, el ) => acc + el, 0)
}


function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    let max = -Infinity // To realize this is a little tricky, too.
    for ( let i = 0; i < arr.length - 2; i++){
        for ( let j = 0; j < arr.length - 2; j++){
            max = Math.max(max, getHourglassSum(arr, i, j))
        }
    }
    console.log(max)
}
