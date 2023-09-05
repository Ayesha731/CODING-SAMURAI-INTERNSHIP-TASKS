let string = "";
let buttons = document.querySelectorAll(
  ".btn, .btn-grey, .btn-orange,.btn-last"
);

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let input = document.querySelector(".input");
    switch (e.target.innerHTML) {
      case "=":
        try {
          string = eval(string).toString();
          if (string === "Infinity") {
            throw new Error("Divide by zero");
          }
        } catch (err) {
          string = "Error";
        }
        input.value = string;
        break;
      case "C":
        string = "";
        input.value = string;
        break;
      case "+/-":
        if (string) {
          string = string.startsWith("-") ? string.slice(1) : "-" + string;
          input.value = string;
        }
        break;
      case "%":
        if (string) {
          string = (eval(string) / 100).toString();
          input.value = string;
        }
        break;
      default:
        string += e.target.innerHTML;
        input.value = string;
    }
  });
});
