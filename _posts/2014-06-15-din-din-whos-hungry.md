---
layout: post
title: "Din Din - who's hungry?"
tagline: "My App Academy final project"
tags: [App Academy, Backbone, Rails, APIs, jQuery]
---
I broke my 33-day Github streak today, which, not coincidentally, is also about how long ago at this point I started my final project at App Academy. App Academy has been easily the most challenging thing I have ever done, but I can also unequivocally say that even given that context, the two weeks of final project time were the hardest I've ever worked on anything. 

Pretty much my consisted of the following: Sometime around 8am, wake up. Make a (very) large pot of coffee. Write code for the next 20 hours or so. Try to remember to eat at some point. Rinse. Repeat. I'm very proud of my resulting project, [dindin.io](http://www.dindin.io). It's a recipe search site that helps you find recipes using ingredients you already have on hand. You can use it to perform basic recipe search, but you also have a virtual "fridge" that you can store ingredients in. When you have ingredients in your fridge, the search results and their ingredients sort themselves based on what you have.

Many people choose to make clones of popular sites like Trello or Reddit for their final projects. There's nothing wrong with that - those sites have a lot of complex functionality and if you can build a close copy of them in two weeks all by yourself you've pretty amply demonstrated your skills as a developer. I, however, chose to do something more original, which was a huge risk. I had no road map to follow.

When I came up for the idea for Din Din, I din't think it was that out of the ordinary, but as I searched for sites that had the same functionality as research for my own project, I couldn't find anything that actually had the exact functionality I wanted. I also wanted to build something that was easy to use, but had a fun, highly interactive UI. That's when I came up with the idea to have ingredients represented by colored tiles that you could drag and drop around the screen.

For Din Din, I chose to use a Ruby on Rails back end interfacing with a front end built using Backbone.js. Backbone's models, collections, and views were a near perfect fit - I wanted to have several components that could be rendered on the same page but also used independently of each other. A little tweaking of Backbone's view class to make it a "composite view" that could render several "subviews" did the the trick. Backbone's collections were great for representing long lists of ingredients and recipes.

I also heavily relied on jQueryUI's .sortable interaction to achieve my drag-and-drop functionality. This went hand in hand with what I mentioned before about having different elements on the page that could be rendered together but also seperately. In addition to handling the drag animation effect, .sortable's receive and remove methods helped me code up each componet in such a way that they have the logic to understand what to do when they receive or remove elements, while remaining agnostic of other components on a given page.

While I'm still continuing to add improvements to Din Din, completing my final project means I'm also officially on the market as developer. So if you are an employer and reading this and like what you see, [let's talk](mailto:matthew.petrie@gmail.com). You can also check out my whole portfolio [here](http://www.mattpetrie.io/#portfolio).