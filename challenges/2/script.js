//Data 1
let dolphinsScore = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

//Data Bonus 1
let dolphinsScoreBonus = 97;
let dolphinsScore2Bonus = 112;
let dolphinsScore3Bonus = 101;

let koalasScoreBonus = 109;
let koalasScore2Bonus = 95;
let koalasScore3Bonus = 123;

//Data Bonus 2
let dolphinsScoreBonus2 = 97;
let dolphinsScore2Bonus2 = 112;
let dolphinsScore3Bonus2 = 101;

let koalasScoreBonus2 = 109;
let koalasScore2Bonus2 = 95;
let koalasScore3Bonus2 = 106;

let dolphinsAvaregeScore = (dolphinsScore + dolphinsScore2 + dolphinsScore3) / 3;
dolphinsAvaregeScore = Math.round(dolphinsAvaregeScore);
let dolphinsAvaregeScoreBonus = (dolphinsScoreBonus + dolphinsScore2Bonus + dolphinsScore3Bonus) / 3;
dolphinsAvaregeScoreBonus = Math.round(dolphinsAvaregeScoreBonus);
let dolphinsAvaregeScoreBonus2 = (dolphinsScoreBonus2 + dolphinsScore2Bonus2 + dolphinsScore3Bonus2) / 3;
dolphinsAvaregeScoreBonus2 = Math.round(dolphinsAvaregeScoreBonus2);

let koalasAvaregeScore = (koalasScore + koalasScore2 + koalasScore3) / 3;
koalasAvaregeScore = Math.round(koalasAvaregeScore);
let koalasAvaregeScoreBonus = (koalasScoreBonus + koalasScore2Bonus + koalasScore3Bonus) / 3;
koalasAvaregeScoreBonus = Math.round(koalasAvaregeScoreBonus);
let koalasAvaregeScoreBonus2 = (koalasScoreBonus2 + koalasScore2Bonus2 + koalasScore3Bonus2) / 3;
koalasAvaregeScoreBonus2 = Math.round(koalasAvaregeScoreBonus2);

console.log('Dolphins average score: ' + dolphinsAvaregeScore);
console.log('Dolphins average score bonus: ' + dolphinsAvaregeScoreBonus);
console.log('Dolphins average score bonus 2: ' + dolphinsAvaregeScoreBonus2);

console.log('Koalas average score: ' + koalasAvaregeScore);
console.log('Koalas average score bonus: ' + koalasAvaregeScoreBonus);
console.log('Koalas average score bonus 2: ' + koalasAvaregeScoreBonus2);

//Bonus 1 = if the average score is greater and greater than or equal to 100
if(dolphinsAvaregeScoreBonus > koalasAvaregeScoreBonus && dolphinsAvaregeScoreBonus >= 100){
    console.log('Dolphins win the trophy');
}
else if(koalasAvaregeScoreBonus > dolphinsAvaregeScoreBonus && koalasAvaregeScoreBonus >= 100){
    console.log('Koalas win the trophy');
}
else if(dolphinsAvaregeScoreBonus === koalasAvaregeScoreBonus && dolphinsAvaregeScoreBonus >= 100 && koalasAvaregeScoreBonus >= 100){
    console.log('Both win the trophy');
}
else{
    console.log('No one wins the trophy');
}

//Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

if(dolphinsAvaregeScoreBonus2 > koalasAvaregeScoreBonus2 && dolphinsAvaregeScoreBonus2 >= 100){
    console.log('Dolphins win the trophy');
}
else if(koalasAvaregeScoreBonus2 > dolphinsAvaregeScoreBonus2 && koalasAvaregeScoreBonus2 >= 100){
    console.log('Koalas win the trophy');
}
else if(dolphinsAvaregeScoreBonus2 === koalasAvaregeScoreBonus2 && dolphinsAvaregeScoreBonus2 >= 100 && koalasAvaregeScoreBonus2 >= 100){
    console.log('Both win the trophy');
}
else{
    console.log('No one wins the trophy');
}

