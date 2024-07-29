let boxes=document.querySelectorAll(".box");
let display=document.querySelector(".display");

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        const userchoice=box.innerText;
        let string=display.innerText;
        if (userchoice==="AC"){
            display.innerText="";
        }
        else if(userchoice==='C'){
            display.innerText=string.slice(0,string.length-1);
        }
        else if(userchoice==='='){
            try{
            string=eval(string);
            }
            catch{
                display.innerText="SYNTAX ERROR";
            }
            display.innerText=string;
        }
        else{
        display.innerText=display.innerText+userchoice;
        }
    })
})