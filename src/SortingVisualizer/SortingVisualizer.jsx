import React from "react";
import "./SortingVisualizer.scss";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import * as MergeSort from "../SortingAlgorithms/MergeSort.js";
import * as QuickSort from "../SortingAlgorithms/QuickSort.js";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      value: 0,
    };
  }

  componentDidMount() {
    // If refresh page, then reset array
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 250; i++) {
      array.push(randomInt(5, 700));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = MergeSort.getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const color = i % 3 === 0 ? "red" : "grey";
        const barOneIndex = animations[i][0];
        const barTwoIndex = animations[i][1];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.value); // TODO: Figure out how to change speed to go the other way around
      } else {
        setTimeout(() => {
          const barOneIndex = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.value);
      }
    }
  }

  async quickSort() {
    // const sorted = this.state.array.sort((a, b) => a - b);
    // const quickArray = QuickSort.getQuickSortAnimations(this.state.array);
    // console.log(areArraysEqual(sorted, quickArray));
    const quickSortAnimations = QuickSort.getQuickSortAnimations(
      this.state.array
    );
    console.log(quickSortAnimations);
    for (let i = 0; i < quickSortAnimations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const color = i % 3 === 0 ? "blue" : "grey";
        const barOneIndex = quickSortAnimations[i][0];
        const barTwoIndex = quickSortAnimations[i][1];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.value); // TODO: Figure out how to change speed to go the other way around
      } else {
        setTimeout(() => {
          const barOneIndex = quickSortAnimations[i][0];
          const barTwoIndex = quickSortAnimations[i][1];
          if (barOneIndex != null && barTwoIndex != null) {
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            var temp = `${barTwoStyle.height}`;
            barTwoStyle.height = `${barOneStyle.height}`;
            barOneStyle.height = temp;
          }
        }, i * this.state.value);
      }
    }
  }

  insertionSort() {}

  bubbleSort() {}

  heapSort() {}

  handleSliderChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, index) => (
          //In React, must put key properties in values/elements rendered in an iterable
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px`, backgroundColor: "grey" }}
          />
        ))}{" "}
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.resetArray()}
            style={{ margin: 5 }}
          >
            Generate new array
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.mergeSort()}
            style={{ margin: 5 }}
          >
            Merge sort
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.quickSort()}
            style={{ margin: 5 }}
          >
            Quick sort
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.insertionSort()}
            style={{ margin: 5 }}
          >
            Insertion sort
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.bubbleSort()}
            style={{ margin: 5 }}
          >
            Bubble sort
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.heapSort()}
            style={{ margin: 5 }}
          >
            Heap sort
          </Button>
        </div>
        <Typography id="input-slider" gutterBottom>
          Speed
        </Typography>
        <Grid container spacing={2} alignItems="center"></Grid>
        <Grid item xs>
          <Slider
            value={typeof this.state.value === "number" ? this.state.value : 0}
            onChange={this.handleSliderChange}
            min={0}
            max={10}
            step={1}
            marks={true}
            style={{ width: 150 }}
            aria-labelledby="input-slider"
          ></Slider>
        </Grid>
      </div>
    );
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

export default SortingVisualizer;
