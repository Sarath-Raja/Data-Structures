"use strict";
class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    peek() {
        if (this.items.length == 0)
            return null;
        return this.top;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if (this.items.length != 0) {
            if (this.items.length == 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }

        } else
            return null;
    }
}

let s = new Stack()
s.push(1)
s.push(2)
s.push(3)
console.log(s.pop())
console.log(s.peek())
console.log(s)