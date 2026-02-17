function calculeMoyenne(notes, prenom) {
  let totalNote = 0;

  for (let note of notes) {
    totalNote += note;
   // console.log(totalNote);
  }

  console.log("----------------------------");

  const moyenne = totalNote / notes.length;

  console.log(prenom+ " votre moyenne est de : " + moyenne);

  /*
// si moyenne > 15
console.log("votre moyenne est de : "+moyenne+" vous avez les félicitations");

//sinon si moyenne > 10 & moyenne <= 15 gère de 11 à 15
console.log("votre moyenne est de : "+moyenne+" vous avez les compliments");

//sinon si moyenne > 8 & moyenne <= 10 gere le 9 et 10
console.log("votre moyenne est de : "+moyenne+" vous avez les encouragements");

//si moyenne <= 8 inférieur ou égal à 8
// sinon
console.log("votre moyenne est de : "+moyenne+" vous avez encore du travail");
*/
  /*
| Opérateur | Signification |
| --------- | ------------- |
| `+=`      | ajouter       |
| `-=`      | soustraire    |
| `*=`      | multiplier    |
| `/=`      | diviser       |


||   ou
===  Il compare :la valeur ET le type
==   égalité "souple"
!==  différent strict
&&   et - les deux condition sont vraies

*/

  if (moyenne > 15) {
    console.log("vous avez les félicitations");
  } else if (moyenne > 10 && moyenne <= 15) {
    console.log("vous avez les compliments");
  } else if (moyenne > 8 && moyenne <= 10) {
    console.log("vous avez les encouragements");
  } else if (moyenne < 8) {
    console.log("vous avez encore du travail");
  }
}

console.log("----------------------------");

const notesAntony = [10, 8, 20, 9, 20];
const notesMarie = [17, 15, 18, 19, 20];

calculeMoyenne(notesAntony, "Antony");
calculeMoyenne(notesMarie, "Marie");
