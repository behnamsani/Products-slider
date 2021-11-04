let img = document.querySelectorAll(".img");

const btnRight = document.querySelector("#arrowRight");
const btnLeft = document.querySelector("#arrowLeft")
const boxImg = document.querySelector("#imgBox");

img[0].classList.add("pos1");
img[1].classList.add("pos2");
img[2].classList.add("pos3");
img[3].classList.add("pos4");
img[4].classList.add("pos5");

let pB=false;
let endPos;
let flag=true;
let imgArr=[];
let addEndPos=0;

for(let i=0;i<img.length;i++){
    imgArr[i]=img[i];
}

btnRight.addEventListener("click",moveRight);

function moveRight(){
    
    if(pB===false){  
        for(let i=0;i<img.length;i++){
            if(img[i].classList[2]==="pos5"){
                endPos=i;
                
            }
            img[i].classList.remove("pos1");  
            img[i].classList.remove("pos2");  
            img[i].classList.remove("pos3");  
            img[i].classList.remove("pos4");  
            img[i].classList.remove("pos5");  
        }
  
        if(endPos<img.length-1){
            img[endPos-3].classList.add("pos1");
            img[endPos-2].classList.add("pos2");
            img[endPos-1].classList.add("pos3");
            img[endPos].classList.add("pos4");
            img[endPos+1].classList.add("pos5");
            
        }else if(endPos===img.length-1){
            pB=true;
        }
    }
    if(pB===true){
        imgArr.push(img[addEndPos]);
        
        for(let i=0;i<imgArr.length;i++){
            
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
        
        
        if(addEndPos===9){
            addEndPos=0;
        }else{addEndPos=addEndPos+1;}
        console.log(addEndPos);
        
        
    }
            
            
}


















































// const img10 = document.querySelector("#img10");
// const img9 = document.querySelector("#img9");
// const img8 = document.querySelector("#img8");
// const img7 = document.querySelector("#img7");
// const img6 = document.querySelector("#img6");
// const img5 = document.querySelector("#img5");
// const img4 = document.querySelector("#img4");
// const img3 = document.querySelector("#img3");

// let average=Math.round((img.length)/2)-1;

// img[average].classList.add("pos1");
// img[average-1].classList.add("pos2");
// img[average+1].classList.add("pos3");
// img[average+2].classList.add("pos4");
// img[average-2].classList.add("pos5");

// btnRight.addEventListener("click",moveRight);

// function moveRight() {
    
//     max = img.length-1;
//     img=[img[max],img[max-max],img[max-(max-1)],img[max-(max-2)],img[max-(max-3)],img[max-(max-4)],img[max-(max-5)],img[max-(max-6)],img[max-(max-7)],img[max-(max-8)]];
//     average=Math.round((img.length)/2)-1;
//     console.log(boxImg);
//     if(img[2]===img10){
//         img10.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(172px)";
//     }
//     if(img[2]===img9){
//         img9.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(398px)";
//     }
//     if(img[2]===img8){
//         img8.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(707px)";
//     }
//     if(img[2]===img7){
//         img7.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(932px)";
//     }
//     if(img[2]===img6){
//         img6.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(1104px)";
//     }
//     if(img[2]===img5){
//         img5.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(1104px)";
//     }
//     if(img[2]===img4){
//         img4.style.transform="translate(-1105px)";
//         boxImg.style.transform="translate(1104px)";
//     }
//     if(img[2]===img3){
       
//     }
//     img.forEach(function(item){
//                 item.classList.remove("pos1");
//                 item.classList.remove("pos2");
//                 item.classList.remove("pos3");
//                 item.classList.remove("pos4");
//                 item.classList.remove("pos5");
//             });
//     img[average].classList.add("pos1");
//     img[average-1].classList.add("pos2");
//     img[average+1].classList.add("pos3");
//     img[average+2].classList.add("pos4");
//     img[average-2].classList.add("pos5");



// }


