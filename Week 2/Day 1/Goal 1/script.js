// const root = document.getElementById("root")

// const h1 = document.createElement("h1")

// h1.innerText = "Hello"

// root.appendChild(h1)

const h1 = React.createElement("div",null,
    React.createElement("h1",{className: "title", id: "heading"},"Hello"),
    React.createElement("p",null,"Hello World!")
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(h1)


