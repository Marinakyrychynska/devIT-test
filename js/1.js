function NodeChildCount(node, deep = Infinity) {
  let count = 0;

  if (deep === 0) {
    return 1;
  }

  for (const child of node.childNodes) {
    count++;

    if (deep !== 1) {
      count += NodeChildCount(child, deep - 1);
    }
  }

  return count;
}

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);

NodeChildCount(div);