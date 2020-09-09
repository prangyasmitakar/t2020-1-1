function calculate(num1,num2){
    let obj={};
    for(let i=1;i<=num1.length;i++){
      let count=0;
      for(let j=0;j<num2.length;j++){
           if(num2[j]%i===0){
             count=count+1;
           }
          obj[i]=count;
    }
    }
    console.log(obj);
   }
   let arr=[1,2,3,4,5,6,7,8,9];
   let input=[1,2,8,9,12,46,76,82,15,20,30];
   console.log(calculate(arr,input));