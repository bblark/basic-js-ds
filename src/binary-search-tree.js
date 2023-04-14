const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head=null
  }
  root() {
    return this.head
  }

  add(data) {
    this.head = treeAdd(this.head, data);

    function treeAdd(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = treeAdd(node.right, data)
      } else {
        node.left = treeAdd(node.left, data)
      }
      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return searchData(this.head, data);

    function searchData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        return searchData(node.right, data)
      } else {
        return searchData(node.left, data);
      }
    }
  }

  remove(data) {
    this.head = removeData(this.head, data);
    return this.head;

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let leftMax = node.left;
        while (leftMax.right) {
          leftMax = leftMax.right;
        }
        node.data = leftMax.data;
        node.left = removeData(node.left, leftMax.data);
        return node;
      }
    }

  }

  min() {
    if (this.head) {
      let node = this.head;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    } else {
      return null;
    }
  }

  max() {
    if (this.head) {
      let node = this.head;
      while (node.right) {
        node = node.right;
      }
      return node.data;
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree
};