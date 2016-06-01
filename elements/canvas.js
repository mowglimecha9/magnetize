var paper = require('paper');
var canvas = document.createElement('canvas');
var magnetizePaper = new paper.PaperScope();
var magnetizeTool = null;
var magnetizePath = null;
var magnetizePath =  null;
var magnetizeRaster = null;
var canvasWidth = 900;
var canvasHeight = 500;
var player = null;
var playerDimensions = null;
var arcNorth,arcSouth = null;
var arcNorthFrom,arcSouthFrom = null;
var arcNorthThrough,arcSouthThrough = null;
var arcNorthTo,arcSouthTo = null;
var polarityFieldWidth = 50;
var polarityPath = null;
var playerGroup = null;
//setup
  canvas.setAttribute("id","magnetizeCanvas");
  canvas.setAttribute("height", canvasHeight);
  canvas.setAttribute("width", canvasWidth);
  magnetizePaper.setup(canvas);
  magnetizeTool = new magnetizePaper.Tool();

//player
  playerDimensions = new magnetizePaper.Rectangle(new magnetizePaper.Point(1, canvasHeight/2), new magnetizePaper.Size(50, 50));
  player = new magnetizePaper.Path.Rectangle(playerDimensions);
  player.fillColor = '#3498db';

  arcNorthFrom = new magnetizePaper.Point(1,canvasHeight/2);
  arcNorthThrough = new magnetizePaper.Point(10,(canvasHeight/2) - 10);
  arcNorthTo = new magnetizePaper.Point(49,canvasHeight/2);
  arcNorth = new magnetizePaper.Path.Arc(arcNorthFrom,arcNorthThrough,arcNorthTo);
  arcNorth.fillColor = '#95a5a6';

  arcSouthFrom = new magnetizePaper.Point(1,(canvasHeight/2)+50);
  arcSouthThrough = new magnetizePaper.Point(10,(canvasHeight/2) + 60);
  arcSouthTo = new magnetizePaper.Point(49,(canvasHeight/2)+50);
  arcSouth = new magnetizePaper.Path.Arc(arcSouthFrom,arcSouthThrough,arcSouthTo);
  arcSouth.fillColor = '#95a5a6';

  playerGroup = new magnetizePaper.Group(player,arcNorth,arcSouth);

//create polarity Path

  for (var i = 0; i < canvasWidth/polarityFieldWidth ; i++) {
    polarityPath = new magnetizePaper.Path(new magnetizePaper.Point(i*polarityFieldWidth,0),new magnetizePaper.Point(i*polarityFieldWidth,canvasHeight));
    polarityPath.strokeColor = 'black';
  }

  for (var i = 0; i < canvasWidth/polarityFieldWidth ; i++) {
    var random =  Math.round(Math.random());
    if (random) {
      arcSouthFrom = new magnetizePaper.Point(i*polarityFieldWidth,50);
      arcSouthThrough = new magnetizePaper.Point(i*polarityFieldWidth, 60);
      arcSouthTo = new magnetizePaper.Point(49,50);
      arcSouth = new magnetizePaper.Path.Arc(arcSouthFrom,arcSouthThrough,arcSouthTo);
      arcSouth.fillColor = '#95a5a6';

      }
    else{
      arcNorthFrom = new magnetizePaper.Point(i*polarityFieldWidth,canvasHeight);
      arcNorthThrough = new magnetizePaper.Point(i*polarityFieldWidth,(canvasHeight) - 10);
      arcNorthTo = new magnetizePaper.Point(i*polarityFieldWidth,canvasHeight);
      arcNorth = new magnetizePaper.Path.Arc(arcNorthFrom,arcNorthThrough,arcNorthTo);
      arcNorth.fillColor = '#95a5a6';
    }
  }

//functions events
  magnetizeTool.onMouseDown = function (event) {
  }
module.exports = canvas;
