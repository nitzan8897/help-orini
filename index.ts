import { Node } from "./Node";

const tree: Node = new Node(
  36,
  new Node(
    7,
    new Node(6, new Node(25)),
    new Node(29, new Node(8, undefined, new Node(70)), new Node(10))
  ),
  new Node(5, undefined, new Node(35))
);

const why = (root: Node | undefined, t: Node): any => {
  if (
    root === undefined ||
    root.getLeftSon()?.number === t.number ||
    root.getRightSon()?.number === t.number
  ) {
    return root;
  }
  const temp: Node = why(root.getLeftSon(), t);
  if (temp === undefined) {
    return why(root.getRightSon(), t);
  }
  return temp;
};

console.log(why(tree, new Node(10)));
