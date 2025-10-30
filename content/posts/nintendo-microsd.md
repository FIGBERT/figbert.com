+++
title = "How to Format a micoSD Card for the Nintendo Switch"
date = 2025-10-29
[extra]
type = "post"
+++

I burnt vastly too much time on this today, after having already figured
this out a week ago, so here it goes in writing. In one sentence: format
everything in exFAT and use the Master Boot Record partition scheme.

<!-- more -->

Spoiler for my Y3Q1 quarterly reflection: this year my dorm room is
awesome. One of the new goodies that we have is a TV, and so I brought
my basically unused Switch out of retirement to see if console gaming
might be entertaining now. It is! We've been playing the hits (Mario
Kart, Overcooked, etc.) and [some indies]. And as the Switch's
popularity among my friends has grown, so has the demand for more games.

This, of course, presents an issue: games take up much space, and the
onboard storage of the Switch is not infinite. So I ponied up for an
upgrade to my existing external storage (8GB) and bought a 128GB microSD
card off Amazon. Of course, I had at this point forgotten how I set up
the first card.

I took a big, painful detour trying to create a disk image of the old
card with Disk Utility, [SuperDuper], [CCC7], `hdiutil`, and `dd` before
realizing that I could just copy the data like any other files (Nintendo
conveniently puts everything in one top-level folder).

After that, the partition scheme was just trial and error.

I'm looking forward to the expansion: my first round of purchases
includes [Stray], [Factorio], and [A Short Hike]. If the habit proves
more permanent, I'm sure my now-dormant [Backloggd] will make its way
onto my homepage.

[some indies]: https://www.loversinadangerousspacetime.com/
[SuperDuper]: https://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html
[CCC7]: https://bombich.com/
[Stray]: https://stray.iam8bit.com/en
[Factorio]: https://www.factorio.com/
[A Short Hike]: https://interconnected.org/home/2025/10/23/wholesome
[Backloggd]: https://backloggd.com/u/figbert/
