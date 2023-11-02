
const cb = () => {
    // do Something
    process.nextTick(cb);
};

setTimeout(() => console.log('setTimeout executed'), 5);

process.nextTick(cb);

console.log('Start');
