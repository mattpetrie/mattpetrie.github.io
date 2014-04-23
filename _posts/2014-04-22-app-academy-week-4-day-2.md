---
layout: post
title: "App Academy: Week 4, Day 2"
tagline: "Assuming Control"
tags : [App Academy, ruby, rails]
---
Today was all about the controller - the middleman in the Model-View-Controller paradigm that is so central to Rails (why do they call it "MVC" anyway? Shoudn't it be "MCV"?).  While models tell your program what kind of data it has and what it can do with that data, it's the controller that does all the heavy lifting - receiving requests from a user, and deciding what kind information the user is looking for and what to return (the actual displaying of the content is handled by the third component, the view, more on that tomorrow).

Hand in hand with controllers are routes - the actual URLs and HTTP request types that lead to the various controllers and actions contained within them. We got lots of practice today with both controllers and routes by building a simple contacts manager app today. Since we haven't officially gotten to views yet, all of the controller actions returned JSON instead of rendering views, but it was nice to get a little more practice with JSON as well.

###Objects at REST
Lots of emphasis was placed on keeping our routes RESTful. There's [actually a fair amount to REST](http://en.wikipedia.org/wiki/Representational_state_transfer) architecture, but the heart of it is the idea that all actions in the application should be thought of in terms of CRUD (create / read / update / destroy) actions on resources. These principles make the conventions of the basic controller actions and their routes pretty clear for virtually any kind of thing you want to model. Want to view a user? You probably want to use a HTTP GET request to show (read) a user page. Want to remove a user? That's going to be a DELETE request to a destroy action.

We quickly learned today that the same sets of controller actions are so common that we'll soon have them down as practically muscle memory, and today's exercises definitely gave us plenty of practice to help us get there. Tomorrow it's on to views, which means finally rendering actual, real live web pages. The long wait is over! I can't wait.