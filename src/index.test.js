import {
  expect
} from "chai";
import * as jsdom from 'jsdom';
import fs from "fs";



describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  const content = fs.readFileSync('./src/index.html', "utf-8");
  const {
    document
  } = new jsdom.JSDOM(content).window;
  it('should say Users', (done) => {
    const h1 = document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Users');
    done();
  });
});
