let box = document.getElementById("box");
let letter = document.getElementById("pressedletter");
let description = document.getElementById("description");
let body = document.body;
let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");
document.addEventListener("keydown", (moveBox) => {
  const key = moveBox.key.toLowerCase();
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
    box.textContent = "◉ ‿ ◉";
    box.style.backgroundColor = "lightcoral";
    box.style.borderRadius = "25%";
  } else if (key === "d") {
    letter.textContent = "D";
    box.textContent = "•̀ᴖ•́";
    box.style.backgroundColor = "lightgreen";
    box.style.borderRadius = "20%";
  } else if (key === "w") {
    box.textContent = "•ᴗ•";
    letter.textContent = "W";
    box.style.backgroundColor = "lightpink";
    box.style.borderRadius = "25%";
  } else if (key === "s") {
    box.textContent = "•᷄︵•᷅";
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

document.addEventListener("touchstart", (MobileKey) => {
  let key = MobileKey.target.id;
  let touchInterval;
  if (key === "up") {
    key = "w";
    touchInterval = setInterval(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "w" }));
    }, 100);
    MobileKey.target.addEventListener(
      "touchend",
      () => clearInterval(touchInterval),
      { once: true }
    );
    console.log("up");
  } else if (key === "down") {
    key = "s";
    touchInterval = setInterval(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "s" }));
    }, 100);
    MobileKey.target.addEventListener(
      "touchend",
      () => clearInterval(touchInterval),
      { once: true }
    );
  } else if (key === "left") {
    key = "a";
    touchInterval = setInterval(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    }, 100);
    MobileKey.target.addEventListener(
      "touchend",
      () => clearInterval(touchInterval),
      { once: true }
    );
  } else if (key === "right") {
    key = "d";
    touchInterval = setInterval(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "d" }));
    }, 100);
    MobileKey.target.addEventListener(
      "touchend",
      () => clearInterval(touchInterval),
      { once: true }
    );
  }
  if (key === "a" || key === "d" || key === "w" || key === "s") {
    description.textContent = "";
  }
  if (key === "a") {
    letter.textContent = "A";
    box.textContent = "◉ ‿ ◉";
    box.style.backgroundColor = "lightcoral";
    box.style.borderRadius = "25%";
  } else if (key === "d") {
    letter.textContent = "D";
    box.textContent = "•̀ᴖ•́";
    box.style.backgroundColor = "lightgreen";
    box.style.borderRadius = "20%";
  } else if (key === "w") {
    box.textContent = "•ᴗ•";
    letter.textContent = "W";
    box.style.backgroundColor = "lightpink";
    box.style.borderRadius = "25%";
  } else if (key === "s") {
    box.textContent = "•᷄︵•᷅";
    letter.textContent = "S";
    box.style.backgroundColor = "lightseagreen";
    box.style.borderRadius = "30%";
  }
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
  let left = stepX;
  let top = stepY;
  left = Math.max(0, Math.min(left, body.offsetWidth - box.offsetWidth - 3));
  top = Math.max(0, Math.min(top, body.offsetHeight - box.offsetHeight - 3));
  box.style.left = left + "px";
  box.style.top = top + "px";
});
