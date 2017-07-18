const fs = require('fs-extra');
const path = require('path');
const proxyquire = require('proxyquire').noCallThru();;
const expect = require('chai').expect;

describe('Test Rollup Output - both imports', function() {
  it('should only import shared utils once and import PrecacheController and Route.', function() {
    const bothDefaultImports = fs.readFileSync(path.join(__dirname, '..', 'example-rollup-files', 'build', 'both-named-imports.js')).toString();

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
      },
      {
        regex: /new Router\(\)/g,
        expectedCount: 0,
      }
    ];
    regexTests.forEach((test) => {
      const result = bothDefaultImports.match(test.regex);
      let count = (result || []).length;
      expect(count).to.equal(test.expectedCount);
    })
  });

  it('should only import shared utils once and import "defaults".', function() {
    const bothDefaultImports = fs.readFileSync(path.join(__dirname, '..', 'example-rollup-files', 'build', 'both-default-imports.js')).toString();

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
      },
      {
        regex: /new Router\(\)/g,
        expectedCount: 1,
      }
    ];
    regexTests.forEach((test) => {
      const result = bothDefaultImports.match(test.regex);
      let count = (result || []).length;
      expect(count).to.equal(test.expectedCount);
    })
  });
});
