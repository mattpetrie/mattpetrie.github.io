---
layout: post
title: "App Academy: Week 2, Day 3"
tagline: "Checkmate"
tags : [App Academy, ruby, chess]
---
We finished building chess in Ruby today. It was particularly fun and satisfying project because at the end, with a little help from unicode characters and the Colorize gem, you have a pretty decent looking and very playable little game. 

This project definitely gave me appreciation for how far we've come. I couldn't imagine taking on a project like this 10 days ago. Now we were able to complete it with fairly little help. Awesome. 

After completing all of the pieces yesterday, today we moved on to game logic and the actual display of the board. It's trickier than it sounds: check situations can get pretty complicated in chess, so careful planning is necessary to that you don't end up with convoluted methods in your program. Ruby makes this a heck of lot easier by making it a breeze to divide everything into simple methods that each don't try to do too much. Figure out what operations you need, get them to work one by one, independently from one another, and then sew the whole thing up. This is the Ruby way.

It was tough to be patient, especially with a game, with building everything under the hood properly before moving on to the actual game UI. I think everyone wants that satisfaction of having something show up on the screen that they can interact with. However, it's really important to build your program on a solid foundation of well thought out class, subclasses, and methods. 

Your patience does come with a reward though: once the individual parts work it's remarkably fast and easy to put them all together. It's pretty cool to discover that all those tiny little methods that you wrote that do just one thing, can suddenly be assembled into something quite advanced that's capable of doing lots of things - maybe even things beyond what you originally intended, since each piece can easily be modified or re-purposed.

Speaking of re-purposing, tomorrow it's on to checkers, which I suspect I'll be able to create using many of the same, or very similar methods to the ones I made for chess. 