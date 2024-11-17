var cnt=1;
function AddTask(){
    
    // const inputV =prompt("Enter the Task :");
    const div=document.createElement("div");
    div.className='box';
    const input=document.createElement("input");
    input.innerText=input;
    input.style.fontSize="2vw";
    const completeBtn=document.createElement("button");
    completeBtn.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    completeBtn.addEventListener("click",()=>{
        completeBtn.parentElement.remove();
    })
    const but1=document.createElement("button");
    but1.innerHTML='<i class="fa-solid fa-circle-xmark"></i>';
    // div.append(but1);
    but1.addEventListener("click",()=>{
        but1.parentElement.remove();
        cnt=cnt-1;
    })
    const serialNo=document.createElement("span");
    serialNo.innerText=cnt++;
    div.append(serialNo,input,but1,completeBtn);
    const par=document.getElementById("box-main");
    par.append(div);
}


