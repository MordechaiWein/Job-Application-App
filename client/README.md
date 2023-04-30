# New Career Network (phase-4 final project)

## Introduction
 
My name is Mordechai Wein. I created this app for my phase-4 project at Flatiron School. The app has a front-end written in React.js, which talks to a back-end written in Ruby on Rails. The app contains three database tables, jobs, users, and applications in a many-to-many relationship to fulfill project requirements. For example, each application in the applications joins table is associated with a particular user and job. Each model utilizes various validations, and each controller uses conditional logic to determine what to send back in the response.

## Description 

When users open my application, they will be greeted by the sign-in page. A user can switch back and forth from a sign-in to a sign-up page but cannot enter the app. To prevent a user from changing the URL to access a different page, my application has a condition that as long as the user state is set to false, the login page alone will be rendered. 

When a user signs up to my website, b-crypt will hash and salt the password. When a user logs in, the back end will check to see if the entered password matches its encrypted counterpart. If it does, the user will be logged in. 

To log out, the user can click the logout button, which will destroy the user id key from the session hash, set the user state to null, and the user will be logged out. If the user logs in, leaves the website, and returns, they will be auto-logged in. Upon mount of the application, a use effect will trigger an HTTP request. If the back end can find the user based on the user id key from the session hash, it will send back the user; the state will then be updated to the received data, and the user will be logged in.

Aside from the authentication I have described above. I have done more to keep my application clean and secure. I have added various validations to my models to prevent null values and incorrect data. These include validations that will only allow unique usernames. Validations incorporating regex that will make sure phone numbers and emails are syntactically correct and more. If any of the data entered in a website form is incorrect, errors will appear on the page for a better user experience. To prevent Mass assignment vulnerability, I have incorporated strong parameters, and I have created a before action to prevent any potentially  malicious user from accessing most backend routes if they are not logged in.

Once the user has been authenticated and enters the website, they can access many different features. There is a search bar with three client-side routes, home, jobs, and admin. A user can apply for different jobs, and when the user has applied, the applications will appear on their respective home pages. Users can access full CRUD functionality and update, delete, create, and read their applications. In addition, because of the app's complexity, I have utilized React context and prevented excessive prop drilling.

When the user reaches the admin page, they will be greeted with a form where they can request to become an admin. If a member is an admin, the admin page will provide a form where they can add jobs to the website.

## credit

Some of the CSS in my project was adapted from Flatiron School labs. For this, I would like to give credit to Flatiron School.
