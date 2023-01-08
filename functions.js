let send = () => {
    for (let i = 0; i < inputAll.length; i++) {
        if (inputAll[i].value == "") {
            inputAll[i].classList.add("active"); // add class active for the red input border
            addtextAlert[i].innerHTML = "this field is empty"
            setTimeout(() => {
                inputAll[i].classList.remove("active"); // remove after 1s the red input border
            }, 2000);
        }
    }
    

    if (Email2.value != Email1.value) { // if mails are differents
        for (let i = 0; i < 2; i++) { //print under two first fields the next text
            addtextAlert[i].innerHTML = "Please check your mail";
        }
    };
    if (Email2.value == Email1.value && Email2.value != "" && Email1.value != "") { //if mails are same
        for (let i = 0; i < 2; i++) {
            addtextAlert[i].innerHTML = ""; // don't print anything
        }
    };

    if (Password1.value != Password2.value) { // if passwords are differents
        for (let i = 2; i < 4; i++) {
            addtextAlert[i].innerHTML = "Please check your Passeword";
        }
    };
    if (Password1.value == Password2.value && Password1.value != "" && Password2 != "") { //if passwords are same and not null
        for (let i = 2; i < 4; i++) {
            addtextAlert[i].innerHTML = "";
        }
    };
    if (remember.checked) // if checkbox is checked
        remember.className = 'checked';
    else
        remember.className = 'unchecked';
};

function Count(){ // count how many char enter
 let count = 20-Tweet.value.length;
 blockCount.innerHTML = count;

 if(count<0){
   blockCount.style.color ="red"
 }
 else{
    blockCount.style.color ="black"
 }
}



