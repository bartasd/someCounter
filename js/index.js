const num = prompt("Please input a count: ");
const len = (num + "").length;
const container = document.getElementById("cont");
container.style.width = `${73.67 * len + 15}px`;
const numArr = [...(num + "")];

for (let p = 0; p < len; p++) {
  const pTag = document.createElement("p");
  pTag.classList.add("pnum");
  pTag.innerText = numArr[p];
  container.insertAdjacentElement("beforeend", pTag);
}

const digits = container.getElementsByClassName("pnum");
console.log(digits);

let i = num;

const myInterval = setInterval(changeCounter, 50);

function changeCounter() {
  i--;
  const currWide = (i + "").length;
  container.style.width = `${73.67 * currWide + 15}px`;
  const current = [...(i + "").padStart(len, "0")];
  for (let k = len - 1; k >= 0; k--) {
    const curr = current[k];
    if (curr !== digits[k].innerText) {
      if (k != len - 1) {
        digits[k].classList.add("flip-animation");
        setTimeout(() => {
          digits[k].innerText = curr;
        }, 125);
        digits[k].addEventListener(
          "animationend",
          () => digits[k].classList.remove("flip-animation"),
          { once: true }
        );
      } else {
        digits[k].innerText = curr;
      }
    }
    if (curr == "0" && current.slice(0, k + 1).every((e) => e == "0")) {
      if (!digits[k].classList.contains("hidden")) {
        digits[k].classList.add("hidden");
      }
    }
  }
  if (i == 0) {
    clearInterval(myInterval);
    showMessage();
  }
}

function showMessage() {
  container.style.width = `360px`;
  const finish = document.createElement("p");
  finish.classList.add("done");
  finish.innerText = "Your time has run out!!!";
  container.insertAdjacentElement("beforeend", finish);
}
