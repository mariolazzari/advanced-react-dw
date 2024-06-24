# Advanced React by Developer Way

## Intro to re-renders

YouTube [video](https://www.youtube.com/watch?v=qTDnwmMF5q8&list=PL6dw1BPCcLC4n-4o-t1kQZH0NJeZtpmGp)

## React life-cycle

- Mounting: React creates component for the 1st time.
  - Instance: initialize component
  - State: initialize its states & hooks
  - DOM update: appends component to DOM
  
- Unmounting: React detects component not needed
  - destroys component & its states
  - remove component from DOM

- Re-rendering: React updates existing component with new data
  - State: each state changes fire a component re-render (inculding nested components)
  - Custom hooks: a component and all of its hooks behave as a single entity
  - Props: props does NOT trigger re-renders! (Only with React.memo)

## Avoid massive re-renders

- *Move state down*: isolate as much as possible states in smaller components
- Only small parts of parent component are involved by state changes now


