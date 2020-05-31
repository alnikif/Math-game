
    //create two random words and their result
    const a= Math.floor(Math.random()*10),
    b=Math.floor(Math.random(1)*10);
    const operators=['+', '-', '*', '/'];

    const operator =operators[Math.floor(Math.random()*operators.length)]
    const buttons=document.querySelectorAll('.btn');
    console.log(buttons)
    const btnArray=[];
    let question;
    let result;
    
    //fix min-max num
    operator==='/' || operator==='-'? question=`${Math.max(a,b)} ${operator} ${Math.min(a,b)} =` : question=`${a} ${operator} ${b} =`
        
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

 
//Problem
    let innerBtn=[];
    innerBtn.push(result, result+1, result+2, result-1)
    console.log(innerBtn)


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


    for(let i = 0; i<buttons.length; i++){
        buttons[i].innerHTML=innerBtn[i]
    }
    

       console.log(a, operator, b)











