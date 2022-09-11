class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(node, val) {
    if(node.value === val) {
        return true
    } else if(!node.rightChild && !node.leftChild) {
        return false
    }


    if(val < node.value) {
        return this.findNode(node.leftChild, val)
    } else if(val > node.value) {
        return this.findNode(node.rightChild, val)
    }

}
}
const letters = ["H", "E", "S", "G", "L", "Y", "I"]
const bsTree = new BSNode(letters)
//insert nodes (same as in lesson)
    
//Use the following to test
 // should print true
 // should print true
// should print false
 // should print false
bsTree.findNode("y") // should print false - we didn't make the tree case sensitive!
console.log(bsTree.findNode("H"));
console.log(bsTree.findNode("G"));
console.log(bsTree.findNode("Z") );
console.log(bsTree.findNode("F"));
