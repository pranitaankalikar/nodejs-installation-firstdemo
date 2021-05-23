class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
    }
    insertLast(val){
        var newNode= new node(val);
        if(this.head==null){
            this.head=newNode;
        }
        else{
            var temp=this.head;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=newNode;
        }
    }
    printLinkedList(){
        var temp=this.head;
        var p='';
        while(temp!=null){
            p=p+" "+temp.data;
            temp=temp.next;
        }
        console.log(p);
    }
    insertFront(val){
        var newNode= new node(val);
        var temp=this.head;
        this.head=newNode;
        this.head.next=temp;
        
    }
    deleteNode(nod){
        if(this.head==null){
            return this.head;
        }
        else {if(this.head.data==nod){
            this.head=this.head.next;
            }
            else{
                var temp=this.head;
                var prenode=null;
                while(temp!=null){
                    if(temp.data==nod){
                        prenode.next=temp.next
                    }
                    prenode=temp;
                    temp=temp.next;
                }
            }
        }
    }
    lengthOfLL(){
        
            var c =0;
            var temp=this.head;
            while(temp!=null){
                temp=temp.next;
                c++;
            }
            return c;

        
    }
}
const l=new linkedList();
l.insertLast(10);
l.insertLast(20);
l.insertLast(30);
l.printLinkedList();
l.insertFront(1);
l.printLinkedList();
l.deleteNode(30);
l.printLinkedList();
console.log(`length ${l.lengthOfLL()}`);