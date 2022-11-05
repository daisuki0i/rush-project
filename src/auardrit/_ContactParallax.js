const parallax = (e) => {
  document.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed')
    const x = ((e.pageX - window.innerWidth / 2) * speed) / 100
    const y = ((e.pageY - window.innerHeight / 2 - 3000) * speed) / 100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    // console.log(e.pageX, e.pageY, window.innerHeight)
  });
}
document.addEventListener("mousemove", parallax);