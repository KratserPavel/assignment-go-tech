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
 