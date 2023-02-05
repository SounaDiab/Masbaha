let counter = document.querySelector(".counter");
let text = document.querySelector(".text");
let btn = document.querySelector(".button");
let reset = document.querySelector(".reset");
let count = 0;
let i = 1;

btn.onclick = () => {
    if(count < 35 && i == 1){
        counter.value = ++count;  
    }
    if(count >= 35){
        i++;
        count = 0;
    }
    if(count < 34 && i == 2){
        text.innerHTML = "الحمداللّه";
        counter.value = ++count;
    }
    if(count >= 34){
        i++;
        count = 0;
    }
    if(count < 34 && i == 3){
        text.innerHTML = "سبحان اللّه";
        counter.value = ++count;
    }
    if(count >= 34){
        i++;
        count = 0;
    }
    if(count < 33 && i == 4){
        text.innerHTML = "يا زهراء";
        text.style.fontSize = "14px";
        text.style.left = "1px"
        counter.value = "اللهم صل على محمد وآل محمد";
        counter.value.style.fontSize = "14px"
    }
};

reset.onclick = () =>{
    location.reload();
}




