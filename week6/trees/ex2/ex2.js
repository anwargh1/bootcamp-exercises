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
  
    findCommonParent(node1, node2) {
        return this.findCommonParentForTree(this, node1, node2)
}


findCommonParentForTree(root, node1, node2) {
        if(!root) {
            return null
        } else if(root.value === node1 || root.value === node2) {
            return root
        }


        let leftCommon = this.findCommonParentForTree(root.leftChild, node1, node2)
        let rightCommon = this.findCommonParentForTree(root.rightChild, node1, node2)


        if(leftCommon && rightCommon) {
            return root
        } 
        else {
            return leftCommon ? leftCommon : rightCommon
        }
}

  }


  const bsTree = new BSNode(["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"])
//insert nodes from array
    
 //should return "H"
bsTree.findCommonParent("B", "G") //should return "E"
bsTree.findCommonParent("B", "L") //should return "J"
bsTree.findCommonParent("L", "Y") //should return "R"
bsTree.findCommonParent("E", "H") //should return "J"
  console.log(bsTree.findCommonParent("B", "I"));