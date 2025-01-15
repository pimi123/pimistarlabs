// The queue data structure is a sequence collection of elements that follow the principle  of First in First out (FIFO)

// the first element inserted into the queue is the first element to be removed 

// A queue of people .People enter the queue at one end (rear/tail) and leve the queue from the other end (front/head)

// The queue DS supports two main operations 
    // Enqueue , witch adds an element to the tail of the collection 
    //Dequeue, withch removes an element from the front of the collection 

//  Queue  Useag

    // Printers 
    // CPU Task scheduling 
    // Callback queue in JS runtime 

    //  enqueue(element) = add an element to teh queue 
    // dequeue()- remove the oldest element from the queue 
    // peek() - get the value of the element at the front without removing it
    // /isEmpty()- check if the queue is empty 
    // size() - get the number of elements in the queue
    // /print()- visualize  the element in the queue

class Queue {

    constructor() {
        this.items =[]
    }

    enque(element){

        this.items.push(element)
    }
    deque(){
       return  this.items.shift()
    }
}





