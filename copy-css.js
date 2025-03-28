const fs = require('fs');
const path = require('path');

// Get all CSS files from _next/static/css
const cssDir = path.join(__dirname, 'out', '_next', 'static', 'css');
const outDir = path.join(__dirname, 'out');

// Copy all CSS files to the root directory
fs.readdirSync(cssDir).forEach(file => {
  if (file.endsWith('.css')) {
    fs.copyFileSync(
      path.join(cssDir, file),
      path.join(outDir, file)
    );
    console.log(`Copied ${file} to out directory`);
  }
});

// Update HTML files to reference CSS files from the root directory
const processHtmlFiles = (dir) => {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== '_next') {
      // Recursively process subdirectories, but skip _next directory
      processHtmlFiles(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace various CSS reference patterns
      // 1. Replace href="/186bc00ca1882001.css" format
      content = content.replace(
        /href="\/([^"]+\.css)"/g,
        'href="$1"'
      );
      
      // 2. Replace href="/_next/static/css/186bc00ca1882001.css" format
      content = content.replace(
        /href="\/_next\/static\/css\/([^"]+\.css)"/g,
        'href="$1"'
      );
      
      // 3. Replace href="_next/static/css/186bc00ca1882001.css" format
      content = content.replace(
        /href="_next\/static\/css\/([^"]+\.css)"/g,
        'href="$1"'
      );
      
      // 4. Replace references in script tags that load CSS
      content = content.replace(
        /"[^"]*\/_next\/static\/css\/([^"]+)"/g,
        '"$1"'
      );
      content = content.replace(
        /"[^"]*_next\/static\/css\/([^"]+)"/g,
        '"$1"'
      );
      
      fs.writeFileSync(fullPath, content);
      console.log(`Updated CSS paths in ${fullPath.replace(outDir + '/', '')}`);
    }
  });
};

// Process all HTML files, including those in subdirectories
processHtmlFiles(outDir);

console.log('CSS files copied and HTML references updated successfully!'); 