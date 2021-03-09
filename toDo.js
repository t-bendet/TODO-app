// initalizng map
const main = new Map();
const initIds = Array(100)
  .fill()
  .map((_, i) => i + 1);
const ids = new Set(initIds);
//todo work on logic of id genartor
const addId = () => {
  let i = Math.floor(Math.random() * 100);
  if (ids.has(i)) {
    ids.delete(i);
    return i;
  } else {
    let i = Math.floor(Math.random() * 100);
    ids.delete(i);
    return i;
  }
};

// TODO refactor helper function DRY

// function helper() {
//   if (main.has(this.id)) {
//     action;
//     return true;
//   }
//   return false;
// }
// console.log(helper(this.id, main.get(this.id)));

//delete
function deleteItem(id) {
  if (main.has(id)) {
    main.delete(id);
    return true;
  }
  return false;
}
// mark as done
function markAsDone(id) {
  if (main.has(id)) {
    main.get(id).isCompleted = true;
    return true;
  }
  return false;
}
// unmark as done
function unmarkAsDone(id) {
  if (main.has(id)) {
    main.get(id).isCompleted = false;
    return true;
  }
  return false;
}
//TODO check if sort by date works and add all sort method to one function
//list by complete completed on top!!
function listByCompleted() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return b.isCompleted - a.isCompleted;
  });
  return temp;
}
//list by importent,importent  on top!!
function listByImportence() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return b.importent - a.importent;
  });
  return temp;
}
//list by date,config requierd
function listByDate() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return b.date - a.date;
  });
  return temp;
}

//selectors
const $ = (x) => document.querySelector(x);
const body = $("body");
const taskInput = document.querySelector("input[name='task']");
const categoriesSelector = document.querySelector("select[name='categories']");
const checkbox = document.querySelector("input[name='importent']");
const createTask = document.querySelector("[data-create]");
const toDoList = document.querySelector("#todo-list");
//creat task function
function addItem(id, taskName, categorie, importent) {
  main.set(id, {
    taskName: taskName,
    categorie: categorie,
    importent: importent,
    isCompleted: false,
    date: new Date(),
  });
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
    let currImoptent = checkbox.checked;
    addItem(currId, task, CurrCategorie, currImoptent);
    //create li
    let li = document.createElement("li");
    li.setAttribute("data-id", `${currId}`);
    toDoList.appendChild(li);
    //create checkbox
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    li.appendChild(check);
    //create task
    let taskText = document.createElement("p");
    taskText.innerText = task;
    li.appendChild(taskText);
    //add category
    let taskCategory = document.createElement("p");
    taskCategory.innerText = CurrCategorie;
    taskCategory.classList.add("categories");
    //TODO change later and add a class per
    li.appendChild(taskCategory);
    //add btns
    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";
    li.appendChild(btnEdit);
    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    li.appendChild(btnDelete);
  }
}

// <li> update
//   <input name="x" type="checkbox" />
//   <p>task</p>
//   <input type="text">

//   <button data-edit>Edit</button>
//   <button data-delete>Delete</button>
// </li>
