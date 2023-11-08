function Solution(){
    var stack = [];
    var queue = [];
    this.pushCharacter = char => stack.push(char);
    this.popCharacter = () => stack.pop();
    this.enqueueCharacter = char => queue.push(char);
    this.dequeueCharacter = () => queue.shift();
}
