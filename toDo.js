// initalizng map
const initIds = Array(100)
  .fill()
  .map((_, i) => i + 1);
const ids = new Set(initIds);
//todo work on logic of id genartor
const addId = () => {
  let i = Math.floor(Math.random() * 1000);
  if (ids.has(i)) {
    ids.delete(i);
    return i;
  } else {
    let i = Math.floor(Math.random() * 1000);
    ids.delete(i);
    return i;
  }
};
//selectors
const $ = (x) => document.querySelector(x);
const body = $("body");
const taskInput = $("input[name='task']");
const categoriesSelector = $("select[name='categories']");
const checkbox = $("input[name='importent']");
const createTask = $("[data-create]");
const sortImportance = $("[data-importance]");
const sortCategory = $("[data-category]");
const sortDate = $("[data-date]");
const toDoList = $("#todo-list");
const completed = $("#complete");

//btnEdit
//creat task function
function addItem(id, taskName, categorie, importent) {
  window.localStorage.setItem(
    id,
    JSON.stringify({
      taskName: taskName,
      categorie: categorie,
      importent: importent,
      isCompleted: false,
      date: new Date(),
    })
  );
}
// creat task event listner
createTask.addEventListener("click", addItemEvent);
// creat task event function
function addItemEvent() {
  let task = taskInput.value;
  if (task) {
    // creat map object
    let currId = addId();
    let CurrCategorie = categoriesSelector.value;
    let currImportent = checkbox.checked;
    addItem(currId, task, CurrCategorie, currImportent);
    //create li
    let li = document.createElement("li");
    li.setAttribute("data-id", `${currId}`);
    li.setAttribute("data-categorie", `${CurrCategorie}`);
    li.setAttribute("data-importent", `${currImportent}`);
    li.classList.add("tesk");
    toDoList.appendChild(li);
    //create checkbox
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.innerText = "complete";
    li.appendChild(check);
    //TODO add complet or not funcinality
    //create task
    let taskText = document.createElement("p");
    taskText.innerText = task;
    li.appendChild(taskText);
    // add invisible input
    let invisibleInput = document.createElement("input");
    invisibleInput.setAttribute("type", "text");
    invisibleInput.classList.add("invisble-input");
    li.appendChild(invisibleInput);
    //add category
    let taskCategory = document.createElement("p");
    taskCategory.innerText = CurrCategorie;
    taskCategory.classList.add("categories");
    //TODO change later and add a class per
    li.appendChild(taskCategory);

    //add btns
    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";
    btnEdit.setAttribute("data-btn", "edit");
    li.appendChild(btnEdit);
    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("data-btn", "delete");
    btnDelete.innerText = "Delete";
    li.appendChild(btnDelete);
  }
}

// update task event listner
toDoList.addEventListener("click", editItemEvent);
// update task event function
function editItemEvent(e) {
  //TODO all
  if (e.target.dataset.btn === "edit") {
    console.log(e.currentTarget);
    //change input to visible
  }
}
// delete task event listner
toDoList.addEventListener("click", editItemEvent);
// delete task event function
function editItemEvent(e) {
  if (e.target.dataset.btn === "delete") {
    let deleteTarget = e.target.parentElement;
    let deleteId = deleteTarget.dataset.id;
    //
    localStorage.removeItem(deleteId);
    deleteTarget.remove();
  }
}
// mark as done event listner
toDoList.addEventListener("click", completeItemEvent);
// mark as done event function
function completeItemEvent(e) {
  if (e.target.type === "checkbox") {
    let compTarget = e.target.parentElement;
    let compId = compTarget.dataset.id;
    completed.appendChild(compTarget);
    let localStr = localStorage.getItem(compId);
    let localObj = JSON.parse(localStr);
    localObj.isCompleted = true;
    window.localStorage.setItem(compId, JSON.stringify(localObj));
  }
}
// unmark as done event listner
completed.addEventListener("click", notCompleteItemEvent);
// unmark as done event function
function notCompleteItemEvent(e) {
  if (e.target.type === "checkbox") {
    let notCompTarget = e.target.parentElement;
    let notCompId = notCompTarget.dataset.id;
    toDoList.appendChild(notCompTarget);
    let localStr = localStorage.getItem(notCompId);
    let localObj = JSON.parse(localStr);
    localObj.isCompleted = false;
    window.localStorage.setItem(notCompId, JSON.stringify(localObj));
  }
}
// sort by importence event listner
sortImportance.addEventListener("click", sortByImportance);
// sort by importence event function
function sortByImportance(e) {
  sorting("importent");
}
// sort by importence event listner
sortCategory.addEventListener("click", sortByCategory);
// sort by importence event function
function sortByCategory(e) {
  sorting("categorie");
}
// sort by date event listner
//TODO sort by date
sortDate.addEventListener("click", sortByDate);
// sort by date event function
function sortByDate(e) {
  console.log(e.target);
}
//sorting all function
function sorting(by) {
  let toDoDiv = toDoList.children;
  toDoDiv = Array.prototype.slice.call(toDoDiv);
  toDoDiv.sort(function (a, b) {
    if (b.dataset[by] < a.dataset[by]) {
      return -1;
    } else {
      return 1;
    }
  });
  toDoList.innerHTML = "";
  for (let i = 0, l = toDoDiv.length; i < l; i++) {
    toDoList.appendChild(toDoDiv[i]);
  }
}
