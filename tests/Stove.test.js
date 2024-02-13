import Stove from '../src/models/Stove.js';
import Oven from '../src/models/Oven.js';

describe('Stove', () => {
  let stove;

  beforeEach(() => {
    // create a Stove
    stove = new Stove('Silver', 60, 85, 50, 'Stovemaster');
  });

  test('is correct properties', () => {
    expect(stove.color).toBe('Silver');
    expect(stove.dimension.width).toBe(60);
    expect(stove.dimension.height).toBe(85);
    expect(stove.dimension.depth).toBe(50);
    expect(stove.brand).toBe('Stovemaster');
    expect(stove.burners.length).toBe(4);
    expect(stove.oven).toBeInstanceOf(Oven);
    expect(stove.lightBulb).toBe(false);
  });

  test('can toggle the light', () => {
    expect(stove.lightBulb).toBe(false); // init off
    stove.toggleLightBulb(); // toggle
    expect(stove.lightBulb).toBe(true); // shuold be on
    stove.toggleLightBulb(); // toggle
    expect(stove.lightBulb).toBe(false); // should be off
  });
});
