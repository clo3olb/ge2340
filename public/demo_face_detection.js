let faceApi, video, detections;

console.log({ faceApi, video, detections });

function setup() {
  const canvas = createCanvas(630, 440);
  canvas.parent("demo_canvas");
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  faceApi = ml5.faceApi(video, modelReady);
}

function modelReady() {
  faceApi.detect(gotResults);
}

function gotResults(err, results) {
  detections = results;
  faceApi.detect(gotResults);
}

function draw() {
  image(video, 0, 0, width, height);
  if (detections) {
    if (detections.length > 0) {
      drawBox(detections);
      drawLandmarks(detections);
    }
  }
}

function drawBox(detections) {
  noFill();
  stroke(0, 255, 0);
  strokeWeight(2);
  for (let i = 0; i < detections.length; i++) {
    const alignedRect = detections[i].alignedRect;
    const { _x, _y, _width, _height } = alignedRect._box;
    rect(_x, _y, _width, _height);
  }
}

function drawLandmarks(detections) {
  for (let i = 0; i < detections.length; i++) {
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const nose = detections[i].parts.nose;
    const mouth = detections[i].parts.mouth;
    const jaw = detections[i].parts.jawOutline;

    drawPart(leftEye, true);
    drawPart(rightEye, true);
    drawPart(leftEyeBrow, false);
    drawPart(rightEyeBrow, false);
    drawPart(nose, false);
    drawPart(mouth, true);
    drawPart(jaw, false);
  }
}

function drawPart(feature, closed) {
  beginShape();
  for (let i = 0; i < feature.length; i++) {
    const x = feature[i]._x;
    const y = feature[i]._y;
    vertex(x, y);
  }
  if (closed) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}
