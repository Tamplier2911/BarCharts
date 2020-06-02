// append to chart__mainBlock
class ChartBar {
  constructor(maxValue, currentValue) {
    this.max = maxValue;
    this.cur = currentValue;
  }

  render() {
    const bar = document.createElement("div");
    bar.classList.add("chart__mainBlock--bar");
    bar.style = `grid-template-rows: ${this.max - this.cur}fr ${this.cur}fr;`;

    const barTop = document.createElement("div");
    barTop.classList.add("chart__mainBlock--bar-val");
    barTop.textContent = this.cur;

    const barBot = document.createElement("div");
    barBot.classList.add("chart__mainBlock--bar-height");
    const barBotColor =
      this.cur > 10
        ? "#db4141"
        : this.cur >= 6 && this.cur <= 10
        ? "#e7f33c"
        : this.cur <= 5
        ? "#41db62"
        : "#333";
    barBot.style = `background-color: ${barBotColor};`;

    bar.appendChild(barTop);
    bar.appendChild(barBot);

    return bar;
  }
}

export default ChartBar;
