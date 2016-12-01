var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var leds = new five.Leds(["b0", "b1", "b2", "b3", "b4", "b5"]);
  var index = 0;
  
  board.loop(100, () => {
    if (index === leds.length) {
      leds.off();
      index = 0;
    } else {
      leds[index].on();
      ++index;
    }
  });
})


