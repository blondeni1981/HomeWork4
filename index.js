       
let words = [];
let swapped =0;

for( i = 0; i < 3; i++)
{
let word = prompt("Please enter your name:");
   let temp = word.split(" ");
   for(j = 0; j < temp.length; j++){
       words.push(temp[j]);
       document.getElementById("firstPage").children[0].innerHTML += "<li>" + temp[j] + "</li>"
   }
}

function swap()
{
   if(document.getElementById("firstPage").style.display == "block"){
   document.getElementById("firstPage").style.display = "none";
   document.getElementById("secondPage").style.display = "block";
   }
   else{
   document.getElementById("firstPage").style.display = "block";
   document.getElementById("secondPage").style.display = "none";
   }
   if(swapped==0){
       for(let i=0; i<words.length; i++){
           let text = words[i].split("");
           [text[0], text[text.length-1]] = [text[text.length-1], text[0]];
           words[i] = text.join("");
           document.getElementById("secondPage").children[0].innerHTML += "<li>" + words[i] + "</li>"
       }
       swapped =1;
   }
}
