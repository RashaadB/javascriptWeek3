//EASY

function exercise(x) {
  return "Today's exercise is " + x;
}
var run = exercise("Running");
var swim = exercise("Swimming");
console.log(run);
console.log(swim);


//MEDIUM
function cutPizzaSlices(slices, people) {
  return `Each person gets ${slices / people} slices of pizza`;
}
console.log(cutPizzaSlices(8, 2));
console.log(cutPizzaSlices(8, 3));

//HARD
class Person {
  #name;
  #ssn;

  constructor(name, ssn) {
    this.#name = name;
    this.#ssn = ssn;
  }
  get name (){
    return this.#name;
  }

}
const person3 = new Person("John", 436);
console.log(person3.ssn);
console.log(person3.name);



 //VERYHARD
 class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log('Running is lit');
  }
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`)
  }
}
class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = [languages];
    this.busy = true;
  }
  completeTask() {
    return this.busy = false;
  }
  acceptNewTask() {
    return this.busy = true;
  }
  offerNewTask() {
    if (this.busy = true) {
      console.log(`${this.name} can't accept any tasks right now.`)
    } else {
      console.log(`${this.name} would love to take on a new role`)
    }
  }
  learnLang () {
    this.languages.push('JavaScript')
    return `${this.name} has learned JavaScript`
  }
  listLang() {
    this.learnLang()
    return this.languages
  }
};
const thomas = new Programmer('Rashaad' , 'engineer', 23, 'html');
console.log(thomas.listLang());



