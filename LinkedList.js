var makeNode = function(data) {
    return {
        data: data,
        isHead: false,
        next: null
    };
};

function LinkedList() {};
LinkedList.prototype = {
    head: null,
    tail: null,
    length : 0,
    
    append: function (data) {
        var node = makeNode(data);
        if (this.length === 0) {
            this.head = node;
            node.isHead = true;
            node.next = null;
        }
        else {
            this.tail.next = node;
            node.isHead = false;
            node.next = null;
        }
        this.tail = node;
        this.length++;
    },
    
    removeLast: function() {
        if (this.length === 0)
            return;
        else if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var iter = this.head;
            for (var i = 0; i < this.length; i++) {
                if (iter.next != this.tail) {
                    iter = iter.next;
                }
                else {
                    iter.next = null;
                    this.tail = iter;
                }
            }
            this.length--;
        }
    },
    
    findNtoLast: function(n) {
        if (n === 0)
            return this.tail;
        else if (n > this.length){
            return null;
        }
        else if (n == this.length-1) {
            return this.head;
        }
        else {
            var newNum = this.length - n;
            var iter = this.head;
            for (var i = 0; i < newNum; i++) {
                if (i == newNum-1)
                    return iter;
                iter = iter.next;
            }
        }
    }
};




// TESTS
var ll = new LinkedList();
ll.append("first");
ll.append("second");
ll.append("third");
ll.append("fourth");
ll.append("fifth");
ll.append("sixth");
ll.append("seventh");
ll.removeLast();

console.log(ll.head);
console.log(ll.tail);
console.log(ll.length);
console.log("0: ", ll.findNtoLast(0));
console.log("1: ", ll.findNtoLast(1));
console.log("2: ", ll.findNtoLast(2));
console.log("3: ", ll.findNtoLast(3));
console.log("4: ", ll.findNtoLast(4));
console.log("5: ", ll.findNtoLast(5));
console.log("6: ", ll.findNtoLast(6));