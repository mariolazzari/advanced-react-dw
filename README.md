# *Advanced React* by Developer Way

## Links
- YouTube [playlist](https://www.youtube.com/watch?v=qTDnwmMF5q8&list=PL6dw1BPCcLC4n-4o-t1kQZH0NJeZtpmGp)
- Advanced React [site](https://www.advanced-react.com/)

## Re-renders

## Making sense of *Higher Order Components*

YouTube [video](https://www.youtube.com/watch?v=OLFV1Ds_L8A)

Compsition technique very popular before hooks introduction.
They still can enhance:
- callback
- lifecycle
- intercept DOM events

### HOC definition

Advanced technique for reusing component logic

```ts
const withSomeLogic = (Component) => {
    // do some logic...

    // injects additional props to original component
    return (props) => <Component {...props} />
}
```



