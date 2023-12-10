var x=document.getElementById("bb");
var a=document.getElementById("b1");
var b=document.getElementById("b2");
var c=document.getElementById("b3");
var d=document.getElementById("b4");
var e=document.getElementById("b5");
var f=document.getElementById("b6");

var n=[b,c,d,e,f];
m=0;

y=0;
function inc()
{
    if(y<1000)
    {
    y+=200;
    x.style.width=y+'px';
        n[m].setAttribute("class", "line1");
        m+=1;
    }
    
   else{ 
    console.log(y);
}
}
function dec()
{
    
    if(y>0)
{
y-=200;
x.style.width=y+'px';
m-=1;
n[m].setAttribute("class", "line");

console.log(e[m]);

}
else{
    console.log(y);
}
}
    
