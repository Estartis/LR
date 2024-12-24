document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("clickableDiv").addEventListener("click", () => {
    alert("Здравствуй, это мир компьютерных клубов!");
  });

  document
    .getElementById("gameClubImage")
    .addEventListener("click", function () {
      {
        this.style.transform === "scale(2)"
          ? (this.style.transform = "scale(1)")
          : (this.style.transform = "scale(2)");
      }
    });
});
