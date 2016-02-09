
function recur(num)
{

      if (num ==0)
      {
	   return "true";
	
      }
      else if (num==1)
      {
	   return "false";
      }
     else
     {
	  return recur(num-2);
     }
}
console.log (recur(75));

