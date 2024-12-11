## Events
- The change in the state of an object is known as an Event
- Events are fired to notify code of "interesting changes" that may affect code execution.
1. Mouse events (click, double click etc.)
2. Keyboard events (keypress, keyup, keydown)
3. Form events (submit etc.)
4. Print event & many more

### NOTE: First preference always goes to js event handler code NOT to a inline event handler

### NOTE: This is not allowed to add more than one handler on single event

## Event Object
- It is a special object that has details about the event.
- All event handlers have access to the Event Object's properties & methods.
- `event.type | event.target | event.clientX | event.clientY`
```js
node.event = (e) => {
    // handle here
}
```
## Event Listeners
- The addEventListener() method is the recommended way to register an event listener.
- It allows adding more than one handler for an event. This is particularly useful for libraries, JavaScript modules, or any other kind of code that needs to work well with other libraries or extensions.
```js
// Add listener
node.addEventListener(event_type, handler/callback_function/listener)

// Remove listener
node.removeEventListener(event_type, handler/callback_function/listener)
```
### NOTE: The callback reference should be same to remove