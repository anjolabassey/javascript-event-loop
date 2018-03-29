1. Multi-tasking is the process that allows an operating system to perform more than one task(program) simultaneously, these multiple tasks share common resources such as CPU and memory. The operating system is able to keep track of where you are in these tasks and go from one to the other without losing information.

2. The differences between mulit-tasking and multi-threading is that;
with multitasking; programs are executing concurrently and sharing computing resources.
with multithreading; a single program is running concurrently, multiple threads are allowed and are running simultaneously and sharing resources within the same process.resources

3. An anonymous function in javascript is a function that is dynamically declared using function operator instead of function declaration at runtime. 
It is declared without any named identifier to refer to it, and they can be arguments to other functions
They are created at runtime.

Below is an example of an anonymous function

var anon = function()
{
  alert("This is an anonymous function!");
}
anon();

4. An asynchronous function is non-blocking. i.e does not depend on each other's  outcome. We pass a callback function into an asynchronous function(either through events or AJAX requests) and will be called once the task is completed.

5. A web worker is a JavaScript running in the background independently of other scripts, without affecting the performance of the page. It is a is a simple means for web content to run scripts in background thread(creating new threads for javascript code to run in).


