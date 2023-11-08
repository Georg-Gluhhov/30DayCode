use std::io::{self, BufRead};
// Enter your code here 
fn main() {
    let mut line = String::new();
    let stdin = io::stdin();
    stdin.lock().read_line(&mut line).unwrap();
    println!("Hello, World.");
    println!("{}", line)
}
