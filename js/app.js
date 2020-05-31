$(function(){
    //create two random words and their result
    const a= Math.floor(Math.random()*10),
    b=Math.floor(Math.random(1)*10);
    const operators=['+', '-', '*', '/'];

    const operator =operators[Math.floor(Math.random()*operators.length)]
    const buttons=$('.btn');
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
    let innerBtn=[(result), (result-1), result+1, result+2]

    buttons.forEach(el=>{
        return el.text(innerBtn.forEach(item=>{
            item(splice(Math.floor(Math.random()*innerBtn.length)))
        }))
    })
    

       console.log(btnArray)











})