const heading = React.createElement("h1", {id:"heading"}, "hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",
    {id:"parent"},
    [
        React.createElement("div",
        {id:"child1"},
        [React.createElement("h1",{},"I am child1 H1 tag"),
        React.createElement("h2",{},"I am child1 H2 tag")]),
        React.createElement("div",
        {id:"child2"},
        [React.createElement("h1",{},"I am child2 H1 tag"),
        React.createElement("h2",{},"I am child2 H2 tag")])
    ]);
root.render(parent);