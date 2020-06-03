
  
    let a,b;
    const operators=['+', '-', '*', '/'];

    const operator =operators[Math.floor(Math.random()*operators.length)]
    const buttons=document.querySelectorAll('.btn');
    const resultText=document.querySelector('.result')
    const btnArray=[];
    const question=document.querySelector('.question');
    const start = document.querySelector('.btnStart');
    const timer= document.querySelector('.timer')
    let interval;
    let counter=10;
    let questionText;
    let result;
    let innerBtn=[];
   
    

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

   
  


    //add check result-event
    const checkResult=e=>{
        if(e.target.innerText==result){
            question.innerHTML='Gratuluje!';
            clearInterval(interval);
            
        }else {
            question.innerHTML='Błędna odpowiedź!';
            clearInterval(interval);
        }
    }
    buttons.forEach(el=>{
        el.addEventListener('click', checkResult )     
    })

    //add start-event 
   
    const pressStart=()=>{
        //create random numbers
        a= Math.floor(Math.random()*10)+1;
        b= Math.floor(Math.random()*10)+1;
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
    innerBtn.push(result, result+1, result+2, result-1)
         //add innerHTML for buttons
        for(let i = 0; i<buttons.length; i++){
            buttons[i].innerHTML=innerBtn[i];
            buttons[i].style.display='inline';
        }
        question.innerHTML=questionText;
        //add timer
        counter=10
         question.style.display='inline';
            interval=setInterval(()=>{
            counter-=1
            timer.innerHTML=counter;

            if(counter<1){
                clearInterval(interval);
                question.innerHTML='Time is over';

            }
        }, 1000)

    }
    start.addEventListener('click', pressStart)



