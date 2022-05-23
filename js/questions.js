// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

var q1 = new CQuiz(
	'Welches Land gehört zu eine der wichtigsten Mining-Nationen?',
	'Russland',
	'Indien',
	'China',
	'USA',
	1,
	0
);

var q2 = new CQuiz(
	'Wann wurde die Kryptowährung "Bitcoin" erfunden?',
	'2003',
	'2015',
	'2008',
	'1998',
	1,
	0
);

var q3 = new CQuiz(
	'Welches ist die bekannteste Kryptowährung?',
	'Dodgecoin',
	'Ethereum',
	'Bitcoin',
	'',
	1,
	0
);
var q4 = new CQuiz(
	'Welche Kryptowährung ist weniger stromintensiv/klimafreundlich?',
	'Monero',
	'Ethereum',
	'Bitcoin',
	'Chia',
	1,
	0
);


// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
