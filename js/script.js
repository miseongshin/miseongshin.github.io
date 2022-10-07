
if(document.domain =="1028web.com"){
    if (navigator.language != "ko-KR"){
        location.href="/en/index.html";
    } else {
        location.href="/index.html";
    }
}



const c = document.getElementById("c");
const ctx = c.getContext("2d");

const GOLD="gold";
const SILVER="silver";
const SUN="☀";
const QUESTION_MARK="?";

c.height = window.innerHeight;
c.width = window.innerWidth;

let contents = QUESTION_MARK;
let color = SILVER;
contents = contents.split("");

const font_size = 30;
const columns = c.width/font_size;
let drops = [];
for(let x = 0; x < columns; x++)
    drops[x] = 1;

function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = color;
    ctx.font = font_size + "px Jeju Gothic";
    for(let i = 0; i < drops.length; i++)
    {
        const text = contents[Math.floor(Math.random()*contents.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

let cnt = 0;
function changeContents(){
    if (color == GOLD && cnt < 3){
        color =SILVER;
        contents = QUESTION_MARK;
    } else {
        color = GOLD;
        contents=SUN;
    }
    cnt++;
}

setInterval(draw, 100);
setInterval(changeContents,10000);

addEventListener('resize',(event)=> {location.reload();})

