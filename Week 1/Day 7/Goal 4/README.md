This week, the hardest concept for me was understanding the Event Loop, especially the difference between the Call Stack, Callback Queue, and Microtask Queue.

At first, I was confused about why Promise.then() runs before setTimeout(fn, 0), even when the timeout is zero.

The mental model that finally made it click was thinking of JavaScript as a system with different waiting lines (queues). First, JavaScript finishes the current work in the Call Stack. Then it always checks the Microtask Queue first (Promises), and only after that it runs tasks from the Callback Queue (setTimeout).

The simple memory I used was:

Call Stack
↓
Microtask Queue (Promise)
↓
Callback Queue (setTimeout)

That helped me understand why Promises execute before setTimeout.
