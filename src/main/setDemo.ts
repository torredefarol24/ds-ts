import DS_Set from '../set/set'

let s1 = new DS_Set()
let s2 = new DS_Set()
let s3 = new DS_Set()

s1.insert(3)
s1.insert(5)
s1.insert(1)
s1.insert(9)
s1.insert(5)
s1.insert(7)
s1.printSet()

s2.insert(4)
s2.insert(3)
s2.insert(2)
s2.insert(6)
s2.insert(8)
s2.insert("A")
s2.printSet()

s3.insert("A")
s3.insert(3)
s3.printSet()


console.log("s2 has 15 ", s2.has(15))
console.log("s1 union s2", s1.union(s2))
console.log("s1 intersection s2", s1.intersection(s2))
console.log("s1 difference s2", s1.difference(s2))
console.log("s1 opposite of intersection s2", s1.oppositeIntersection(s2))

console.log("s1 is subset of s3", s1.isSubset(s3))
console.log("s3 is subset of s1", s3.isSubset(s1))
console.log("s2 is subset of s3", s1.isSubset(s3))
console.log("s3 is subset of s2", s3.isSubset(s2))