import Lamp from '../src/models/Lamp.js';

describe('Lamp', () => {
  test('should toggle its state', () => {
    const lamp = new Lamp();
    expect(lamp.isOn).toBe(false);
    lamp.toggle();
    expect(lamp.isOn).toBe(true);
  });
});
