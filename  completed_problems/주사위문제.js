const fs = require('fs');
const inputData = fs.readFileSync("./dev/stdin").toString().split(' ').map(value=>+value)
const [a,b,c] = inputData

const answer = (a,b,c) =>{

    if(a == b && a==c){
        return 10000+ a*1000
    }else if(a!==b && a!==c && b!==c)
    {
        console.log(Math.max(a,b,c))
        return 100 * Math.max(a,b,c)
        
    }else if(a==b || a==c)
    {
        return 1000 + 100*a
    }else(b==c)
    {
        return 1000 + 100*b
    }
}