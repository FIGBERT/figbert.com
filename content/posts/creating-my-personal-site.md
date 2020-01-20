+++ 
date = "2020-01-10"
title = "Creating my Personal Site"
slug = "creating-my-personal-site" 
tags = ["WebDev", "Hugo", "Go", "Markdown"]
categories = ["WebDev"]
series = []
disable_comments = true
+++

## Introduction
---
Nowadays, building your own website is ludicrously easy. Products like [Wix][1] and [Squarespace][2] have brought 
personal sites into the mainstream, and just about every business and entrepreneur have some sort of online presence.

Building a website for myself has been a long-term goal of mine, and as I was recently commissioned to build a few 
websites, I decided to take the opportunity to stop procrastinating and establish an online presence for myself.

## First Attempt
---
I initially programmed sites in vanilla HTML/JS/CSS, but after reading a few articles such as [this analysis of frameworks
 going into 2020][3] and [this comparison of popular JS frameworks][4], I decided to build my sites entirely in React 
(which I learned from the awesome [Codecademy series][5]).

Development on the site went smoothly for around a month. By commit #4, I created a homepage with a terminal animation 
using the [react-typewriter package][6]. By commit #6,  I created a navbar with a [hover dropdown][7] and links to all 
main site pages. By commit  #10, I had most of the main pages' content completed.

It was then however, that I hit a roadblock that halted development on the site for a month: I couldn't get the footer 
to react to the page content. I wanted the footer to stay at the bottom of the viewport if the content doesn't fill the 
page, and go the bottom of the content if its larger than the page. Seems simple? That's what I thought. However, after 
hours on hours of programming and research ([1][8], [2][9], [3][10], [4][11]), I had made no progress. I set the project
 aside for a while, and committed to finish it Soon™.
## Second Attempt
---
### Introduction to Hugo
A week or so later, I was browsing the internet when I stumbled on this article on freeCodeCamp: [How to Create Your 
First Hugo Blog: a Practical Guide][12]. The article goes in-depth into the ease-of-deployment and features of Hugo that
 make it the ideal website framework for static sites and blogs:

>You write content in Markdown, a format that lets me use my favorite editor (Bear) to write posts.

I had planned to incorporate Markdown into the React version of the site, but was afraid to do so because using 
`dangerouslySetInnerHTML` exposes users to cross-site scripting attacks. Hugo removes that risk, making writing blog 
posts ridiculously simple.

>First, it has Go at the core, which is known to be a very fast language. 
>And in the Go ecosystem, there’s no concept of 100 megabytes dependencies. 
>Things are made to be as fast as possible. Plus, Hugo does not need to do 
>some of the fancy stuff that is needed when using fancy technology. 

React is fast, but [Go is faster][14]. Nobody likes to wait for a website to load.

>Hugo is pretty darn flexible. I started my own blog with an open source theme, 
>then changed it completely over time. Sometimes I want to do things in my website 
>that are out of the scope of a simple blog, and Hugo allows me to create those things.

There are a bunch of open-source themes to start from (this site uses a modified version of the [Coder][13] theme), 
licensed under open-source licenses which allow for modification.
### Website programming
Thus, my journey with Hugo began. I created a new branch in my repo, and initialized a new Hugo site. As the freeCodeCamp 
article suggests, if you intend to modify your theme you should not access it as a git submodule but rather as a direct 
download to the themes folder (that way you can push changes online, rather than having to create a pull request to the 
public repository).

The Coder theme comes with a whole host of preconfigured components, which took some time to get familiar with. Diving 
in headfirst, I started by customizing the buttons underneath my name on the homepage.

>![The row of buttons on the homepage][17]
>
>*The row of buttons on the homepage*

The icons are declared in one of the above `.toml` files, and the process is fairly simple. The one challenge I faced 
was a simple lack of information, though I figured it out with some trial and error. The icons appear to be from a 
some version of [Font Awesome icons][18], but I have no idea where the icons are sourced from. In `.toml` files, 
**icons** like `envelope` and `car` are referenced by setting `icon = fas fa-ICON`, but **logos** such as 
`keybase` are referenced by setting `icon = fab fa-COMPANY`.

However, referencing icons in Markdown is more complex. In order to do this, create a new directory named `shortcodes` 
inside the `layouts` folder in the root directory. Inside the new directory, create two new files:

`fab.html`
```html
<i class="fab {{ range $element := .Params }} fa-{{ $element }} {{ end }}"></i>
```
`fas.html`
```html
<i class="fas {{ range $element := .Params }} fa-{{ $element }} {{ end }}"></i>
```

From now on, you can reference icons in your Markdown files by writing `{{< fas ICON-NAME SCALE-NUMx >}}`, and reference 
logos in by writing `{{< fab COMPANY SCALE-NUMx >}}`. To make them links, surround them in the regular Markdown!

The final step was customizing the site pages. I converted the JSX from the React site's About page to Markdown, put it 
in the `about.md` file, and repeated the process for the Contact and Projects pages. Posts, also in Markdown, get 
thrown in the `posts` folder. Simple as that!
## Conclusion
---
Hugo ludicrously simplifies the web design process. The ability to quickly deploy pages with Markdown drastically 
reduces the time it takes to go from concept to deployment. If you don't mind starting from a template, or you want to 
simply deploy a great-looking site, Hugo's the way to go. If you want to control every aspect of the site, or have a 
very specific design or complicated backend system in mind, ReactJS is still your best friend. Hugo is definitely going 
into my toolbox, and I'll continue to use it going into 2020. That being said, I think that I'll probably rewrite this 
site again in NextJS, because ~~I'm indecisive and masochistic~~ of the control over specific details that 
you get from building a site from scratch.

[1]: https://www.wix.com/
[2]: https://www.squarespace.com/
[3]: https://medium.com/javascript-scene/top-javascript-frameworks-and-topics-to-learn-in-2020-and-the-new-decade-ced6e9d812f9
[4]: https://hackernoon.com/angular-vs-react-vs-vue-which-is-the-best-choice-for-2019-16ce0deb3847
[5]: https://www.codecademy.com/learn/react-101
[6]: https://github.com/ianbjorndilling/react-typewriter
[7]: https://www.w3schools.com/howto/howto_css_dropdown.asp
[8]: https://matthewjamestaylor.com/bottom-footer
[9]: https://stackoverflow.com/questions/14227013/get-footer-to-stay-at-the-bottom-of-the-page
[10]: https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b
[11]: https://stackoverflow.com/questions/42294/how-do-you-get-the-footer-to-stay-at-the-bottom-of-a-web-page
[12]: https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/
[13]: https://github.com/luizdepra/hugo-coder/
[14]: https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/go-node.html
[15]: https://github.com/ReactTraining/react-router
[16]: https://github.com/luizdepra/hugo-coder/blob/master/README.md
[17]: /creating-my-personal-site-buttons.png
[18]: https://fontawesome.com/v4.7.0/icons/