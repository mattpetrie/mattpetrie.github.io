---
layout: post
title: "App Academy: Week 4, Day 5"
tagline: "Rock on"
tags : [App Academy, ruby, rails]
---
Solo day today. We built a music app from the ground up in Rails. It lets you list bands, albums, tracks, and make notes on tracks - basically everything but actually play music. While I'm glad we're not solo every day, it's nice to have the occasional day working alone to really test your skills. And there were lots of skills to test today building an app from scratch: models, views, controllers, helpers, user authorization and authentication - we'd have to do it all.

I really felt pushed to my limits by this project - tried my best to not refer back to previous work and figure everything out on my own, although I did have to take peek at my notes a few times. The end result was pretty satisfying though. This is really the most interactivity we've built into a single project so far. By the time I was done you could add new bands, albums, or tracks, as well as edit all of them. The app kept track of the associations between all of those things, and even handled dependent destruction (if you delete band, all of its albums and their subsequent tracks are removed as well).

As a bonus feature, we also implemented an automated email using ActionMailer. This was my first try at sending email through Rails and it was fun to get a feel for it. There was also an opportunity to get even more familiarity with authorization techniques. The email we set up was for account activation: when a user creates an account, they are sent an automated activation email with a link including an activation token in a query string. When the user clicks on the link in the email, Rails compares the activation token in the link with the one saved in the user's account, and if they match, marks the account as activated. Cool.