// Main JS 

/**
 * Toogle section AR Inside button
 */
 $('#toggle').click(function (event) {
    event.stopPropagation();
    $(this).toggleClass('on');
    $('#menu').slideToggle().addClass('open');
});
$('#menu').removeClass('open');

$(document).on("click", function () {
    $("#menu").slideUp();
});

/**
 * Determine the mobile operating system
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        const modelViewer = document.getElementById("imgSize");
        modelViewer.animationName = "pos0_s100"  
        // /** IOS Devices*/
        var indexIos = 0;
        var images = [
            './img/slide1.usdz',
            './img/slide1.usdz',
        ];
        var previousIndex = function (indexIos, length) {
            if (indexIos <= 0) {
                return length - 1; // cycle backwards to the last image
            } else {
                return indexIos - 1;
            }
        }
        var nextindexIos = function (indexIos, length) {
            return ((indexAndroid + 1) % length)
        };
        $('.buttonAction').click(function () {
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
var nextindexAndroid = function (indexAndroid, length) {
    return ((indexAndroid + 1) % length)
};
$('.buttonAction').click(function () {
    indexAndroid = nextindexAndroid(indexAndroid, images.length);
    $('#imageswap').attr('src', images[indexAndroid]);
});
/** initialize the image on load to the first one */
$('#imageswap').attr('src', images[indexAndroid])
// Model change onclick button
var images = [
    './img/Thule_Box_1_1.glb',
    './img/Thule_Box_1_2.glb',
];
// Next  Animation button
function nextAnimation() {
    // modelViewer.animationName = "Step4"
    images.src = "./img/Thule_Box_1_2.glb";
}

// Next  Previous Animation Steps 
const modelViewer = document.getElementById("lazy-load");
// Animation List 
var animationList =
["pos0_s10",
"pos0_s100",
"pos50_s100",
"pos60_s100",
"pos70_s100",
"pos80_s100",
"pos90_s100",
"pos100_s100",
    ]
var index = 0;
var item = animationList[index];
var previous = document.getElementById('previousAnimationn');
var next = document.getElementById('nextAnimation');
displayItem(item); // Animation List Displayed
// Click Next Animation Item 
next.addEventListener('click', function () {
    displayItem(modelViewer.animationName = animationList[++index]);
});
// Click previous Animation Item
previous.addEventListener('click', function () {
    displayItem(modelViewer.animationName = animationList[--index]);
});
// Disbled last Previous Item
function displayItem(item) {
    previous.disabled = index <= 0;
    next.disabled = index >= animationList.length - 1;
    console.log(index)
}



// Next  Animation all button
function nextAnimation0() {
    modelViewer.animationName = "pos110_s100"
    console.log(modelViewer.animationName)
}
function nextAnimation1() {
    modelViewer.animationName = "pos140"
    console.log(modelViewer.animationName)
}
function nextAnimation2() {
    modelViewer.animationName = "pos145"
    console.log(modelViewer.animationName)
}
function nextAnimation3() {
    modelViewer.animationName = "pos150"
    console.log(modelViewer.animationName)
}
function nextAnimation4() {
    modelViewer.animationName = "pos155"
    console.log(modelViewer.animationName)
}
function nextAnimation5() {
    modelViewer.animationName = "pos160"
    console.log(modelViewer.animationName)
}
function nextAnimationScene() {
    modelViewer.animationName = "pos150"
}
function nextAnimationScene3() {
    modelViewer.animationName = "pos155"
}

// Animation based on vehicle
const modelViewerImage = document.querySelector("model-viewer#imgSize");

var animationListValues = "pos0";

// Sedan car Animation
function SedanAnimation() {
    animationListValues = "pos45"
}

function vanAnimation() {
    animationListValues  = "pos50"
}

function truckAnimation() {
    animationListValues = "pos60"
}

function suvAnimation() {
    animationListValues = "pos65"
}

function othersAnimation() {
    animationListValues = "pos70"
}

function withoutcarAnimation() {
    animationListValues = "pos0"
}
// Proceed Button detect IOs
$("#ar-button").click(function (e) {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
       windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

    if (iosPlatforms.indexOf(platform) !== -1) {

        document.querySelector("model-viewer#imgSize").addEventListener('ar-status', (event) => {
            //not-presenting, session-started, object-placed, failed
        if(event.detail.status === 'not-presenting'){
            alert("object-placed" + animationListValues )
            modelViewerImage.animationName = animationListValues
            console.log(animationListValues)
        }
        if(event.detail.status === 'session-started'){
            alert("session-started" + animationListValues)
            modelViewerImage.animationName = animationListValues
            console.log(animationListValues)
        }
        if(event.detail.status === 'object-placed'){
            alert("object-placed" + animationListValues)
            modelViewerImage.animationName = animationListValues
            console.log(animationListValues)
        }
        });
      os = 'iOS';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    }
    return os;
  // alert(getOS());
});

// Lock Button animation 

function lockBtn() {
    modelViewerImage.animationName = animationListValues
    console.log(animationListValues)
}



// Change GLB
const modelChangeGlb = document.querySelector("model-viewer#imgSize");
function iniFiveGlb() {
    modelChangeGlb.src = "img/Thule Motion XT Alpine 629500-Low_v14-anime.glb";
    console.log(modelChangeGlb.src)
}

function alpineXL() {
    modelChangeGlb.src = "img/glb/Thule Motion XT Alpine 629500-Low_v17.glb";
    console.log(modelChangeGlb.src)
}
function alpineXXL() {
    modelChangeGlb.src = "img/Thule Motion XT Alpine 629500-Low_v16-anime.glb";
    console.log(modelChangeGlb.src)
}

function alpineM() {
    modelChangeGlb.src = "img/Vector Alpine 613500-HP.glb";
    console.log(modelChangeGlb.src)
}

function sportL() {
    modelChangeGlb.src = "img/Motion XT Alpine 629500-LP.glb";
}

function sportXL() {
    modelViewer.src = "img/glb/Motion XT XL 629800-LP.glb";
}
function sportXXL() {
    modelViewer.src = "./img/Vector Alpine 613500-HP.glb";
}

function alpineXXL() {
    modelChangeGlb.src = "./img/Motion XT Alpine 629500-LP.glb";
}

function onCarGlb() {
    modelViewer.src = "./img/Thule Motion XT XL 629800-Low-with stand.glb";
}
function onTableGlb() {
    modelViewer.src = "./img/Thule Motion XT XL 629800-Low-ground.glb";
}
// Scale fixed and lock & unlock 
function dyanmicChangeAttr() {
    var arScale = document.querySelector("#imgSize");
    if ($('#imgSize').attr('ar-scale') == 'fixed') {
        arScale.setAttribute("ar-scale", "auto");
        $("#dynamicChange").attr("value", "UnLock Scale")
        // do this
    } else {
        arScale.setAttribute("ar-scale", "fixed");
        $("#dynamicChange").attr("value", "Lock Scale")
        // do that
    }
    // console.log(arScale)
}
// Zoom  disable 
function disableCamera() {
    var camera = document.querySelector("#animationSclae");
    camera.setAttribute("disable-zoom", "auto");
    $("#enableZoom").addClass("btn-success")
    $("#disableZoom").removeClass("btn-success")
}

// Zoom  enable 
function enableCamera() {
    var cameratwo = document.querySelector("#animationSclae");
    cameratwo.removeAttribute("disable-zoom");
    $("#disableZoom").addClass("btn-success")
    $("#enableZoom").removeClass("btn-success")
}

//Defalut Fixed 
//this way you do not need to do a javascript query every time you access the value of the checkbox
var arScale = document.querySelector("#sceneViewer");
document.getElementById("checkbox1").addEventListener("change", function () {
    if ($('#sceneViewer').attr('ar-scale') == 'fixed') {
        arScale.setAttribute("ar-scale", "auto");
        // $("#dynamicChange").attr("value", "UnLock Scale")
    } else {
        arScale.setAttribute("ar-scale", "fixed");
        // $("#dynamicChange").attr("value", "Lock Scale")
    }
});
//transgro value change x,y,z
function inceressValue() {
    const modelViewerTransform = document.querySelector("model-viewer#transform");
    const x = document.querySelector('#x');
    const y = document.querySelector('#y');
    const z = document.querySelector('#z');
    var amount = 2;
    modelViewerTransform.scale.x = modelViewerTransform.scale.x * amount;
    modelViewerTransform.scale.y = modelViewerTransform.scale.y * amount;
    modelViewerTransform.scale.z = modelViewerTransform.scale.y * amount;
    console.log(modelViewerTransform.scale.x * amount)
    console.log(modelViewerTransform.scale.y * amount)
    console.log(modelViewerTransform.scale.z * amount)
}
// AR Scale LockButton
function onChangeScaleLock() {
    var arScale = document.querySelector("#sceneViewer");
    if (arScale == "ar-scale", "auto") {
        arScale.setAttribute("ar-scale", "fixed");
        $('#arButton1').addClass('btn-success')
        $('#arButton').removeClass('btn-success')
    }
}
// AR Scale Unlock Button
function onChangeScaleUnlock() {
    var arScale = document.querySelector("#sceneViewer");
    if (arScale == "ar-scale", "fixed") {
        arScale.setAttribute("ar-scale", "auto");
        $('#arButton').addClass('btn-success')
        $('#arButton1').removeClass('btn-success')
    }
}



$('#imgSize').removeAttribute('src');
const changeImg = document.querySgeelector("model-viewer#modelSrcImg").removeAttribute("src");
// AR Scale LockButton
function modelSrc() {
    if (changeImg == "src", "") {
        changeImg.setAttribute("ar-scale", "auto");
        $('#arButton').addClass('btn-success')
        $('#arButton1').removeClass('btn-success')
    }
}


// AR Status File loading inside camera
document.querySelector("#sceneViewer").addEventListener('ar-status', (event) => {
    if (event.detail.status === 'failed') {
        const error = document.querySelector("#error");
        error.classList.remove('hide');
        error.addEventListener('transitionend', (event) => {
            error.classList.add('hide');
        });
    }
});
// Mobile button show toggle menu
$('#show-toggle').click(function () {
    $('.hide-mobile').slideToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
});

