const { Jimp } = require('jimp');

async function run() {
  try {
    console.log('Loading image...');
    const image = await Jimp.read('public/images/icon.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;

    console.log(`Original size: ${width}x${height}. Center: (${centerX}, ${centerY}), Radius: ${radius}`);

    // Loop through pixels and make everything outside the circular boundary transparent
    image.scan(0, 0, width, height, function(x, y, idx) {
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) {
        this.bitmap.data[idx + 3] = 0; // Set Alpha to 0 (fully transparent)
      }
    });

    // Crop to the bounding square of the circle
    const size = Math.min(width, height);
    const startX = (width - size) / 2;
    const startY = (height - size) / 2;
    image.crop({ x: startX, y: startY, w: size, h: size });

    console.log('Writing cropped image...');
    await image.write('public/images/icon.png');
    console.log('Circular crop completed successfully!');
  } catch (err) {
    console.error('Error cropping image:', err);
  }
}

run();
