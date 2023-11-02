const fs = require("fs");

function moreWork() {
    console.log('more work');
}

fs.readFile("data/file.txt", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
});
moreWork();
