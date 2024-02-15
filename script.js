const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans =[];
let i=0;
let arLen = arr.length;
while(i<arLen){
	let tarr = [];
let sum=arr[i];
tarr.push(sum);
if(sum===n){
ans.push(tarr);
i++;
continue;
}else{
for(let j=i+1;j<arLen;j++){
sum += arr[j];
if(sum>n){
ans.push(tarr);
i=j;
break;
}else{
tarr.push(arr[j]);
}
}
}
}
return ans;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
