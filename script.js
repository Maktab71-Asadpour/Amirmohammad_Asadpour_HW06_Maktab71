const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';

var selectElement = document.getElementById("color-select");

data.forEach(element => {
  var colorOption = document.createElement("option");
  colorOption.value = element;
  colorOption.innerHTML = element;
  selectElement.appendChild(colorOption);
});

selectElement.onchange = function (){
  var option = selectElement.options[selectElement.selectedIndex];
  document.getElementById("box").style.backgroundColor = option.value;
  setTimeout(function(){document.getElementById("box").style.backgroundColor = defaultColor;}, 1000);
}



