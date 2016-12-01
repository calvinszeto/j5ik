var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var leds = new five.Leds(["b0", "b1", "b2", "b3", "b4", "b5"]);
  var index = 0;
  var step = 1;
  
  board.loop(100, () => {
    leds.off();
    leds[index].on();
    leds[leds.length - index - 1].on();
    index += step;
    if (index === 0 || index === leds.length - 1) {
        step *= -1;
    }
  });
})



