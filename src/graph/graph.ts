import { Queue } from "../queue/queue";

class Graph {
    private numVertices: number
    private ajdList: any

    constructor(numVertices: number) {
        this.numVertices = numVertices
        this.ajdList = new Map()
    }

    addVertice(v: any) {
        this.ajdList.set(v, [])
    }

    addEdge(src: any, dest: any) {
        this.ajdList.get(src).push(dest)
        this.ajdList.get(dest).push(src) // Graph is undirected
    }

    printGraph() {
        var vertices = this.ajdList.keys()
        for (var i of vertices) {
            var edges = this.ajdList.get(i)
            var path = ""

            for (var j in edges) {
                path += edges[j] + " "
            }

            console.log(i + " => " + path)
        }
    }

    breadthFristSearch(startingNode: any) {
        var visited = []

        var q = new Queue()
        visited[startingNode] = true
        q.enqueue(startingNode)

        while (!q.isEmpty()) {
            var currentQueueElem = q.dequeue()
            console.log("Vertex: ", currentQueueElem)

            var adjacentList = this.ajdList.get(currentQueueElem)

            for (var i = 0; i < adjacentList.length; i++) {
                var item = adjacentList[i]
                if (!visited[item] == true) {
                    visited[item] = true
                    q.enqueue(item)
                }
            }
        }
    }

    depthFirstSearch(startingNode: any) {
        var visited = []
        for (var i = 0; i < visited.length; i++) {
            visited[i] = false
        }
        this.DFSUtil(startingNode, visited)
    }

    DFSUtil(vert: any, visited: Array<any>) {
        visited[vert] = true
        console.log("Vertex: ", vert)

        var neighbors = this.ajdList.get(vert)
        for (var i in neighbors) {
            var item = neighbors[i]
            if (!visited[item]) this.DFSUtil(item, visited)
        }
    }

}

export default Graph