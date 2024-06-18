const LevelDB = require('leveldb');
const db = new LevelDB('./extensions/YourExtensionID/storage/leveldb');

db.get('key', (err, value) => {
  console.log(value.toString()); // Output: "Hello, World!"
});
onst LevelDB = require('leveldb');
const db = new LevelDB('./extensions/YourExtensionID/storage/leveldb');

db.iterate({
  keys: true,
  values: true
}, (err, key, value) => {
  console.log(`Key: ${key.toString()}, Value: ${value.toString()}`);
});

