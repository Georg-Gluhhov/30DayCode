// Enter your code here 
use std::{
    io::stdin,
    num::ParseIntError,
};

fn main() -> Result<(), ParseIntError> {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();
    
    let bin = format!("{:b}", buf.parse::<u64>()?);
    
    let ones = {
        let mut v = bin.split("0").collect::<Vec<_>>();
        v.dedup();
        v.into_iter()
    };
    
    let out = {
        let mut v = Vec::new();
        for slice in ones {
            v.push(slice.chars().count());
        }
        
        v.into_iter()
    };
    
    println!("{}", out.max().unwrap());
    Ok(())
}
