// Selecting items and adding event
const controls = document.getElementById('controls');
const cssText = document.querySelector('.css');
const button = document.querySelector('.button');
controls.addEventListener('change', handleChange);

// Object to change the style of the button
const handleStyle = {
  element: button,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

// Function to customize the button
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

// Saving the last button created to the local storage
function saveValues(name, value) {
  localStorage[name] = value;
}

// Function to set the values from local storage at the button
function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);
    controls.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

// Setting the last button created to the style
setValues();

// Showing the css code to the user
function showCss() {
  cssText.innerHTML = '<span>' + button.style.cssText.split('; ').join(';</span><span>');
}