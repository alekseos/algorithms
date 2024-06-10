interface LNode {
  value: number | null,
  next: LNode | null
}

class LinkedList {
  public head: LNode
  public tail: LNode

  public _fakeHead: LNode

  createLinkedList() {
    this.head = { value: null, next: null }
    this.tail = { value: null, next: null }

    return this
  }

  addNode(node: LNode, head: LNode) {
    if (!node.value) {
      return
    }

    if (head.value === null) {
      head.value = node.value
      head.next = node.next

      return
    }

    if (node.value < head.value) {
      this._fakeHead = JSON.parse(JSON.stringify(head))

      head.value = node.value
      head.next = this._fakeHead

      return
    }

    if (node.value >= head.value && (!head.next?.value || node.value < head.next?.value)) {
      node.next = head.next
      head.next = node
    } else {
      if (head.next !== null) {
        this.addNode(node, head?.next)
      } else {
        return
      }
    }
  }

  insertInList(list1: LNode, list2: LNode) {
    if (!list1) {
      return list2
    }

    if (!list2) {
      return list1
    }

    if (list1.value < list2.value) {
      list1.next = this.insertInList(list1?.next, list2)
      return list1
    } else {
      list2.next = this.insertInList(list2.next, list1)
      return list2
    }
  }
}