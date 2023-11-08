use std::io::{stdin, BufRead};

fn main() {
    let lines = stdin().lock()
        .lines()
        .map(|l| l.unwrap())
        .collect::<Vec<_>>();
    
    let mut odd_chars = Vec::new();
    let mut even_chars = Vec::new();
    
    for line in lines.iter().skip(1) {
        let mut odd = String::new();
        let mut even = String::new();
        
        for c in line.chars().step_by(2) {
            even.push(c);
        }
        
        for c in line.chars().skip(1).step_by(2) {
            odd.push(c);
        }
        
        odd_chars.push(odd);
        even_chars.push(even);
    }
    
    for (even_str, odd_str) in even_chars.iter().zip(odd_chars.iter()) {
        println!("{} {}", even_str, odd_str);
    }
}
