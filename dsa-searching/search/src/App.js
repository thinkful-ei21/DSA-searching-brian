import React, { Component } from 'react';
import { array, sortedArray } from './array';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: ''
    };
  }

  updateInput(value) {
    this.setState({
      input: value
    });
  }

  linearSearch() {
    console.log("linear search ran");
    const input = Number(this.state.input);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === input) {
        this.setState({
          result: `It took ${i + 1} iterations`
        });
        return;
      } else {
        this.setState({
          result: 'Number not in dataset'
        });
      }
    }
  }

  binarySearch(array = sortedArray,counter=0, start= 0, end= sortedArray.length) {
    console.log("binary search ran")
    let input = Number(this.state.input);
    //!(start >= end) {return 'not found'}
    if(start >= end){
      this.setState({
        result: 'Number not in dataset'
      });
      return;
    }
    //take the middle element
    //compare with input ,
    //if match return count
    let midIndex = Math.floor((start + end)/2);
    if(array[midIndex] === input){
      counter++;
      this.setState({
        result: `It took ${counter} iterations`
      });
      return;
    }
    if(array[midIndex] > input){
      counter++;
      let newEnd = midIndex - 1;
      console.log(array.slice(start,newEnd));
      this.binarySearch(array,counter, start,newEnd);
    }
    if(array[midIndex] < input){
      counter++;
      let newStart = midIndex + 1;
      console.log(array.slice(newStart,end));
      this.binarySearch(array,counter,newStart,end);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DSA-Searching</h1>

          <h3>DataSet </h3>
          <p className="dataset">
            89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48,
            32, 26, 2, 14, 33, 45 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98,
            73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63 23, 69, 64, 91, 9,
            70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28,
            13 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49,
            83, 6, 39, 42, 51, 54, 84 34, 53, 78, 40, 14, 5
          </p>
          <form onSubmit={e => e.preventDefault()}>
            <label>Enter Number</label>
            <input
              className="text-input"
              type="text"
              onChange={e => this.updateInput(e.target.value)}
            />
            <button className="button" onClick={() => this.linearSearch()}>
              Linear Search
            </button>
            <button className="button" onClick={() => this.binarySearch()}>
              Binary Search
            </button>
            <p>{this.state.result}</p>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
