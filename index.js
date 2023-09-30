
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}
// wrapGifts(gifts);




function writeCards(names, giftType = `gift!`){
   if (giftType != `gift!`){
    giftType += ` gift!`;
   } 
    for (let i = 0; i < names.length; i++){
       names[i] = (`Thank you, ${names[i]}, for the wonderful ${giftType}`);      
    }
    return names;
    ;
}

function countDown(i){
    for (i; i >= 0; i--){        
        console.log(i);
    }
}
function countUp(i, ){
    while( i <= 10){
         console.log(i);
         i++
    }
}
