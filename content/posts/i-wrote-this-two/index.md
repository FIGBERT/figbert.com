+++
title = "I Wrote This #2"
date = 2020-06-27
updated = 2022-06-15
[extra]
type = "post"
+++

Hi! So, I just started this series and I already missed a week. Oh well.
This week was a crazy week for Apple and their operating systems, as
they announced iOS 14 and macOS 11 Big Sur at this year's [WWDC]. I've
also started working on a new game project, another little side project,
and finding a good alternative to [Keybase] now that it's [owned by
Zoom].

<!-- more -->

## Jailbreaking my iPhone

When I was a kid – or at least, a younger child than I am now – I had a
friend who jailbroke his phone. I thought it was super cool, and wanted
to do the same. At around the same time I was watching [TechSource], I
got deep into those [Top 10 Amazing Jailbreak Tweaks] compilations.
However, I wasn't allowed to jailbreak my phone because my parents said
it wasn't allowed, and that was the end of that.

Until last week, when I decided to jailbreak my iPhone 7 running iOS
13.5.1 using the [checkra1n] hardware exploit. To do this, I couldn't
use my [USB-C to Lightning cable] due to [a known issue] and instead
swapped to a USB-A to Lightning cable with a USB-A to USB-C adapter.
After jailbreaking the phone, I began to install a host of tweaks. One
of the most interesting things I learned about the jailbreaking
community is that charging upfront for apps is quite common for premium
and well-known tweaks, which stands in high contrast to the iOS App
Store's ubiquitous freemium payment model (a free download followed by a
monthly subscription) especially in the light of the [Apple-Hey.com
controversy] of recent weeks.

All in all, I spent around USD$21 on tweaks, which is infinitely more
than I have spent on the App Store – so maybe charging upfront does
work. Huh.

{{ gif(sources=["jailbreak.webm", "jailbreak.mp4"]) }}

## Updating my iDevices to Developer Betas

Soon after completing the jailbreak, [WWDC] happened and new developer
betas were released. Never one to miss jumping on a hype train, I
updated both of my main devices to the [new software]. These new betas
come with a whole host of bugs, as is to be expected, which I plan to
write about in a blog post coming soon. So far, however, I'm liking
these updates – the PiP on iOS is *incredible*, and the new design on
macOS is growing on me.

Some interesting resources:
* [An interview of Craig Federighi by MKBHD]
* [These] [three] [issues] on GitLab for iTerm2 users
* [These][t2] [two] posts for Firefox
* [This Github issue] for Homebrew users. ~~so basically everybody.~~

Interestingly, I was having a bunch of issues with brew (`curl` was
broken?) after updating to Big Sur but now it seems to be working
flawlessly. Very nice.

## Making a Doughnut in Blender

For my next medium-large project, I'm going to need to make some 3D art
and models. One problem: I don't know how to do that, or rather, I
didn't. Thanks internet! I powered through the incredible [Blender
Beginner Tutorial Series] by the [Blender Guru]. Here's my final
animation:

{{ gif(sources=["doughnut.webm", "doughnut.mp4"]) }}

## Replacing Keybase

Now that [Keybase is compromised][owned by Zoom], I thought it would be
good to seek out an alternative. Initially, I thought that [keys.pub]
would be perfect – I thought it was a slightly-tweaked fork. However,
this does not appear to be the case. Instead, it seems kinda like garbo
– it doesn't have the budget Keybase had, and as a result, is majorly
lacking in features. However, I've replaced Keybase completely, and am
happier with this setup than I ever was with Keybase. My new setup uses
[Matrix] and [Riot] for messaging, [Jitsi] for video chat, [Syncthing]
for file storage, and an [Indieweb] h-card for identity verification. I
plan on writing more about this at a later date, but I'm really pleased
with the results so far.

## Future Projects

I've got a few interesting projects in the pipeline at the moment, not
counting the few articles that I've already promised to write: *Glitches
in macOS Big Sur and How to Fix Them* and *How to Replace Keybase in 4
Easy Steps*. My next major project is a dreidel game/simulator for
mobile devices – I plan to code it with [Godot], make the models with
[Blender], and do any music/sound stuff in [FLStudio]. Naturally, I'll
keep you all updated on any progress there.

I'm also working on a much smaller project that should take around a day
or two to complete. The working title is "howmanyisraels.com" –
essentially, it's a website that takes the size of the State of Israel,
and compares it to the size of a given location and tells you how many
times Israel could fit inside it. All I need to do is find a suitable
mapping API (preferably not by Google) that will tell me the size of
different locations and I can whip it into a static site!

I'm also planning on revamping the txtodo macOS app with Mac Catalyst,
which I feel I haven't properly explored. I've also discovered a bug in
the app that causes issues when tasks are modified by CloudKit instead
of the user, so I'm going to have to work on that as well. Shouldn't be
hard!

{{ image(sources=["rick-and-morty.jpg"], fallback_path="rick-and-morty.jpg", fallback_alt="Let's go. In and out. Twenty-minute adventure.") }}

## Interesting Blog Tidbits

I'm not sure what tense to write my headers in – I currently write them
in [present continuous] tense but I am considering writing them like I
do Git commits. Huh. I'm also committing to writing more non-update blog
posts (i.e. the two I mentioned above), but we'll see how that goes.
Writing is hard, and you shouldn't make false promises. I'm also working
on implementing webmentions to the site, which is a little difficult
with a static site but I'm going to give it a try. Lastly, I really need
to learn how to use vim but it's so goddamn hard. I'm writing this blog
post with it but I'm definitely not using it to its full potential at
all.

## New Music

Wow, these have been a great two weeks for the Israeli music scene. In
no particular order, here are some good new songs (basically in the
order they appear on the trending tab):

* [Habib Albi – Static and Ben El](https://www.youtube.com/watch?v=lYfrKmEYpdA)
* [Rak Banot – Itay Levi and Stephane Legar](https://www.youtube.com/watch?v=0WU9CXeJ5Mk)
* [Shvuaim – Eden Hason](https://www.youtube.com/watch?v=zSsaDRNHWtk)
* [Yom Huledet – Eliad](https://www.youtube.com/watch?v=2g6dIytgOpc)
* [Hatzi Madleket – Dudu Faruk](https://www.youtube.com/watch?v=FkC9jkgspZM)
* [Hayde – Peled](https://www.youtube.com/watch?v=E6IGYJgw5SY)
* [Ze Mi She Ani – Peled](https://www.youtube.com/watch?v=3jqID99mCyo)

I know music isn't tech, but I like it and now it's a recurring section.

## Wrapup

So, that's been this week's update. I'm really enjoying writing updates
on this blog, and I hope you stick around. Until then, farewell!

--
FIGBERT

[WWDC]: https://web.archive.org/web/20201105203007/https://developer.apple.com/wwdc20/
[Keybase]: https://keybase.io/
[owned by Zoom]: https://keybase.io/blog/keybase-joins-zoom

[TechSource]: https://www.youtube.com/TechSource
[Top 10 Amazing Jailbreak Tweaks]: https://www.youtube.com/results?search_query=top+ten+jailbreak+tweaks
[checkra1n]: https://checkra.in
[USB-C to Lightning cable]: https://www.apple.com/shop/product/MM0A3AM/A/usb-c-to-lightning-cable-1-m
[a known issue]: https://github.com/checkra1n/BugTracker/issues/1#issue-519574712
[Apple-Hey.com controversy]: https://hey.com/apple

[new software]: https://developer.apple.com/download
[An interview of Craig Federighi by MKBHD]: https://www.youtube.com/watch?v=Q2aaCDNjWEg
[These]: https://gitlab.com/gnachman/iterm2/-/issues/8964
[three]: https://gitlab.com/gnachman/iterm2/-/issues/8975
[issues]: https://gitlab.com/gnachman/iterm2/-/issues/8969
[t2]: https://www.reddit.com/r/firefox/comments/hg6cy8/gifs_and_video_on_reddit_wont_play_on_macos_big
[two]: https://bugzilla.mozilla.org/show_bug.cgi?id=1647816
[This Github issue]: https://github.com/Homebrew/brew/issues/7803

[Blender Beginner Tutorial Series]: https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U
[Blender Guru]: https://www.youtube.com/channel/UCOKHwx1VCdgnxwbjyb9Iu1g

[keys.pub]: https://keys.pub
[Matrix]: https://matrix.org
[Riot]: https://about.riot.im
[Jitsi]: https://jitsi.org
[Syncthing]: https://syncthing.net
[Indieweb]: https://indieweb.org

[Godot]: https://godotengine.org
[Blender]: https://www.blender.org
[FLStudio]: https://www.image-line.com/flstudio

[present continuous]: https://en.wikipedia.org/wiki/Present_continuous
