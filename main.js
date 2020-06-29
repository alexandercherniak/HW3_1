A = new Array(+prompt('n = ')); 
B = new Array(+prompt('m = '));

for (i = 0; i < A.length; i++) {
  A[i] = Math.floor(Math.random()*51);
}
console.log(A); 

for (i = 0; i < B.length; i++) {
  B[i] = Math.floor(Math.random()*51);
}
console.log(B); 

let C = [];
for (i = 0; i < A.length; i++) {
  for (j = 0; j < B.length; j++) {
    if (A[i] == B[j]) {
      C.push(A[i]);
    }
  }
} console.log(C);
