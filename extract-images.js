const fs = require('fs');
const path = require('path');
const https = require('https');

const sourceDir = 'c:/Visual Studio Code Projects/existingnimbus';
const destDir = path.join(__dirname, 'public/images/worcester-bosch');

function getAllHtmlFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllHtmlFiles(fullPath));
    } else if (item.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractImgSrcs(content) {
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const srcs = [];
  while ((match = regex.exec(content)) !== null) {
    srcs.push(match[1]);
  }
  return srcs;
}

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // delete partial file
      reject(err);
    });
  });
}

function getUniqueFilename(dir, baseName) {
  let counter = 0;
  let filename = baseName;
  while (fs.existsSync(path.join(dir, filename))) {
    counter++;
    const ext = path.extname(baseName);
    const name = path.basename(baseName, ext);
    filename = `${name}-${counter}${ext}`;
  }
  return filename;
}

async function main() {
  const htmlFiles = getAllHtmlFiles(sourceDir);
  const copied = [];
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const srcs = extractImgSrcs(content);
    for (const src of srcs) {
      let isUrl = src.startsWith('http://') || src.startsWith('https://');
      if (isUrl) {
        // download
        const urlObj = new URL(src);
        const filename = path.basename(urlObj.pathname);
        const uniqueFilename = getUniqueFilename(destDir, filename);
        const destPath = path.join(destDir, uniqueFilename);
        try {
          await downloadFile(src, destPath);
          copied.push(uniqueFilename);
        } catch (err) {
          console.error(`Failed to download ${src}: ${err.message}`);
        }
      } else {
        // relative path
        const srcPath = path.resolve(sourceDir, src);
        if (fs.existsSync(srcPath)) {
          const filename = path.basename(src);
          const uniqueFilename = getUniqueFilename(destDir, filename);
          const destPath = path.join(destDir, uniqueFilename);
          copyFile(srcPath, destPath);
          copied.push(uniqueFilename);
        } else {
          console.error(`File not found: ${srcPath}`);
        }
      }
    }
  }
  console.log(`Copied ${copied.length} images: ${copied.join(', ')}`);
}

main().catch(console.error);