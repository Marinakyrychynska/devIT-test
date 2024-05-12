function BulkRun(valueArgs) {
  const promises = valueArgs.map(([func, args]) => new Promise((res) => {
    func(...args, res);
  }));

  return Promise.all(promises);
}

const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

BulkRun(
  [
    [f1, []],
    [f2, [2]]
    [f3, [3, 4]]
  ]
).then(console.log);