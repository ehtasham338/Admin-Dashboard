const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const selfClosing = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr','use']);
const stack = [];
const issues = [];
const regex = /<\/?([a-zA-Z0-9-_]+)([^>]*)>/g;
let m;
while ((m = regex.exec(text)) !== null) {
  const tag = m[1].toLowerCase();
  const whole = m[0];
  if (whole.startsWith('</')) {
    if (!stack.length) { issues.push('unmatched close </' + tag + '>'); continue; }
    if (stack[stack.length - 1] === tag) { stack.pop(); continue; }
    issues.push('mismatch close </' + tag + '> expected </' + stack[stack.length - 1] + '>');
    const idx = stack.lastIndexOf(tag);
    if (idx !== -1) stack.splice(idx);
  } else {
    if (selfClosing.has(tag) || whole.endsWith('/>')) continue;
    stack.push(tag);
  }
}
console.log('issues:', issues);
console.log('stack:', stack);
