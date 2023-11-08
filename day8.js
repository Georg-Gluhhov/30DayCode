function processData(input) {
    //Enter your code here
    const iArr = input.split('\n')
    const n    = parseInt(iArr[0].trim())
    const phB  = new Map (iArr.slice(1, n+1).map( elem => elem.split(' ')))
    const qris = iArr.slice(n+1)
    let res, val
    for( const qry of qris){
        val = phB.get(qry)
        if ( val ) { res = `${qry}=${val}`}
        else
        {res = 'Not found'}
        console.log(res)
    }
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
