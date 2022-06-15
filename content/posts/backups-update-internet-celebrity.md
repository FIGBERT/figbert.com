+++
title = "An Update on Bad Backups and Internet Celebrity"
date = 2021-06-27
updated = 2022-06-15
+++

My recent post on the [Great Alpine Migration Tragedy] of 2021 garnered
some serious attention! I got a number of emails, a whole host of
feedback on [Lobste.rs], and over **100 points** on [Hacker News]! As I
understand it, that means I'm now a top internet celebrity (and eligible
for the [10 KB Club]). Still, I must remain humble even as I catapult
toward digital infamy and thus I am here to respond to feedback, answer
questions, and talk about what I've done to prevent something like this
from happening again.

<!-- more -->

## Useful Tips from Strangers

### Ctrl-C is Not a Debugging Tool

That's a good point: I've been advised to update my methods. Several
folks pointed me towards [`strace`]. Sending the `SIGUSR1` or `SIGINFO`
signal to Tarsnap would also work. The `-v` flag could have been
helpful as well.

### Don't Wipe Prematurely

A number of folks were confused as to why I didn't keep the [old
machine] around during the transition. Others detailed their own
[migration strategies][klodolph]. In general, it seems that folks agree
you should keep around your old machine until you're totally certain
everything is up and running in your new setup.

As I mention briefly in the article, I've actually done this in the past
myself! This time, however, there was no second server. Everything was
done in-place. I cannot change this, as it occurred in the past. In the
future I will avoid this kind of migration.

### A Restore System

A number of people took issue with my take-aways from the experience.
See:

> Trying to address a lack of confidence by increasing the backup
> frequency doesn't make sense. The backup frequency is the most trivial
> thing to adjust and doesn't address deeper issues, like the fact that
> you need to dump/restore databases properly and shouldn't copy files
> from a live database.
>
> by [klodolph]

I'll start by saying that that increasing backup frequency from zero to
anything greater than zero does, in fact, address a significant issue. I
now have backups where there were none before.

Still, the point stands. Without quality backups, and quality restore
strategies, the backups are not as useful as they could be.

### A Little Bit of Gold and a Pager

There was some fun memeing in the Hacker News comments in response to me
being a teenager. Specifically, wildmanx said that they [wouldn't hire
me for their "company IT or devops or whatnot."][hire]. Several people
have a sense of humour:

> Good idea to let him graduate from highschool before hiring him!
>
> by [nick__m]

I'll add for further memery that in addition to the stress of my entire
server infrastructure burning, I had to deal with passing the
behind-the-wheel driver's test. I've now been a licensed driver for
about a week and a half. Coincidentally, I got my server back running
the same day I passed the test.

## How I'm Doing Backups

I moved all the data in my self-hosting setup into a single directory.
The files were previously all lying about my home directory, which is
what led to the tragic "forgetting about `.env` amongst all my dotfiles"
incident.

I set up a cronjob that runs the backup script [`acts`] daily, set to
back up the self hosting directory. It currently keeps a buffer of 31
daily and 12 monthly backups, and keeps around yearly backups forever.
It's been running for a couple days now, and it's all been smooth
sailing so far.

## To Infinity and Beyond

I'd also like to say thanks to a number of people who were especially
kind, and made this a fun experience:
1. Graham Percival, an employee at Tarsnap Backup Inc., reached out to
   me directly – we had a fun and interesting email exchange.
2. [hannu] was the first to write the later much-echoed sentiment that
   reflecting on one's mistakes is a useful and laudable thing to do
   (see also [abraae] and [argomo]).

I'm going to continue iterating my self-hosting setup. I've still got a
couple [new services] I might want to throw up there. I also can't
forget about that [dedicated page] I promised...

[Great Alpine Migration Tragedy]: @/posts/wrong-way-to-switch-server-os.md
[Lobste.rs]: https://lobste.rs/s/ofcfbq/wrong_way_switch_operating_systems_on
[Hacker News]: https://news.ycombinator.com/item?id=27562613
[10 KB Club]: https://10kbclub.com
[`strace`]: https://jvns.ca/blog/2021/04/03/what-problems-do-people-solve-with-strace/
[old machine]: https://lobste.rs/s/ofcfbq/wrong_way_switch_operating_systems_on#c_sfwzdq
[klodolph]: https://news.ycombinator.com/item?id=27596126
[hire]: https://news.ycombinator.com/item?id=27597216
[nick__m]: https://news.ycombinator.com/item?id=27597698
[`acts`]: https://github.com/alexjurkiewicz/acts/
[hannu]: https://lobste.rs/s/ofcfbq/wrong_way_switch_operating_systems_on#c_b0zqnt
[abraae]: https://news.ycombinator.com/item?id=27597436
[argomo]: https://news.ycombinator.com/item?id=27598224
[new services]: https://www.firefly-iii.org
[dedicated page]: @/posts/wrong-way-to-switch-server-os.md#bye-bye
