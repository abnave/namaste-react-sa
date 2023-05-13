import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id : "heading"}, "I will add some information here");

const info = (<h1 id="heading">I will add some information here</h1>);
// above code is JSX syntax to write html like code in our JS file
// It will return react object (same as we write React.createElement)
const FirstComponent = () => {
  return <h1>First Component text</h1>;
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

// while rendering here, we are passing info2 which is react element
// if you want to passing FirstComponent, then you have to pass it like this
// root.render(<FirstComponent />);
/* root.render((<>
  {FirstComponent()}
  <SecondComponent />
  <ThirdComponent />
</>));

different ways to render Component
root.render((<>
  {FirstComponent()}
  <FirstComponent />
  <FirstComponent> </FirstComponent>
</>));

*/
root.render(info2);
//  "main": "app.js",