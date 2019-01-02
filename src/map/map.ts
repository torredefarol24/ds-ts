class CustMap {
    private collection: any
    private count: number

    constructor() {
        this.collection = {}
        this.count = 0
    }

    public size() {
        return this.count
    }

    public set(key: any, value: any) {
        this.collection[key] = value
        this.count++
    }

    public has(key: any) {
        return (key in this.collection)
    }

    public getValue(key: any) {
        return (key in this.collection) ? this.collection[key] : null
    }

    public removeData(key: any) {
        if (key in this.collection) {
            delete this.collection[key]
            this.count--;
        } else {
            return null
        }
    }

    public getKeys() {
        var arr = new Array()
        for (var key in this.collection) {
            arr.push(key)
        }
        return arr
    }

    public getValues() {
        var arr = new Array()
        for (var key in this.collection) {
            arr.push(this.collection[key])
        }
        return arr
    }

    public printMap() {
        console.log("\nPrinting Map")
        for (var key in this.collection) {
            console.log(key, " : ", this.collection[key])
        }

    }

    public getAllData() {
        var arr = new Array()
        for (var key in this.collection) {
            var tempArr = [key, this.collection[key]]
            arr.push(tempArr)
        }
        return arr
    }

    public printMapSnapshot() {
        return this.collection
    }

}

export default CustMap