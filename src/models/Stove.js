import Oven from './Oven.js';
import Burner from './Burner.js';

class Stove {
  constructor(color, width, height, depth, brand) {
    this.color = color;
    this.dimension = {
      width: width,
      height: height,
      depth: depth,
    };
    this.brand = brand;
    this.burners = [
      new Burner('red'),
      new Burner('blue'),
      new Burner('green'),
      new Burner('yellow'),
    ];
    this.oven = new Oven();
    this.lightBulb = false;
  }

  toggleLightBulb() {
    this.lightBulb = !this.lightBulb;
  }
}

export default Stove;
