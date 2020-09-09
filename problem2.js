 function calculate(val){
  let value=[],action=1;
     for(let i=1;i<=val*2;i=i+2){
        value.push(i);
        console.log(value.join(","))
     }
    
}

console.log(calculate(5))