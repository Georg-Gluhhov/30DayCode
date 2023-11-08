this.removeDuplicates=function(head) {
    if (head == null) return;
    current = head;
    while (current.next)
        if (current.data == current.next.data) {
            current.next = current.next.next
        } else {
            current = current.next
        }   
    return head;
    }