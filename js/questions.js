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
var q5 = new CQuiz(
	'Wie viel Elektroschrott wird durch eine Transaktion verursacht',
	'135 Gramm',
	'20 Gramm',
	'3 Gramm',
	1, //correct answer
	0 // eifach '0' schribe
);
var q6 = new CQuiz(
	'Wie viel Prozent des Bitcoin-Mining stammen aus erneuerbarer Energie?',
	'30%',
	'60%',
	'10%',
	2, //correct answer
	0 // eifach '0' schribe
);
var q7 = new CQuiz(
	'Wie viel Strom wird jährich für das Bitcoin-Mining aufgewendet?',
	'26122 KW/h',
	'247000 KW/h ',
	'343 KW/h',
	2, //correct answer
	0 // eifach '0' schribe
);
var q8 = new CQuiz(
	'Was ist Cryptomining?',
	'Crypto transaktionen verwaltung',
	'Berechnen von crypto blockchains',
	'Bezeichnet das Abschürfen und Verifizieren digitaler Währungen',
	3, //correct answer
	0 // eifach '0' schribe
);
var q9 = new CQuiz(
	'Warum ist Cryptomining hauptsächlich schädlich für das Klima?',
	'Kryptowährungen brauchen viel Öl, um verwendet zu werden',
	'Schürfen von Kryptowährungen verbraucht extrem viel Strom',
	'Nicht erneuerbare Energie',
	2, //correct answer
	0 // eifach '0' schribe
);
var q10 = new CQuiz(
	'Wie viel Energie braucht ein Überweisung von Bitcoin?',
	'1000 W/h',
	'Wie ein Schweizer, in 1.5 Monaten',
	'Wie eine Windmühle, pro Woche',
	2, //correct answer
	0 // eifach '0' schribe
);
var q11 = new CQuiz(
	'Wie viel vom gesamten Stromverbrauch wird vom Bitcoin-Mining verbraucht?',
	'15.69%',
	'10.97%',
	'23.36%',
	1, //correct answer
	0 // eifach '0' schribe
);
var q12 = new CQuiz(
	'Prozentsteigung von nachhaltigem Stromix für Bitcoin-Minig von Januar-März?',
	'99.99%',
	'16.9%',
	'21.6%',
	3, //correct answer
	0 // eifach '0' schribe
);
var q13 = new CQuiz(
	'Um wieviel Prozent sank der Energieverbrauch zur Gewinnung von Bitcoin?',
	'25%',
	'20%',
	'22%',
	1, //correct answer
	0 // eifach '0' schribe
);
var q14 = new CQuiz(
	'Wie viel Prozent stieg die Mining-Effizienz?',
	'62%',
	'63%',
	'78%',
	1, //correct answer
	0 // eifach '0' schribe
);
var q15 = new CQuiz(
	'Eine Bitcoin-Transaktion braucht so viel Strom wie ein US-Haushalt in ...',
	'2 Tagen',
	'23 Tagen',
	'10 Tagen',
	2, //correct answer
	0 // eifach '0' schribe
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];
