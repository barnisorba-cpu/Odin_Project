const container = document.querySelector("#container")
const redp = document.createElement("p")
redp.textContent = "Hey im red"
redp.style.color = "red"
container.appendChild(redp)

const h3 = document.createElement("h3")
h3.textContent = "Im a blue h3"
h3.style.color = "blue"
container.appendChild(h3)

const div = document.createElement("div")
div.style.borderColor = "black"
div.style.borderWidth = "4px"
div.style.borderStyle = "solid"
div.style.backgroundColor = "pink"

const h1 = document.createElement("h1")
h1.textContent = "Im in a div"
const paragraph = document.createElement("p")
paragraph.textContent = "ME TOO"

div.append(h1, paragraph)
container.appendChild(div)


