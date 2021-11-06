let img = document.querySelectorAll(".img");

const btnRight = document.querySelector("#arrowRight");
const btnLeft = document.querySelector("#arrowLeft")
const boxImg = document.querySelector("#imgBox");

img[0].classList.add("pos1");
img[1].classList.add("pos2");
img[2].classList.add("pos3");
img[3].classList.add("pos4");
img[4].classList.add("pos5");


let endPos;
let startPos;
let flag=true;
let flagS=true;
let imgArr=[];
let addEndPos=0;
let addStartPos=9;

for(let i=0;i<img.length;i++){
    imgArr[i]=img[i];
}

btnRight.addEventListener("click",moveRight);
btnLeft.addEventListener("click",moveLeft);


function moveLeft(){
    
    imgArr.unshift(img[addStartPos]);
        
    for(let i=0;i<imgArr.length;i++){
        if(imgArr[i].classList[2]==="pos1"&&flagS===true){
            startPos=i;
            flagS=false;
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

        console.log(imgArr);
        console.log(startPos);
    
    
    if(addStartPos===0){
        addStartPos=img.length-1;
    }else{addStartPos=addStartPos-1;}
    console.log(addStartPos);
}
function moveRight(){
        imgArr.push(img[addEndPos]);
        
        for(let i=0;i<imgArr.length;i++){
            if(imgArr[i].classList[2]==="pos5"&&flag===true){
                endPos=i;
                flag=false;
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
            console.log(imgArr);
            console.log(endPos);
        
        
        if(addEndPos===img.length-1){
            addEndPos=0;
        }else{addEndPos=addEndPos+1;}
        console.log(addEndPos);
        
        
}
            
