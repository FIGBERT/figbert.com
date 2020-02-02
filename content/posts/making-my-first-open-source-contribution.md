+++ 
date = "2020-02-02"
title = "Making my First Open Source Contribution"
slug = "making-my-first-open-source-contribution" 
tags = ["Git", "Open Source", "Hugo", "WebDev"]
categories = ["Open Source"]
series = []
disable_comments = true
+++

**Happy palindrome day 20200202!** Two days ago (2020/01/31), at 22:05, I made [my first contribution][request] to an 
open source project, and yesterday (2020/02/01) at 16:29 my request was merged into the main repository – 
[and there was much rejoicing.][jargon]

It all started when I made my [Hugo site][hugoPost]. During my initial design process, I planned to include a Hebrew 
version of the site, and added a `he.toml` to the [i18n][lang] folder to make sure that the error pages wouldn't 
suddenly switch to English for ~~Israeli~~ Hebrew-speaking users. I eventually discarded the Hebrew version of the site 
because I ~~am selectively lazy~~ don't want to spend time I could be coding translating articles I already wrote. 
However, in my original version of the [*Creating my Personal Site*][hugoPost], I mentioned that "I may eventually add 
my Hebrew translations to the main repo" (though I eventually removed it in a later version of the post).

Then, I stumbled on [this article][codeCamp] on [freeCodeCamp][fCC] walking you through how to make your first pull 
request to a GitHub repo. Contributing to an open source project is something that, as a firm believer in the 
[free software revolution][faif], I've always wanted to do. However, the system can feel intimidating at the best of 
times and near impossible-to-navigate at other times and I've never gotten around to actually contributing myself. This 
time, I told myself, would be different. So, after a brief brainstorming session, I added "Add Hebrew to Coder theme" 
to my *General Programming* [Trello][trello] board and decided to procrastinate a bit more.

Two hours later, when I returned to my board ~~to find something else to help me procrastinate~~ for inspiration, I saw 
my card again. I dragged the card into the *In Progress* column, and set to work. I forked the [hugo-coder theme][theme], 
and cloned the repo to my local machine. From there, I moved to the [commit before I removed Hebrew][commit] and copied 
the contents of the remote `he.toml` to my disk. After that, I added myself to the `CONTRIBUTERS.md` file and pushed the 
changed to my fork. From there, I opened a pull request using the provided formula and submitted the request.

That... seems ridiculously simple. And it is! A few hours later, I got a ["Nice ty"][response] and my change was merged. 
What a fun experience! I became a contributor to a project that I care about and use! Even though my addition was small, 
it was still a very rewarding experience. Jumping into something, and just *getting it done*, makes all the difference. 
I look forward to contributing more, both to the Coder theme specifically and to the community at large.

[request]: https://github.com/luizdepra/hugo-coder/pull/258
[jargon]: http://www.catb.org/jargon/html/A/and-there-was-much-rejoicing.html
[hugoPost]: /posts/creating-my-personal-site
[lang]: http://www.i18nguy.com/origini18n.html
[codeCamp]: https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/
[fCC]: https://www.freecodecamp.org/
[faif]: https://sagitter.fedorapeople.org/faif-2.0.pdf
[trello]: https://trello.com/
[theme]: https://github.com/luizdepra/hugo-coder
[commit]: https://github.com/therealFIGBERT/figbert.com/commit/d3fb8246f4a31fdf5f3049c68e019cf7f669bb56
[response]: https://github.com/luizdepra/hugo-coder/pull/258#pullrequestreview-351911693