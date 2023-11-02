let k = [];
let lst = [1,2,3];

function someAsyncOperation(lst) {
  return new Promise((resolve, reject) => {
    if (lst.length === 0 ) {
      reject('Empty List');
      return;
    }
    setTimeout(function() {
      k = k.concat(lst);
      resolve(k);
      console.log('in timer phase');
    }, 5);
  });
};
someAsyncOperation([1,2,3])
  .then(function(result) {
    console.log(sumf(0, result));
  })
  .catch(function(err) {
    console.log(err);
  });

function sumf(r, items) {
  items.forEach((item, i) => {
    r = r + item;
  });
  return r;
}
console.log('doing other things ...');