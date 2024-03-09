export interface Tree {
  Node: Node;
}

export interface INode {
  left?: Node | undefined;
  right?: Node | undefined;
  getRightSon(): Node | undefined;
  getLeftSon(): Node | undefined;
}

export class Node implements INode {
  left?: Node;
  right?: Node;
  number: number;
  getRightSon(): Node | undefined {
    return this.right;
  }
  getLeftSon(): Node | undefined {
    return this.left;
  }

  constructor(number: number, left?: Node, right?: Node) {
    this.left = left;
    this.right = right;
    this.number = number;
  }
}
