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

LinkedList.append("first");
LinkedList.append("second");
LinkedList.append("third");
LinkedList.append("fourth");
LinkedList.remove();

console.log(LinkedList.head);
console.log(LinkedList.tail);
console.log(LinkedList.length);