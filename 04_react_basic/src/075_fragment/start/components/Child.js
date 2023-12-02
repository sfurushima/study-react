import "./Child.css";
import React from "react";

const Child = () => {
  return (
    // JSXは1つの要素でしか返せないため、div, h3, pタグが並んでいるとエラーになる
    // FragmentはHTMLに出力せず、まとめることができるタグ
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos quibusdam, dolore minima mollitia consectetur eum ipsum a praesentium aspernatur corporis vero ex necessitatibus. Consequuntur assumenda alias nam explicabo non.</p>
    </React.Fragment>
  );
};

export default Child;
