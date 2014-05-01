---
layout: post
title: "App Academy: Week 5, Day 3"
tagline: "Reflecting on the Small Stuff"
tags : [App Academy, ruby, rails, Sublime Text]
---
Today was primarily a catch up day: A two and half hour assessment on Rails in the morning, and solo time to finish Rails Lite in the afternoon. Since there's not too much new material to report on, I thought I'd take some time to mention some of the many small things that have come learned or come across in the past few weeks that have dramatically improved my workflow or ability to write code.

###Fish
I just discovered [Fish Shell](http://fishshell.com/), thanks to one of the TA's here, and have basically stopped using the default bash shell. Fish has amazingly powerful autocomplete features, colors all the things. For instance invalid command line commands are colored red, and turn blue once they're valid. It also has web based configuration, and it's super easy to write scripts. Now that much of my day is spent at the command line, this had improved things for me substantially.

###Sublime Text plugins
I still love [Sublime Text](http://www.sublimetext.com/) as my primary text edit. Two plugins that have drastically improved my life lately are [Sublime Linter](https://github.com/SublimeLinter/SublimeLinter3) with [RuboCop](https://github.com/bbatsov/rubocop) and [BracketHighlighter](https://github.com/facelessuser/BracketHighlighter). Thanks to these two, I no longer waste valuable time with errors caused by missing comma, closing brackets, etc. because I spot them almost immediately. Rubocop helps my code to look a lot prettier in general too.

###Better Errors and Binding of Caller
I just can't imagine building a Rails app without using [Better Errors](https://github.com/charliesome/better_errors) and [Binding of Caller](https://github.com/banister/binding_of_caller) anymore. The killer combo of *much* more detailed error messages and a Rails console in the browser not only makes tracking down errors much easier, but also makes understanding Rails much easier, since you can basically freeze time anywhere in your app and see exactly what is going on.

Okay, one brief closing note about the assessment today: taking it really gave me appreciation for how far I've come in reading specs and interpreting my own error messages. The test was basically building a small Rails app including hand-built authentication in a couple hours. I was feeling super confident and prepared going in to this one - I had practiced ad nauseum this week. However, I ran into an unexpected wall on the actually test because of an error that at first seemed very strange. Without revealing too much, my overconfidence had caused me to rush and I had written a solution that had the correct functionality, but not organized quite in the way that the tests were expecting.

A couple of weeks ago, I would have been completely and utterly stuck. Now, though, I was able to work through what the possible problem was through process of elimination pretty quickly, and read through the specs and confirm my suspicions. With a few (panic filled) minutes, I was back on track. It was that, perhaps even more so than actually passing the test, that made me feel like I am really getting somewhere as a Ruby developer.