# Goal Getter!

### A basic goal setting app that allows you to break your goals down into simple tasks to complete.

## Features

#### * Allows you to associate tasks to goal
#### * Allows you to create goals tied to a user account
#### * User account is password protected so your goals stay safe

---
## Motivation
#### We love staying organized, so creating a simple tool to help facilitate that seemed like a perfect project.

---
## User Stories 

#### Users create an account and logs on, then creates goals and tasks (steps to acheive goals). Both goals and tasks can be edited or deleted.


#### *  screenshots:

#### ![siteScreenshot 1](./images/screenshot1.png) ![siteScreenshot 2](./images/screenshot2.png) ![siteScreenshot 3](./images/screenshot3.png)


---

## Technologies & Code Snippets
#### * HTML, CSS, JavaScript, Node.JS, Sequelize, PostgresQL, React
#### * Sample code:
#### 
```
const UpdateGoal = ({goal, fetchData}) => {
   const [goalTitle, setGoalTitle] = useState(goal.title)

      const handleSubmit = (event) => {
        
      GoalModel.update({
         ...goal, 
         title: goalTitle
      })
      fetchData()
   }

```


#### 
```

```

---
## Credits
#### Our teammates, our General Assembly instructors, TAs, and class mates were very helpful, as well as numerous video tutorials to better understand React. 

---

## Future development
#### Additions to come will be minor debugging, the ability to drag goals to reorder, and adding user color theme options.

