function foo(x) {
  return new Promise((resolve, reject) => {
    if (x > 0) resolve('resolved');
    else reject('rejected');
  });
}

async function main() {
  console.log('calling foo ... ');
  const result = await foo(1);
  console.log(result);
}

main().catch(err => console.log(err));
console.log('done');
