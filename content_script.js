function clickPlanet() {
  var button = document.getElementsByClassName('hero-btn')[0]
  var newButton = button.cloneNode(true);
  button.parentElement.appendChild(newButton)
  //button.click();
}

clickPlanet();
