+++
title = "Beeper"
description = "The best damn chat app on Earth"
date = 2024-09-02
[extra]
type = "work"
start = 2023-06-05
end = 2023-09-01
+++

As the summer of 2023 rolled around, I found myself opening up a bunch
of tabs in Safari to check if any cool companies I had heard of on [the
orange site] were hiring.

I remember being shocked and excited when I saw that [Beeper] had a
listing. Their app was built on top of an open, secure, and
decentralized protocol called Matrix. I had used Matrix through the
[Element] app with some friends, and was aware of some of the cool
projects that took advantage of the network. I was also aware that most
of the code that deals with Matrix is open-source and written in Go—two
qualities shared by [Mabel], the terminal app I had just finished
working on. Beeper sat at the intersection of a lot of things I was and
am still crazy about. I sat down with [Eric Migicovsky], the CEO, and
came on as a contractor for the summer.

## Tenure
Everything I encountered at Beeper was brand new to me. I had never even
been paid to code before, and the team was fully remote. Showing up to
the all-hands every Monday on Zoom felt pretty surreal. I started out
reverse engineering and documenting Snapchat to bring Beeper to the
platform, but was quickly moved to work on our hardware venture,
affectionately named (after Blackberry threatened legal action) Beepy.

The [Beepy] was intended to showcase Beeper's flexibility. What has
changed fundamentally about messaging since [AIM]? Not much. But Beeper,
with its foundations on the open Matrix protocol, could take any form
imaginable. So to set an example for developers, we brought in the big
guns from [SQFMI] to strap a keyboard and a black-and-white LCD screen
together to make something like a modern-day, common-noun
[beeper][tweet]!

The software I built for the device came in two parts: a [setup utility]
and a [chat client]. The former got new Beepy users "from zero to
messaging," taking advantage of users' main computer to gather their
chat history and encryption details before copying all the data to the
Beepy. The latter was based on the [gomuks] terminal app and redesigned
for the device's smaller 1-bit display. Both of these programs were
wonderful opportunities to leverage the skills I had just learned
building Mabel.

A huge congratulations to the whole team on your [new][acqhn]
[home][acq]!

## Reflections
I nursed a pet project while I was at the company that I believe has
real potential: Beeper Rewind. How many messages did you send this year?
What was your daily average? Who was your most frequent contact? What
platforms did you use the most? The least? Who is most active in your
groupchats? This metadata is super fun to know, as a user, and totally
shareable. I would love to clown on the lurkers in my friend group, and
be able to quantify how crucial iMessage is to my daily life. Beeper is
the only entity in our digital lives that could provide these insights,
and generating a little viral image for your Instagram story could be
one way to exploit that position. Hesitating on this goes against some
of my core principles, and I should have pursued it further.

Speaking of positioning, I don't think Beeper necessarily optimized its
business to be in line with its competitive advantage. We spent a lot of
time at the company trying to re-imagine the fundamentals of the
messaging experience—it's probably no surprise that a lot of this
involved AI. I think this is all well and good, but ignores the fact
that we already had the ability to do something nobody else could, which
is to *send messages on every platform from one place*. I think we
should have been focusing on optimizing the mobile app to provide the
smoothest messaging experience possible while doing this. Polish,
polish, polish. Even beyond this, however, we should have explored the
B2B angle. [Humane] launched their wearable with SMS messaging. How much
would their user experience improve if the Pin could talk to your
iMessage, WhatsApp, and Signal? How much is that functionality worth?
I'll give you a hint: a lot, and we were the only people who could
provide it. I don't think we ever considered this.

Lastly, on a technical note, the concept that underpins Beeper's ability
to send messages across platforms—Matrix's [bridges]—is really cool. It
is perhaps worth pondering where else it could be applied: bots that
*observe* and *replicate* behavior across networks, to maximally
leverage your efforts. Adversarial interoperability! [Vincent Cloutier]
is doing fun things in this space over on the fediverse. Summarized in a
sentence that sounds straight out of [Matt Webb]'s school of thought:
What happens when we ignore the borders between spaces and connect them
anyway?

## Surprise update a year later
In the summer of 2024, I sat down to talk with a mentor of mine—a
successful startup founder, executive, and angle investor of some
renown—who presented me with the bluntly phrased perspective that people
simply don't want message aggregation. Rather, he believes, distinct
messaging apps are actually a feature: they give you [separation of
concerns]. Having sat on this for a little while longer, it occurs to me
that the super-app that aggregates your different messaging platforms
may already exist, and it's your operating system.

[the orange site]: https://news.ycombinator.com
[Beeper]: https://www.beeper.com
[Element]: https://element.io
[Mabel]: @/projects/mabel/index.md
[Eric Migicovsky]: https://en.wikipedia.org/wiki/Eric_Migicovsky
[Beepy]: https://beepy.sqfmi.com
[AIM]: https://en.wikipedia.org/wiki/AIM_%28software%29
[SQFMI]: https://sqfmi.com
[tweet]: https://x.com/ericmigi/status/1649179643763920896
[setup utility]: https://github.com/beeper/beepycli
[chat client]: https://github.com/beeper/gomuks/tree/beepberry
[gomuks]: https://github.com/tulir/gomuks
[acqhn]: https://news.ycombinator.com/item?id=39980268
[acq]: https://blog.beeper.com/2024/04/09/beeper-is-joining-automattic/
[Humane]: https://humane.com
[bridges]: https://spec.matrix.org/v1.11/application-service-api/
[Vincent Cloutier]: https://r.town/@vincent
[Matt Webb]: https://interconnected.org/home/
[separation of concerns]: https://en.wikipedia.org/wiki/Separation_of_concerns
