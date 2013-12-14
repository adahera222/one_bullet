function Mother(canvasWidth, canvasHeight) {
  var assets = ['img/mother1.png'];

  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;

  this.fps = 1000 / 1;
  this.lastTick = 0;

  this.x = canvasWidth - (canvasWidth / 2);
  this.y = canvasHeight - (2 * (canvasHeight / 5));

  this.imagesLoaded = [];

  this.frame = 0;
  this.frames = [];
  for (var i = 0; i < assets.length; i++) {
    this.frames.push(new Image());
    this.frames[i].src = assets[i];
    this.frames.onload = this.imgOnLoad.call(this);
  }
}

Mother.prototype.render = function(time) {
  if (time > (this.lastTick + this.fps)) {
    this.frame = (this.frame + 1) % this.frames.length;
    this.lastTick = time;
  }
};

Mother.prototype.draw = function(context) {
  if (this.imagesLoaded.length == this.frames.length) {
    context.drawImage(this.frames[this.frame], this.x, this.y);
  }
};

Mother.prototype.imgOnLoad = function() {
  this.imagesLoaded.push("SHIT_YEAH");
};