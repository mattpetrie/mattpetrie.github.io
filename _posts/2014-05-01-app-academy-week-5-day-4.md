---
layout: post
title: "App Academy: Week 5, Day 4"
tagline: "Getting Testy"
tags : [App Academy, ruby, rails, rspec]
---
It seems like we've got the basic components of your typical Rails app pretty well down at this point, so today was all about adding RSpec and Test Driven Development to our workflow. We built a Reddit clone, complete with subs, posts, comments, and votes.

I love TDD. Even though it feels a bit tedious and repetitive at first, I'm sold on the notion that is more than makes up for the investment in the time it saves you debugging your code. Plus, the process of writing the tests for a difficult problem often make the solution clear.

We also added some useful Ruby gems to repertoire. [FactoryGirl](https://github.com/thoughtbot/factory_girl) makes generating data for your tests a breeze. Then there's the awesomely fun [Faker](http://faker.rubyforge.org/) gem, which handles generation of dummy values for everything from names to addresses, to company catch phrases (my favorite so far: "Future-proofed neutral ability"). Then there's the [Draper](https://github.com/drapergem/draper) gem which simplifies adding "decorators" to your models. Basically, this comes in handy when you want to present things like dates, or set of links in a certain format, but don't want to clutter up your views with a bunch of Ruby code to format the output.

Every day we're adding more things to Rails bag of tricks. Tomorrow marks our last day of plain 'ol Rails work before officially jumping into JavaScript. I'm looking forward to that part of the curriculum because I have some prior experience, but considering I haven't written a JS function in more than two months now, it will be interesting to see how much it comes back to me and how quickly.