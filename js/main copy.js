
/**
 * Toogle section AR Inside button
 */

$('#toggle').click(function(event) {
    event.stopPropagation();
    $(this).toggleClass('on');
    $('#menu').slideToggle().addClass('open');
});
$('#menu').removeClass('open');

$(document).on("click", function() {
    $("#menu").slideUp();
});


/**
 * Determine the mobile operating system
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {

        // /** IOS Devices*/
        var indexIos = 0;
        var images = [
            './img/slide1.usdz',
            './img/slide1.usdz',
        ];
        var previousIndex = function(indexIos, length) {
            if (indexIos <= 0) {
                return length - 1; // cycle backwards to the last image
            } else {
                return indexIos - 1;
            }
        }
        var nextindexIos = function(indexIos, length) {
            return ((indexAndroid + 1) % length)
        };
        $('.buttonAction').click(function() {
            indexIos = nextindexIos(indexIos, images.length);
            $('#imageswap').attr('ios-src', images[indexIos]);
        });
        /** initialize the image on load to the first one */
        $('#imageswap').attr('ios-src', images[indexIos])

        return "iOS";
    }

    return "unknown";
}

/** Andriod Devices*/
var indexAndroid = 0;
var images = [
    './img/Thule_Box_1_1.glb',
    './img/Thule_Box_1_2.glb',
];

var nextindexAndroid = function(indexAndroid, length) {
    return ((indexAndroid + 1) % length)
};


$('.buttonAction').click(function() {
    indexAndroid = nextindexAndroid(indexAndroid, images.length);
    $('#imageswap').attr('src', images[indexAndroid]);
});
/** initialize the image on load to the first one */
$('#imageswap').attr('src', images[indexAndroid])



// Model change onclick button
const modelViewer = document.querySelector("model-viewer");
var images = [
    './img/Thule_Box_1_1.glb',
    './img/Thule_Box_1_2.glb',
];
function nextAnimation() {
    // modelViewer.animationName = "Step4"
    images.src = "./img/Thule_Box_1_2.glb";
  
}

function nextAnimation1() {
    modelViewer.animationName = "Step5"
}
function nextAnimation2() {
    modelViewer.animationName = "Step11"
}

function nextAnimationScene() {
    modelViewer.animationName = "Step2"
}

function nextAnimationScene3() {
    modelViewer.animationName = "Step3"
}

function onCarGlb() {
    modelViewer.src = "./img/Box_1_1_Offset.glb";
}

function onTableGlb() {
    modelViewer.src = "./img/Thule Motion XT XL 629800-Low-ground.glb";
}

function dyanmicChangeAttr() {
    var arScale = document.querySelector("#sceneViewer");
    if ( $('#sceneViewer').attr('ar-scale') == 'fixed' ) {
        arScale.setAttribute("ar-scale", "auto");
        $("#dynamicChange").attr("value", "UnLock Scale")
        // do this
    } else {
        arScale.setAttribute("ar-scale", "fixed");
        $("#dynamicChange").attr("value", "Lock Scale")
        // do that
    }

}

var value = "fixed";
//you can put the checkbox in a variable, 
//this way you do not need to do a javascript query every time you access the value of the checkbox
  var arScale = document.querySelector("#sceneViewer");
  arScale.checked = value;
  document.getElementById("checkbox1").addEventListener("change", function(element){
    if ( $('#sceneViewer').attr('ar-scale') == 'fixed' ) {
        arScale.setAttribute("ar-scale", "auto");
        $("#dynamicChange").attr("value", "UnLock Scale")
        // do this
    } else {
        arScale.setAttribute("ar-scale", "fixed");
        $("#dynamicChange").attr("value", "Lock Scale")
        // do that
    }
      console.log(arScale)
  });



// AR Scale AttributeChange
function onChangeScaleLock() {
    
    // $('#sceneViewer').attr("ar-scale", $('#sceneViewer').attr('ar-scale') == 'fixed' ? 'auto' : 'fixed');

    // $("input").attr("value", "New text");

    // // $('#sceneViewer').attr("#arButton", $('#sceneViewer').attr('#arButton') == 'fixed' ? 'auto' : 'fixed');
    // $("#arButton").props('value'), $("#arButton").props('value') == 'fixed' ? 'auto' : 'fixed';
    // // $('#sceneViewer').attr("#arButton", $('#sceneViewer').attr('#arButton') == 'fixed' ? 'auto' : 'fixed');
    
    // // var ar = $(identifier).ar(scale);
    // // if (ar== "fixed") {
    // //     element.setAttribute("ar-scale", "auto");
    // // }
    // // else{
    // //     element.setAttribute("ar-scale", "fixed");
    // // }
    // // console.log(arScale)

    // var arScale = document.querySelector("#sceneViewer");

    // if($("#sceneViewer").arScale == "ar-scale", "fixed"){
    //     console.log("true");
    // } else  {
    //     console.log("false");
    // };
    var arScale = document.querySelector("#sceneViewer");
    if(arScale == "ar-scale", "auto"){
        arScale.setAttribute("ar-scale", "fixed");
        $('#arButton1').addClass('btn-success')
        $('#arButton').removeClass('btn-success')
    }
  
}

// AR Scale AttributeChange
function onChangeScaleUnlock() {
    var arScale = document.querySelector("#sceneViewer");
    if(arScale == "ar-scale", "fixed"){
        arScale.setAttribute("ar-scale", "auto");
        $('#arButton').addClass('btn-success')
        $('#arButton1').removeClass('btn-success')
    }
  
}



// AR Status File loading inside camera
document.querySelector("#sceneViewer").addEventListener('ar-status', (event) => {
    if(event.detail.status === 'failed'){
      const error = document.querySelector("#error");
      error.classList.remove('hide');
      error.addEventListener('transitionend',(event) => {
        error.classList.add('hide');
      });
    }
  });



//Toggle fullscreen
$(".chat-bot-icon").click(function (e) {
    $(this).children('img').toggleClass('hide');
    $(this).children('svg').toggleClass('animate');
    $('.chat-screen').toggleClass('show-chat');
});
$('.chat-mail button').click(function () {
    $('.chat-mail').addClass('hide');
    $('.chat-body').removeClass('hide');
    $('.chat-input').removeClass('hide');
    $('.chat-header-option').removeClass('hide');
});
$('.end-chat').click(function () {
    $('.chat-body').addClass('hide');
    $('.chat-input').addClass('hide');
    $('.chat-session-end').removeClass('hide');
    $('.chat-header-option').addClass('hide');
});


// Mobile button show toggle menu
$('#show-toggle').click(function() {
    $('.hide-mobile').slideToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });

