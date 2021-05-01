document.getElementById("nope").addEventListener("click", () => {
  swipe("nope");
});
document.getElementById("like").addEventListener("click", () => {
  swipe("like");
});

const swipe = (type) => {
  const list = document.getElementById("list");
  const child = list.children[list.children.length - 1];
  child.classList.add(`--${type}`);
  window.setTimeout(() => {
    list.removeChild(child);
  }, 1000);
};
// list.removeChild(child);
