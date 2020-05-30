// Definition for singly-linked list (This is actually a Node definition)
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// reorganized thinking steps: Time: O(n log k)

// INITIALIZE a priority queue with k nodes
// WHILE queue is not empty O(n)
//    DEQUEUE 1 node O(1) & push node.val to ouput linked list
//    ENQUEUE 1 node O(log k) from node.next id exist
// RETURN output linked list

// ps. here we implement simple pq instead of normal faster pq

/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *  Input:
        [
          1->4->5,
          1->3->4,
          2->6
        ]
    Output: 1->1->2->3->4->4->5->6
 
    pq = [node(val=1, next), node(val=1, next), node(val=2, next)]

    think in terms of linked list, not an array
    -> not through creating k pointers that point to the head of each list

 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const output = new SinglyLinkedList();

  // initialize a priority queue with k nodes
  const pq = [];
  lists.forEach((listNode) => listNode && pq.push(listNode));
  pq.sort((a, b) => a.val - b.val);

  // while queue is not empty O(n)
  while (pq.length > 0) {
    // dequeue a node O(1) & push node.val to ouput linked list
    const dequeuedNode = pq.shift();
    output.push(dequeuedNode.val);

    // enqueue a node O(long n) from node.next if exist
    if (dequeuedNode.next) {
      pq.push(dequeuedNode.next);
      pq.sort((a, b) => a.val - b.val);
    }
  }

  // return output linked list
  return output.head;
};

// need to define this by myself to organize ouput easily
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
