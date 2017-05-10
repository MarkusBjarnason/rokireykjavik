var context = new AudioContext();
const gain = context.createGain();
function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = () => {
    context.decodeAudioData(request.response, (buffer) => {
      playSound(buffer);
    });
  }
  request.send();
}
function playSound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(gain);
  gain.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);
  source.loop = true;                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}

// function playSecondSound(buffer) {
//   var source = context.createBufferSource(); // creates a sound source
//   source.buffer = buffer;                    // tell the source which sound to play
//   source.connect(gainSecond);
//   gainSecond.connect(context.destination);       // connect the source to the context's destination (the speakers)
//   source.start(0);
//   source.loop = true;                           // play the source now
//                                              // note: on older systems, may have to use deprecated noteOn(time);
// }