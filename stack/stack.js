class Stack {
constructor() {
        this.items = [];
    }
    push(element){
this.items.push(element);
    }
pop(){
    if (this.isEmpty()){
        console.log("Empty Stack");
    }else{
        this.items.pop();
    }
}
top(){
if(this.isEmpty()){
    console.log("Empty Stack can't be find top");
}else{
    let lastIndex = this.items.length - 1;
    let top = this.items[lastIndex];
    console.log("top element is ",top);
}
    };
isEmpty(){
    let length = this.items.length;
    if(length==0){
        return true;
    }
    else{
       return false;
    }
   }
}
let stack = new Stack();
stack.push("A");
stack.push("B");
stack.pop();

stack.top();
    