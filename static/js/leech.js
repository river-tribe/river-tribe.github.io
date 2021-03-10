const passes = {'Alison':'/*AlisonS*/', 'Kale':'/*KaleE*/', 'Antoni':'/*AntoniH*/'};
const namearr = Object.keys(passes);

function textChecked() {
  window.location.href = 'https://river-tribe.github.io/leech/leech.html';
}

function textFailed() {
  alert('Incorrect username or password. Try again.');
}

function checkText() {
  var currentname = document.getElementById('username').value;
  var currentpass = document.getElementById('password').value;
  if (namearr.includes(currentname)) {
    if (currentpass == passes[currentname]) {
      textChecked();
    } else {
      textFailed();
    }
  } else {
    textFailed();
  }
}
