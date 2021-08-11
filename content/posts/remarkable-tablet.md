+++
title = "Quite the reMarkable Device"
description = "Lately, there’s been renewed interest in clean, simple technology built to help us focus. Protocols like Gemini strip away the chaos of the web. Hardware hackers fit screens in mirrors and build beautiful minimalist displays to read the news, display data neatly in a picture frame, or provide a daily summary. Hidden amongst these many awesome projects is the reMarkable 2."
date = 2021-01-22
updated = 2021-08-10
+++

Lately, there's been renewed interest in clean, simple technology
built to help us focus. Protocols like [Gemini][gemini] strip away
the chaos of the web. Hardware hackers fit screens in
[mirrors][mirror] and build beautiful minimalist displays to
[read the news][newspaper], display data neatly in a [picture
frame][frame], or provide a [daily summary][dashboard]. Hidden amongst
these many awesome projects is the [reMarkable 2][tablet].
<!-- more -->

I've been using the reMarkable for the past month or so and it is a
seriously solid device. I use it mainly to take notes, at which it
excels. The e-ink display is the best I have ever seen, barely ever
refreshing the entire screen and almost entirely without the temporary
artifacts that plague similar devices. The pencil is comfortable to
use – slightly fuzzy – and, interestingly, entirely passive: it never
needs to charge. Given that it's meant to replace your paper, it
shouldn't be too surprising that the tablet's also incredibly thin.

## cornellNotes

In one of my classes, I'm required to take Cornell notes. On what may
be a related note, it's a terrible class. Regardless, I need to get an
A and so notes I shall take. The reMarkable comes with a built-in
Cornell notes template. It's slightly different than the format I'm
used to, but it fits the bill well enough.

It's hard to describe the experience of using the device. I would
say that it feels shockingly natural. Using it to take notes feels
like writing on a clipboard with none of the usual annoyances – the
paper sliding, having finite pages; and all the benefits of a digital
device – sending files via email, OCR, a select-and-drag tool, etc.
It's convenient, feels nice, and performs well. Most importantly, it
makes me *excited* to use it every time I turn it on.

## workSheet

In another class, the instructor distributes worksheets every once in
a while to complete during class. Now that we're in distance learning
due to COVID, these are `pdf`s – perfect for use with the reMarkable.

I download them onto my laptop, upload them through the app, and
voila. Look Mom, no scratch paper! I can write directly on the
worksheet. I've only started doing it this week, and it's amazing.
Sure, there are programs on the computer that allow you to write
on a `pdf`, but doing math with a trackpad sounds like torture. With
the reMarkable, it's enjoyable.

That's the device's biggest impact. I used to hate writing by hand.
I would beg my teachers to let me type assignments so I didn't have
to use a pencil – what am I, a caveman? Now, my paper has superpowers.

## notKindle

It's also a suprisingly good reading device, with native support for
`epub`s and `pdf`s. It doesn't have a backlight, but to be fair
neither do actual books so I'm not too bothered. The default font size
is quite large, and the UI is really minimal which makes for peaceful,
undistracted reading. I own two Kindles already, but I've taken to
using the reMarkable instead for a number of reasons:

1. There's no ads or tracking. On Kindle there's an ad on the bottom
of the homescreen, which expands to the whole screen when you turn it
off – plus it sends every move you make to live forever with Big Papa
Bezos. Not so with the reMarkable.
2. The screen on the reMarkable is physically larger. Though sometimes
the compact size of my Kindle comes in handy, like when traveling,
having a nice big display is definitely an advantage. My Kindle is
closer to a large phone, and the reMarkable is definitely a tablet.
3. The reMarkable is a fairly open device. The Kindle, on the other
hand, is locked down and dripping with DRM (fairly easy to break but
still an encumberance).

The developers have also made a browser extension for Chromium-based
browsers called [Read on reMarkable][rorm], which I would love to see
the insides of but is unfortunately closed-source. Basically, it takes
any webpage, turns it into an `epub`, and sends it off to your device.
I love it and use it near constantly: whenever I run into anything on
HN that is either really long, or I just want to save for later, I
hit a button and it sends it to the tablet. Again, just incredibly
convenient.

**EDIT:** [Dario Vladović][dv] has pointed out to me that extensions
are unpackable, and thus though it's not open source it is, by nature,
source available.

## jailBreak

This section is titled "jailbreak," which is actually a bit of
misnomer because the reMarkable runs Linux and you can `ssh` into it
with ease. It's also not too fitting because I'm not just going to
talk about modifying the device, but also about official accessories.
My device came with a [Book Folio][folio] and [Marker][marker] in the
box, which is pretty good value. I did find out while writing this
that they offer a "Marker Plus" that comes with a built-in eraser. It
is, unfortunately, out of stock currently but I plan on buying it once
it returns in "January 2021," so supposedly sometime in the next week
or so.

Ok now time for the jailbreak-y stuff. There's an active community on
Freenode, an unofficial [wiki][wiki], and an [Awesome list][awesome].
All of these are really great resources for cool stuff you can do with
your device, and I'm planning to begin experimenting with them in the
coming weeks. My first goal is to get [KOReader][reader] running so I
can sync my extensive Calibre library to the device. I'm going to
avoid adding any [games][games] so as not to add additional complexity
to a device that aims to remove distractions, and proceed slowly so I
don't brick my fancy new toy. Stick around to see how that goes.

## pS

The recently published fairly viral [Ditherpunk article][dither]
by [Surma][surma] gives a really interesting overview of image
dithering. After reading the article, I noticed that the reMarkable
itself uses dithering to "fade off" your writing and make it look
like pencil. Neat.

Also, comparing the reMarkable to the Kindle makes me want to
jailbreak that too – I'll find some time to look into that soon.

**EDIT:** I ended up jailbreaking one of my Kindles, which I now use
daily as my primary book-reading device (as opposed to the reMarkable,
which I think of as an article-reading device). I should write some
stuff about that.

[tablet]: https://remarkable.com/
[github]: https://github.com/reMarkable
[gemini]: https://gemini.circumlunar.space/
[mirror]: https://onezero.medium.com/smarter-mirrors-and-how-theyre-made-327997b9eff7
[newspaper]: https://onezero.medium.com/the-morning-paper-revisited-35b407822494
[frame]: https://onezero.medium.com/meet-accent-352cfa95813a
[dashboard]: https://healeycodes.com/hacking-together-an-e-ink-dashboard/
[rorm]: https://chrome.google.com/webstore/detail/read-on-remarkable/bfhkfdnddlhfippjbflipboognpdpoeh
[dv]: https://github.com/vladimyr
[folio]: https://remarkable.com/store/remarkable-2/folios
[marker]: https://remarkable.com/store/remarkable-2/markers
[wiki]: https://remarkablewiki.com/
[awesome]: https://github.com/reHackable/awesome-reMarkable
[reader]: https://github.com/koreader/koreader
[games]: https://github.com/reHackable/awesome-reMarkable#user-content-games
[dither]: https://surma.dev/things/ditherpunk/index.html
[surma]: https://surma.dev/
