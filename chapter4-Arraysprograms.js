function range (startnum,endnum,step)//function starts
{
    if (step== null)
    {
      step=1;
    }

    var bigbox = [ ]; //declareing an array
    if (step>0)
    {
  
             for (var i=startnum;i<=endnum;i=step+i)

                  {

                   bigbox.push(i);

      
       
                   }

    }
    else
    {
 for (var i=startnum;i>=endnum;i=step+i)

                  {

                   bigbox.push(i);

      
       
                   }



    }

  		
  		return bigbox;
}//function ends

function sum (bigbox)
{
var total=0;
  for (var m=0;m<bigbox.length;m++)
  {

  	total=total+bigbox[m];
  	
  }
return total;

}


console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(range(5,2,-1));
