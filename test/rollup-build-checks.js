const fs = require('fs-extra');
const path = require('path');
const expect = require('chai').expect;

describe('Test Rollup Output', function() {
  it('should only import shared utils once and only iport PrecacheController() for precaching-named-import.', function() {
    const precachingNamedImport = fs.readFileSync(path.join(__dirname, 'example-rollup-files', 'bundled', 'precaching-named-import.js')).toString();    

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
      let count = result.length || 0;
      expect(count).to.equal(test.expectedCount);
    })
  });
});
