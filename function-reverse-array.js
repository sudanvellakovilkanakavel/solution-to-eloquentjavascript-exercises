function reverseArray (arraybox)
{
	var arraybox1=[];
    for(var i=arraybox.length-1;i>=0;i--)
    {
       
       arraybox1.push(arraybox[i]);
     }
return arraybox1;
}

function reverseArrayInPlace(arrayValue)
{

     for (var i=0;i<Math.floor(arrayValue.length/2);i++ )
      {

	var holder = arrayValue[i];
    arrayValue[i]=arrayValue[arrayValue.length-1-i];
    arrayValue[arrayValue.length-1-i]=holder;
     }
    return arrayValue;
}

console.log(reverseArray(["A","B","C"]));
var arrayValue=[1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);