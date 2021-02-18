
const size = 10

var time = 0

function field(x, y){
  
  return x**2 + y**2

}

function field2(x, y){
  
  return x**2 - y**2
  
}

function field3(x , y, t){
  const k = 0.05
  const w = 2*PI
  
  return sin( k * sqrt( x **2 + y**2 ) - w * t )
  
}

function drawField(field_to_draw, time){
  var fieldValue = 0
  
  for (var y = 0; y <= floor( height/size); y++){
    for (var x = 0; x <= floor(width/size); x++){
      fieldValue = field_to_draw( size* x - width/2 + size/2  , size*y - height/2 + size/2, time  )
      const gValue = map(fieldValue, -1, 1, 0, 255)
      push()
      stroke( gValue )
      fill( gValue )
      square(size*x,size*y,size)
      pop()
    }
  }

}

function setup() {
  createCanvas(600, 600);
  
  frameRate(60)
  
}

function draw() {
  background(220);
  
  stroke(0)
  
  fill(255)
  
  time = time + deltaTime / 1000
  
  drawField(field3, time)
  
}