console.log("JS file is connected")

// Variables
const targetZones = document.querySelectorAll(".target-zone");
const dragItems = document.querySelectorAll(".drag-item")
let draggedItem = null;


// Functions
function dragStart() {
  draggedItem = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();
  draggedItem.classList.add("hidden");
}


// EventListener

dragItems.forEach(dragItem => {
  dragItem.addEventListener("dragstart", dragStart);
})

targetZones.forEach(zone => {
  zone.addEventListener("dragover", dragOver);
  zone.addEventListener("drop", dropped)
})
