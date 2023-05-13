import React from "react";
import ReactDOM from "react-dom/client";


const info = (<h1>I will add some information here</h1>)
const FirstComponent = () => {
  return <h1>First Component</h1>;
};
const SecondComponent = () => (
  <React.Fragment>
  <div>
    {info}
    <FirstComponent />
    <h2>second component</h2>
  </div>
  <div>
    {info}
    <FirstComponent />
    <h2> I am repeated second component without using return</h2>
  </div>
  </React.Fragment>
);
const ThirdComponent = () => (
  <>
  <div>
    {info}
    <FirstComponent />
    <h3> I am third component without using return</h3>
  </div>
  <div>
    {info}
    <FirstComponent />
    <h3> I am repeated third component without using return</h3>
  </div>
  </>
);
const info2 = (<div>
  {FirstComponent}
  <SecondComponent />
  <ThirdComponent />
</div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(info2);
//  "main": "app.js",
