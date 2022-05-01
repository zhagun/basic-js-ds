const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this._root ? this._root : null;
  }

  add(data) {
    if (!this._root) {
      this._root = this.create(data);
    } else {
      this._root = this.addValue(this._root, data)
    }

  }

  has(data) {
    return this.searchValue(this._root, data)
  }

  find(data) {
    return this.returnNodeWithValue(this._root, data)
  }

  remove(data) {
    this.removeNodeWithValue(this._root, data)
  }

  min() {
    if (!this._root)
      return
    let min = this._root;
    while (min.leftChild !== null) {
      min = min.leftChild
    }
    return min.data

  }

  max() {
    if (!this._root)
      return
    let max = this._root;
    while (max.rightChild !== null) {
      max = max.rightChild
    }
    return max.data

  }

  create(data) {
    let newNode = { data: data, rightChild: null, leftChild: null };
    return newNode;
  }

  addValue(node, data) {
    if (node === null) {
      return this.create(data);
    }
    if (node.data === data) {
      return node;
    }
    if (node.data > data) {
      node.leftChild = this.addValue(node.leftChild, data)
    } else {
      node.rightChild = this.addValue(node.rightChild, data)
    }

    return node;

  }

  searchValue(node, data) {
    if (node === null) {
      return false;
    }
    if (node.data === data) {
      return true;
    }
    if (node.data > data) {
      return this.searchValue(node.leftChild, data)
    } else {
      return this.searchValue(node.rightChild, data)
    }

  }

  returnNodeWithValue(node, data) {
    if (node === null) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    if (node.data > data) {
      return this.returnNodeWithValue(node.leftChild, data)
    } else {
      return this.returnNodeWithValue(node.rightChild, data)
    }

  }

  removeNodeWithValue(node, data) {
    if (node === null) {
      return null;
    }
    if (node.data > data) {
      node.leftChild = this.removeNodeWithValue(node.leftChild, data)
      return node
    } else if (node.data < data) {
      node.rightChild = this.removeNodeWithValue(node.rightChild, data)
      return node;
    } else {
      if (node.rightChild === null && node.leftChild === null) {
        return null
      }
      if (node.rightChild === null) {
        return node.leftChild
      }
      if (node.leftChild === null) {
        return node.rightChild
      }
      let minFromRCh = node.rightChild;
      while (minFromRCh.leftChild !== null) {
        minFromRCh = minFromRCh.leftChild
      }

      node.data = minFromRCh.data;
      node.rightChild = this.removeNodeWithValue(node.rightChild, node.data)

      return node
    }

  }
}

module.exports = {
  BinarySearchTree
};