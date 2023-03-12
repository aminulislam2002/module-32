// Syntictic sugar
class Friends {
  name;
  old = `18 - 20`;
  department = "Computer Science and Technology";
  semester;
  constructor(name, semester) {
    this.name = name;
    this.semester = semester;
  }
  startClass(time) {
    console.log(`start the class at ${time}`);
  }
  quizNumber(subject) {
    console.log(`Your quiz number ${subject}`);
  }
}
const aminul = new Friends("Aminul Islam", "Second");
console.log(aminul);
aminul.startClass(`10:00 am`);
aminul.quizNumber(`50`);

const ema = new Friends("Tamima Ema", "Five");
console.log(ema);
ema.startClass(`09:00 am`);
ema.quizNumber(60);
