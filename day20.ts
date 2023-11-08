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
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    var total = 0;
    for(var L = a.length, i = 0; i < L; i ++) {
        var swaps = 0;
        for(var j = 0; j < L - 1; j ++) {
            if(a[j] > a[j + 1]) {
                var tmp = a[j]; a[j] = a[j + 1]; a[j + 1] = tmp;
                swaps ++; total ++;
            };
        };
        if(!swaps)break;
    };

    console.log(`Array is sorted in ${total} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}
