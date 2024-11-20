var cnt=1;
function AddTask(){
    
    
    const div=document.createElement("div");
    div.className='box';
    
    // const input=document.createElement("input");
    // input.innerText=input;
    // input.style.fontSize="2vw";
    // input.style.width="10wv";

    const input =document.getElementById("inputtext");
    const inputbox=document.createElement("span");
    inputbox.innerHTML=input.value;
    inputbox.className="s2";
    const but1=document.createElement("button");
    but1.innerHTML='<i class="fa-solid fa-circle-xmark"></i>';
    // div.append(but1);
    but1.className="b1";
    but1.addEventListener("click",()=>{
        but1.parentElement.remove();
        cnt=cnt-1;
    })


    const completeBtn=document.createElement("button");
    completeBtn.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    completeBtn.className="b2";
    completeBtn.addEventListener("click",()=>{
        inputbox.style.textDecorationLine = "line-through";
        completeBtn.style.color="green";
        inputbox.style.color="red";
        // cnt=cnt-1;
    })


    const serialNo=document.createElement("span");
    serialNo.innerText=cnt++;
    serialNo.className="s1";
    div.append(serialNo,inputbox,but1,completeBtn);
    const par=document.getElementById("box-main");
    input.value="";
    par.append(div);
   
    
    
    
    

}


