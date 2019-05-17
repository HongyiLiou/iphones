var button_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click14.wav");

var screen_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");

var home_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");

var wiggle_audio=new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");

$(".i4").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".button").text("□");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i5s").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","360px");
  $(".button").text("□");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","400px");
  $(".button").text("");
  $(".phonename").text($(this).text());
  button_audio.play();
});

$(".i6s").click(function(){
  $(".phone").css("width","280px");
  $(".screen").css("height","480px");
  $(".button").text("");
  $(".phonename").text($(this).text());
  button_audio.play();
});

var page=0
$(".screen").click(function(){
  screen_audio.play();
  page+=1;
  if (page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%")
});

$(".button").click(function(){
  home_audio.play();
  page=0;
  $(".pages").css("left","-"+page*100+"%")
});

var deg=0
$(".turn").click(function(){
  deg+=360
  $(".phone").css("transform","rotate("+deg+"deg)")
});

var wiggletime=26;
$(".wiggle").click(function(){
  wiggle_audio.play();
  wiggletime=0;
});

setInterval(function(){
  if (wiggletime<=25){
    wiggletime+=1;
    if (wiggletime%2==0){
      $(".phone").css("left","-30px");
    }else{
      $(".phone").css("left","30px");
    }
    if (wiggletime==26){
      $(".phone").css("left","");
    }
  }
},60);