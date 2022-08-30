
class Queues {
	constructor() {
		this.queuearray = [];
		this.length = this.queuearray.length;
	}
	push(value) {
		this.queuearray.push(value);
		this.length = this.queuearray.length;

		return value;
	}
	pop() {
		if (!this.length) throw 'Queue is empty';
		
		const poped = this.queuearray.shift();
		this.length = this.queuearray.length;
		return poped;
	}
	view()  {
		return this.queuearray;
	}
}
class Stack {
	constructor() {
		this.stackarray = [];
		this.length = this.stackarray.length;
	}
	push(value) {
		this.stackarray.unshift(value);
		this.length = this.stackarray.length;
		return value;
	}
	pop() {
		if (this.length <= 0) {
			throw 'Stack is empty';
		}
		const poped = this.stackarray.shift();
		this.length = this.stackarray.length;
		return poped;
	}
	view() {
		return this.stackarray;
	}
}


class Node {
	constructor(data) {
		this.d = new Set().add(data);
		this.visited = false;
	}
}

class UGraph {
	constructor() {
		this.AdjList = new Map();
	}
	add(v, dv) { //dv | destination vertices
		if(v === dv) return 0;

		if(this.AdjList.has(v)) {
			this.AdjList.get(v).d.add(dv);
		}else{
			this.AdjList.set(v, new Node(dv));
		}

		if(this.AdjList.has(dv)) {
			this.AdjList.get(dv).d.add(v);
		}else{
			this.AdjList.set(dv, new Node(v));
		}
	}
	adjacent(v1, v2) {
		return this.AdjList.get(v1).d.has(v2);
	}
	neighbors(v1) {
		return this.AdjList.get(v1).d;
	}
	remove(v, dv=false) {
		if(!dv) {
			this.AdjList.delete(v);
		}else{
			this.AdjList.get(v).d.delete(dv);
		}
	}
	view() {
		const iterator1 = this.AdjList[Symbol.iterator]();

		for (const item of iterator1) {
			console.log(item[0]);
			console.log(item[1].d);
		}
	}
	//travers
	dfs(root) {
		console.log(root)
		//console.log(this.AdjList.get(root))
		this.AdjList.get(root).visited = true;
		[...this.neighbors(root)].forEach(z=> {
			if(!this.AdjList.get(z).visited){
				this.dfs(z);
			}
		});
	}
	dfsS(root) {
		let s = new Stack();
		s.push(root);
		while(s.length) {
			root = s.pop();
			if(!this.AdjList.get(root).visited) {
				console.log(root)
				this.AdjList.get(root).visited = true;
				[...this.neighbors(root)].forEach(z=> {
					s.push(z);
				});
			}
		}
	}

	bfs(root) {
		let q = new Queues();
		this.AdjList.get(root).visited = true;
		q.push(root);

		while(q.length) {
			let v = q.pop();
			console.log(v);
			//if (v == root) {}
			[...this.neighbors(v)].forEach(z=> {
				if(!this.AdjList.get(z).visited){
					
					this.AdjList.get(z).visited = true;
					q.push(z);
				}
			});
		}
	}
}

export {UGraph};