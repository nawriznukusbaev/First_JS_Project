"use sctrict";

let number  = 5;
const LeftBorderWith= 5;

number = 10;

//console.log(90);

let arr=[1,2,3,4];


//const answer=+prompt("How do you do?"); 
const answers = [];

/* answers[0]=prompt("What's you name?","");
answers[1]=prompt("What's you name whife?","");
answers[2]=prompt("What's you name Mother?",""); */

//document.write(answers);
const category="toys";

//console.log(`https://karsu.uz/${category}/7`);
//console.log(2*4===8);
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
console.log(numberOfFilms);

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};

const a=prompt("Один из последних просмотренных фильмов?",""),
      b=prompt("На сколько оцените его?",""),
      c=prompt("Один из последних просмотренных фильмов?",""),
      d=prompt("На сколько оцените его?","");

      personalMovieDB.movies[a]=b;
      personalMovieDB.movies[c]=d;
      console.log(personalMovieDB);