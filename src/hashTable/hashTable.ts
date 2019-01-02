const hashMech = (str: string, max: number) => {
    var hash = 0
    for (var i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i)
    }
    return hash % max
}

class HashTable {
    private storage: any
    private storageLimit: number

    constructor() {
        this.storage = []
        this.storageLimit = 5
    }

    public printTable() {
        console.log(this.storage)
    }

    public add(key: any, value: any) {
        var index = hashMech(key, this.storageLimit)

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]]
        } else {
            let inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    this.storage[index][i][1] = value
                }
                inserted = true;
            }
            if (!inserted) {
                this.storage[index].push([key, value])
            }

        }
    }


    public remove(key: any) {
        var index = hashMech(key, this.storageLimit)
        if (this.storage[index].length == 1 && this.storage[index][0][0] == key) {
            delete this.storage[index]
        } else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    delete this.storage[index][i]
                }
            }
        }
    }

    public lookup(key: any) {
        var index = hashMech(key, this.storageLimit)
        if (this.storage[index] === undefined) {
            return undefined
        } else {
            let found = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    found = true
                    return this.storage[index][i]
                }
            }
            if (!found) {
                return "Elem Not Found"
            }
        }
    }
}





export default HashTable