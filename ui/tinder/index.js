document.getElementById("nope").addEventListener("click", () => {
  swipe("nope");
});
document.getElementById("like").addEventListener("click", () => {
  swipe("like");
});

const swipe = (type) => {
  const topItem = list.children[list.children.length - 1];
  topItem.classList.add(`--${type}`);
  window.setTimeout(() => {
    list.removeChild(topItem);
    addClasses();
  }, 1000);
};
const addClasses = () => {
  const topItem = list.children[list.children.length - 1];
  const secondItem = list.children[list.children.length - 2];
  topItem.classList.add("--top");
  secondItem.classList.add("--second");
};

addClasses();
