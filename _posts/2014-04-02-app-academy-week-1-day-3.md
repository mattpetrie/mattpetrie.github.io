---
layout: post
title: "App Academy: Week 1, Day 3"
tagline: "Clean Code == Clear Mind"
tags : [App Academy, ruby, clean code]
---
If you haven't watched [Refactoring: From Good to Great](http://www.confreaks.com/videos/1233-aloharuby2012-refactoring-from-good-to-great) by Ben Orenstein and are obsessed (like me) with writing clean code, stop everything and go watch it. I can't remember the last time something so instantly and dramatically improved not just the quality of my code, but my very ability to solve problems in code.

That's the thing: clean code and efficient problem solving are connected. If break your code down so that everything is organized logically into classes, and your methods each do one thing, you already broken the problem down into its essential parts. It so much easier to write a method that does *one thing* and make it *do* that one thing, and then move on to the next one, rather than running around in circles trying to think about how you're going to connect the pieces.

Make the pieces work. Then all you have to do is put them together, and you already *know* the pieces will work together, because you already know they do their *one thing*. I really cannot emphasize enough how much grasping this concept suddenly made everything else so much clearer.

###Hangman, or how to make a simulation without even realizing it
Our task for today was writing programs that modeled two classic simple games: Mastermind and Hangman, each with a human player playing against a computer player. The challenge was to ensure that the player classes were interchangeable. For example, `make_move(player)` shouldn't care whether a human player or computer player is being passed in. This really enforced making sure that all of the logic was being placed into the appropriate class.

But wait a minute... if the game treats human players and computer players the same... which means... The computer can play against itself! Since all the decision-making logic is in the `ComputerPlayer` class and not `Game`, you can just pass two computer players into your game and they'll face off.

This was particularly cool to see with Hangman, which, once we added in some logic for selecting the best possible letter to guess, the computer could solve with incredible efficiency. In most simulations the computer was able to solve even quite long and obscure words without ever making a wrong guess (it *could* make a wrong guess of course, it just rarely did).

I'm exhausted after working all day on both of these programs. My pair and I put in several hours after official class ending time to perfect our Hangman game, but it was worth it. Tonight I'm going to sleep knowing that I'm waking up a much better programmer than I was a day ago. And that means I'll be sleeping well.