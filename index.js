// Events :- Run Events.js file to check about emit event
//Buffers
//filesystem
//filesystem promise
//streams
//pipes
//http
//threadpool
//microtaskqueue
//timerqueue

//Notes for even loop
// 1)If we have only microtask queue we finish the next and promise ,and if we have a next in promise then also we complete the promise fisrt if we are in promise and go to nexe tick
// 2)if we are in timer queue and if there is a call abck to microtask we breeak the timer as the every completion of an execution in timer it checks weather microtask is empty or not and go to microtsk queueMicrotask(next,promise) and comeback to timerqueue
// 3)regarding I/o polling is when we come from timer queue to i/o queue it is still empty because fs is a i/o but it takes time to complter and reach to i/o queue meanwhile the pooling of fs is not completed it goes to check queue and after completing check queue it reaches the clos que and again microque and again time que and while pooling gave a callback functiont to i/o now it wiil be executed into picture and see the fs system done the job of reading a  file then it executes the i/oqueue
