$(function(){
    //create two random words and their result
    const a= Math.floor(Math.random()*10),
    b=Math.floor(Math.random(1)*10);
    const operators=['+', '-', '*', '/'];

    const operator =operators[Math.floor(Math.random()*operators.length)]

    let result;

    operator==='/' || operator==='-'? result=`${Math.max(a,b)} ${operator} ${Math.min(a,b)} =` : result=`${a} ${operator} ${b} =`
        
    


    console.log(result)











})