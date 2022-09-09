
class Node {
	constructor(id, name="", data=null, value=[]) {
		this.id = id;
		this.n = name;
		this.d = data;
		this.v = value;
		this.next = null;
		this.visited = false;
	}
}

class LinkedList {
	constructor(id, name="collection", data=null, value=[]) {
		this.head = new Node(id, name, data, value);
		this.length = 1;
	}
	get(n = 0) { //by index
		let curr = this.head;
		for (var i = 0; i < n; i++) {
			curr = curr.next;
		}
		return curr;
	}
	add(id, name="collection", data=[]) { // add a node at the end of the list
		let current;
		let node  = new Node(id, name, data);
		if (this.head === null) {
			this.head = node;
		}else {
			current = this.head;
			while(current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.length++;
		return id;
	}
	remove(index=(this.length-1)) {  // remove a node from the end of the list
		let temp;
		if (index < 0 || index > this.length-1) {
			return false;
		}else {
			let curr = this.head, prev;
			if (index === 0) {
				temp = this.head.d;
				this.head = this.head.next;
			}else {
				let i = 0;
				while(i !== index) {
					prev = curr;
					curr = curr.next;
					i++;
				}
				temp = curr.d;
				prev.next = curr.next;
			}
			this.length--;
			return temp;
		}
	}
	addValues(value) {
		this.head.v.push(value);
		return value;
	}
}


export {Node, LinkedList};