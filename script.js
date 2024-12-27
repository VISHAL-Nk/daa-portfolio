let isScrolledDown = false;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 50 && !isScrolledDown) { // Show footer on scroll down
    isScrolledDown = true;
    document.querySelector('footer').style.bottom = '0'; 
  } else if (scrollTop <= 50 && isScrolledDown) { // Hide footer on scroll up
    isScrolledDown = false;
    document.querySelector('footer').style.bottom = '-50px';
  }
});
