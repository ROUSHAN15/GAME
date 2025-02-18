let timer=60;
var scoreTotal=0;
var hitrn;
// bubbling
//jispe click kroge wo element par event raise ho ga, aur event listener na milne par event raise ho ga ,aur event lister na mil ne par event elemet ke parent par listener dhundw ga , waha bhi na milne par event parent ke parent  par listener dunde ga //


function incScore(){
    scoreTotal+=10;
    document.querySelector("#score").textContent=scoreTotal;
}

function onClick()
{
    document.querySelector("#pbtm").addEventListener(
        'click',function (detail)
        {
            var clickPoint=Number(detail.target.textContent); 
            console.log(clickPoint);
            
            if(clickPoint===hitrn)
                {
                    incScore();
                    gethit();
                    getBubble();
                }  
        })
};


function getBubble()
{
    var clutter=""
for (var i =1; i <=160; i++) {
    var rn=Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
};

function time(){
  var timeval=  setInterval(function (){
    if(timer>0)
    {
        timer--;
        document.querySelector("#time").textContent=timer
    }
    else 
    {   document.querySelector("#pbtm").innerHTML='<div style=" font-size: 50px;color: rgb(43, 105, 43); ">TIME OUT</div>'
        clearInterval(timeval);
    }
},1000)
};

function gethit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn
};
onClick();
gethit();
getBubble();
time();
