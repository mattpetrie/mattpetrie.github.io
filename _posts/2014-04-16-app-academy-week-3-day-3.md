---
layout: post
title: "App Academy: Week 3, Day 3"
tagline: "Making SQL and Ruby Play Nice, the Easy Way"
tags : [App Academy, ruby, rails, sql]
---
After two days of writing out SQL queries by hand, we finally got to dabble in the magic that is ActiveRecord today - and build our first (very primitive) Rails app!

As tedious as it could sometime be this week, I'm glad that we got some experience under our belts writing SQL queries directly, and learning how to link Ruby and SQL databases ourselves, since peeling back the curtain on ActiveRecord a bit definitely helped me to understand the basic concepts of AR associations quicker and better.

###belongs_to, has_many, has_many_through
Our project for today, writing a simple URL shortener akin to bit.ly that could be run from the command line, was really just a foil for getting some practice creating some AR associations in Rails. 

I found the basic building blocks of those associations, belongs_to, has_many, and has_many_through, to be pretty intuitive for the most part. Was actually impressed at how intuitive it was. Sometimes it can be a bit confusing to think about what exactly the relationship between to things is, especially when the relationships aren't as clear cut as just one instance of a thing belongs to a something which can have many of that thing (example: a class has_many students, but a student also has_many classes), but usually once you think it through the path forward is really clear.

I gained a lot of appreciation for just how powerful AR really is, and how amazing it's ability is to infer things like class names and foreign keys. When building our app, we started off writing out the associations explicitly, and then experimented with just how much we could remove with ActiveRecord still getting it right. 

It was pretty cool to realize that something like:

    has_many :users, 
             class_name: 'User', 
             foreign_key: :user_id, 
             primary_key: :id

could often just be rewritten as:

    has_many :users

However, I'm really glad to have the foundation to understand at least a little bit about what's happening when AR makes those kinds of inferences, and to know how to override them when necessary. 

Right now I'm feeling conflicted between not wanting to use my sense of awe at how easy and intuitive Rails makes it to perform many tasks, and being desperately curious to know how it all works. Considering that by the end of the week we're going to be building our own version of ActiveRecord, I'm pretty confident that any remaining sense of mystery will soon be lost.