function fibs(number) {
  if (number === 1) {
    let p = [0];
    return p;
  }
  let ans = [0, 1];
  for (let i = 3; i <= number; i++) {
    ans.push(ans[i - 2] + ans[i - 3]);
  }
  return ans;
}

const fibsRec = (length) => {
  // Cases to exclude
  if (length < 1 || isNaN(length)) return 'Invalid entry';
  // Base case
  if (length === 1) return [0];
  if (length === 2) return [0, 1];
  // Recursion
  return [
    ...fibsRec(length - 1),
    fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3],
  ];
};

console.log(fibsRec(10));
console.log(fibs(10));

// 1 >> above is implementation of fibonacci iterative and recursive

// 2 >> Merge Sort Algo - Use Recursion
const mergeSort = (array) => {
  // Base Case
  if (array.length === 0) return 'Invalid Array Supplied';
  if (array.length === 1) return array;

  // Recursion
  const split = Math.floor(array.length / 2);
  const left = array.slice(0, split);
  const right = array.slice(split, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // Merge both array parameters
  const result = [];
  let incomingLeft = 0;
  let incomingRight = 0;

  while (incomingLeft < left.length && incomingRight < right.length) {
    if (left[incomingLeft] < right[incomingRight]) {
      result.push(left[incomingLeft]);
      incomingLeft++;
    } else {
      result.push(right[incomingRight]);
      incomingRight++;
    }
  }

  while (incomingLeft < left.length) {
    result.push(left[incomingLeft]);
    incomingLeft++;
  }

  while (incomingRight < right.length) {
    result.push(right[incomingRight]);
    incomingRight++;
  }

  return result;
};

console.log(
  'Recursion - Merge Sort Algo',
  mergeSort([8, 5, 1, 9, 7, 15, 4, 2, 0])
);
