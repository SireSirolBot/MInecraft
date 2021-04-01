var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    });
}

function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(140);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    
    if(e.shiftKey == true && keypressed == "80"){
       block_width = block_width + 10 
       block_height = block_height + 10

       document.getElementById("currentwidth").innerHTML = block_width;
       document.getElementById("currentheight").innerHTML = block_height; 
    } 

    if(e.shiftKey == true && keypressed == "77"){
        block_width = block_width - 10 
        block_height = block_height - 10
 
        document.getElementById("currentwidth").innerHTML = block_width;
        document.getElementById("currentheight").innerHTML = block_height; 
     } 

     if (keypressed == "38"){
         up()
         console.log("Up Pressed")
     }

     if (keypressed == "40"){
        down()
        console.log("Down Pressed")
    }

    if (keypressed == "37"){
        left()
        console.log("Left Pressed")
    }

    if (keypressed == "39"){
        right()
        console.log("Right Pressed")
    }

    if (keypressed == "87"){
        block_update("wall.jpg");
        console.log("W Pressed")
    }

    if (keypressed == "77"){
        block_update("ground.png");
        console.log("G Pressed")
    }

    if (keypressed == "76"){
        block_update("light_green.png");
        console.log("L Pressed")
    }

    if (keypressed == "84"){
        block_update("trunk.jpg");
        console.log("T Pressed")
    }

    if (keypressed == "82"){
        block_update("roof.jpg");
        console.log("R Pressed")
    }

    if (keypressed == "89"){
        block_update("yellow_wall.png");
        console.log("Y Pressed")
    }

    if (keypressed == "68"){
        block_update("dark_green.png");
        console.log("D Pressed")
    }

    if (keypressed == "85"){
        block_update("unique.png");
        console.log("U Pressed")
    }

    if (keypressed == "67"){
        block_update("cloud.jpg");
        console.log("C Pressed")
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        console.log("height of block image" + block_height)
        console.log("x and y cordinates of player = " + player_x + "," + player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_height;
        console.log("width of block image" - block_height)
        console.log("x and y cordinates of player = " + player_x + "," + player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function right(){
    if(player_x <= 900){
        player_x = player_x + block_width;
        console.log("height of block image" + block_width)
        console.log("x and y cordinates of player = " + player_x + "," + player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_width;
        console.log("width of block image" + block_width)
        console.log("x and y cordinates of player = " + player_x + "," + player_y)
        canvas.remove(player_object)
        player_update();
    }
}