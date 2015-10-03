
var imageHeight = 16;

var imageDirection = -1;

// time to wait before queueing the next screen update
var TIMEOUT_INTERVAL_MILLIS = 50;

// coordinate and position arrays
var thetaRadians = new Array();
var xPosition = new Array();
var yPosition = new Array();

// amplitude and step arrays
var xAmplitude = new Array();
var thetaStep = new Array();
var yStep = new Array();

var timeout = null;

var projectNumbers = [0,1,2,3,3,3,4,4,4,4,4,4,4,4,4,5,6,7,8,9,10,11];
var imageCount = projectNumbers.length + 1;

// window size variables, set by function detectWindowSize()
var windowWidth, windowHeight;

// var $element = $('[ng-controller="ArtController"]');
// var scope = angular.element($element).scope();


// angular.module('art-catalogue').factory('factoryName', function(){
// // create factory object
//     var data = {};
//     data.someProperty = 'Some Property';
//     data.someMethod = function(){
//         console.log(scope);
//     }
// // return the factory object
//     return data;
// })



// create DIVs and start the function
function initialiseFloatingImages() {
    detectWindowSize();

    for (var i = 0; i < imageCount; i++) {
        // set coordinate variables
        thetaRadians[i] = 0;
        // set position variables
        xPosition[i] = Math.random()*(windowWidth-50);
        yPosition[i] = Math.random()*windowHeight;
        // set amplitude variables
        xAmplitude[i] = Math.random()*20;
        // set step variables
        thetaStep[i] = 0.02 + Math.random()/10;
        // set step variables
        yStep[i] = 0.7 + Math.random();
        // write layers etc...

        drawBubble(i);

    }

    moveFloatingImages();
}

function drawBubble(index) {

    var projectIndex = projectNumbers[index];
    var bubbleIndex = imageCount - 1;

    if (index === bubbleIndex) {
      document.write('<div class="goToMenu" id="dot'+index+'" style="POSITION:absolute; Z-INDEX:'+index+'; VISIBILITY:visible; TOP:15px; LEFT:15px;"><img class="clickable" src="bubbles/'+index+'.png" alt="Floating image"/></div>');
    } else {
      document.write('<div class="bubble" id="dot'+index+'" ng-click="tab='+projectIndex+'" style="POSITION:absolute; Z-INDEX:'+index+'; VISIBILITY:visible; TOP:15px; LEFT:15px;"><a href="#/projects"><img class="clickable" src="bubbles/'+index+'.png" alt="Floating image"/></a></div>');
    }

    //$('.main').append('<div class="bubble" id="dot'+index+'" ng-click="tab='+projectIndex+'" style="POSITION:absolute; Z-INDEX:'+index+'; VISIBILITY:visible; TOP:15px; LEFT:15px;"><img class="clickable" src="bubbles/'+index+'.png" alt="Floating image"/></div>');

}


// main function
function moveFloatingImages() {

    for (var i = 0; i < imageCount; i++) {
        // recalculate y position
        yPosition[i] += imageDirection * yStep[i];
        // ensure not off top or bottom of visible screen
        if (yPosition[i] > windowHeight+getPageYOffset()) {
            // downwards-heading image is at the bottom...  reset it
            xPosition[i] = Math.random()*(windowWidth-xAmplitude[i]-30);
            yPosition[i] = -imageHeight;
            thetaStep[i] = 0.02 + Math.random()/10;
            yStep[i] = 0.7 + Math.random();
            detectWindowSize();
        } else if (yPosition[i] < getPageYOffset()-imageHeight) {
            // upwards-heading image is at the top...  reset it
            xPosition[i] = Math.random()*(windowWidth-xAmplitude[i]-30);
            yPosition[i] = getPageYOffset() + windowHeight;
            thetaStep[i] = 0.02 + Math.random()/10;
            yStep[i] = 0.7 + Math.random();
            detectWindowSize();
        }
        thetaRadians[i] += thetaStep[i];
        // move each image
        var newXPosition = xPosition[i] + xAmplitude[i]*Math.sin(thetaRadians[i]);

        document.getElementById("dot"+i).style.top = yPosition[i] + "px";
        document.getElementById("dot"+i).style.left = newXPosition + "px";

    }
    startAnimation();
}


function stopAnimation() {
    clearTimeout(timeout);
    timeout = null;
}

function startAnimation() {
    timeout = setTimeout("moveFloatingImages()", TIMEOUT_INTERVAL_MILLIS);
}



function getPageYOffset() {
     return document.body.scrollTop;
}

function detectWindowSize() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
}

var listenToClicks = function() {
    $('.bubble').click(function() {
        stopAnimation();
        console.log("anomation stopped");
    });
    $('.arrowRight').click(function() {
        startAnimation();
        console.log("anomation started");
    });
    $('.arrowLeft').click(function() {
        startAnimation();
        console.log("anomation started");
    });
    $('.goToMenu').click(function() {
        stopAnimation();
        console.log("anomation stopped");
    });

}

//$(initialiseFloatingImages);
//$(listenToClicks);
document.ready(initialiseFloatingImages());
