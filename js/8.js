function RemoveDublicate(str) {
  const uniqueWords = new Set(str.split(' '));

  result = [...uniqueWords].join(' ');

  return result;
}

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
RemoveDublicate(x);

String.prototype.removeDup = function() {
  const uniqueWords = new Set(this.split(' '));
  const result = [...uniqueWords].join(' '); 

  return result;
}

let y = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
y.removeDup();