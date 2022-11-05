AOS.init();

const progress = () => {
  document.querySelectorAll('.progress').forEach(progress => {
    let speed = 1
    let x = 0

    // min of window position
    let min_y = 670
    // max of window position
    let max_y = 3000
    if (window.scrollY < min_y)
      progress.style.top = "0%"
    else if (window.scrollY >= min_y && window.scrollY <= max_y) {
      x = (window.scrollY - min_y) * speed / (max_y - min_y) * 100
      progress.style.top = `${x}%`
    }
    else
      progress.style.top = "100%"
  });
}

document.addEventListener("scroll", progress);