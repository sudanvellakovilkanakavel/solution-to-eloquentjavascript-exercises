var i;
var j;
var c = " ";

for (i=0;i<8;i++)

{
  for (j=0; j<8; j++)
   {
     if ((i+j)%2==0)
     {
       c= c + " ";
     }
     else
     {
   	   c = c + "#";
     }
    }

 c = c+"\n";
 
}
console.log (c);

