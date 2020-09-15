This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### MERN Projects
# Mongoose, Express, React and Node

At the [landing page](http://absurdlyeloquent.github.io/mern-project) you are immediately redirected to '/projects' where all the projects are displayed.


You have the option to click on a project, which displays all the project's attributes in accordion-style, plus an `EDIT` and `DELETE` button.

Clicking the `EDIT` button will take you to a form to edit the attributes of the project at the path '/projects/<project-id>'
Upon submitting, a `PUT` request will be sent, updating the project.

Clicking the `Create` button on the left side of any page will take you to '/projects/new' where a blank form is displayed. Upon submitting the form, a `POST` request is sent, adding the new project to the database

The `Home` button will take you back to the homepage from any page
