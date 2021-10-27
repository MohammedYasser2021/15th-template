// slide show
let slidesImages = ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg" ];
let i = 0;

function slideShow(){
    document.slideshow.src = slidesImages[i];
    if(i < slidesImages.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("slideShow()",1500)
}
slideShow();

// sticky navbar onscroll

let header = document.getElementById("head");
let sticky = header.offsetTop;

window.onscroll = function(){
    scroll();
}

function scroll(){
    if(window.scrollY >= sticky){
        document.body.style.paddingTop = header.offsetHeight + "px";
        document.body.classList.add("sticky");
    }else{
        document.body.classList.remove("sticky")
        document.body.style.paddingTop = "0";
    }
}

/* slides */

var slideIndex = 1;
slides(slideIndex);

function plusSlides(n){
    slides(slideIndex += n)
}

function slides (n){
    var i;
    var categoryItems = document.getElementsByClassName("category-items");
    if(n > categoryItems.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = categoryItems.length;
    }
    for(i = 0; i < categoryItems.length; i++){
        categoryItems[i].style.display = "none";
       
    }
    categoryItems[slideIndex - 1].style.display = "flex";
}


