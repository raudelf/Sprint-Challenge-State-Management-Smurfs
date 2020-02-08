1. What problem does the context API help solve?

It solved the the problem of having to pass down props from component to component (prop drilling)

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: are essentialy events that the reducer listens for. They Let the store know how to update state.

Reducers: are functions that are activated by actions to return an updated form of state.

Store: is function that contains the Application State for the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between Application state and Component state is that Application is a global version of state. Whereas Component state is only found in a local component.

A good time to use Application state is when you need to reference the same state data throughout various components. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a type of middleware that takes care of aysnc actions in redux. It lets the 'action-creators' return a function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I really liked the way the context API works, it seeems a lot more simple than Redux. However, I actually dont mind it. I kind've had fun with Redux a lot because of how challenging it was at first, but once it made sense it was kind've fun lol.