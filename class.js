
class PrintMachine {
  constructor(fontSize1, fontColor1, fontFamily1) {
    this.fontSize = fontSize1;
    this.fontColor = fontColor1;
    this.fontFamily = fontFamily1;
  }

  print(text) {
    document.write(
      `<p style="font-size:${this.fontSize}; color:${this.fontColor}; font-family:${this.fontFamily};">${text}</p>`
    );
  }
}

const printer1 = new PrintMachine("20px", "green", "Arial");
const printer2 = new PrintMachine("30px", "red", "Courier New");

printer1.print("Это пример вывода текста. Привет я Марк");
printer2.print("Это пример вывода текста. Привет я Марк");
