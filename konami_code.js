const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  let body = document.querySelector('body');
  body.addEventListener('keydown', konamiCodeHandler);

  function konamiCodeHandler(e) {
    const key = parseInt(e.detail || e.which || e.location);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("You passed the test!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}

init();