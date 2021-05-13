const text = "I am kirushanthi Letchumanan. I want to become a JavaScript Developer!! 🦸🏻‍"; 

let index = 0;
function writeText(){
    document.body.innerText = text.slice(0,index);

    index++;
    if(index > text.length){
        index =0;
    }
}
// console.log(text.length);
setInterval(writeText,100);