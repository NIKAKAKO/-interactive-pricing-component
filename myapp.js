let ranger=document.querySelector("#range");
let valuemonthly=document.querySelector(".boldusd");
let pageviews=document.querySelector(".a100k");
let switcher=document.querySelector(".switcher");
let monthyear=document.querySelector("#monthyear");
let filled=document.querySelector(".bg")
let switchbg=document.querySelector(".switch");
let number=0;
let pages=0;
let yearly=12*75/100;

function rangerfunc () {
    console.log(ranger.value)
    if (!switcher.checked) {
        switchbg.style.background="hsl(224, 65%, 95%)";
        if (ranger.value==0) {
            number=8;
            pages=10
            filled.style.width="0px";
        }
        else if (ranger.value==1) {
            number=12;
            pages=50
            filled.style.width="122px";
        }
        else if (ranger.value==2) {
            number=16;
            pages=100;
            filled.style.width="225px";
        }
        else if (ranger.value==3) {
            number=24;
            pages=500;
            filled.style.width="347px";
        }
        else if (ranger.value==4) {
            number=36;
            pages=1;
            filled.style.width="450px";
        }
        monthyear.textContent="/month";
    }
    else {
        switchbg.style.background="#7AEADF";
        if (ranger.value==0) {
        number=8*yearly
        pages=10
        filled.style.width="0px";
        }
        else if (ranger.value==1) {
            number=12*yearly
            pages=50
            filled.style.width="122px";
        }
        else if (ranger.value==2) {
            number=16*yearly
            pages=100;
            filled.style.width="225px";
        }
        else if (ranger.value==3) {
            number=24*yearly
            pages=500;
            filled.style.width="347px";
        }
        else if (ranger.value==4) {
            number=36*yearly;
            pages=1;
            filled.style.width="450px";
        }
       monthyear.textContent="/year";
}
valuemonthly.textContent="$ "+number;
if ( pages==1) {
    pageviews.textContent=pages+"m pageviews";

} else {
pageviews.textContent=pages+"k pageviews";

}

}



ranger.addEventListener("input", rangerfunc);
switcher.addEventListener("input", rangerfunc);