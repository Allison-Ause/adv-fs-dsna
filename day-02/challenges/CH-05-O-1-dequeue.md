O(1) Dequeue
---

Queues are first-in, first-out data structures. Think of them like a line of people waiting for the bank teller.

Each new person joins the end of the line, and the bank teller helps the first person in line. Optionally, you can also check "has next" to know if someone else is waiting in line.

## Challenge

Most likely, the time complexity of your enqueue is `O(1)` but dequeue is `O(n)`. Can you make it so both operations are `O(1)`? _Hint: the people in line can't shift (take a step forward), can you move the front of the line?_

What is the trade-off of this approach?
