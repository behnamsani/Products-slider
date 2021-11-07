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

let addEndPos=0;
let addStartPos=img.length-1;



btnRight.addEventListener("click",moveRight);
btnLeft.addEventListener("click",moveLeft);


function moveLeft(){
    for(let i=0;i<imgArr.length;i++){
        if(imgArr[i].classList[2]==="pos1"&& i===0){
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
        console.log(startPos);
    
    if(flagS===true){
        if(addStartPos===0){
            addStartPos=img.length-1;
        }else{addStartPos=addStartPos-1;}
        console.log(addStartPos);
        imgArr.pop();
        console.log(imgArr);
    }    
}


function moveRight(){
    for(let i=0;i<imgArr.length;i++){
        if(imgArr[i].classList[2]==="pos5" && i===imgArr.length-1){
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
            console.log(endPos);
            
        
        if(flag===true){
            console.log(addEndPos);
            if(addEndPos===img.length-1){
                addEndPos=0;
            }else{addEndPos=addEndPos+1;}
            imgArr.shift();
            console.log(imgArr);
        }
        
        
        
}
            
