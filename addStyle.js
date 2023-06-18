const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  addClasses(btn);
});

function addClasses(button) {
  const btnNumberClass = "hover:bg-green-500 border-green-500";
  const btnClearClass = "hover:bg-orange-500 border-orange-500";
  const btnOpClass = "hover:bg-blue-500 border-blue-500";
  const btnEqClass = "hover:bg-red-500 border-red-500";
  const btnDecClass = "hover:bg-yellow-500 border-yellow-500";

  if (button.classList.value === "number") {
    btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "operator") {
    btnOpClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "clear") {
    btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "equal") {
    btnEqClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "decimal") {
    btnDecClass.split(" ").forEach((cls) => button.classList.add(cls));
  }

  const baseClass =
    "number flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
  baseClass.split(" ").forEach((cls) => button.classList.add(cls));
}