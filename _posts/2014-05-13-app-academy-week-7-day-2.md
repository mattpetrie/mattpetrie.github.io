---
layout: post
title: "App Academy: Week 7, Day 2"
tagline: "Backbone.js"
tags: [App Academy, javascript, backbone.js, rails]
---
Today we dove fully into developing a one-page MVC app using Backbone.js over Rails. The pace at which we've been learning JavaScript has been blistering: just over a week ago we were learning the basic fundamentals of functions and callbacks, and now we're already building complex applications using libraries like Backbone and jQuery. 

Backbone actually has wonderfully simple syntax once you get it down. Everything is organized into JS objects, which keeps your code neat and easy to read and intuitively arranged. Backbone's versions of models and view are somewhat different from Rails, but there's enough similarity where the conventions are pretty easy to pick up.

The real wonder of Backbone is that it lets you easily move a lot of processes that would traditionally be handled by the server to the client side. Since your pages only update individual parts of the page, remarkably little is demanded of your server, and you can do some pretty cool things with dynamically updating your pages with all that client side info. Backbone makes it simple to add listeners for all kinds of events on your page, making the kinds of dynamic updating you can do virtually limitless.

By the end of the day today we had built a "journal" app, that would catalog journal entries in an index sidebar that updates whenever posts are added, updated, or removed. You could also double click on the body or title of an individual post to "open" an text area to edit the content, and the content would update when the text area was "closed."  All of this without ever fully re-rendering a single page. Awesome!