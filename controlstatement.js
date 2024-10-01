let m=2;
let n=4;
let sum=0;

    if(m>n){
        console.log("m is greater than n");
    }
    else{
        for(let i=m;i<=n;i++){
        sum+=i*i*i;
       
    }
    console.log(sum);
}