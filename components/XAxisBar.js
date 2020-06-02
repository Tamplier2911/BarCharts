// append to chart__xBlock--indecies
class XAxisBar {
  constructor(index) {
    this.index = index;
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("chart__xBlock--index");
    element.textContent = this.index;
    return element;
  }
}

export default XAxisBar;
