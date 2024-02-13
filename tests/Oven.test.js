import Oven from '../src/models/Oven.js';

describe('Oven', () => {
  let oven;

  beforeEach(() => {
    oven = new Oven();
  });

  test('should toggle its state', () => {
    expect(oven.isOn).toBe(false);
    oven.toggle();
    expect(oven.isOn).toBe(true);
  });

  test('should toggle the lamp state', () => {
    expect(oven.lamp.isOn).toBe(false);
    oven.toggleLamp();
    expect(oven.lamp.isOn).toBe(true);
  });
});
