import Graph from '../graph/graph'

var g = new Graph(6)
var vertices = ['A', 'B', 'C', 'D', 'E', 'F']

for (var i = 0; i < vertices.length; i++) {
    g.addVertice(vertices[i])
}

g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')

g.addEdge('B', 'C')

g.addEdge('C', 'E')
g.addEdge('C', 'F')

g.addEdge('F', 'E')
g.addEdge('D', 'E')

console.log("Printing Graph")
g.printGraph()

console.log("Breadth First Search")
g.breadthFristSearch("A")

console.log("Depth First Search")
g.depthFirstSearch("A")
