import Lamp from './Lamp.js';

class Oven {
  constructor() {
    this.door = { width: 30, height: 40 };
    this.isOn = false;
    this.lamp = new Lamp();
  }

  toggle() {
    this.isOn = !this.isOn;
  }

  toggleLamp() {
    this.lamp.toggle();
  }
}

export default Oven;
