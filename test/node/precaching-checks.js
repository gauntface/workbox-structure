const fs = require('fs-extra');
const path = require('path');
const proxyquire = require('proxyquire').noCallThru();;
const expect = require('chai').expect;

const examplesPath = path.join(__dirname, '..', '..', 'packages', 'example-rollup-files', 'build');

describe('Test Rollup Output - precaching', function() {
  it('should only import shared utils once and only import PrecacheController().', function() {
    const precachingNamedImport = fs.readFileSync(path.join(examplesPath, 'precaching-named-import.js')).toString();

    // Shouldn't exist - this is a default export that we don't use.
    const regexTests = [
      {
        regex: /class LogHelper/g,
        expectedCount: 1,
      },
      {
        regex: /class WorkboxApplication/g,
        expectedCount: 1,
      },
      {
        regex: /new WorkboxApplication\(/g,
        expectedCount: 1,
      },
      {
        regex: /new PrecacheController\(\)/g,
        expectedCount: 0,
      }
    ];
    regexTests.forEach((test) => {
      const result = precachingNamedImport.match(test.regex);
      let count = (result || []).length;
      expect(count).to.equal(test.expectedCount);
    })
  });

  it('should pull the precaching "default" export', function() {
    const precachingNamedImport = fs.readFileSync(path.join(examplesPath, 'precaching-default-import.js')).toString();

    // Shouldn't exist - this is a default export that we don't use.
    const regexTests = [
      {
        regex: /class LogHelper/g,
        expectedCount: 1,
      },
      {
        regex: /class WorkboxApplication/g,
        expectedCount: 1,
      },
      {
        regex: /new WorkboxApplication\(/g,
        expectedCount: 1,
      },
      {
        regex: /new PrecacheController\(\)/g,
        expectedCount: 1,
      }
    ];
    regexTests.forEach((test) => {
      const result = precachingNamedImport.match(test.regex);
      let count = (result || []).length;
      expect(count).to.equal(test.expectedCount);
    })
  });
});
