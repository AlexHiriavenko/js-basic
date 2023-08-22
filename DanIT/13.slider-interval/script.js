const imgs = document.querySelectorAll(".images-wrapper img");
let count = 0;

function visibility(images) {
  if (count === images.length) {
    count = 0;
  }
  for (let i = 0; i < images.length; i++) {
    if (count === images.length - 1) {
      images[i].style.visibility = "hidden";
      images[0].style.visibility = "visible";
    } else if (i === count) {
      images[i].style.visibility = "hidden";
      images[i + 1].style.visibility = "visible";
    }
  }
  count += 1;
}
let slider = setInterval(visibility, 3000, imgs);


const btnPause = document.getElementById("pause");
const btnContinue = document.getElementById("continue");

function pauseStartSlider(start, end) {
    end.addEventListener("click", () => {
        let prevActive = document.querySelector(".active");
        if (prevActive) {prevActive.classList.remove("active");}
        end.classList.add("active");
        end.setAttribute("disabled", "true");
        start.removeAttribute("disabled");
        clearInterval(slider)
    });
    start.addEventListener("click", () => {
        let prevActive = document.querySelector(".active");
        if (prevActive) {prevActive.classList.remove("active");}
        start.classList.add("active");
        start.setAttribute("disabled", "true");
        end.removeAttribute("disabled");
        slider = setInterval(visibility, 3000, imgs)
    });
}

pauseStartSlider(btnContinue, btnPause);