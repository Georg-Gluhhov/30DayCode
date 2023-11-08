
this.insert=function(head,data){
    //complete this method
    const newNode = new Node(data)
    
    if(head == null) {
        head = newNode;
        
    } else if(head.next == null) {
        head.next = newNode;
        
    } else {
        let next =  head.next
        
        while(next.next) {
            next = next.next
            
        }
        
        next.next = newNode;
    }
    
  return head;
};


