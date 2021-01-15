function updateWindowHeight() {
  document.documentElement.style.setProperty(
    "--windowHeight",
    window.innerHeight + "px"
  );
}
window.onload = () => {
  updateWindowHeight();
};
window.onresize = updateWindowHeight;
