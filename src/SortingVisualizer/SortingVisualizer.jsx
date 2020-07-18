import React from "react";
import "./SortingVisualizer.scss";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import * as MergeSort from "../SortingAlgorithms/MergeSort.js";
import * as QuickSort from "../SortingAlgorithms/QuickSort.js";
import { Toolbar } from "@material-ui/core";
import * as InsertionSort from "../SortingAlgorithms/InsertionSort.js";
import * as BubbleSort from "../SortingAlgorithms/BubbleSort.js";
import * as SelectionSort from "../SortingAlgorithms/SelectionSort.js";
import * as HeapSort from "../SortingAlgorithms/HeapSort.js";

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
      const arrayBars = document.getElementsByClassName("array-bar"),
        [a, b] = animations[i],
        isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const color = i % 3 === 0 ? "red" : "grey",
          barOneStyle = arrayBars[a].style,
          barTwoStyle = arrayBars[b].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.value);
      } else {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          barOneStyle.height = `${b}px`;
        }, i * this.state.value);
      }
    }
  }

  quickSort() {
    const animations = QuickSort.getQuickSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [a, b] = animations[i],
        isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const barOneStyle = arrayBars[a].style,
          barTwoStyle = arrayBars[b].style,
          color = i % 4 === 0 ? "blue" : "grey";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.value);
      } else {
        setTimeout(() => {
          if (a != null && b != null) {
            const barStyle = arrayBars[a].style;
            barStyle.height = `${b}px`;
          }
        }, i * this.state.value);
      }
    }
  }

  insertionSort() {
    const animations = InsertionSort.getInsertionSortAnimations(
      this.state.array
    );
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const [barOneIndex, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * this.state.value);
    }
  }

  bubbleSort() {
    const animations = BubbleSort.getBubbleSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [a, b] = animations[i],
        isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const barOneStyle = arrayBars[a].style,
          barTwoStyle = arrayBars[b].style,
          color = i % 4 === 0 ? "yellow" : "grey";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.value);
      } else {
        setTimeout(() => {
          if (a != null && b != null) {
            const barStyle = arrayBars[a].style;
            barStyle.height = `${b}px`;
          }
        }, i * this.state.value);
      }
    }
  }

  selectionSort() {
    const animations = SelectionSort.getSelectionSortAnimations(
      this.state.array
    );
    console.log(animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [a, b] = animations[i],
        isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        if (a != null && b != null) {
          const barOneStyle = arrayBars[a].style,
            barTwoStyle = arrayBars[b].style,
            color = i % 4 === 0 ? "lime" : "grey";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.value);
        }
      } else {
        setTimeout(() => {
          if (a != null && b != null) {
            const barStyle = arrayBars[a].style;
            barStyle.height = `${b}px`;
          }
        }, i * this.state.value);
      }
    }
  }

  heapSort() {
    const animations = HeapSort.getHeapSortAnimations(this.state.array);
    // console.log(animations);
    // const sorted = this.state.array.sort((a, b) => a - b);
    // console.log(areArraysEqual(animations, sorted));
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const [barOneIndex, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * this.state.value);
    }
  }

  handleSliderChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography align="center">Sorting Visualizer</Typography>
          </Toolbar>
        </AppBar>
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
            onClick={() => this.selectionSort()}
            style={{ margin: 5 }}
          >
            Selection sort
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
            step={0.5}
            marks={true}
            style={{ width: 250 }}
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default SortingVisualizer;
