# JavaScript React Intro Assignments 2

# Ex. 1: Date Fetcher
Create a React component called `DateFetcher`.  The `DateFetcher` has a state variable that is used to store the UTC date.  When the `DateFetcher` is initially loaded into the browser it displays the following:

![](./docs/ex1a.png)

When the button is pushed, the current date in UTC format is displayed.  Example:

![](./docs/ex1b.png)


Place this component in your Main component in your Student directory:

```
export const Main = () => {
  return (
    <DateFetcher />
  )
}
```

Always keep the DevTools console open (Ctl+Shift+I) and remove any errors or warnings.

When you are finished create a PR with the following title: `Ex. 1: Date Fetcher`.

# Ex. 2 Ten Counter
Create a React component called `TenCounter` that displays the number of times a button has been pushed.  When the counter reaches the value of 10, it resets to 0.

![](./docs/ex2a.png)


![](./docs/ex2b.png)

Place this component in your Main component in your Student directory:

```
export const Main = () => {
  return (
    <TenCounter />
  )
}
```

Always keep the DevTools console open (Ctl+Shift+I) and remove any errors or warnings.

When you are finished create a PR with the following title: `Ex. 3: Up Down Counter`.

# Ex. 3 Up Down Counter
Create a React component called `UpDownCounter` that increments or decrements the value of the counter.  This component should have one state variable and one button handler function.

![](./docs/ex3a.png)

![](./docs/ex3b.png)

![](./docs/ex3c.png)

Place this component in your Main component in your Student directory:

```
export const Main = () => {
  return (
    <UpDownCounter />
  )
}
```

Always keep the DevTools console open (Ctl+Shift+I) and remove any errors or warnings.

When you are finished create a PR with the following title: `Ex. 3: Up Down Counter`.

# Ex. 4 Min Max Counter
Create a React component called `MinMaxCounter`.  Copy the `UpDownCounter` from the previous example and add Min/Max values:

![](./docs/ex4a.png)

When component has been loaded into the DOM for the first time all values are reset to 0.

The Max counter stores the highest positive number produced when the up button has been pressed.  The Min counter stores the smallest number produced when the down button has been pressed.

![](./docs/ex4b.png)

![](./docs/ex4c.png)

Always keep the DevTools console open (Ctl+Shift+I) and remove any errors or warnings.

When you are finished create a PR with the following title: `Ex. 4: Min Max Counter`.

# Ex. 5 Number Builder
Create a React component called `NumberBuilder`.  The `NumberBuilder` builds a string of numbers that represent how many times the Add Numbers button has been pressed. The Reset button clears the Numbers.

Initial load:

![](./docs/ex5a.png)

Add Number button pressed 7 times:

![](./docs/ex5b.png)

Always keep the DevTools console open (Ctl+Shift+I) and remove any errors or warnings.

When you are finished create a PR with the following title: `Ex. 5: Number Builder`.

# Ex. 6


# Ex. 7


# Ex. 8


# Ex. 9


# Ex. 10