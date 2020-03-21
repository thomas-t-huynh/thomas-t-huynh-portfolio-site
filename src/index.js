document.querySelectorAll(".projects-div").forEach((element, i) => {
  console.log(i);
  const ulClassName = `project-description-${i}`;
  const ulTag = element.getElementsByTagName("ul")[0];
  ulTag.className = ulClassName;
  ulTag.style.opacity = 0;
  ulTag.style.display = "none";

  element.addEventListener("click", () => {
    console.log(i);

    if (ulTag.style.display === "none") {
      gsap.to(`.${ulTag.className}`, {
        duration: 0.5,
        display: "block",
        opacity: 1
      });
    } else {
      gsap.to(`.${ulTag.className}`, {
        duration: 0.25,
        display: "none",
        opacity: 0
      });
    }
  });
});
