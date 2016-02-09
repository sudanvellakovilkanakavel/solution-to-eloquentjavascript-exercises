var a;
var b;
var c;
var f ;
function countBs (a)
{
	var count = 0;
  for (var i=0; i <= a.length; i++)
  {
     if (a[i]=="B")

      {
      	count = count +1;
      }

  }
  console.log(count); 
}

function countchar (b,c)
{

  var cou = 0;
  for (var m=0; m <= b.length; m++)
  {
    if (b[m]=="k")

    {
    	cou =cou+1;
    }

  }
    console.log(cou);

}

//console.log(countBs("BBC"))
countBs("BBC");
countchar("kakkerlak" , "k");

