function calculate(val){
    let value=[],action=1;
       for(let i=1;i<=val*2;i=i+2){
         if(i%2!==0){
              value.push(i);
              console.log(value.join(","));
         }
            console.log(value.join(","));
       }
      
  }
  
  console.log(calculate(6));