anime({
  targets: '.cubik',
  scale: [{
      value: .1,
      easing: 'easeOutSine',
      duration: 500
    },
    {
      value: 1,
      easing: 'easeInOutQuad',
      duration: 1200
    }
  ],
  delay: anime.stagger(200, {
    grid: [15, 5],
    from: 'center'
  }),
  backgroundColor: '#FFF',
  direction: 'alternate',
  loop: true,
});


anime({
  targets: 'body',
  backgroundColor: '#FFF',
  direction: 'alternate',
  delay: 1100,
  duration: 1700,
  loop: true,
});