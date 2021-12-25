const {
  createCanvas,
} = require('canvas');
const fs = require('fs');
const randomHexColor = require('random-hex-color');

const createPrettyPicture = () => {
  const canvas = createCanvas(3000, 3000); // 3000px by 3000px
  const context = canvas.getContext('2d');

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      context.fillStyle = randomHexColor();
      context.fillRect(j * 300, i * 300, 300, 300);
    }
  }

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./image.png', buffer);
};

createPrettyPicture();