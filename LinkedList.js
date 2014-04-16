var LinkedList = {
    head: null,
    tail: null,
    length: 0
};

var makeNode = function(data) {
    return {
        data: data,
        isHead: false,
        next: null
    };
};

LinkedList.append = function(data) {
    var node = makeNode(data);
    if (LinkedList.length === 0) {
        LinkedList.head = node;
        node.isHead = true;
        node.next = null;
    }
    else {
        LinkedList.tail.next = node;
        node.isHead = false;
        node.next = null;
    }
    LinkedList.tail = node;
    LinkedList.length++;
};

LinkedList.remove = function() {
    if (LinkedList.length === 0)
        return;
    else if (LinkedList.length == 1) {
        LinkedList.head = null;
        LinkedList.tail = null;
    }
    else {
        var iter = LinkedList.head;
        for (var i = 0; i < LinkedList.length; i++) {
            if (iter.next != LinkedList.tail) {
                iter = iter.next;
            }
            else {
                iter.next = null;
                LinkedList.tail = iter;
            }
        }
        LinkedList.length--;
    }
};

LinkedList.findNtoLast = function(n) {
    if (n === 0)
        return LinkedList.tail;
    else if (n > LinkedList.length){
        return null;
    }
    else if (n == LinkedList.length-1) {
        return LinkedList.head;
    }
    else {
        var newNum = LinkedList.length - n;
        var iter = LinkedList.head;
        for (var i = 0; i < newNum; i++) {
            if (i == newNum-1)
                return iter;
            iter = iter.next;
        }
    }
};


// TESTS

LinkedList.append("first");
LinkedList.append("second");
LinkedList.append("third");
LinkedList.append("fourth");
LinkedList.append("fifth");
LinkedList.append("sixth");
LinkedList.append("seventh");
LinkedList.remove();

console.log(LinkedList.head);
console.log(LinkedList.tail);
console.log(LinkedList.length);
console.log("0: ", LinkedList.findNtoLast(0));
console.log("1: ", LinkedList.findNtoLast(1));
console.log("2: ", LinkedList.findNtoLast(2));
console.log("3: ", LinkedList.findNtoLast(3));
console.log("4: ", LinkedList.findNtoLast(4));
console.log("5: ", LinkedList.findNtoLast(5));
console.log("6: ", LinkedList.findNtoLast(6));