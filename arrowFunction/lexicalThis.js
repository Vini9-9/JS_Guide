/* Lexical 'this' arrow function */

const team = {
  members: ['Jane','Bill'],
  teamName: 'Super Squard',
  teamSummary: function() {
	// this === team
   	return this.members.map((member) => {
      	return `${member} is on team ${this.teamName}`;
	});
  }
/*   teamSummaryError: function() {
   	return this.members.map(function(member) {
      	return `${member} is on team ${this.teamName}`; // resulta em uma propriedade 'undefined'
    });
  } */
  
};