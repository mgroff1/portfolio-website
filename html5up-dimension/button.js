var styles = getComputedStyle(document.documentElement);
var value = styles.getPropertyValue('--rot-h');
var v = parseFloat(value);
var joa;
var rev, fow;
$('#center-button').on('click', function (e) {
    // e.preventDefault();
    // let linkUrl = $(this).attr('href');
    // setTimeout(function(url) { window.location = url; }, 3000, linkUrl);
    var p = $('#picon');
    if (p.hasClass('picon-f')) {
        clearInterval(fow);
     
        rev = setInterval(reverse, 10);
    } else if (p.hasClass('picon-r')) {
        clearInterval(rev);

        fow = setInterval(forward, 10);
    }

});


$('li').on('click', function () {
    var p = $('#picon');
    if (p.hasClass('picon-f')) {
        clearInterval(fow);
     
        rev = setInterval(reverse, 10);
    } else if (p.hasClass('picon-r')) {
        clearInterval(rev);

        fow = setInterval(forward, 10);
    }
});

var scaleForward = 380;
var scaleReverse = scaleForward;

    // $("#center-button1").on('click', function (e) {
    //     // e.preventDefault();
    //     // let linkUrl = $(this).attr('href')
    //     // setTimeout(function(url) { window.location = url; }, 3000, linkUrl);
    //         var p = $('#picon');
    //         if (p.hasClass('picon-f')) {
    //             clearInterval(fow);
             
    //             rev = setInterval(reverse, 10);
    //         } else if (p.hasClass('picon-r')) {
    //             clearInterval(rev);
        
    //             fow = setInterval(forward, 10);
    //         }
 
    // });
 
    

function forward() {
    var sf = scaleForward;
  
    $('#picon').removeClass('picon-r');
    $('#picon').addClass('picon-f');
    $('#picon').css('transform', 'rotate(' + v * 2 + 'deg)');
    $('.pie').css('transform', 'rotate(' + -v + 'deg)');
    $('#picon').css('fontSize', sf + "%");
    scaleForward += .002;
    v -= 2;
    if (v < 45) {
        scaleForward = sf;
        v = 45;
     
        return scaleReverse = sf;
    };
};


function reverse() {
    var sr = scaleReverse;
    $('#picon').removeClass('picon-f');
    $('#picon').addClass('picon-r');
    $('#picon').css('transform', 'rotate(' + v * 2 + 'deg)');
    $('.pie').css('transform', 'rotate(' + -v + 'deg)');
    $('#picon').css('fontSize', sr + "%");
    v += 2;
    scaleReverse -= .002;
    if (v > 450) {
        scaleReverse = sr;
        v = 450;
        return scaleForward = sr;
    };
};


 
function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementById("circle");
  
    var deg = 170 / txt.length,
      origin = -90;
  
    txt.forEach((ea) => {
      ea = `<h1 style='height:${radius*1}px; position:absolute;transform:rotate(${origin/2}deg);transform-origin:0 250%'>${ea}</h1>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText(" M ic k e y    "+" "+"    G r o f f ", 120, 0)
