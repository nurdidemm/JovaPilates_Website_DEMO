$(document).ready(function(){
    $("#jovaO").hide().delay(1000).fadeIn(1500);
    $('#a').delay(2000).animate({opacity: 1}, 1000);
    $('#b').delay(2300).animate({opacity: 1}, 1000);
    $('#d').delay(2600).animate({opacity: 1}, 1000);
    $('#f').delay(2900).animate({opacity: 1}, 1000);
    $('#e').delay(3200).animate({opacity: 1}, 1000);
    $('#c').delay(3500).animate({opacity: 1}, 1000);
});

$("header > ul > li").click(function() {
    $('#a').animate({opacity: 0}, 500);
    $('#c').delay(200).animate({opacity: 0}, 500);
    $('#e').delay(400).animate({opacity: 0}, 500);
    $('#f').delay(600).animate({opacity: 0}, 500);
    $('#d').delay(800).animate({opacity: 0}, 500);
    $('#b').delay(1000).animate({opacity: 0}, 500);
    $(this).animate({opacity: 100}, 0);
    $("#jovaO").delay(900).css("position", "fixed").animate({top: '12px', left: '21px', width: '60px', height: '60px'}, 1500);
    $("#logo").delay(2200).fadeIn(1000);
    $("header").delay(2400).fadeOut();
});

$("#logo").hover(function() {
    if($("nav").css("display") == "none") {
        $("nav").fadeIn();
    }
});

$("nav").mouseleave(function() {
    $("nav").fadeOut();
});

$("main").mouseenter(function() {
    $("nav").fadeOut();
});

$("nav > ul > li").eq(0).click(function() {
    $("#ourTeam").fadeIn(1000);
});
$("header > ul > li").eq(0).click(function() {
    $("#ourTeam").delay(2410).fadeIn(2000);
});

$("nav > ul > li").eq(1).click(function() {
    $("#ourPhilo").fadeIn(1000);
});
$("header > ul > li").eq(1).click(function() {
    $("#ourPhilo").delay(2410).fadeIn(2000);
});

$("nav > ul > li").eq(2).click(function() {
    $("#ourStudio").fadeIn(1000);
});
$("header > ul > li").eq(2).click(function() {
    $("#ourStudio").delay(2410).fadeIn(2000);
});

$("nav > ul > li").eq(3).click(function() {
    $("#socialMedia").fadeIn(1000);
});
$("header > ul > li").eq(3).click(function() {
    $("#socialMedia").delay(2410).fadeIn(2000);
});

$("nav > ul > li").eq(4).click(function() {
    $("#bookNow").fadeIn(1000);
});
$("header > ul > li").eq(4).click(function() {
    $("#bookNow").delay(2410).fadeIn(2000);
});

$("nav > ul > li").eq(5).click(function() {
    $("#contactUs").fadeIn(1000);
});
$("header > ul > li").eq(5).click(function() {
    $("#contactUs").delay(2410).fadeIn(2000);
});





