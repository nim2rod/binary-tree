// Adjacency Matrix of a gragh
// insert and find adjacent node -> linear time complexity
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
]

// Adjacency List of a gragh - Storage wise List is more efficient
// insert and find adjacent node -> constant time complexity 
adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}

console.log(adjacencyList['B']);

