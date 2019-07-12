var animateFns = {
  banner: function() {
    ScrollReveal().destroy();
    ScrollReveal().reveal(".description", {
      duration: 2000
    });
    ScrollReveal({
      distance: "100px",
      easing: "ease-out"
    });
    ScrollReveal().reveal(".logo", {
      origin: "right"
    });
    ScrollReveal().reveal(".people", {
      duration: 800,
      origin: "left"
    });
    ScrollReveal().reveal(".line", {
      delay: 600,
      duration: 2000,
      distance: "300px",
      origin: "left",
      easing: "ease"
    });
    ScrollReveal().reveal(".vertical-line.top", {
      distance: "400px",
      delay: 300,
      duration: 3000,
      origin: "bottom"
    });
    ScrollReveal().reveal(".vertical-line.bottom", {
      distance: "400px",
      duration: 1000,
      delay: 800,
      origin: "top"
    });
  }
};
animateFns.banner();
new fullpage("#fullpage", {
  //options here
  menu: "nav",
  css3: true,
  controlArrows: true,
  scrollHorizontally: true,
  onLeave: function(origin, destination, direction) {
    // index()
    animateFns[destination.anchor] && animateFns[destination.anchor]();
    console.log(origin, destination, direction);
  }
});
