const main = new Map();
//Add item
function addItem(id, taskName, isCompleted) {
  main.set(id, { taskName: taskName, isCompleted: isCompleted });
}
addItem(1, "build a TODO app", false);
addItem(2, "talk to myself", true);
addItem(3, "go for a walk", false);
addItem(4, "think about weekend project", false);
addItem(
  5,
  "listen to pini and dont waste time on non importent bits of code",
  false
);

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
console.log(deleteItem(2));
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
//list
function list() {
  let arr = [];
  for (let listItem of main.values()) {
    arr.push(listItem);
  }
  let temp = [...arr].sort(function (a, b) {
    return a.isCompleted - b.isCompleted;
  });
  return temp;
}
list();
