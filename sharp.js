const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public');
const destination = path.resolve(__dirname, 'dist');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

sharp(`${target}/hero-image_1.jpg`)
  .resize(1200)
  .toFile(path.resolve(__dirname, `${destination}/hero-image_1-large.jpg`));

sharp(`${target}/hero-image_1.jpg`)
  .resize(600)
  .toFile(path.resolve(__dirname, `${destination}/hero-image_1-small.jpg`));
