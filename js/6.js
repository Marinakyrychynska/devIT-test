function ChangeMatrix(matrix) {
  const minNumber = matrix.reduce((acc, row) => Math.min(acc, ...row), Infinity);

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] % 2 !== 0) {
        matrix[i][j] *= minNumber;
      }
    }
  }

  return matrix;
}


const matrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4]
];

ChangeMatrix(matrix);