function printpattern(m){
n=m;
if(n%2==0)
n=m+1;
for(var i=1;i<=m;i++)
{
    if(i%2==1)
    {
        var p1="";
        for(var j=1;j<=n;j++)
        {
            if(j>Math.round(n/2-Math.round(i/2)) && j<Math.round(n/2+Math.round(i/2)))
            p1=p1+"*";
            else
            p1=p1+"_";
        }
        console.log(p1);
    }
    else
    {
        var p2="";
        for(var j=1;j<=n;j++)
        {
            if(j==Math.round(n/2))
            p2=p2+"_";
            else
            {
            if(j>=Math.round(n/2-Math.round(i/2)) && j<=Math.round(n/2+Math.round(i/2)))
            p2=p2+"*";
            else
            p2=p2+"_";
            }
        }
        console.log(p2);
    }
}
}
printpattern(process.argv[2]);