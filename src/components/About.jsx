import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h2>About Section</h2>
      <Link className='btn btn-secondary' to="/Task-Manager">Go Back</Link>
        <h3>React Task Manager</h3>
   <hr/>
      <p style={{border:'1px solid white', padding: '12px'}}>
        Manage Your daily Task with Task Manager.
This App is conigured with Progressive Web Application Which can be <mark> Downloaded As APP</mark> in any Device such as Andriod, iphone, Desktop or Laptops.

This Project Uses Following Technology:

 Progressive Web Application
  "A progressive web application, or progressive web app, is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly. It is intended to work on any platform with a standards-compliant browser, including desktop and mobile devices."
   Install this app on your Device and it will work same as other Apps.

 Create React App
```
npm create-react-app Task-Manager
cd Task-Manager
npm start
```
 React
   React Hooks, States, props
 Routes
 JSX
 HTML & CSS


 Deployment - Github pages
The project is deployed on Github Pages


 MISC:
React Developer Tools
ES7+ React/Redux VS code Plugin.

 Thank you.
 My Portfolio - [Mayank Shukla](https://ms-mayank.github.io)
</p>
<hr/>
    </div>
  )
}

export default About