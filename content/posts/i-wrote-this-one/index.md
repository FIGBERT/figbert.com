+++
title = "I Wrote This #1"
date = 2020-06-13
updated = 2022-06-15
[extra]
type = "post"
+++

So, I'm FIGBERT – I wrote this. ~~nailed that intro.~~ I'm a
highschooler working in the tech world, currently stuck at home like
pretty much everybody else who's not trying to die. I plan on using this
blog to writing mainly on my experiences in the tech world, either in
focused articles centered around one topic or more summary-style
roundups like this, the "I Wrote This" series.

<!-- more -->

I've always found statements like that kind of funny in their
generalness, and was thinking the other day that if I ever made a game
studio I would name it "I Made This Game." Then, when I was trying to
think of what to name this series (The Weekly Fig? Fig Talks?), I
thought it would be funny to do something similar. I plan to release
these once a week on Saturdays, if all goes to plan. Without further
ado, here's a brief summary of interesting things that happened this
week.

## Releasing txtodo v2.0

Some people reading this may be familiar with my most recent project,
[txtodo] – you can read a full writeup of the project [here]. The point
of txtodo was to create a todo list application without any feature
bloat I found in other competing solutions – *every task deletes at
midnight*. This week I launched the MacOS companion app for txtodo,
completing my long-term "cross-platform" goal for the app. I went from
not knowing SwiftUI at all to having two published apps that talk to
each other! Making computers talk to each other is, like, the hardest
thing you can do with computers! ~~Ok, technically a lot of it is just
Apple APIs but still, let me have this.~~ I think there is probably one
more major change I could make to the app (moving the tasks from an
`@State` variable to an `@EnvironmentObject`), but after that it's
pretty much bugfixes and... the bank? I don't know.

## Signing Git Commits

I while back I saw that when I editing my project README.md using the
GitHub web app, it got a little green "verified" badge next to the
commit message. I looked into it for a bit today, and found [this GitHub
help article]. One GPG install and Protonmail-key-download later, now
all my commits have a green badge! Neat!

## The Meh vimrc

I made the switch from nano to vim a few months ago, but up until a few
days ago I was using the barebones default `macvim`. Not anymore! I
DuckDuckGo-ed "vim configuration," and downloaded what is supposedly
"The ultimate Vim configuration." from [amix]. It's a pretty good
configuration out-of-the-box: I'm using the Awesome version with the
fantastic [Jetbrains Mono] font. I'm still not that good at actually
using vim to its fullest potential but I'm confident that I'll improve
with a little practice and ascend to elite vim status in no time.

{{ image(sources=["chad.jpg"], fallback_path="chad.jpg", fallback_alt="The virgin classic developer vs the chad linux dev") }}

## Maybe Rust?

Speaking of elite programmers: Rust! I've been thinking about learning
the language for a while, and now that I have no main project (other
than maintain my finished apps and sites), it's as good a time as any to
learn a new language. It's idiomatic syntax combined with low-level
abilities makes Rust seem a little bit like Python+ to me. It also helps
that it's skyrocketing in popularity – maybe I'll do the cliche Rust
developer thing and post about how much I love the language on [the
orange site] once I learn it. ~~ok so I was planning on linking a bunch
of posts like that here, but when I looked for them on HN I actually
couldn't find any, but I distinctly remember reading them so I stand by
this statement.~~

## From Brave to Firefox

I made the switch from [Brave] to [Firefox Developer Edition] this week,
after accumulating around 50 USD in BAT. I started using Brave almost
when it came out and loved it – the chromium feel with a powerful built
in adblocker? It sounded too good to be true – and perhaps it was: over
time the browsers performace began to slow down, they [hijacked links],
launched a [weird Zoom competitor] with no fanfare or announcement, and
refuse to get rid of their [required KYC]. Anyways, I dropped it. Now my
dock is all blue!

{{ image(sources=["dock.png"], fallback_path="dock.png", fallback_alt="My dock with all blue apps") }}

## New Music

On a non-tech-related note, a bunch of good new music came out recently.
In no particular order, here are some good new songs (largely out of the
Middle East):

* [Coronavirus by Mohamed Ramadan](https://www.youtube.com/watch?v=L3e4UryXDo0)
* [Zot Ani – Ela Li Lahv](https://www.youtube.com/watch?v=F2ZLege5wF8)
* [Million Dollar – Noah Kirel and Shachar Saul](https://www.youtube.com/watch?v=oQbh5Kvet04)
* [Naughty – Tzagay Boi](https://www.youtube.com/watch?v=lcXUmCG-En8)
* [TROLLZ – 6ix9ine & Nicki Minaj](https://www.youtube.com/watch?v=oNg3M9IJJlY)

## Wrapup

So, that's been this week's update. I've got some exciting ideas for my
next posts, so I hope you stick around for what's to come. Until then,
farewell!

--
FIGBERT

[txtodo]: https://txtodo.app
[here]: @/projects/txtodo/index.md

[this GitHub help article]: https://docs.github.com/en/authentication/managing-commit-signature-verification

[amix]: https://github.com/amix/vimrc
[Jetbrains Mono]: https://www.jetbrains.com/lp/mono/

[the orange site]: https://news.ycombinator.com/

[Brave]: https://brave.com/
[Firefox Developer Edition]: https://www.mozilla.org/en-US/firefox/developer/
[hijacked links]: https://davidgerard.co.uk/blockchain/2020/06/06/the-brave-web-browser-is-hijacking-links-and-inserting-affiliate-codes/
[weird Zoom competitor]: https://together.brave.com/
[required KYC]: https://www.reddit.com/r/btc/comments/ck56zw/privacy_focused_brave_browser_now_requires_kyc/
