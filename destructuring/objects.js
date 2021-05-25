// Destructuring objects

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};
/* BEFORE :(
function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
*/
// AFTER :)
function isEngineer({ title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}