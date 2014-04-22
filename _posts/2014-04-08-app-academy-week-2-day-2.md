---
layout: post
title: "App Academy: Week 2, Day 2"
tagline: "Head of the Class"
tags : [App Academy, ruby, chess]
---
Ahh class inheritance. I was familiar with the concept before, but boy does it make life easier once you really start getting the hang of it. 

Today we started building our own chess programs. It seems like a simple enough game at first, but it actually turns out to be fairly difficult to model because each piece has it's own rules for how it moves, and on top of that there are several special rules for certain moves (pawn first moves, check moves, and more). It's a lot to keep track of, but once you start dividing the pieces into subclasses life becomes a whole lot easier

All pieces are pieces of course, but certain types of pieces have some moving characteristics in common. Bishops, Rooks, and Queens, for example all move in the same sort of way ("sliding" along a line), but on different axes. Once the basic class for pieces is built, all of the special characteristics of sliding pieces can be encapsulated in their own subclass, and then building the actual individual types is really just a matter of copying a tiny subclass that just changes what axes it moves on. Voila, three pieces in the time it takes to build one.

Tomorrow my pair and I will be moving on to dealing with board and game logic. After building all the pieces, I expect the rest of it to fall into place pretty easily - except for dealing check and checkmate conditions. That's going to take some figuring out. More on that tomorrow!