+++
title = "The Wrong Way to Switch Operating Systems on Your Server"
description = "After moving my server to Hetzner, I built up a large collection of self-hosted services I use on a daily basis: from fun things like an RSS reader and an IRC bouncer, to critical services like my email. I ran them all with docker-compose from a Debian VPS. For the last couple months, however, I’ve been meaning to move away from Debian and towards something more minimal and clean. Over this last weekend, I decided to move to Alpine Linux."
date = 2021-06-17
+++

After [moving my server to Hetzner][mv], I built up a large collection
of self-hosted services I use on a daily basis: from fun things like
an [RSS reader] and an [IRC bouncer], to critical services like my
[email]. I ran them all with `docker-compose` from a [Debian] VPS.

For the last couple months, however, I've been meaning to move away
from Debian and towards something more minimal and clean. Over this
last weekend, I decided to move to [Alpine Linux].

<!-- more -->

## The Plan

The transition was supposed to be quick and dirty:

1. Shut down all the services running on my VPS
2. Make a backup of relevant files with [Tarsnap]
3. Mount Alpine Virtual ISO image and setup the OS
4. Restore files from Tarsnap backup
5. Bring everything back up

In a previous move between two servers, I simply `rsync`ed the
relevant files over to the new VPS. Here, where I'm just switching
operating systems on a single server, I figured I could make a backup
with Tarsnap, and be done within the day.

However, backups are much more complex than simply transferring files
from one server to another. My haphazard strategy resulted in three
days of stress and frustration as I clambered to restore a
self-hosting empire that I myself had reduced to ash.

## Day One

I began my work on the transition full of optimism, if a bit stressed.
I had read through the Tarsnap online documentation a number of times,
and was ready to make my first attempt. I loaded my Tarsnap account up
with USD$10 and ran:

```sh
$ sudo tarsnap -c -f backup-name docker-compose.yml ...
```

My terminal sat empty for hours. There were no changes – the process
was running, but there was no feedback. I was nervous.

> What if it failed silently?
>
> How can I check?
>
> What should I do?

I pressed `<Ctrl-C>`.

To my horror, stats printed to the screen: the backup had been 90%
complete, and I had stopped it. Convinced I had ruined the backup
completely, I deleted the partial backup from Tarsnap and started
again from scratch.

This was my first, but not last, moment close to tears. I went to
sleep and let the backup run overnight.

## Day Two

Day Two began well: I woke and the backup was finished! I wiped the
VPS, installed Alpine, and brought it up to spec. I created a regular
user, configured SSH, and decided to use `doas` instead of `sudo` for
a change. Alpine, so far, feels great to use. None of the cruft that
bothered me when using Debian.

### Virgin Tarnsap

With Alpine set up, I started to restore the backup:

```sh
$ doas tarsnap -x -f backup-name
```

Once again, after running all day it had not finished.

I opened up a new `tmux` window and poked around the filesystem. All
my files seemed like they were already there...

> What if it failed silently?
>
> How can I check?
>
> What should I do?

I pressed `<Ctrl-C>`, cutting off the download, and tried to bring
everything back online:

```sh
$ doas docker-compose up -d
```

It errored out. All my environment variables were undefined. Then it
hit me: I forgot to back up the `.env` file. My eyes welled up.

Still, I was determined. I worked to reconstruct the `.env` file from
secrets I had stored in [Bitwarden] (my offline copy, because my vault
is self-hosted and was thus down).

I ran it again:

```sh
$ doas docker-compose up -d
```

One of my services was missing a Dockerfile to build. I shouldn't have
pressed `<Ctrl-C>`! I was a total moron.

I put on a [sad song]. I was close to tears once again.

I gathered what was left of my resolve and trudged onwards. I searched
`tarsnap`'s manpages looking for something to speed up my download.

I found a number of flags that could have helped me *make* a backup
better the next time around, but nothing that would help me restore
the backup any faster. With nothing in the manpages, I went to look at
the [helper scripts].

### Chad Redsnapper

That's when I found it: [redsnapper]. A Ruby script that runs multiple
tarsnap clients at once to extract archives **fast**. Fucking
precisely. I wiped out the incomplete files I had restored, downloaded
Ruby and started restoring from the backup once again:

```sh
$ doas redsnapper backup-name
```

I changed [the song], and watched the files fly by on my screen. I
went to sleep, confident I would wake to good news.

## Day Three

The download had failed trying to download a large `.mkv` file.

### Manual Exclusion

I restarted `redsnapper`, explicitly excluding the `.mkv` it had
failed to download, and let it run until it came on another movie and
crashed again (an hour or so later). I excluded the second movie file
and sent it to run again.

This was a long, boring process. It sucked.

### An Afternoon Breakthrough

Then I realized something. `redsnapper` kept crashing when it hit
movies I had stored in [Jellyfin].

> I don't need Jellyfin at all. I've never watched a movie more than
> once.
>
> The movies take up massive storage on disk, and keep causing tarsnap
> to crash. They don't compress well either, so they take up a fuckton
> of space in the archives.
>
> I can always download the movies again if I want to give them
> another go.
>
> Why the fuck am I forcing myself to deal with this shit?

I stopped the download in the middle - the day's third, after two
earlier attempts that ended after encountering movie files – and
changed the command slightly before rerunning. After a number of
errors I couldn't explain, I realized my account was negative and
topped it up with another USD$25 before running:

```sh
$ doas redsnapper backup-name -- --exclude='*/jellyfin/*'
```

I returned to my computer a couple hours later. `redsnapper` had
stopped, with a whole lot of files extracted and a couple errors at
the bottom about symlinks.

I figured, this time, it had probably done everything properly but
couldn't create the symlinks (probably a flag missing somewhere). I
manually went through my files creating the symlinks, and then brought
everything up with docker-compose.

I checked the containers. All up.

I checked the logs – no immediate errors visible.

I opened [figbert.com] on my laptop. It appeared. Service was
restored. Hallelujah.

## Mistakes

I made a lot of them. Here are a few:

1. After shutting down my containers, I backed up my entire setup.
   This included a number of ["live" databases][live], `.git` folders,
   and other data that I either did not need or could reconstruct
   once the move had been completed.
2. I didn't back up the `.env` file I use to store secrets for use in
   `docker-compose.yml`. I was luckily able to reconstruct it from
   individual secrets I stored in my password manager.
3. A thorough read of the manpages before I started (rather than just
   the online guides) would have revealed several helpful flags:
   `-v` to see what files `tarsnap` is operating on,
   `--aggressive-networking` to take advantage of the datacenter
   internet speeds, and `--recover` to resume interrupted backups, to
   name a few.
5. We already talked about Jellyfin. Even with very little content in
   Jellyfin, the collection took up huge amounts of space on disk and
   in the backup (especially because video files don't compress
   well), and sat entirely unused. It is now gone. Good riddance.

## Future

What did I learn? Well, I'm still devising a plan to prevent things
like this from happening in the future. Here's the plan currently:

### Backups

Back up everything every day. I'll build a buffer of three "rolling"
backups, where backups collect up to a max of three and then, as new
backups are created, the older backups are removed.

The backup script will shut down the services, dump the databases
(i.e. convert as much content to plain-text, easily-compressible
formats as possible) and make a time-stamped backup (currently only
with Tarsnap, but perhaps in the future with a number of other
services).

### Restoring

Simply having high-quality backups to restore will already be a huge
leap forward. I'm also *definitely* going to continue using
[redsnapper]: the speed gains it gives on large backups are crucial.

### Manpages

I really should read all the documentation before I try something new.

## Bye Bye

I'll write further about my self-hosting setup as it evolves, and
publish the backup script once its finished. I'll also maintain a
dedicated page on my site describing my self-hosting setup as it
changes.

Also, I'm sure there are people more knowledgeable about Tarsnap than
I. That's basically the point of this article. If you are one of these
people, please don't hesitate to [email me] if you've got corrections,
advice, or just want to flex that you know how to do backups better
than I do.

[mv]: @/posts/moving-to-hetzner-from-digitalocean/index.md
[RSS reader]: https://miniflux.app
[IRC bouncer]: https://thelounge.chat
[email]: https://maddy.email
[Debian]: https://www.debian.org
[Alpine Linux]: https://alpinelinux.org
[Tarsnap]: https://www.tarsnap.com
[Bitwarden]: https://bitwarden.com
[sad song]: https://www.youtube.com/watch?v=I-sH53vXP2A
[helper scripts]: https://www.tarsnap.com/helper-scripts.html
[redsnapper]: https://github.com/directededge/redsnapper
[Jellyfin]: https://jellyfin.org
[figbert.com]: /
[the song]: https://www.youtube.com/watch?v=gPOEBkcZHM4
[live]: https://www.tarsnap.com/tips.html#back-up-live
[email me]: mailto:figbert@figbert.com
