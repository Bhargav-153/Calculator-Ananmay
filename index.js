let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (b)=>{
        buttonUsed= b.target.innerText;
        // console.log('Button text is',buttonUsed)
        if(buttonUsed=='X'){
            buttonUsed='*';
            screenValue+=buttonUsed;
            screen.value=screenValue;
        }
        else if(buttonUsed=='='){
        screen.value=eval(screenValue);
        screenValue="";
        }
        else if(buttonUsed=='C'){
            screenValue="";
          screen.value=screenValue;
        }
        else{
            screenValue+=buttonUsed;
            screen.value=screenValue;
        }
    })
}