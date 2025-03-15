const Node = function (value = null, next = null) {
    return { value, next };
  };
  
export const LinkedList = function () {
  let head = null;
  let tail = null;
  let size = 0;
  const append = function (value) {
    if (head === null) {
      head = tail = Node(value);
    } else {
      tail.next = Node(value);
      tail = tail.next;
    }
    size++;
  };
  const prepend = function (value) {
    if (head === null) head = Node(value);
    else head = Node(value, head);
    size++;
  };
  const getSize = function () {
    return size;
  };
  const getHead = function () {
    return head;
  };
  const getTail = function () {
    return tail;
  };
  const toString = function () {
    if (head === null) {
      return "Empty List";
    } else {
      let cur = head;
      let linkedListString = "";
      while (cur !== null) {
        linkedListString += `( ${cur.value} ) -> `;
        cur = cur.next;
      }
      linkedListString += "null";
      return linkedListString;
    }
  };
  const at = function (index) {
    let curr = head;
    while (curr !== null && index > 0) {
      curr = curr.next;
      index--;
    }
    return curr === null ? undefined : curr.value;
  };
  const pop = function () {
    if (head === null) throw Error("List is Empty");
    else if (head.next === null) {
      head = tail = null;
    } else {
      let curr = head;
      while (curr.next != tail) {
        curr = curr.next;
      }
      curr.next = null;
      tail = curr;
    }
    size--;
  };
  const contains = function (value) {
    let curr = head;
    while (curr !== null) {
      if (curr.value.key === value) return true;
      curr = curr.next;
    }
    return false;
  };
  const find = function (value) {
    let index = 0;
    let curr = head;
    while (curr !== null) {
      if (curr.value.key === value) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return null;
  };
  const insertAt = function (value, index) {
    if (index >= size || index < 0) return;
    else if (index === 0) prepend(value);
    else if (index === size) append(value);
    else {
      let prev = null;
      let curr = head;
      while (curr != null && index > 0) {
        prev = curr;
        curr = curr.next;
        index--;
      }
      if (curr !== null) {
        prev.next = Node(value, curr);
        if (prev === tail) {
          tail = prev.next;
        }
      }
      size++;
    }
  };
  const removeAt = function (index) {
    if (index >= size || index < 0 || head === null) return;
    else if (index === size - 1) {
      pop();
      return;
    } else if (index === 0) {
      if (head === tail) head = tail = null;
      else head = head.next;
    } else {
      let prev = null;
      let curr = head;
      while (curr != null && index > 0) {
        prev = curr;
        curr = curr.next;
        index--;
      }
      prev.next = curr.next;
      curr.next = null;
    }
    size--;
  };
  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};