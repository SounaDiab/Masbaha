// تسبيحة الزهراء
let counter1 = document.querySelector(".counter-1");
let text1 = document.querySelector(".text-1");
let btn1 = document.querySelector(".button-1");
let reset1 = document.querySelector(".reset-1");
let count = 0;
let i = 1;

btn1.onclick = () => {
    if(count < 35 && i == 1){
        counter1.value = ++count;  
    }
    if(count >= 35){
        i++;
        count = 0;
    }
    if(count < 34 && i == 2){
        text1.innerHTML = "الحمداللّه";
        counter1.value = ++count;
    }
    if(count >= 34){
        i++;
        count = 0;
    }
    if(count < 34 && i == 3){
        text1.innerHTML = "سبحان اللّه";
        counter1.value = ++count;
    }
    if(count >= 34){
        i++;
        count = 0;
    }
    if(count < 33 && i == 4){
        text1.innerHTML = "يا زهراء";
        text1.style.fontSize = "14px";
        text1.style.left = "1px"
        counter1.value = "اللهم صل على محمد وآل محمد";
        counter1.value.style.fontSize = "14px"
    }
};
reset1.onclick = () =>{
    location.reload();
};

// مسبحة
let counter2 = document.querySelector(".counter-2");
let text2 = document.querySelector(".text-2");
let btn2 = document.querySelector(".button-2");
let reset2 = document.querySelector(".reset-2");

btn2.onclick = () => {
    counter2.value = ++count;
};

reset2.onclick = () =>{
    location.reload();
};

// الواجهة

let btn3 = document.querySelector(".btn1");
let text3 = document.querySelector(".txt");
let btn4 = document.querySelector(".btn2");
let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");

// المسبحة
btn3.onclick = () => {
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "block";
    text2.innerHTML = text3.value;
}

// تسبيحة الزهراء
btn4.onclick = () => {
    d1.style.display = "none";
    d2.style.display = "block";
    d3.style.display = "none";
}