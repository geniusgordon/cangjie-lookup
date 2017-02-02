const fs = jest.genMockFromModule('fs');

const mockFiles = {};

fs.readFile = (file, callback) => {
  callback(null, mockFiles[file] || '');
};

fs.appendFile = (file, data, callback) => {
  mockFiles[file] = (mockFiles[file] || '') + data;
  callback(null);
};

export default fs;

