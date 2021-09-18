# Go-tech App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you should run scripts below in defined order:

### 1) `json-server --watch db.json`

Runs mock-server to get initial data and to save the result on from submitting. 

### 2) `npm start`

Runs the app in the development mode.

## POSSIBLE SOLUTIONS

git history keeps all the variants of application's data flow.

### Uncontrolled 

A first workable variant is uncontrolled (stateless) components of form in react.\
This solution looks simple, but not really appropriate in case of custom input fields such as 'Other' radio input along with plain text input.\
This case there's bit complicated and non-universal logic on submit handling (onFormSubmit() in QuestionnairePage.jsx).

### Controlled 

A second workable variant is controlled (stateful) components of form in react.\
This solution looks bit better because it keeps all the states of input fields in one place (answers in QuestionnairePage.jsx) from where it can be used in any place.\
This way complex logic of custom inputs can be hidden inside relative corresponding component.\
The biggest disadvantage of this solution is that it forces re-rendering of all components in the form when common state is changing because the state is in the common parent component.\ 

### Controlled by redux state manager 

A third workable variant is controlled (stateful) components of form in react by react-redux state manager.\
This is the most appropriate solution because all state's manipulations perform outside the components.\
It's a bit more complex solution regarding configuration, but it can be maintained in one especially defined place.\

## additional notes

server.js was used in order to achieve possibility to save array directly in the 'answers' endpoint of db.json. Current solution is adding answers one by one.\
similar issue: https://github.com/typicode/json-server/issues/216

it might be better to use context API to handle state of application cause redux fits for more complex apps with wide range of stateful independent parts.