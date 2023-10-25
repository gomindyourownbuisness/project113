function preload() 
{
img = loadImage("R.jpeg")
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110 , 250);
   
}

function draw()
{
    fill("red")
    stroke("red")
    circle(50 , 50 , 60)
    circle(580, 50 , 60)
    circle(50 , 420, 60)
    circle(580 , 420, 60)

    fill("green")
    stroke("green")
    rect(80,40,470,20)
    rect(80,410,470,20)
    rect(40,80,20,310)
    rect(580,80,20,310)

    image( img , 240 , 180 , 150 , 150)
}


