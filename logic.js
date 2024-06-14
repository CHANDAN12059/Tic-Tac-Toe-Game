let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame"); 
let tops=document.querySelector(".topcontainer");
let msg=document.querySelector(".msg");
let turnO=true;
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8,]];
const disablebox=()=>{
for(let b of boxes){
    b.disabled=true;
}
};
const ablebox=()=>{
    for(let a of boxes){
        a.disabled=false;
        a.innerText="";

    }
    };
boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            val.innerText="O";
            turnO=false;
        }
        else{
            val.innerText="X";
            turnO=true;
        }
        val.disabled=true;
        winner();
    });

});
let winner=()=>{
for(let pattern of win){
    let val1=boxes[pattern[0]].innerHTML;
    let val2=boxes[pattern[1]].innerHTML;
    let val3=boxes[pattern[2]].innerHTML;
    if(val1!=""&&val2!=""&&val3!=""){
        if(val1===val2&&val2===val3){
            console.log("winner",val1);
            printwinner(val1);
            
        }
    }
}
};
let printwinner=(winn)=>{
msg.innerText=`Congratulations ${winn} `;
tops.classList.remove("hide");
disablebox();


};

let resetgame=()=>{

turnO=true;
ablebox();
tops.classList.add("hide");

}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

