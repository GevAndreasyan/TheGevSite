let arm = document.querySelector(".arm");
let rus = document.querySelector(".rus");
let eng = document.querySelector(".eng");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");


let abme = document.querySelector(".Abme");
let ab = document.querySelector("#ab");
let mpl = document.querySelector(".Mpl");
let mi = document.querySelector(".Mi");
let inf1 = document.querySelector("#inf1");
let wid = document.querySelector(".wid");
let pin = document.querySelector("#pin")
let set = document.querySelector("#set");
let lang = document.querySelector(".lang"); 
let mus = document.querySelector(".mus");
let Mega = document.getElementById("MEGA")
let g1 = document.querySelector(".Games1");
let Mega2 = document.querySelector(".MEGA2");
let Mega3 = document.querySelector(".MEGA3");


arm.addEventListener(`click`, function () {
    a1.innerText = `իմ մասին`
    a2.innerText = `իմ ծրագրավորման լեզուները`
    a3.innerText = `իմ իմֆորմացիան` 
    a4.innerText = `ինչ եմ անում`
    a5.innerText = `կարգավորումներ`

    abme.innerText = `իմ մասին`
    ab.innerText = `Ես 12 տարեկան եմ: Ծնվել եմ Մկչյանում (Հայաստան): Ես սիրում եմ նկարել։ Ես լավ եմ խաղերում: Ես խաղում եմ Minecraft, Valorant, Roblox, Age of History 2 և այլ խաղեր:`
    mpl.innerText = `իմ ծրագրավորման լեզուները`
    mi.innerText = `իմ իմֆորմացիան`
    inf1.innerText = `Ես Գեւորգն եմ։ Ես 12 տարեկան եմ։ Ես սիրում եմ ծրագրավորում։ Իմ մայրիկի անունը Էվելինա է: Հորս անունը Գեղամ է`
    pin.innerText = `Ես նման փոքր կայքեր եմ անում 20000֏ և խաղեր 10000֏`
    wid.innerText = `ինչ եմ անում`
    set.innerText = `կարգավորումներ`
    lang.innerText = `լեզուներ`
    mus.innerText = `երաժշտություն`
    g1.innerText = `խաղեր`
})

rus.addEventListener(`click`, function () {
    a1.innerText = `обо мне`
    a2.innerText = `мои программные языки`
    a3.innerText = `моя информация`
    a4.innerText = `что я делаю`
    a5.innerText = `настройки`

    abme.innerText = `обо мне`
    ab.innerText = `Мне 12 лет. Я родился в Мкчяне (Армения). Я люблю рисовать. Я хорош в играх. Я играю в Minecraft, Valorant, Roblox, Age of History 2 и другие игры.`
    mpl.innerText = `мои программные языки`
    mi.innerText = `моя информация`
    inf1.innerText = `Я Геворг. Мне 12 лет. Я люблю программирование. Мою маму зовут Эвелина. Моего отца зовут Гегам`
    pin.innerText = `Делаю такие небольшие сайты за 20000֏ и игры за 10000֏`
    wid.innerText = `что я делаю`
    set.innerText = `настройки`
    lang.innerText = `языки`
    g1.innerText = `игры`
    mus.innerText = `музыка`
})

eng.addEventListener(`click`, function () {
    a1.innerText = `About me`
    a2.innerText = `My programm languages`
    a3.innerText = `My info`
    a4.innerText = `What I Do`
    a5.innerText = `Settings`

    abme.innerText = `About me`
    ab.innerText = `Im 12. I was born in Mkchyan (Armenia). I like drawing. Im good in Games. Im play Minecraft, Valorant, Roblox, Age of History 2 and other games.`
    mpl.innerText = `My programm languages`
    mi.innerText = `My info`
    inf1.innerText = `My name is Gevorg.Im 12 years old. I like programming. My mothers name is Evelina. Fathers name is Gegham`
    pin.innerText = `I do small sites like this for 20,000֏ and games for 10,000֏`
    wid.innerText = `What I Do`
    set.innerText = `Settings`
    lang.innerText = `Language`
    g1.innerText = `Games`
    mus.innerText = `Music`
})

// 


let butSnd = new Audio("clickSound.wav"); 

let buts1 = document.querySelector(".buts1");
let buts2 = document.querySelector(".buts2");
let img = document.querySelector(".img");


let arr = [`div21`,`div22`,`div23`];
let i = 0;

buts1.addEventListener(`click`, function () {

    butSnd.play()

    i++
    if (i > 2) {
        i = 0
    }

    if (i == 0) {
        img.classList.add(`${arr[i]}`)
        img.classList.remove(`div23`)
    }else if (i == 1) {
        img.classList.add(`${arr[i]}`)
        img.classList.remove(`${arr[i-1]}`)
    }else if (i == 2) {
        img.classList.add(`${arr[i]}`)
        img.classList.remove(`${arr[i-1]}`)
    }

})

buts2.addEventListener(`click`, function () {

    butSnd.play()

    i--
    if (i < 0) { 
        i = 2
    }

    if (i == 0) {
        img.classList.add(`${arr[i]}`)
        img.classList.remove(`${arr[i+1]}`)
    }else if (i == 1) {
        img.classList.add(`${arr[i]}`)
        img.classList.remove(`${arr[i+1]}`)
    }else if (i == 2) {
        img.classList.add(`${arr[i]}`)
        img.classList.remove(`div21`)
    }
})

buts1.addEventListener(`mouseenter`, function () {
    buts1.classList.add("fm1")
    buts1.classList.remove("fm2")
})
buts1.addEventListener(`mouseout`, function () {
    buts1.classList.remove("fm1")
    buts1.classList.add("fm2")
})

buts2.addEventListener(`mouseenter`, function () {
    buts2.classList.add("fm1")
    buts2.classList.remove("fm2")
})
buts2.addEventListener(`mouseout`, function () {
    buts2.classList.remove("fm1")
    buts2.classList.add("fm2")
})

////////////////////////////////////////MUSIC

let m1b = document.querySelector(".music1");
let m2b = document.querySelector(".music2");
let m3b = document.querySelector(".music3");
let html = document.querySelector("html");

let on1 = 1;
let on2 = 0;
let on3 = 0;

let m1 = new Audio("1song.mp3");
let m2 = new Audio("2song.mp3");
let m3 = new Audio("3song.mp3");

    m1.play(); 




m1b.addEventListener(`click`,function () {
    if (on1 == 0) {
        m1.play();
        m2.pause();
        m3.pause();
        on1 = 1
    }else{
        m1.pause();
        on1 = 0
    }
    
})
m2b.addEventListener(`click`,function () {
    if (on2 == 0) {
        m2.play();
        m1.pause();
        m3.pause();
        on2 = 1
    }else{
        m2.pause();
        on2 = 0
    }
})
m3b.addEventListener(`click`,function () {
    if (on3 == 0) {
        m3.play();
        m1.pause();
        m2.pause();
        on3 = 1
    }else{
        m3.pause();
        on3 = 0
    }
})













//////////////////////////////////////GAME 1

let cdb = document.querySelector(".cdb");

let ball = document.querySelector(".ball");
let c = document.querySelector(".ball p");

let score = document.querySelector(".mega2big2");
let sc = 0;


let time = document.querySelector(".time");

let exit = document.querySelector(".exit");

cdb.addEventListener(`click`, function () {
    let t = 30; 
    let sc = 0;

    Mega.style.display = `none`
    Mega2.style.display = `flex`

    let arr = [`red`,`green`,`cyan`,`blue`,`yellow`,`orange`,`darkcyan`,`darkgreen`,`violet`,`blueviolet`]

    ball.style.margin = `${Math.floor(Math.random()*100)+300}px ${Math.floor(Math.random()*1000)+500}px`
    ball.style.backgroundColor = `${arr[Math.floor(Math.random()* arr.length)]}`

    ball.style.transition = `all 0.3s`
  

    score.innerText = `${sc} points`
    time.innerText = `${t}s`

    
let y = setInterval(() => {
    if (t != 0) {
        t--
        time.innerText = `${t}s`
    }else{
        Mega.style.display = `flex`;
        Mega2.style.display = `none`;
        clearInterval(y);
    }

    exit.addEventListener(`click`, function () {

    Mega2.style.display = `none`;
    Mega.style.display = `flex`;
    clearInterval(y);
})
}, 1000);
})

ball.addEventListener(`click`, function () {

    let arr = [`red`,`green`,`cyan`,`blue`,`yellow`,`orange`,`darkcyan`,`darkgreen`,`violet`,`blueviolet`]

    ball.style.margin = `${Math.floor(Math.random()*100)+300}px ${Math.floor(Math.random()*1000)+500}px`;
    ball.style.backgroundColor = `${arr[Math.floor(Math.random()* arr.length)]}`;
    ball.style.transition = `all 0.3s`;


    sc++
    score.innerText = `${sc} points`
})



///////////////////////////////////GAME 2

let fdb = document.querySelector(".fdb");

let go = document.querySelector(".go1");

let gdn = 0;

let exit2 = document.querySelector(".exit2");

exit2.addEventListener(`click` , function () {
    Mega.style.display = `flex`
    Mega3.style.display = `none`
})


let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let b10 = document.querySelector(".b10");

let md1 = document.querySelector(".mega3big1");
let md2 = document.querySelector(".mega3big2");
let bgs = document.querySelector(".m3big");

let back = document.querySelector(".closesm1");

let wrn = document.querySelector(".mega3big3");
let dntgs = document.querySelector(".dntgs");

let close2 = document.querySelector(".close2");
let close3 = document.querySelector(".close3");


let ywin = document.querySelector(".mega3big4");
let ywintx = document.querySelector(".yuwin");


close2.addEventListener(`click`, function () {
    md1.style.display = `flex`
    wrn.style.display = `none`
    bgs.style.display = `flex`
})

close3.addEventListener(`click`, function () {
    md1.style.display = `flex`
    ywin.style.display = `none`
    bgs.style.display = `flex`
})

fdb.addEventListener("click", function f1() {
    Mega.style.display = `none`
    Mega3.style.display = `flex`
})

go.addEventListener(`click`, function () {
    if (gdn != 0) {
        let ran = Math.ceil(Math.random()*10)

        if (gdn == ran) {
            ywin.style.display = `flex`
            md1.style.display = `none`
            bgs.style.display = `none`
            ywintx.innerText = `You guess the number, your number is ${ran}`
        }else{
            md1.style.display = `none`
            bgs.style.display = `none`
            wrn.style.display = `flex`
            dntgs.innerText = `You dont guess the number, your number is ${ran}`
        }
    }else{
        md1.style.display = `none`
        md2.style.display = `flex`
    }
})

back.addEventListener(`click` , function () {
    md2.style.display = `none`
    md1.style.display = `flex`
})





b1.addEventListener(`click`, function () {
    b1.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")

    gdn = 1;

} )

b2.addEventListener(`click`, function () {
    b2.classList.add("clicked")

    b1.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")

    gdn = 2;

} )
b3.addEventListener(`click`, function () {
    b3.classList.add("clicked")

    b2.classList.remove("clicked")
    b1.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")

    gdn = 3;

} )
b4.addEventListener(`click`, function () {
    b4.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b1.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")
    
    gdn = 4;

} )
b5.addEventListener(`click`, function () {
    b5.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b1.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")
    
    gdn = 5;

} )
b6.addEventListener(`click`, function () {
    b6.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b1.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")
    
    gdn = 6;

} )
b7.addEventListener(`click`, function () {
    b7.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b1.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")
    
    gdn = 7;

} )
b8.addEventListener(`click`, function () {
    b8.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b1.classList.remove("clicked")
    b9.classList.remove("clicked")
    b10.classList.remove("clicked")
    
    gdn = 8;

} )
b9.addEventListener(`click`, function () {
    b9.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b1.classList.remove("clicked")
    b10.classList.remove("clicked")
    
    gdn = 9;

} )
b10.addEventListener(`click`, function () {
    b10.classList.add("clicked")

    b2.classList.remove("clicked")
    b3.classList.remove("clicked")
    b4.classList.remove("clicked")
    b5.classList.remove("clicked")
    b6.classList.remove("clicked")
    b7.classList.remove("clicked")
    b8.classList.remove("clicked")
    b9.classList.remove("clicked")
    b1.classList.remove("clicked")
    
    gdn = 10;

} )



























































/////////////////////////////////////////////////////GAME 3

let coms = document.querySelector(".coms");
