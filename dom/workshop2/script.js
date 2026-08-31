function updateCount(btn) {
  const countEl = document.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];

  if (currCount === 10) return;

  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");
console.log(btns);
btns.forEach((el) => el.addEventListener("click", (el) => updateCount(el)));
