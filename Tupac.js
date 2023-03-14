const page = document.querySelector('.page');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 20;
  const y = (window.innerHeight / 2 - e.pageY) / 20;

  page.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
