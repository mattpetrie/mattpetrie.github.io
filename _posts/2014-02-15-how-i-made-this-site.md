---
layout: post
tagline: "Building a blog with Jekyll, Twitter Bootstrap, and GitHub pages"
tags : [jekyll, git, bootstrap, pygments, blogging]
---
To celebrate the launch of my new site and blog, I thought I should explain how I actually made it using Jekyll, Twitter Bootstrap 3, and GitHub Pages. While I was able to find handy guides for every step of the process with some Googling, I couldn't find a truly comprehensive guide in one place. It's too bad, because had there been one anyone with even very basic knowledge of HTML, CSS, and Ruby could have a powerful, simple to use, and totally decent-looking blog up and running in a matter of minutes, which is awesome! So I figured I would make a guide of my own to spare others the headaches I went through.

The rest of this guide assumes only that you have a [GitHub](http://github.com "GitHub") account, have [Ruby](https://www.ruby-lang.org/en/ "Ruby") installed on your computer, and have a basic understanding of how to use the command line and how HTML and CSS work.

###Create an empty git repository
First create and [new empty repository](https://github.com/new "New Repository") on GitHub named *username*.github.io, replacing *username* with your GitHub username.

###Install Jekyll
[Jekyll](http://jekyllrb.com/docs/quickstart/ "Jekyll") is GitHub's default blogging tool, which is great because it's both extremely flexible and easy to use, since you can easily update your site by pushing git commits to GitHub, just like you would any code project. Installing Jekyll is simple: on the command line just `gem install jekyll`. We're going to ignore the rest of Jekyll's setup instructions for now, for reasons that will become apparent soon.

###Clone Jekyll-Bootstrap-3
The only problem with Jekyll is that the default install is extremely barebones, and the default layout is, to be kind, *painfully* boring. [Twitter Bootstrap](http://getbootstrap.com "Twitter Bootstrap") to the rescue! Bootstrap makes it easy to build a decent looking site quickly, and thankfully there's even a git repository that not only integrates Bootstrap with Jekyll, but also comes with some handy page templates and a pre-built file scaffold for your site. Important note: While there is a GitHub repository called Jekyll-Bootstrap, it sadly hasn't been updated since February 2012 and is now very out of date. Luckily for us, there is [this awesome fork of Jekyll Bootstrap fully updated with Bootstrap 3](http://jekyllbootstrap3.tk/ "Jekyll Bootstrap 3"). 

Now we just need to clone the Jekyll-Bootstrap-3 repository to a directory named after our new GitHub repository, and point git to push to our new repository:

	$ git clone https://github.com/dbtek/jekyll-bootstrap-3 USERNAME.github.io
	$ cd USERNAME.github.io
	$ git remote set-url origin https://github.com/USERNAME/USERNAME.github.io.git
	$ git push origin master

Bam! Your new site is now up and running at *username*.github.io, where *username* is your GitHub username. At this point all of the remaining steps are optional. Jekyll-Bootstrap-3's included template pages have lots of handy information about how to go about using the scaffold it set up for you. When you are ready you can replace the included dummy pages with your own content, begin writing posts in [markdown](http://daringfireball.net/projects/markdown/syntax) using [Jekyll's format](http://jekyllrb.com/docs/posts/). The site is updated simply by making commits and pushing to GitHub:
	
	$ git add --all
	$ git commit -m "New blog post"
	$ git push origin master

###Set Up a Custom Domain
[GitHub's own guide](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) to setting up a custom domain for your site is pretty straightforward. Just save the domain (or subdomain) name in a file called `CNAME` in the root directory for your site. The only part that's a little ambiguous is how to change the settings with whoever is hosting your domain name. Basically, you want to look for the DNS settings in whatever sort of backend you have for your domain name host. Make sure the hosting is set to "DNS only". Find where you can create custom DNS records, and create a CNAME record pointing your subdomain (such as www.*yourdomain*.com) to *username*.github.io. (\*note the "." at the end - it is included and important). For a root level domain (no "www", etc), you will have to create an A record pointing to the GitHub's IP address, which is 204.232.175.78. Don't panic if your domain isn't working right away - sometime it can take up to a few hours for the domain name change to take effect.

###Code Highlighting with Pygments
Jekyll supports code highlighting using [Pygments](http://pygments.org/ "Pygments"), which makes code look like this:
{%highlight ruby %}
def foo(bar)
  puts "Hello #{bar}!"
end
{% endhighlight %}
However, Jekyll's own documentation doesn't explain the setup for Pygments adequately. First off, Pygments relies on Python to work it's magic, so you'll have to make sure you have Python installed on your system. Enter `python -v` on the command line to check which version of Python you have installed, or find more information on installing it [here](http://www.python.org/ "Python"). Next, you'll have to install the Pygments gem, `gem install pygments.rb`. You'll then want to navigate to the root directory of your site (*username*.github.io), and generate the pygments CSS file by entering:

	$ pygmentize -S default -f html > pygments.css

Enable Pygments by making sure you have `highlighter: pygments` in the /_config.yml file in the root directory for your site (this is the default parameter when using Jekyll-Bootstrap-3). Lastly, include the pygments.css file by adding the following to the head of your template file (usually /_includes/themes/theme-name/default.html):
{% highlight html %}
<link rel="stylesheet" href="/pygments.css">
{% endhighlight %}
Information about how to use Pygments in your markdown can be found [here](http://jekyllrb.com/docs/posts/). There are also several color themes that can replace the default Pygments theme simply by replacing the default pygments.css file. I'm using the Solarized Dark theme that I found [here](https://gist.github.com/nicolashery/5765395).

###Spruce Up Your Site with Custom HTML and CSS
The last step is to make your site your own by tweaking Bootstrap's default colors and layout by adding your own custom css file to the head of your page template. I pretty much rolled my own index.html page for my site, but for my blog pages, I borrowed heavily from Bootstrap's own [blog template](http://http://getbootstrap.com/examples/blog/).

That's it! If you're like me you might spend hours getting the design of your site just right, but following these instructions you can have at least a basic version of your own site running in practically no time. Happy blogging!