"use strict";

 /* function callbac(lang, callback)
    {
        console.log(`Я учу ${lang}`);
        callback();
    }

function done()
    {
        console.log("Урра я прошел этот курс!");
    }    

callbac("Java Script на высшем уровне",done);  */
/* const student = {
    firstname: 'Nawriz',
    lastname: 'Nukusbaev',
    width: '68kg',
    height: 1.68,
    special: {
        language: 'russian',
        univer: 'KSU'
    }
};

console.log(student); */

/*  const arr=[5, 4 ,3 , 6 ,7];
 arr.sort(compareNum);
 console.log(arr);
 function compareNum(a,b)
    {
        return a-b;
    } */


/*arr.forEach(function(item,i,arr)
    {
        console.log(`${i}:${item} внутри массива ${arr}`);
    }); */

/* const str=prompt("Kakoy yazik","");
const products=str.split(", ");
products.sort();
console.log(products); */

/* function copy(Obj)
    {
        let newObj={};
        let key;
        for(key in Obj)
        {
           newObj[key]=Obj[key];
        }       
        return newObj;
    }

const num=
    {
        a:5,
        b:6,
        c:{x:8,
            y:7}
    };

    //const newNum=copy(num);
    const newNumbers={...num};
    console.log(newNumbers);  */

  /*   const massA=['a','b','c','d','e'];
    const massB=massA.slice();
    console.log(massB); */

  /*  const video=['youtube','mover','rutube'],
          audio=['aimp','yandex music','audio'],
          allMedia=[...video,...audio];
      //    console.log(allMedia); 

    function log(a,b,c)
    {
        console.log(a);
        console.log(b);
        console.log(c);  
    }

    log(...video);
 */

    const programmer=
    {
        cash:'$5000',
        laptop:'Dell 5567'
    };
/* 
    const Nawriz=
    {
        surname:'Nukusbaev'
    }; */

    const Nawriz=Object.create(programmer);

   
    console.log(Nawriz.cash);