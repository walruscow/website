requirejs.config({
  baseUrl: '/scripts/tetvas',
  paths: { 'require': '..' }
});

requirejs(['tetvas'], function(Tetvas) {
  new Tetvas();
});
