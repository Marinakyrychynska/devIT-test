function* ChunkArray(array, part) {
  for (let i = 0; i < array.length; i += part) {
    yield array.slice(i, i + part);
  }
}

const iterator = ChunkArray([1,2,3,4,5,6,7,8], 3);

iterator.next();