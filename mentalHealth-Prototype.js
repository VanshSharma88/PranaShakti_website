
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async() => {
    try {
      var question1 = await prompt("Do you feel like not doing anything often?: ");
      var question2 = await prompt("Do you feel tremor in your body in defficult minor situations?: ")
      var question3 = await prompt("Random demotivation?: ")
      var question4 = await prompt("Anger issues?: ")
      var condition;
      var improvment;
      var emoji;
      if (question1.toLowerCase() == "yes" && question2.toLowerCase() == "yes" && question3.toLowerCase() == "yes" && question4.toLowerCase() == "yes"){
condition = "bad"
emoji = "😥"
    } else if(question1.toLowerCase() == "yes" || question2.toLowerCase() == "yes" || question3.toLowerCase() == "yes" || question4.toLowerCase() == "yes"){
condition = "mediocre"
emoji = '😐'
    } else{
condition = "good"
emoji = '😀'
}

if (question1.toLowerCase() == "yes" && question2.toLowerCase() == "yes" && question3.toLowerCase() == "yes" && question4.toLowerCase() == "yes"){
    improvment = Math.floor(Math.random() * (101 - 80) + 80);

} else if (question1.toLowerCase() == "yes" && question2.toLowerCase() == "yes" || question3.toLowerCase() == "yes" && question4.toLowerCase() == "yes"){
    improvment = Math.floor(Math.random() * (79 - 50) + 50);
} else if(question1.toLowerCase() == "yes" || question2.toLowerCase() == "yes" || question3.toLowerCase() == "yes" || question4.toLowerCase() == "yes"){
    improvment = Math.floor(Math.random() * (49 - 10) + 10);

} else{
    improvment = Math.floor(Math.random() * (5 - 1) + 1);
}
console.log(`Your mental health status is ${condition} ${emoji}\nYou need ${improvment}% improvment in your mental fitness journey`)

switch(condition){
case 'bad':
    var exForBad = 
`
Here is some exersises for you!!
• Deep breating - For 10 min with 30 second break after 2 min.
• Music listening.
• visualization of Tasks.
• Creative activites like - playing Muscial instruments, Writing, Drawing

`
console.log(exForBad)
    break
case 'mediocre':
var exForMed= 
`
Here is some exersises for you!!
• Deep breating - For 5 min with 10
• Creative activites like - playing Muscial instruments, Writing, Drawing
• Do yoga exersises
• Plan your daily task
`    
console.log(exForMed)
    break
case 'good':
var exForGood = 
`
Here is some exersises for you!!
• Choose a new skill that you can learn and practice it daily
• Do yoga exersises
• Listen to soothing music
• Plan your daily task
`
console.log(exForGood)
    break 
    default:
        return
}
rl.close();
    } catch (e) {
      console.error("Unable to prompt", e);
    }
  })();