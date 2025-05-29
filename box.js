let box = document.getElementById("box");
let letter = document.getElementById("pressedletter");
let description = document.getElementById("description");
let body = document.body;
document.addEventListener("keydown", (moveBox) => {
  const key = moveBox.key;
  const stepX =
    key === "a"
      ? box.offsetLeft - 50
      : key === "d"
      ? box.offsetLeft + 30
      : box.offsetLeft;
  const stepY =
    key === "w"
      ? box.offsetTop - 50
      : key === "s"
      ? box.offsetTop + 30
      : box.offsetTop;
  if (key === "a" || key === "d" || key === "w" || key === "s") {
    description.textContent = "";
  }
  // Set background color based on key
  if (key === "a") {
    letter.textContent = "A";
    box.style.backgroundColor = "lightcoral";
    box.style.borderRadius = "15%";
  } else if (key === "d") {
    letter.textContent = "D";
    box.style.backgroundColor = "lightgreen";
    box.style.borderRadius = "20%";
  } else if (key === "w") {
    letter.textContent = "W";
    box.style.backgroundColor = "lightred";
    box.style.borderRadius = "25%";
  } else if (key === "s") {
    letter.textContent = "S";
    box.style.backgroundColor = "lightseagreen";
    box.style.borderRadius = "30%";
  }
  let left = stepX;
  let top = stepY;
  left = Math.max(0, Math.min(left, body.offsetWidth - box.offsetWidth - 3));
  top = Math.max(0, Math.min(top, body.offsetHeight - box.offsetHeight - 3));
  box.style.left = left + "px";
  box.style.top = top + "px";
});
