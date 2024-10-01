let m=prompt("Enter two numbers");
let n=prompt("enter two numbers");
let sum=0;
if(m>n){
    alert('error');
}else{
    for(let i=m;i<=n;i++){
        sum+=(i*i*i);
    }
    alert(sum);

}