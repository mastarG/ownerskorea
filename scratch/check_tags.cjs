const fs = require('fs');
const content = fs.readFileSync(process.argv[2], 'utf8');

const tags = content.match(/<(\/?[a-z0-9]+)/gi) || [];
const stack = [];

tags.forEach(tag => {
    if (tag.startsWith('</')) {
        const name = tag.substring(2);
        if (stack.length === 0) {
            console.log(`Error: Unexpected closing tag </${name}>`);
        } else {
            const last = stack.pop();
            if (last !== name) {
                console.log(`Error: Mismatched tag. Expected </${last}> but found </${name}>`);
            }
        }
    } else if (!tag.endsWith('/')) {
        const name = tag.substring(1);
        // Ignore self-closing tags and some common React components that might be self-closing but written as <Tag />
        if (!['img', 'br', 'hr', 'input', 'link', 'meta'].includes(name.toLowerCase())) {
            stack.push(name);
        }
    }
});

if (stack.length > 0) {
    console.log(`Error: Unclosed tags: ${stack.join(', ')}`);
} else {
    console.log('All tags are balanced (roughly)');
}
