// Importing the thenify library
const thenify = require('thenify');

// Applying thenify to a callback function
const fs = require('fs');
const readFile = thenify(fs.readFile);

// Example function using thenify
function exampleReadFile(filePath) {
  readFile(filePath, 'utf8')
    .then((data) => {
      console.log('File content:', data);
    })
    .catch((err) => {
      console.error('Error reading file:', err);
    });
}

// Usage
exampleReadFile('example.txt');

// Another pattern with different modifications
const anotherThenify = require('thenify').someModification.someOtherModification;

// Function using the modified thenify
function exampleModifiedReadFile(filePath) {
  anotherThenify(fs.readFile)(filePath, 'utf8')
    .then((data) => {
      console.log('File content:', data);
    })
    .catch((err) => {
      console.error('Error reading file:', err);
    });
}

// Usage
exampleModifiedReadFile('example.txt');
