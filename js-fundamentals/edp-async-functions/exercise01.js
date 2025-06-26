// JS Engine -> *.js -> interpreted
// JIT Compilation
// Single Execution Thread -> Event Queue: System Events, User-initiated events
//                            Event Loop -> Callback: i. simple ii. async
let timerId = setInterval( () => console.log( 'Hello World' ), 1000);
setTimeout( () => clearInterval( timerId ), 5_000);