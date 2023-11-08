function Person(initialAge){
    
    if (initialAge < 0)
      console.log('Age is not valid, setting age to 0.');
          
    this.age = initialAge < 0 ? 0 : initialAge;
      
    this.amIOld=function(){
        
      if (this.age < 13)
        console.log (`You are young.`);
        
      if (this.age >= 13 && this.age < 18)
        console.log (`You are a teenager.`);
        
      if (this.age >= 18)
        console.log (`You are old.`);
    };
    
    this.yearPasses=function(){
      this.age++; 
    };
  }
  