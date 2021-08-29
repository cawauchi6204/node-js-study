const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
  // readFile(path.join(__dirname, 'sample.txt'), 'utf-8').then((data) => {
  //   return writeFile(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8')
  //     .then(() => { console.log('Ok') })
  // }).catch((err) => {
  //   console.log('indexの12行目のerrは' + err)
  // })

  (async function () {
    try {
      const data = await readFile(path.join(__dirname, 'sample.txt'), 'utf-8')
      await writeFile(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8')
      console.log('ok')
    } catch (err) {
      console.log(err.message)
    }
  })();
