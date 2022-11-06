class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        // if (this.isEmpty()) {
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {  //check if the new node should go to the right or left
            if (root.left === null) {      // if root left doesn't exsist - place the new node
                root.left = newNode
            } else {                        // recursia
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {     //CHECK IF TREE IS EMPTY
            return false   // tree empty
        } else {           // tree not empty
            if (root.value === value) {  // check if searchValue is the root
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        // console.log('root', root);
        if (root) {
            console.log(root.value)
            // console.log(root)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    //BFS - breadth first search 
    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}

const bst = new BinarySearchTree()
// console.log('tree is empty?', bst.isEmpty())
// console.log(bst);

bst.insert(10)  //insert nodes to the tree
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)
// bst.insert(8)


// console.log(bst.search(bst.root, 10))  //true
// console.log(bst.search(bst.root, 5))   //true
// console.log(bst.search(bst.root, 15))  //true
// console.log(bst.search(bst.root, 11))  //false
// console.log(bst.search(bst.root, 12))  //false

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder(bst.root)
// console.log('min', bst.min(bst.root))
// console.log('max', bst.max(bst.root))

console.log(bst);
// console.log('before');
// bst.levelOrder()
// bst.delete(5)
// console.log('after delete');
// bst.levelOrder() 



