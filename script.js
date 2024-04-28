
const img = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelectorAll(".ctr-prev");
const next = document.querySelectorAll(".ctr-next");

var n=0;

function change_slide(){

for(var i=0;i<img.length;i++){
img[i].style.display="none";

}
img[n].style.display="block";
}

change_slide();
prev.addEventListener("click", function(e){
if(n>0){
    n--;

}else{
n=img.length-1;
}
change_slide();

}
)

next.addEventListener("click",function(e){
    if(n<img.length-1){
        n++;
    
    }else
    n=0
    change_slide();
    })

/*var img = document.getElementById('img');

var header-slider=['nature_scene_2.jpg','nature_scene_3.jpg', 'nature_scene_4.jpg','nature_scene_5.jpg', 'nature_scene_6.jpg', 'nature_scene_7.jpg', 'nature_scene_8.jpg','nature_scene_1.jpg'];

var Start=0;

function slider(){
    if(Start<header-slider.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+header-slider[Start-1]+">";
   
}
setInterval(slider,2000);
