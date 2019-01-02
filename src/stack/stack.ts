class Stack{
	private items: any
	private count: number

	constructor(){
		this.items = {}
		this.count = 0
	}
	
	public printItems(){
		console.log("--------\nItems")
		for (var i=0; i < this.count; i++){
			console.log(this.items[i])
		}
		console.log("--------")
	}
	
	public appendElem(item:any){
		this.items[this.count] = item
		this.count ++;
	}
	
	public popFromEnd(){
		if (this.count == 0){
			return undefined
		}
		this.count --
		var result = this.items[this.count]
		delete this.items[this.count]
		return result;
	}

	public getSize(){
		return this.count
	}

	public peek(){
		return this.items[this.count -1]
	}
	
}

export default Stack


