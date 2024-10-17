
// 1. get computer choice with Math.random

    function getRandom(min,max) {
      min = Math.ceil(min)
      max = Math.floor(max)
        return Math.floor(Math.random()*(max-min+1))+min;
    }

console.log(getRandom(1,3));
// if 1 then rock
    // else if 2 paper
    // else scissors
// 2. get human choice from input
// 3. compare choices and declare score
// 4. play the round
// 5. count score and end game when someone gets 5