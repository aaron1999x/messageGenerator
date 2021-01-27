//Every time a user runs a program, they should get a new, randomized output.

function generateMessage(){


    let randomNumber = Math.floor(Math.random()* 100);
    
    const recommendation ={

        dressCode: ['Casual','Business Casual','Smart Casual','Semi Casual','Formal'],
        activity: ['read a book','play a computer game','watch a movie','bake some cookies','go out for a jog',
                    'listen to some music','play golf','have friends over for a sleepover',
                    'go to the gym','learn a new skill','clean up your bedroom','call your parents',
                    'do some homework',],
    };

    

    function getRandom(arr){

        let getLength = arr.length;
        let randomIndex = Math.round(Math.random()*getLength);
        return arr[randomIndex];
    };

    
    return `Your lucky number today is ${randomNumber}. Why not try out dressing ${getRandom(recommendation.dressCode)} today. Today you should ${getRandom(recommendation.activity)}`;
    

    //console.log(recommendation.dressCode[0]);



    

}

console.log(generateMessage());