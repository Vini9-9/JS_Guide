// Destructuring

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

/* 
	subject is classes[i][0]
	time is classes[i][1]
	teacher is classes[i][2] 
*/
const classesAsObject = classes.map(([ subject, time,teacher ]) => {
	return {subject, time, teacher}
});