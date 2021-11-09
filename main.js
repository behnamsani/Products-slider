let img = document.querySelectorAll(".img");
let imgArr=[];
for(let i=0;i<img.length;i++){
    imgArr[i]=img[i];
}
const btnRight = document.querySelector("#arrowRight");
const btnLeft = document.querySelector("#arrowLeft")
const boxImg = document.querySelector("#imgBox");

imgArr[0].classList.add("pos1");
imgArr[1].classList.add("pos2");
imgArr[2].classList.add("pos3");
imgArr[3].classList.add("pos4");
imgArr[4].classList.add("pos5");


let endPos;
let startPos;
let flag=false;
let flagS=false;
let turnOnLeft=false;
let moving=true;

let addEndPos=0;
let addStartPos=img.length-1;
let moveAuto;


btnRight.addEventListener("click",stop);
btnRight.addEventListener("click",moveRight);

btnLeft.addEventListener("click",stop);
btnLeft.addEventListener("click",moveLeft);

boxImg.addEventListener("mouseover",stop);
boxImg.addEventListener("mouseleave",move);

move();







function move(){
    clearInterval(moveAuto);
    moveAuto = setInterval(moveRight,5000);
    moving=true;
}

function stop(){
    clearInterval(moveAuto);
    moving=false;
}

function moveLeft(){
    for(let i=0;i<imgArr.length;i++){

        if(imgArr[i].classList[2]==="pos1"&& i===0){
            let findUnshift=imgArr[imgArr.length-1].id;
            findUnshift = findUnshift.split("m")[1];
            addStartPos=findUnshift-1;
            imgArr.unshift(img[addStartPos]);
            flagS=true
        }
    }    
    for(let i=0;i<imgArr.length;i++){
        if(imgArr[i].classList[2]==="pos1"){
            startPos=i;
        }
        imgArr[i].classList.remove("pos1");  
        imgArr[i].classList.remove("pos2");  
        imgArr[i].classList.remove("pos3");  
        imgArr[i].classList.remove("pos4");  
        imgArr[i].classList.remove("pos5");  
    }
        imgArr[startPos-1].classList.add("pos1");
        imgArr[startPos].classList.add("pos2");
        imgArr[startPos+1].classList.add("pos3");
        imgArr[startPos+2].classList.add("pos4");
        imgArr[startPos+3].classList.add("pos5");
    
    if(flagS===true){
        if(addStartPos===0){
            addStartPos=img.length-1;
        }else{addStartPos=addStartPos-1;}
        imgArr.pop();
        flagS=false;
    }
    if(moving===false){
        setTimeout(move,6000);
    }   
}

function moveRight(){
    
    for(let i=0;i<imgArr.length;i++){

        if(imgArr[i].classList[2]==="pos5" && i===imgArr.length-1){
            let findPush=imgArr[0].id;
            findPush = findPush.split("m")[1];
            addEndPos=findPush-1;
            imgArr.push(img[addEndPos]);
            flag=true
        } 
    }    
        for(let i=0;i<imgArr.length;i++){
            if(imgArr[i].classList[2]==="pos5"){
                endPos=i;
            }
            imgArr[i].classList.remove("pos1");  
            imgArr[i].classList.remove("pos2");  
            imgArr[i].classList.remove("pos3");  
            imgArr[i].classList.remove("pos4");  
            imgArr[i].classList.remove("pos5");
        }
            
            imgArr[endPos-3].classList.add("pos1");
            imgArr[endPos-2].classList.add("pos2");
            imgArr[endPos-1].classList.add("pos3");
            imgArr[endPos].classList.add("pos4");
            imgArr[endPos+1].classList.add("pos5");
            endPos=endPos+1;
        if(flag===true){
            if(addEndPos===img.length-1){
                addEndPos=0;
            }else{addEndPos=addEndPos+1;}
            imgArr.shift();
            flag=false;
        }
        if(moving===false){
            setTimeout(move,6000);
        }     
}
            
