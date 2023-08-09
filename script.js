var originalImage = null;
var grayImage = null;
var redImage = null;
var blueImage = null;
var greenImage = null;
var rainbowImage = null;
var blurImage = null;
var confettiImage = null;
var watermarkImage = null;
var canvas = document.getElementById("theCanvas");

function loadImage() {
  var file = document.getElementById("fileInput");
  originalImage = new SimpleImage(file);
    grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  blueImage = new SimpleImage(file);
  greenImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);
  blurImage = new SimpleImage(file);
  confettiImage = new SimpleImage(file);
  watermarkImage = new SimpleImage(file);
    originalImage.drawTo(canvas);
}

function doGray() {
  if (imageIsLoaded(grayImage)) {
    filterGray();
    grayImage.drawTo(canvas);
  }
}

function filterGray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doRed() {
  if (imageIsLoaded(redImage)) {
    filterRed();
    redImage.drawTo(canvas);
  }
}

function filterRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function doBlue() {
  if (imageIsLoaded(blueImage)) {
filterBlue();
blueImage.drawTo(canvas);
  }
}
  
function filterBlue() { 
 for (var pixel of blueImage.values()) {
  var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2* avg);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }
  }
}

function doGreen() {
  if (imageIsLoaded(greenImage)) {
    filterGreen();
    greenImage.drawTo(canvas);
  }
}

function filterGreen() { 
 for (var pixel of greenImage.values()) {
  var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(2* avg);
      pixel.setBlue(0);
    } else {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function doRainbow() {
  if (imageIsLoaded(rainbowImage)) {
    filterRainbow();
    rainbowImage.drawTo(canvas);
  }
}

function getAvg(red, green, blue) {
  return (red + green + blue) / 3;
}

function filterRainbow() { 
 for (var pixel of rainbowImage.values()) {
  var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      var x = pixel.getX();
      var y = pixel.getY();
      var red = pixel.getRed();
      var green = pixel.getGreen();
      var blue = pixel.getBlue();
      var avg = getAvg(red, green, blue);
      var newPixel = rainbowImage.getPixel(x, y);
      var stripe = originalImage.getHeight() / 7;
      if (y < stripe) {
        if (avg < 128) {
          newPixel.setRed(2 * avg);
          newPixel.setGreen(0);
          newPixel.setBlue(0);
        } else {
          newPixel.setRed(255);
          newPixel.setGreen(2 * avg - 255);
          newPixel.setBlue(2 * avg - 255);
        }
     } else if (y < stripe * 2) {
         if (avg < 128) {
          newPixel.setRed(2 * avg);
          newPixel.setGreen(0.8 * avg);
          newPixel.setBlue(0);
        } else {
          newPixel.setRed(255);
          newPixel.setGreen(1.2 * avg - 51);
          newPixel.setBlue(2 * avg - 255);
        }
     } else if (y < stripe * 3) {
       if (avg < 128) {
          newPixel.setRed(2 * avg);
          newPixel.setGreen(2 * avg);
          newPixel.setBlue(0);
        } else {
          newPixel.setRed(255);
          newPixel.setGreen(255);
          newPixel.setBlue(2 * avg - 255);
        }
     } else if (y < stripe * 4) {
         if (avg < 128) {
          newPixel.setRed(0);
          newPixel.setGreen(2 * avg);
          newPixel.setBlue(0);
        } else {
          newPixel.setRed(2 * avg - 255);
          newPixel.setGreen(255);
          newPixel.setBlue(2 * avg - 255);
        }
     } else if (y < stripe * 5) {
        if (avg < 128) {
          newPixel.setRed(0);
          newPixel.setGreen(0);
          newPixel.setBlue(2 * avg);
        } else {
          newPixel.setRed(2 * avg - 255);
          newPixel.setGreen(2 * avg - 255);
          newPixel.setBlue(255);
        }
     } else if (y < stripe * 6) {
        if (avg < 128) {
          newPixel.setRed(0.8 * avg);
          newPixel.setGreen(0);
          newPixel.setBlue(2 * avg);
        } else {
          newPixel.setRed(1.2 * avg - 51);
          newPixel.setGreen(2 * avg - 255);
          newPixel.setBlue(255);
        }
     } else {
        if (avg < 128) {
          newPixel.setRed(1.6 * avg);
          newPixel.setGreen(0);
          newPixel.setBlue(1.6 * avg);
        } else {
          newPixel.setRed(0.4 * avg + 153);
          newPixel.setGreen(2 * avg - 255);
          newPixel.setBlue(0.4 * avg + 153);
        }       
     }
  }
}

function reset() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    blueImage = new SimpleImage(originalImage);
    greenImage = new SimpleImage(originalImage);
    rainbowImage = new SimpleImage(originalImage);
  }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}

function saveImage() {
  // Check if the canvas element is supported by the browser
  if (!HTMLCanvasElement.prototype.toBlob) {
    alert("Your browser does not support the required functionality.");
    return;
  }

  // Get the canvas element and create a blob from the image data
  var canvas = document.getElementById("theCanvas");
  canvas.toBlob(function (blob) {
    // Create a temporary link element to trigger the download
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "filtered_image.png";
    link.click();

    // Clean up the temporary link object
    URL.revokeObjectURL(link.href);
  }, "image/png");
}
function addWatermark() {
  if (imageIsLoaded(watermarkImage)) {
    filterRainbow();
    var ctx = canvas.getContext("2d");

    // Create a gradient fill for the "W"
    var gradient = ctx.createLinearGradient(canvas.width - 100, 0, canvas.width, 100);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "white");

    // Set the font style
    ctx.font = "bold 120px Kalam";

    // Apply the gradient fill to the "W" text
    ctx.fillStyle = gradient;
    ctx.fillText("W", canvas.width - 100, 80);
  }
}

function addConfetti() {
  if (imageIsLoaded(confettiImage)) {
    filterRainbow();
    var ctx = canvas.getContext("2d");

    // Draw confetti overlay
    for (var i = 0; i < canvas.width; i += 10) {
      for (var j = 0; j < canvas.height; j += 10) {
        var color = getRandomColor();
        ctx.fillStyle = color;
        ctx.fillRect(i, j, 5, 5);
      }
    }
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function blurFilter(){
  var newImg = new SimpleImage(blurImage.getWidth(), blurImage.getHeight());
  for (var pixel of blurImage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() < 0.5){
      newImg.setPixel(x, y, pixel);
    }
    else{
      var random = Math.floor(Math.random()*23 - 11);
      var newX = random + x;
      var newY = random + y;
      if (newX > 0 && newX <= blurImage.getWidth() - 1){
        if (newY > 0 && newY <= blurImage.getHeight() - 1){
          var newPixel = blurImage.getPixel(newX, newY);
          newImg.setPixel(x, y, newPixel);
        }
      }
    }
  }
    newImg.drawTo(canvas);
}

function makeBlur(){
 if (imageIsLoaded(blurImage)){
   blurFilter();
 } 
}

