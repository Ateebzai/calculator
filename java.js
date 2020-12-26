function butt(num)
{
    document.getElementById("screen").value+=num;
}
function clearer1()
{
    document.getElementById("screen").value="";
}
var operator;
var num1=0,num2=0,result=0;
function myfunc(op)
{
    if(op==1)
    {
        operator="+";
        num1=parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
    else if(op == 2)
    {
        operator="-";
        num1=parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
    else if(op==3)
    {
        operator="*";
        num1=parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }else if(op==4)
    {
        operator="/";
        num1=parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
}
function show()
{
    num2=parseFloat(document.getElementById("screen").value);
    if(operator=="+"){
        result=(num1+num2);
    }else if(operator=="-"){
        result=num1-num2;
    }else if(operator=="*"){
        result=num1*num2;
    }else if(operator=="/"){
        result=num1/num2;
    }
    document.getElementById("screen").value=result;
}