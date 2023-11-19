const input = document.querySelector("input");
const afficher = document.querySelector(".affi");

input.addEventListener("input", function () {
  if (input.value.trim() === "") {
    afficher.innerHTML = "16px = 1rem";
    return false;
  }
  const X = input.value / 3;
  console.log(X);
  afficher.innerHTML = `
    <p> ${input.value}px = ${X}rem
    </p>
    `;
});
