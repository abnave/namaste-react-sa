import React from "react";
import ReactDOM from "react-dom/client";


const info = (<h1>I will add some information here</h1>)
const FirstComponent = () => {
  return <h1>I am first component with return keyword</h1>;
};
const SecondComponent = () => (
  <React.Fragment>
  <div>
    {info}
    <FirstComponent />
    <h1> I am second component without using return</h1>
  </div>
  <div>
    {info}
    <FirstComponent />
    <h1> I am repeated second component without using return</h1>
  </div>
  </React.Fragment>
);
const ThirdComponent = () => (
  <>
  <div>
    {info}
    <FirstComponent />
    <h1> I am third component without using return</h1>
  </div>
  <div>
    {info}
    <FirstComponent />
    <h1> I am repeated third component without using return</h1>
  </div>
  </>
);
const info2 = (<div>
  <FirstComponent />
  <SecondComponent />
  <ThirdComponent />
</div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(info2);
//  "main": "app.js",
