---
layout: post
title: "App Academy: Week 6, Day 2"
tagline: "Please Return My Call"
tags : [App Academy, javascript]
---
Today was all about working with JavaScript's asynchronous nature. Basically, asynchronous functions don't wait for a response before just continuing on processing your code. At first, I was pretty confused by this concept - why wouldn't you want to wait for answer before moving on? But I think a (silly) real world example can really help it make sense.

Imagine you are making coffee for three people. One way you could go about this would be to make coffee for the first person, then ask them if they want cream and sugar, and then once they give you an answer, you could add the cream and sugar for them. Then you could make coffee for person number two and ask them if they want cream and sugar, etc. Obviously this is a really inefficient way to make coffee. It would be much better to just make the coffee for everybody at once, then ask everybody at once what they want in it. Then you can just add the cream and sugar whenever anyone answers with what they want. It doesn't even have to be person one followed by person two. Much better, right?

It's the same concept with JavaScript, but let's replace cream and sugar with server requests or user input. If JavaScript waited around for response before proceeding every time it made server request, and the server was responding slowly, the code would take a painfully long time to run, and your application would run at a snail's pace. It's much better to just make the requests you need and then just keep on truckin'. Once the response does comeback you can deal with the answer then.

That last little part is what in JS is called a "callback": a function within a function that doesn't get called until a later time, often when a condition is met (like a response or input received). Callbacks are obviously useful, but they can be confusing (at least they are to me) when you're still used to the usual Ruby flow of executing loops the evaluate the return value of a method. That won't work since callbacks don't return anything - you have to handle your process flow by entirely by passing around functions to other functions using callbacks. Yeesh.

By the end of today we had built a Towers of Hanoi game and Tic Tac Toe, similar to what we did in Ruby a few weeks ago, but using asynchronous JS functions and callbacks. I feel like I'm getting it down but it's definitely difficult to switch gears in such a big way from the Ruby way of thinking. Hopefully soon it will feel like second nature.