const {
  createCanvas,
} = require('canvas');
const fs = require('fs');
const randomHexColor = require('random-hex-color');

const getRandomInt = (max) => {
  min = Math.ceil(1000);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min) + min);
}
const createPrettyPicture = () => {
  const canvas = createCanvas(3000, 3000); // 3000px by 3000px
  const context = canvas.getContext('2d');

  const x = getRandomInt(2500);
  const y = getRandomInt(2500);

  // color 1
  context.fillStyle = randomHexColor();
  context.fillRect(0, 0, x, y);

  // color 2
  context.fillStyle = randomHexColor();
  context.fillRect(x, 0, 3000, y);

  // color 3
  context.fillStyle = randomHexColor();
  context.fillRect(x, y, 3000 - x, 3000 - y);

  // color 4
  context.fillStyle = randomHexColor();
  context.fillRect(0, y, x, 3000 - y);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./image.png', buffer);
};

createPrettyPicture();