const play = document.getElementById('play');
const pause = document.getElementById('pause');
const card = document.getElementsByClassName('card');
const volSlider = document.getElementsByClassName('volumeSlider');


// howler code
var Rain = new Howl({
    src: ['sounds/rain.mp3'],
    loop:true,
    volume:0.5
  });
  var Thunder = new Howl({
    src: ['sounds/thunder.mp3'],
    loop:true,
    volume:0
  });

  var Wave = new Howl({
    src: ['sounds/waves.mp3'],
    loop:true,
    volume:0
  });


  var Wind = new Howl({
    src: ['sounds/wind.mp3'],
    loop:true,
    volume:0
  });


  var Birds = new Howl({
    src: ['sounds/birds.mp4'],
    loop:true,
    volume:0
});


  var Insects = new Howl({
      src: ['sounds/insects.mp3'],
      loop:true,
      volume:0
    });
    
    
    var Traffic = new Howl({
        src: ['sounds/traffic.mp3'],
        loop:true,
        volume:0
    });
    
    var Cafe = new Howl({
        src: ['sounds/cafe.mp4'],
        loop:true,
        volume:0
    });
    
    var Fire = new Howl({
        src: ['sounds/fire.mp3'],
        loop:true,
        volume:0
    });
    

    var Bowl = new Howl({
      src: ['sounds/bowl.mp4'],
      loop:true,
      volume:0
  });
  var Gama = new Howl({
    src: ['sounds/gama.mp3'],
    loop:true,
    volume:0
});
var OM = new Howl({
  src: ['sounds/om.mp3'],
  loop:true,
  volume:0
});
var Walk = new Howl({
  src: ['sounds/walking.mp3'],
  loop:true,
  volume:0
});
    
    
    
    
    
    
    //change all pause to play symbol 
    
        // pause.style.display = "none";
function playPause(){
    if(pause.style.display === "none"){
        pause.style.display="initial";
        // pause.style.animation ="rotation 8s infinite linear";
        play.style.display = "none";
        Rain.play();
        Thunder.play();
        Wind.play();
        Fire.play();
        Cafe.play();
        Wave.play();
        Traffic.play();
        Birds.play();
        Insects.play();
        Bowl.play();
        Gama.play();
        OM.play();
        Walk.play();

    }else{
        pause.style.display = "none";
        play.style.display ="initial";
        Rain.pause();
        Thunder.pause();
        Wind.pause();
        Fire.pause();
        Cafe.pause();
        Wave.pause();
        Traffic.pause();
        Birds.pause();
        Insects.pause();
        Bowl.pause();
        Gama.pause();
        OM.pause();
        Walk.pause();
    }
}
    

// volume options
var slider = document.getElementsByClassName("slider");

function RainVol(value) {
  Rain.volume(value/100);
  slider[0].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function ThunderVol(value) {
  Thunder.volume(value/100);
  slider[1].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function WavesVol(value) {
  Wave.volume(value/100);
  slider[2].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function WindVol(value) {
  Wind.volume(value/100);
  slider[3].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function BirdsVol(value) {
  Birds.volume(value/100);
  slider[4].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function InsectsVol(value) {
  Insects.volume(value/100);
  slider[5].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}


function FireVol(value) {
  Fire.volume(value/100);
  slider[6].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function TrafficVol(value) {
  Traffic.volume(value/100);
  slider[7].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}

function CafeVol(value) {
  Cafe.volume(value/100);
  slider[8].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}


function BowlVol(value) {
  Bowl.volume(value/100);
  slider[9].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}
function GamaVol(value) {
  Gama.volume(value/100);
  slider[10].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}
function OMVol(value) {
  OM.volume(value/100);
  slider[11].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}
function WalkVol(value) {
  Walk.volume(value/100);
    slider[12].style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
}










    // contact
// const nameOfSender = document.getElementById('feedback-body__email');
// const message = document.getElementById('feedback-body__message');
// const submit = document.getElementById('feedback-body__submit');

// submit.addEventListener('click', () => {
//     if(nameOfSender.value === null|| nameOfSender.value ==="" && message.value===""||message.value===null){
//         alert("Fill the requried* fields");
//         }else{
  //             console.log("submitted")
//           setTimeout(() => {
//             sendMail();
//             nameOfSender.value="";
//             message.value="";
//           }, 2000);
//       }
// });


// function sendMail(params){
  //     var tempParams = {
//       from_name : nameOfSender.value,
//       to_name : "Sukoon",
//       message : message.value,
//       from_email : "Not requried", 
//     };
//     emailjs.send('service_fe9y6ov','template_u0lj0om',tempParams).then(function(res){
//       alert("Feedback sent successfully!");
//     });
//   }


// for(let i=0; i < slider.length;i++){
//   slider[i].onfocus = function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100;
//     this.style.background = 'linear-gradient(to right, #388E3C 0%, #388E3C ' + value + '%, #C8E6C9 ' + value + '%, #C8E6C9 100%)';
   
//   }
// }

