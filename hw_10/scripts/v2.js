function lighterFactory(rootElemetn) {
  const randomColorCircles = document.querySelectorAll(".random-circle");

  function random_rgba() {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }

  for (let i = 0; i < randomColorCircles.length; i++) {
    const color = randomColorCircles[i];
    color.addEventListener("click", function () {
      color.style.background = random_rgba();
    });
  }
}

export { lighterFactory };
