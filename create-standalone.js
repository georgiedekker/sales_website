const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Define paths
const outDir = path.join(__dirname, 'out');
const indexPath = path.join(outDir, 'index.html');
const standaloneDir = path.join(__dirname, 'standalone');
const standaloneIndexPath = path.join(standaloneDir, 'index.html');
const standaloneCssPath = path.join(standaloneDir, 'styles.css');

// Create standalone directory if it doesn't exist
if (!fs.existsSync(standaloneDir)) {
  fs.mkdirSync(standaloneDir, { recursive: true });
  console.log('Created standalone directory');
}

// Try to find the CSS file in the out directory
const cssFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.css'));
if (cssFiles.length === 0) {
  console.error('No CSS file found in the out directory');
  process.exit(1);
}

// Copy the first CSS file to styles.css
fs.copyFileSync(
  path.join(outDir, cssFiles[0]),
  standaloneCssPath
);
console.log(`Copied ${cssFiles[0]} to styles.css`);

// Read the existing index.html file
const indexContent = fs.readFileSync(indexPath, 'utf8');

// We'll try two approaches:
// 1. Using cheerio to parse and modify the HTML (more robust)
// 2. Using regex as a fallback (simpler but less robust)

try {
  // Load HTML with cheerio
  const $ = cheerio.load(indexContent);
  
  // Remove all script tags
  $('script').remove();
  
  // Change CSS link href to styles.css
  $('link[rel="stylesheet"]').attr('href', 'styles.css');
  
  // Remove all other link tags except the CSS one
  $('link:not([rel="stylesheet"])').remove();
  
  // Get the HTML body content
  const bodyContent = $('body').html();
  
  // Create a new simplified HTML file
  const standaloneHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>RaiseMyTicket.com | Unified Enterprise Ticket Management</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ${bodyContent}
</body>
</html>`;
  
  // Write the standalone HTML file
  fs.writeFileSync(standaloneIndexPath, standaloneHtml);
  console.log('Created standalone index.html');
  
} catch (error) {
  console.warn('Error using cheerio, falling back to regex approach:', error.message);
  
  // Fallback approach using regex
  let standaloneHtml = indexContent;
  
  // Remove all script tags and their content
  standaloneHtml = standaloneHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Change CSS link to styles.css
  standaloneHtml = standaloneHtml.replace(
    /<link [^>]*rel="stylesheet"[^>]*href="[^"]*"[^>]*>/i, 
    '<link rel="stylesheet" href="styles.css">'
  );
  
  // Remove other link tags
  standaloneHtml = standaloneHtml.replace(/<link(?!\s+rel="stylesheet")[^>]*>/gi, '');
  
  // Write the standalone HTML file
  fs.writeFileSync(standaloneIndexPath, standaloneHtml);
  console.log('Created standalone index.html using regex approach');
}

console.log('Standalone files created successfully in the standalone directory!');
console.log('You can find them at:');
console.log(`- ${standaloneIndexPath}`);
console.log(`- ${standaloneCssPath}`); 