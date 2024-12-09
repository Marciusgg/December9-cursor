const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px");
})

document.addEventListener("click", () => {
  cursor.classList.add("fall");

  setTimeout(() => {
    cursor.classList.remove("fall");
  }, 2000)
});

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    if (cursor.parentElement) {
      cursor.parentElement.removeChild(cursor);
    }
  });

  link.addEventListener("mouseleave", () => {
    if (!document.body.contains(cursor)) {
      body.appendChild(cursor);
    }
  });
});