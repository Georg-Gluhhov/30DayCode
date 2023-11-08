function processData(input) {
    //Enter your code here
    const [rDate, dDate] = input.split(/[\n]/g).map(d => d.split(" ").map(s => parseInt(s)))
        if((rDate[0] <= dDate[0] && rDate[1] <= dDate[1] && rDate[2] <= dDate[2]) || rDate[2] < dDate[2]) return console.log(0)
        if(rDate[0] > dDate[0] && rDate[1] === dDate[1] && rDate[2] <= dDate[2]) return console.log(15 * (rDate[0] - dDate[0]))
        if(rDate[1] > dDate[1] && rDate[2] === dDate[2]) return console.log(500 * (rDate[1] - dDate[1]))
        if(rDate[2] > dDate[2]) return console.log(10000)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
