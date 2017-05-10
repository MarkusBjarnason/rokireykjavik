

// KÓÐI FYRIR HLJÓÐ Á VINDTAKKA - náðum ekki að láta hann virka.
var context = new AudioContext();
const windGain = context.createGain();
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
  source.connect(windGain);
  windGain.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);
  source.loop = true;                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}



//HLJÓÐ MEÐ RIGNINU SEM VIRKAR :)

var context = new AudioContext();
const rainGain = context.createGain();
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
  source.connect(rainGain);
  rainGain.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);
  source.loop = true;                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}



