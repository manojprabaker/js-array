var arr=[1,2,3,4,5,6,7,8,9,11],count=0,count1=0;
for(i=0;i<arr.length;i++)
{
	if(arr[i]%2==0)
	{
		document.write(arr[i] +"is even number" + "<br>");
		count++;
	}
    else {
		 document.write(arr[i] +"is odd number" + "<br>");
		 count1++;
	 }
	 
}
console.log(count);
console.log(count1);




var arr=[1,2,3,-1,200];
var small=arr[0],large=arr[0];
for(var i=0; i<arr.length; i++)
{
  if(arr[i] < small) 
  {
	small = arr[i];   
	}
	if(arr[i]>large)
	{
		large = arr[i];
	}
}
document.write("smallest number is" + small + "<br>"+ "largest number is" + large);






/*
for(var i=1; i<arr.length; i++)
{
  if(arr[i] >= small) 
  {
	small = arr[i];   
	}
}

document.write("largest number is" + small);*/

const arr1 = [4, -8, 1000, 7, 6, 2, 5, 9];
		const min = Math.max(...arr1);
		console.log(min);