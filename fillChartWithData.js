// components
import ChartBar from "./components/ChartBar.js";
import XAxisBar from "./components/XAxisBar.js";
import YAxisBar from "./components/YAxisBar.js";

// chart filler function

/**
 * @function fillChartWithData - just as it sounds.
 * @param {Array} - array of number values to fill the chart
 */

export const fillChartWithData = (arr) => {
  // get greatest value - required
  let greatestValue = Math.max(...arr);
  // let greatestValue = 20;

  // choose break point by if greater than 20 by 10 else by 5
  if (greatestValue <= 20) {
    // check if greatest value can be devided by 5 with no remainder
    // else ensure it is
    const isDividableByFive = greatestValue % 5 === 0;
    if (!isDividableByFive) {
      while (greatestValue % 5) {
        greatestValue++;
      }
    }
  } else if (greatestValue > 20 && greatestValue < 40) {
    // check if greatest value can be devided by 10 with no remainder
    // else ensure it is
    const isDividableByFive = greatestValue % 10 === 0;
    if (!isDividableByFive) {
      while (greatestValue % 10) {
        greatestValue++;
      }
    }
  } else {
    // check if greatest value can be devided by 25 with no remainder
    // else ensure it is
    const isDividableByFive = greatestValue % 25 === 0;
    if (!isDividableByFive) {
      while (greatestValue % 25) {
        greatestValue++;
      }
    }
  }

  // y axis break points either 5, 10 or 25
  const yAxisBreakpoints = [];

  if (greatestValue <= 20) {
    // fill up y axis breakpoints
    for (let i = greatestValue; i >= 5; i -= 5) {
      if (i === greatestValue) yAxisBreakpoints.push(greatestValue + 5);
      yAxisBreakpoints.push(i);
    }
  } else if (greatestValue > 20 && greatestValue < 40) {
    // fill up y axis breakpoints
    for (let i = greatestValue; i >= 10; i -= 10) {
      if (i === greatestValue) yAxisBreakpoints.push(greatestValue + 10);
      yAxisBreakpoints.push(i);
    }
  } else {
    // fill up y axis breakpoints
    for (let i = greatestValue; i >= 25; i -= 25) {
      // if (i === greatestValue) yAxisBreakpoints.push(greatestValue + 25);
      yAxisBreakpoints.push(i);
    }
  }

  // render y axis breakpoints to the DOM
  yAxisBreakpoints.forEach((point) => {
    // create element
    const yBar = new YAxisBar(point);
    const element = yBar.render();

    // target parent
    const parent = document.querySelector(".chart__yBlock--values");

    // append child
    parent.appendChild(element);
  });

  // render x axis indecies and chart bars to the DOM
  arr.forEach((value, index) => {
    // get parents for indecies and chart bars
    const indeciesParent = document.querySelector(".chart__xBlock--indecies");
    const chartBarsParent = document.querySelector(".chart__mainBlock");

    // count appender
    const appender =
      greatestValue <= 20
        ? 5
        : greatestValue > 20 && greatestValue < 40
        ? 10
        : 0;

    // initialize index bar and chart bar
    const xBar = new XAxisBar(index);
    const xBarElement = xBar.render();

    const chartBar = new ChartBar(greatestValue + appender, value);
    const chartBarElement = chartBar.render();

    // render index bar and char bar to the DOM
    indeciesParent.appendChild(xBarElement);
    chartBarsParent.appendChild(chartBarElement);
  });
};
