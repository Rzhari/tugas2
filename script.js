const targetObject1 = document.getElementById("targetObject1");
const targetObject2 = document.getElementById("targetObject2");
const selection = document.getElementById("selection");
const input = document.getElementById("inputValue");

function update() {
  const user = selection.options.selectedIndex;

  switch (user) {
    case 1:
      targetObject1.style.background = input.value;
      break;
    case 2:
      targetObject2.style.color = input.value;
      break;
    case 3:
      targetObject2.style.fontSize = input.value + "px";
      break;
    case 4:
      targetObject2.style.fontFamily = input.value;
      break;
    case 5:
      targetObject1.style.width = input.value + "px";
      break;
    case 6:
      targetObject1.style.height = input.value + "px";
      break;
    default:
      break;
  }
}
