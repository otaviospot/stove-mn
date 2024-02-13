import Stove from './models/Stove.js';

// Create a Stove
const myStove = new Stove('silver', 60, 85, 50, 'Stovemaster');

const messageBox = document.getElementById('showMessage');

// Event listeners
document.getElementById('toggleLight').addEventListener('click', () => {
  myStove.oven.toggleLamp();
  console.log(`Oven light is now ${myStove.oven.lamp.isOn ? 'on' : 'off'}.`);
  messageBox.innerHTML = `Oven light is now ${
    myStove.oven.lamp.isOn ? 'on' : 'off'
  }.`;
});

document.getElementById('toggleOven').addEventListener('click', () => {
  myStove.oven.toggle();
  console.log(`Oven is now ${myStove.oven.isOn ? 'on' : 'off'}.`);
  messageBox.innerHTML = `Oven is now ${myStove.oven.isOn ? 'on' : 'off'}.`;
});

document.querySelectorAll('.toggleBurner').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const burnerIndex = e.target.getAttribute('data-burner');
    myStove.burners[burnerIndex].toggle();
    console.log(
      `Burner ${parseInt(burnerIndex) + 1} is now ${
        myStove.burners[burnerIndex].isOn ? 'on' : 'off'
      }.`
    );
    messageBox.innerHTML = `Burner ${parseInt(burnerIndex) + 1} is now ${
      myStove.burners[burnerIndex].isOn ? 'on' : 'off'
    }.`;
  });
});
