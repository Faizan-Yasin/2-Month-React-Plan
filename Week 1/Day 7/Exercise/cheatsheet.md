# 🧠 Event Loop 

The JavaScript event loop is the system that lets JavaScript handle asynchronous work even though it runs on a single thread. That means JavaScript can only do one thing at a time, but it still manages things like timers, API calls, and user clicks without freezing.

When code runs, synchronous tasks go directly onto the call stack and execute immediately. If something asynchronous happens, like setTimeout or a network request, it gets sent to the browser’s Web APIs instead of blocking the stack. Once that async task is finished, its callback is placed into a queue.

The event loop constantly checks two things: if the call stack is empty, and if there is anything waiting in the queue. If the stack is free, it pushes the next queued callback into the stack for execution.

This cycle repeats forever, allowing JavaScript to feel “multi-tasking” even though it isn’t truly parallel.

# 🧠 Closures

A closure in JavaScript happens when a function “remembers” variables from the place where it was created, even after that outer function has finished running. This sounds strange at first, but it’s just how scope works with functions.

When you define a function inside another function, the inner function has access to the outer function’s variables. Normally you might think those variables disappear after the outer function ends, but they don’t if the inner function is still accessible. The inner function keeps a reference to that scope, so it can still use those variables later.

This is useful for creating private data and functions. For example, you can return a function that keeps track of a counter without exposing the counter directly.

Closures are also used in callbacks, event handlers, and functional programming patterns.

In simple terms: a closure is a function + the memory of its surrounding variables.

Even if the outer function is gone, the memory stays alive as long as the inner function exists.