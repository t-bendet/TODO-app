const main = new Map();
const initIds = Array(100)
  .fill()
  .map((_, i) => i + 1);
const ids = new Set(initIds);
//todo work on logic
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
//Add item with randome id
function addItem(id, taskName) {
  main.set(id, {
    taskName: taskName,
    isCompleted: false,
    importent: false,
    date: new Date(),
  });
}

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

//events and data
const $ = (x) => document.querySelector(x);
const body = $("body");
const addItemInput = $("#add-item__input");
const addItemBtn = $("#add-item__btn");
const todoList = $(".todo-list__items");
addItemBtn.addEventListener("click", evenetAdd);
function evenetAdd(e) {
  let task = addItemInput.value;
  if (addItemInput.value) {
    curId = addId();
    addItem(curId, task);
    let item = document.createElement("li");
    item.inne;
    console.log(main);
  }
}
