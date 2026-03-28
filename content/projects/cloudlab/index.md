+++
title = "Cloudlab"
description = "My elegant, declarative, and robust personal infrastructure."
date = 2025-09-25T17:20:00-07:00
[extra]
icon = """<svg viewBox="0 0 479 227" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m449.5 203-8.5 7-3 1.5-6.5 4.5-2 2-3.5.625-5 2.625-5.5.75-3 3-1.5.5-2 1-2 .375-290-1.625-4.75.625v-1.75l4.75-.125-.5-1-13.5-1.625-4-1-2-.125-6.5.75-1-1-1 1-35.5 2.25-2-.375-10.5-.875-2-2-3.5-.625-4 .375-8-2.125-13.5-5.625-1.5-1.5v-1l-5-5-.5-2.5-1.875-6-1-5v-12l.875-6 4-14 4-10 3-6 12.5-18.5 3-4 6.5-9.5 5.75-7.75 1.75-.75 4.5-2.5 3-2 7.5-5.5 4.5-2.5 8-6 5-3 6.5-4.5 4-2 2-.75 16-3.375 8-.125 2-.5 11.5-1.75 1 1 .5-.5-.25-1.5-.125-13 .875-3 1.875-5 3.25-12 2.875-5 .5-1.5 1.5-1.5 1.5-.5 7.5-5.5 7.5-4.5 13-5 31-8 15-2 29 1.125 29 5 12 2.875 6 2.125 4 1.875 1.5.5 2 2 2.5.625 10 4.875 1.5.5 2 2 2.5.625 4 1.875 2.5 1.5 31 22 17.5 14.5 3.5 2.5 3.5 3.5 4.5 6.5.5 1.5 3.5 3.5h3l2-2 1.5-.375 3-1.125 7-1.75 9-1.125 15 .125 9 1.875 3 1 2 .875 1.5.5 1 1 1-1 1 1 2.5.625 7 4.875 4.5 2.5 12.5 12.5.5 1.5 3 7 2 8 4 23-.125 10-1 4-3.875 9-4 7-.875 2-.625 2.5-2 2-.5 1.5-5 8-7.5 12.5zm-3-1 4.5-4.5 7.5-12.5 5-8 1.875-4 .625-2.5 2-2 1-3 2-2 .625-2.5 3-7 .5-2 .25-13-1-7-.75-3-2.125-12-1-4-3-8-8.5-10.5-2.5-2.5-4.5-2.5-7-5-2-.75-5-1.5-4-1.625-3-1-6-.875-18.5-.75-1 1-1-1-15.25 4.25-.5 1.5-3.25.25-2 2-5.5-5.5-.5-1.5-3.5-5.5-4.5-4.5-21.5-17.5-30.5-21.5-2.5-1.5-4-1.875-2.5-.625-2-2-1.5-.5-10-4.875-2.5-.625-2-2-1.5-.5-4-1.875-19-5-24-4.125-42 .125-36 9.125-10 3.875-7 3.875-5.75 3.75-.5 1.5-4.5 2.5-3.625 7.75-2.375 9-1.875 5-.5 2 .125 16.5 1 1-1.5 1.5-3.5-.5-4-.125-33 5.375-2 .75-4 2-6.5 4.5-5 3-7.5 5.5-1.5.5-2 2h-2l-5 5-2 1-5.5 3.5-1.5.5-5.5 5.5-8 12-3 4-12.5 18.5-2 4-4.875 12-3.875 16v16l2.875 9 4.375 6.5 1.5 1.5 13.5 5.375 3 .875 22 3.5 3 .75 44-3.375 2 .25 4 1 13.5 1.625 1-1 1 1 2.5-.625 16 .125 5-2 1.75-.25.25 2.25-1.5 1.5-3 1-.5 1 271-.75 5-2.5 5-1.375 2.5-.375 2-2 1.5-.375 3-1.25 7-4.875 2.5-1.5zm-316.5 21.25 2.5-.25.5-1h-7.5l-1 1-1-1h-6l-.5.5 1.5 1.5z" fill-rule="evenodd"/></svg>"""
+++

In the vast apparatus of the internet, I have my own little hideaway: an
[Alpine Linux] box hosted on [Hetzner]. The website you're reading lives
on this very server, alongside numerous other personal services. Running
these myself allows me to be completely independent of major service
providers like Google, a choice with serious benefits for my privacy. It
has also helped me accrue real-world experience with system
administration—and [the crises] that occaisionally entails. Finally,
owning a fixed amount of hardware means that there is zero marginal cost
for additional services crammed into my alloted resources: this means
the monthly cost of running my many programs remains well below market
price.

![Original todo item from Things.app](things.png)

My server setup would historically have been best described as a rickety
shack, barely standing, upon which I would occaisionally try and
haphazardly tack new services while hoping the whole thing wouldn't come
crashing down. This was sufficient for [at least five years]. But at
[Recurse], I became fed up with the status quo.

I explored a few radically different systems. [Frank] pointed me in the
direction of [Talos], and I played around with setting up a one-machine
cluster. But [Josh] asked me if I really needed all that baggage, and
truth be told I didn't. So I returned my focus to trusty [Docker
Compose]—and toward minimalism, pattern, and clear structure.

That structure employs a number of axioms: "All services are run in
containers" ([file storage] and [backups] having been the big exceptions
previously), "configuration and [secrets] get committed", "no building
images on the server"... Really, I can't say it better than [I already
did] during development, when I wrote long commit messages and thorough
documentation.

![Me, feeling very confident in a Zulip check-in](zulip.png)

I also upgraded my server during this transition. I investigated a move
to the United States, but found that resources prices here vastly
outpaced the rest of the world. So I made a different move: to the ARM
architecture. Miraculously, I now get double my old resources at the
same price. More than enough for my email, calendar, websites, and
anything else I've thought of throwing at it over the years.

There is still room for improvement in this setup. As part of a renewed
commitment to elegance, I dropped my janky self-hosted `git` setup and
do not yet have [a good alternative]. And getting the server prepared
entailed some minor setup work which should be controlled in a
declarative and versioned fashion alongside the rest. But [that rabbit
hole] seems too deep for even me at the moment... It will have to wait
until next summer.

Check out [the code] for your own self-hosting inspiration!

[Alpine Linux]: https://www.alpinelinux.org/
[Hetzner]: https://www.hetzner.com/
[the crises]: @/posts/backups-update-internet-celebrity.md
[at least five years]: @/posts/i-wrote-this-three/index.md#self-hosting
[Recurse]: https://www.recurse.com/scout/click?t=0d85c06dc14f97552f2130471d4e3086
[Frank]: https://www.frankchiarulli.com/
[Talos]: https://www.talos.dev/
[Josh]: https://wolfesoftware.com/
[Docker Compose]: https://docs.docker.com/compose/
[file storage]: https://syncthing.net/
[backups]: https://www.tarsnap.com/
[secrets]: https://getsops.io/
[I already did]: https://github.com/FIGBERT/cloudlab/commit/cf37f4b3e0f4a7e014cb57e252d6e65860143469
[a good alternative]: @/posts/ideating-tragit.md
[that rabbit hole]: https://nixos.org/
[the code]: https://github.com/figbert/cloudlab
