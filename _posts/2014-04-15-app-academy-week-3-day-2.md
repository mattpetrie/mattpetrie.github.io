---
layout: post
title: "App Academy: Week 3, Day 2"
tagline: "Making SQL and Ruby Play Nice, The Hard Way"
tags : [App Academy, ruby, sql]
---
Having practiced our fair share of inner joins, outer joins, self joins, subqueries, and virtually every other kind of SQL query you can think of yesterday. It was finally time to start experimenting with integrating SQL with Ruby today.

We started by building a mock question forum application, where students could submit questions, reply to questions, and even "like" questions or replies. This gave us ample fodder for building out several database tables and coming up with lot of creative ways to query them. We built all of the interactions between Ruby and the database virtually from scratch, directly inserting all of the SQL queries into our code and interpreting the output into hashes using Ruby's SQLite::DataBase class methods.

My pair and I even built a neat little module for saving information to from any of our classes to the database, which you can [check out on GitHub](https://github.com/doesthisonework/questions_app/blob/master/save.rb).  It was pretty fun to build this in such a way that you could really use it for virtually any Class that needed to save instances of itself to an associated database, and it would handle figuring out what the appropriate table name and rows were for you without any additional input from the developer. For a first serious foray into building a module, I was pretty proud of this one.

Of course, having to build all of this from scratch was just to torture us so we would appreciate the big reveal (that I think we all knew was coming) - that Rails has it's own handy tool, ActiveRecord, built in that will handle most of the SQL stuff for you. Still, I'm glad to have gain some fundamental understanding of how Rails, Ruby, and ActiveRecord go about the task of database management, rather than just trusting in the 'magic', and I know that we'll have more opportunity to really get into the nitty gritty of how it all works when we basically rebuild ActiveRecord from scratch later this week. 

Speaking of Rails, tomorrow is *finally* the day where we get to work on our first simple Rails projects. I really can express how much I'm looking forward to finally applying all the fundamental skills we've learned over the past couple weeks to building some actual web apps.