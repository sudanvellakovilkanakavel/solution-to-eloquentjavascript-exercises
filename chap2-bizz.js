var i=1;
do
{
	
   

 if( i%3==0 & i%5!=0) 
 {

    console.log("FIZZ");

  } 
       

  else if (i%5==0 & i%3!=0) 
  {

    console.log("BUZZ");
  } 
       

  
  else if (i%3==0 & i%5==0) 

  {
    console.log("FIZZBUZZ");

  } 
       

  else
  {
    console.log(i);

  } 
       
    

   i++;


}while(i<=100);
