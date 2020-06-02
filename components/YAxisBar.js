// append to chart__yBlock--values
class YAxisBar {
  constructor(value) {
    this.value = value;
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("chart__yBlock--value");
    element.textContent = this.value;
    return element;
  }
}

export default YAxisBar;
