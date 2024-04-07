const parent = [
   React.createElement("div", { id: "parent" },
      React.createElement("div", { id: "child" }),
      [React.createElement("h1", { id: "heading" }, "Hello Kaise Ho Ap"), React.createElement("h1", { id: "heading1" }, "Hello Kaise Ho App")]),
   React.createElement("div", { id: "parent1" },
      React.createElement("div", { id: "child1" }),
      [React.createElement("h1", { id: "heading2" }, "Hello Kaise Ho Ap"), React.createElement("h1", { id: "heading2" }, "Hello Kaise Ho Ap")])
]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)