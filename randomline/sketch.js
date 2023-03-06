let points = []; //ランダムな点を格納する配列
let numPoints = 50; //生成する点の数
let numLines = 100; //生成する線の数

function setup() {
  createCanvas(600, 600); //キャンバスを作成
  background(24, 24, 56); //暗めの紺色を背景色に設定
  generatePoints(); //ランダムな点を生成
  drawLines(); //点を線で結んで図形を描画
}

//ランダムな点を生成する関数
function generatePoints() {
  for (let i = 0; i < numPoints; i++) {
    let pt = createVector(random(width), random(height)); //ランダムな座標を生成
    points.push(pt); //生成した点を配列に格納
  }
}

//点を線で結んで図形を描画する関数
function drawLines() {
  for (let i = 0; i < numLines; i++) {
    let pt1 = random(points); //ランダムに1つ目の点を選択
    let pt2 = random(points); //ランダムに2つ目の点を選択
    let col = color(random(150, 255), random(50, 150), random(50, 200)); //ランダムなRGB色を生成
    stroke(col); //生成した色で描画する線の色を設定
    line(pt1.x, pt1.y, pt2.x, pt2.y); //2つの点を結ぶ線を描画
  }
}