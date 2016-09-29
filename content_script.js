function clickAll() {
  var button = document.getElementsByClassName('hero-btn')[0]
  //var newButton = button.cloneNode(true);
  var newButton = document.createElement('a');
  newButton.innerHTML = 'Click All'
  newButton.className = 'hero-btn hero-btn-1 hero-cta btn btn-primary'
  button.parentElement.appendChild(newButton)
  //button.click();
}

clickAll();
