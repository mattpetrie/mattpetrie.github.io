---
layout: post
title: "App Academy: Week 4, Day 2"
tagline: "Are you authentic?"
tags : [App Academy, ruby, rails]
---
Making sure users really are who they say they are is tricky business. I can see why in the production world, most people leave it up to the pros to handle authentication for them, rather than attempting to roll their own. There's just so many potential holes to plug it's easy to miss one. Rolling our own authentication and authorization is exactly what we attempted to do today, though, continuing to build upon our 99cats project from yesterday. 

Rule #1 of user authentication: **never, ever store unencrypted passwords in your database** (if you do this, please smash your computer now with your own face). Thankfully, Rails has a hand gem, BCrypt, that makes encrypting passwords easy - just another example of the myriad ways Rails makes life easier so you can focus on the task at hand.

Okay, so now you have passwords for your users, but how can you keep track of whether or not a user is logged in, and know that the user is really who they say they are? That's where sessions, and authorization tokens come into play. By creating a "session" when a user logs in, and assigning that session a (once again encrypted/randomly assigned) authentication token that is also destroyed when the user logs out. No token, no access. Problem solved (sort of).

For our 99cats app, we ended up adding functionality for a user to be logged in from multiple devices simultaneously (using multiple tokens), and also to view what devices were currently logged in, and log them out remotely if desired. We also added some extra callbacks and validations to make sure that for example, anyone can view the list of cats, but only logged in users can request to rent a cat, and only cat owners have the ability to approve or deny requests for their cats. A lot to keep track of!

Just for kicks, I also added randomly generated cat pictures from google images for my cats, using the [image_suckr](https://github.com/maurimiranda/image_suckr) gem. Fun!