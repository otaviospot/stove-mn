class Burner {
  constructor(color) {
    this.color = color;
    this.isOn = false;
  }

  toggle() {
    this.isOn = !this.isOn;
  }
}

export default Burner;
