
    //create two random words and their result
    const a= Math.floor(Math.random()*10)+1,
    b=Math.floor(Math.random()*10)+1;
    const operators=['+', '-', '*', '/'];

    const operator =operators[Math.floor(Math.random()*operators.length)]
    const buttons=document.querySelectorAll('.btn');
    const resultText=document.querySelector('.result')
    const btnArray=[];
    const question=document.querySelector('.question');

    let questionText;
    let result;
    
    //fix min-max num
    operator==='/' || operator==='-'? questionText=`${Math.max(a,b)} ${operator} ${Math.min(a,b)} =` : questionText=`${a} ${operator} ${b} =`
        
    //results
   switch (operator){
       case '+': result=a+b;
       break;
       case '-': result=Math.max(a,b) - Math.min(a,b);
       break;
       case '/': result=(Math.max(a,b) / Math.min(a,b));
       break;
       case '*': result=a*b;
       break;
   }

 
    //create innerText for buttons
    let innerBtn=[];
    innerBtn.push(result, result+1, result+2, result-1)
    

    //shufle function
    function shuffle(arr){
        var j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    shuffle(innerBtn);

    //add innerHTML for buttons
    for(let i = 0; i<buttons.length; i++){
        buttons[i].innerHTML=innerBtn[i]
    }
    question.innerHTML=questionText;
       






