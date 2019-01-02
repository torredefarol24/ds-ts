export default class DS_Set {
	private collection: any;

	constructor() {
		this.collection = []
	}

	public has(elem: any) {
		return this.collection.indexOf(elem) !== -1
	}

	public values() {
		return this.collection
	}

	public printSet() {
		console.log("-----------")
		this.collection.forEach((item: any) => console.log(item))
	}

	public insert(elem: any) {
		if (this.has(elem)) {
			console.log(`${elem} Exists Already`)
			return false
		} else {
			this.collection.push(elem)
			return true
		}
	}

	public remove(elem: any) {
		if (this.has(elem)) {
			var index = this.collection.indexOf(elem)
			this.collection.splice(index, 1)
			return true
		} else {
			console.log("Elem Doesnt Exist")
			return false
		}
	}

	public union(otherSet: any) {
		var unionSet = new Set()

		this.values().forEach((item: any) => unionSet.add(item))
		otherSet.values().forEach((item: any) => unionSet.add(item))

		return unionSet
	}

	public intersection(otherSet: any) {
		var intersectionSet = new Set()

		this.values().forEach((item: any) => {
			if (otherSet.has(item)) {
				intersectionSet.add(item)
			}
		})

		return intersectionSet
	}

	public difference(otherSet: any) {
		var differenceSet = new Set()

		this.values().forEach((item: any) => {
			if (!otherSet.has(item)) {
				differenceSet.add(item)
			}
		})

		return differenceSet
	}

	public oppositeIntersection(otherSet: any) {
		var oppositeIntersectionSet = new Set()
		this.values().forEach((item: any) => {
			if (!otherSet.has(item)) {
				oppositeIntersectionSet.add(item)
			}
		})
		otherSet.values().forEach((item: any) => {
			if (!this.has(item)) {
				oppositeIntersectionSet.add(item)
			}
		})
		return oppositeIntersectionSet
	}

	public isSubset(otherSet: any) {
		return this.values().every((item: any) => otherSet.has(item))
	}

}