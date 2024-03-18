document.addEventListener('DOMContentLoaded', function() {
    const dayButtons = document.querySelectorAll('.day-button');
    const dayBoxes = document.querySelectorAll('.day-box');

    dayButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        dayBoxes.forEach(box => {
          box.style.top = '-40px';
        });

        dayBoxes[index].style.top = '10px';
      });
    });
  });