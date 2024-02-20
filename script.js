const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let i=0;
	while(i<arr.length){
		let temp=[];
		let sum=0;
		for(let j=i;j<arr.length;j++){
			sum += arr[j];
			if(sum>n){
				result.push(temp);
				i=j;
				break;
			}
			temp.push(arr[j]);
			i++;
		}
	}
	return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
