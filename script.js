/*let add=(x,y)=>x+y;
let result=add(5,6)
document.write(result);*/

/*let text="hello"
let result=text.toUpperCase();
document.write(result);*/

let uppercase=(str)=>{
    let result=str.toUpperCase();
    for(i=0;i<str.length;i++)
    document.write(i+ result[i]);
}
string=prompt("Enter the string");
uppercase(string)