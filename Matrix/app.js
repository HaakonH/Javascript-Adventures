var c = document.getElementById("canv");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//kanji characters - taken from the unicode charset
var kanji = "マグロ寿司はおいしくて栄養満点です寿司はナンバ";
kanji = kanji.split("");

var font_size = 19;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#02f286"; //green text
    ctx.font = "italic small-caps bold 19px Lato";

    console.log('ctx font is  ' + ctx.font);
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random kanji character to print
        var text = kanji[Math.floor(Math.random()*kanji.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 65);