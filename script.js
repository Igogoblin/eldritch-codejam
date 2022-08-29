// import {ancientsData} from './data/ancients';
var ind;
let lev;
let flag;
let blue = [];
let brown = [];
let green = [];
let mainTask = 0;
let checkbox = document.querySelector('.checkbox');
let sho = document.querySelector('.sho');
checkbox.addEventListener('click',function(){
  if(checkbox.checked){  
    mainTask=1;
    sho.classList.add('lev');
    console.log('push')
  }else if(!checkbox.checked){
     console.log('back')
  mainTask= 0;
  sho.classList.remove('lev');
  }
 
  
})
function veryes(arr){
  blue = [3,4,5,10];
  brown = [1,2,3,4,5,11,12,13,14,15,16,17,18,19,20,21];
  green = [1,12,16,17,18];
  blue.sort(() => Math.random() - 0.5);
  brown.sort(() => Math.random() - 0.5);
  green.sort(() => Math.random() - 0.5);
}

function es(arr){
  blue = [3,4,5,7,9,10,11,12];
  brown = [1,2,3,4,5,11,12,13,14,15,16,17,18,19,20,21];
  green = [1,7,8,9,10,11,12,13,14,15,16,17,18];
  blue.sort(() => Math.random() - 0.5);
  brown.sort(() => Math.random() - 0.5);
  green.sort(() => Math.random() - 0.5);
}
function har(arr){
  blue = [1,2,6,7,8,9,11,12];
  brown= [1,2,3,4,5,6,7,8,9,10,15,16,17,18,19,20];
  green = [2,3,4,5,6,7,8,9,10,11,13,14,15];
  blue.sort(() => Math.random() - 0.5);
  brown.sort(() => Math.random() - 0.5);
  green.sort(() => Math.random() - 0.5);
}
function veryhar(arr){
  blue = [1,2,6,7,8,9,11,12];
  brown= [1,2,3,4,5,6,7,8,9,10,15,16,17,18,19,20];
  green = [2,3,4,5,6];
  blue.sort(() => Math.random() - 0.5);
  brown.sort(() => Math.random() - 0.5);
  green.sort(() => Math.random() - 0.5);
}
// замешать полные колоды карт
function doKard(arr,a){
  
  if(lev ==0){
   return veryes();
  }else if(lev ==1){
   return es();
  }else if(lev ==3){
   return har();
  }else if(lev==4){
   return veryhar();
  }
  
  if(lev ==2){
    let values = [...Array(a+1)].map((_, i) => i).splice(1).sort(()=>Math.random()-0.5);
  for(let e of values){
    arr.push(e);
  }
  return arr;
  }

console.log(arr)
return arr;
  }
  
// doKard(blue,12);
// doKard(brown,21);
// doKard(green,18);

let ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
    //   cardFace: Ancients.azathoth,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
    //   cardFace: Ancients.cthulhu,
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
    //   cardFace: Ancients.iogSothoth,
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
    //   cardFace: Ancients.shubNiggurath,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]
// ============================================================================
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let foboss = document.querySelectorAll('.foboss');

first.addEventListener('click',function(){
first.classList.add("ad");
second.classList.remove('ad');
third.classList.remove('ad');
fourth.classList.remove('ad');
 ind = 0;
 
});
second.addEventListener('click',function(){
second.classList.add('ad');
first.classList.remove('ad');
third.classList.remove('ad');
fourth.classList.remove('ad');
ind = 1;
});
third.addEventListener('click',function(){
third.classList.add('ad');
first.classList.remove('ad');
second.classList.remove('ad');
fourth.classList.remove('ad');
ind = 2;
});
fourth.addEventListener('click',function(){
fourth.classList.add('ad');
first.classList.remove('ad');
second.classList.remove('ad');
third.classList.remove('ad');
ind = 3;
});


// ----------------------------------------------------------------------------

let table = document.querySelector('.table');
let vlow = document.querySelector('.vlow');
let low = document.querySelector('.low');
let normal = document.querySelector('.normal');
let high = document.querySelector('.high');
let vhigh = document.querySelector('.vhigh');
let levels = document.querySelectorAll('.levels');

vlow.addEventListener('click', function(){
    vlow.classList.add('lev');
    low.classList.remove('lev');
    normal.classList.remove('lev');
    high.classList.remove('lev');
    vhigh.classList.remove('lev');
    lev = 0;
    doKard();


    });
low.addEventListener('click', function(){
vlow.classList.remove('lev');
low.classList.add('lev');
normal.classList.remove('lev');
high.classList.remove('lev');
vhigh.classList.remove('lev');
lev = 1;
doKard();
});
normal.addEventListener('click',function(){
normal.classList.add('lev');
low.classList.remove('lev');
vlow.classList.remove('lev');
high.classList.remove('lev');
vhigh.classList.remove('lev');
lev = 2;
doKard(blue,12);
doKard(brown,21);
doKard(green,18);
});
high.addEventListener('click',function(){
    high.classList.add('lev');
    vhigh.classList.remove('lev');
    vlow.classList.remove('lev');
    low.classList.remove('lev');
    normal.classList.remove('lev');
    lev = 3;
    doKard();
})
vhigh.addEventListener('click',function(){
    vhigh.classList.add('lev');
    high.classList.remove('lev');
    vlow.classList.remove('lev');
    low.classList.remove('lev');
    normal.classList.remove('lev');
    lev = 4;
    doKard();
})

// doKard(blue,12);
// doKard(brown,21);
// doKard(green,18);
// -----------------------------------------------------------------------------

let button = document.querySelector('.button');
let cover = document.querySelector('.cover');
let carta = document.querySelector('.carta');
let place = document.querySelector('.place');
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');
let arr1=[];
let arr2=[];
let arr3=[];

button.addEventListener('click', function(){
    button.classList.add('disappear');
cover.classList.remove('disappear');
carta.classList.remove('disappear');
table.classList.remove('disappear');
if(mainTask==0){
  // if(elem.classList.contains('lev')){
  //   elem.classList.remove('none');
  //       }
    }
for(let elem of foboss){
    elem.classList.add('none')
    if(elem.classList.contains('ad')){
        elem.classList.remove('none');
    }
}
for(let elem of levels){
    elem.classList.add('none');
    if(elem.classList.contains('lev')){
elem.classList.remove('none');
    }
    
}

doArr();
doContext();
});

// ----------------------------------------------------------------------------
// let sho = document.querySelector('.sho');

// -----------------------------------------------------------------------------
// firstStage: {
//     greenCards: 1,
//     blueCards: 1,
//     brownCards: 2,
//   },
let placeKomp = '';
let position;
cover.addEventListener('click', function(){
console.log(blue);
console.log(brown);
console.log(green);


    chengeArr();
    doContext();
     console.log(flag);
     if(flag==0){
      placeKomp="green";
     }else if(flag==1){
      placeKomp='brown';
     }else if(flag==2){
      placeKomp="blue";
     }
console.log(placeKomp);
// let ima = placeKomp+""+showKard(flag);
console.log(position);
    place.style.backgroundImage = `url('./assets/MythicCards/${placeKomp}/${placeKomp}${showKard(flag)}.png')`;
    // console.log(showKard(flag));
});
// blue = 12;brown= 21;green = 18;
// arr1 = [0, 2, 2];

function doArr(){
    if(lev==0&&mainTask==1){
        arr1[0]=0;
        arr1[1]=0;
        arr1[2]=ancientsData[ind].firstStage.greenCards+ancientsData[ind].firstStage.blueCards+ancientsData[ind].firstStage.brownCards;
        arr2[0]=0;
        arr2[1]=0;
        arr2[2]=ancientsData[ind].secondStage.greenCards+ancientsData[ind].secondStage.blueCards+ancientsData[ind].secondStage.brownCards;
        arr3[0]=0;
        arr3[1]=0;
        arr3[2]=ancientsData[ind].thirdStage.greenCards+ancientsData[ind].thirdStage.blueCards+ancientsData[ind].thirdStage.brownCards;
    }else if(lev==1&&mainTask==1){
        arr1[0]=ancientsData[ind].firstStage.greenCards;
        arr1[1]=ancientsData[ind].firstStage.brownCards;/*0*/ 
        arr1[2]=ancientsData[ind].firstStage.blueCards;
        arr2[0]=ancientsData[ind].secondStage.greenCards;
        arr2[1]=ancientsData[ind].secondStage.brownCards;/*0*/
        arr2[2]=ancientsData[ind].secondStage.blueCards;
        arr3[0]=ancientsData[ind].thirdStage.greenCards;
        arr3[1]=ancientsData[ind].thirdStage.brownCards;/*0*/
        arr3[2]=ancientsData[ind].thirdStage.blueCards;
        doNextLevel(arr1,1);
        doNextLevel(arr2,1);
        doNextLevel(arr3,1);
    }else if(mainTask==0||mainTask==1&&lev==2){
    arr1[0]=ancientsData[ind].firstStage.greenCards;
    arr1[1]=ancientsData[ind].firstStage.brownCards;
    arr1[2]=ancientsData[ind].firstStage.blueCards;
    arr2[0]=ancientsData[ind].secondStage.greenCards;
    arr2[1]=ancientsData[ind].secondStage.brownCards;
    arr2[2]=ancientsData[ind].secondStage.blueCards;
    arr3[0]=ancientsData[ind].thirdStage.greenCards;
    arr3[1]=ancientsData[ind].thirdStage.brownCards;
    arr3[2]=ancientsData[ind].thirdStage.blueCards;
}else if(lev==3&&mainTask==1){
  arr1[0]=ancientsData[ind].firstStage.greenCards;
  arr1[1]=ancientsData[ind].firstStage.brownCards;
  arr1[2]=ancientsData[ind].firstStage.blueCards;/*0*/
  arr2[0]=ancientsData[ind].secondStage.greenCards;
  arr2[1]=ancientsData[ind].secondStage.brownCards;
  arr2[2]=ancientsData[ind].secondStage.blueCards;/*0*/
  arr3[0]=ancientsData[ind].thirdStage.greenCards;
  arr3[1]=ancientsData[ind].thirdStage.brownCards;
  arr3[2]=ancientsData[ind].thirdStage.blueCards;/*0*/
  doNextLevel(arr1,2);
  doNextLevel(arr2,2);
  doNextLevel(arr3,2);
}else if(lev==4&&mainTask==1){
    arr1[0]=ancientsData[ind].firstStage.greenCards+ancientsData[ind].firstStage.blueCards+ancientsData[ind].firstStage.brownCards;;
        arr1[1]=0;
        arr1[2]=0;
        arr2[0]=ancientsData[ind].secondStage.greenCards+ancientsData[ind].secondStage.blueCards+ancientsData[ind].secondStage.brownCards;
        arr2[1]=0;
        arr2[2]=0;
        arr3[0]=ancientsData[ind].thirdStage.greenCards+ancientsData[ind].thirdStage.blueCards+ancientsData[ind].thirdStage.brownCards;
        arr3[1]=0;
        arr3[2]=0;
}
}
// делает низкий и высокий уровни
function doNextLevel(arr,flagArr){
  if(arr[flagArr]==0){
    return arr;
  }
  for(let i = 0;i<arr[flagArr];i++){
    let count = getRandomInt();
    let correct =2;
    if(flagArr==2){
      correct = 1;
    }
    if(count==0){
      arr[0]=(arr[0]+1);
    }else if(count==1){
      arr[2]=(arr[2]+1);
    }
  }
  arr[flagArr]=0;
  return arr;
}
function getRandomInt(){
  return Math.floor(Math.random()*2);
}
/**doContext    obnovljaet  */
function doContext(){
    a1.textContent = arr1[0];
a2.textContent = arr1[1];
a3.textContent = arr1[2];
b1.textContent = arr2[0];
b2.textContent = arr2[1];
b3.textContent = arr2[2];
c1.textContent = arr3[0];
c2.textContent = arr3[1];
c3.textContent = arr3[2];
}

function checkArr(arr){
let result=0;
for(let elem of arr){
result+=elem;
}
if(result==0){
    return false;
}
return true;
}
// выбор с какой стадией работаем
function chengeArr(){
    if(checkArr(arr1)){
return rand(arr1);
    }else if(checkArr(arr2)){
return rand(arr2);
    }else if(checkArr(arr3)){
return rand(arr3);
    }
    cover.classList.add('none');
    // ==================fin the end-====================================
}
// убирать по одной карте в стадиях
function rand(arr){
     position = randomThree();
    if(arr[position]==0){
        flag = position;
     return rand(arr);
    }
    arr[position]=arr[position]-1;
    flag = position;
    return arr;
  }
  
    function randomThree(){
      return Math.floor(Math.random()*3);
    }

    function showKard(a){
        console.log('a pgishlo '+ a)
        if(a==0){
           placeKomp = 'green';
            return green.pop();
        }else if(a==1){
            placeKomp= 'brown';
            return brown.pop();
        }else if(a==2){
            placeKomp = 'blue';
          return  blue.pop(); 
        }
    }

    

    // смотри дату мой этот карты
console.log("Для проверяющего, я немного модифицировал для наглядности при выборе моего уровня можно увидеть как  изменяются стадии, при этом колличество карт не меняется, а рандомно переходит в соседние")