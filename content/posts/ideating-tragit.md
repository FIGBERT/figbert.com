+++
title = "Ideating Tragit"
date = 2024-07-30
+++

There are many, many `git` forges to pick from. I'm going to make
another one—but before I do, I'm going to do a little thinking out loud,
and outline the what and why of this side project I'm embarking upon.

<!-- more -->

Decentralization is hugely important for the long-term health of the
internet. Indeed, this quality has been fundamental to the network since
its inception. This is easy to forget, and hard to see, now. But email
was not always Gmail and `git` was not always GitHub.[^1]

A big reason that these protocols have become so centralized is because
the companies that offer these services have genuinely innovated on
form. Google *invented* effective, user-friendly webmail. They pioneered
email's contemporary security features and user-facing advancements.
They were rewarded for that with users.

Nowadays, however, these capabilities no longer require the dedicated
engineering of whole teams of Google 10x-ers. With the mature and
effective tools and languages available to every developer, the
evolution of the open-source ecosystem, and the integration of big-corp
features into the open standards of the web, self-hosting does not have
to mean settling for less.

This has played out most clearly, again, with email. If you wanted to
email people, you used to have two choices: assemble the world's largest
house of cards and hope the incantation you crafted from terrifying
words that make no sense like [dovecot] and [mailcow]—which represent
interconnected services that do things you only sort of
understand—actually works with any meaningful consistency, or sell out
to the Oligarchs. No longer! Want one open-source binary to take care of
sending, receiving, security, accounts, redirects, and everything else?
It exists, and it's called [maddy], and I've been using it to host my
email for years now with no effort.

`git`, on the other hand, is very much still in the first stage. You
can, of course, use [GitHub]. It is a colossus, practically unavoidable
as a developer, and enabled my start as a programmer. The pull request
collaboration paradigm they created has totally supplanted the
[email-based method] that preceded it. But if you want your code to live
outside of Microsoft's proprietary claws, the process is far from
simple.

[My own setup] is representative of this problem, and quite janky. It's
a delicate combination of [`stagit`] and the built-in [`git-daemon`],
running via Docker Compose, pointed at the home folder of a bespoke
`git` user. I push to the server over `ssh`, relying on some weird
nested home directory hack that makes me very uncomfortable in order to
have a nice destination string. To publish a repo I have to create two
separate magic files, `git-daemon-export-ok` and `stagit-export-ok`.
Metadata lives in aptly-named files like `description` and `owner`.[^2]
I clone and pull with the daemon's `git://` protocol. Any changes mean I
have to restart `stagit` so it will generate the relevant pages again.
Collaboration is allegedly facilitated over email with a [crabmail]
instance, but it's been broken since I first attempted to set it up.
The whole thing is rather delicate and rough around the edges, which is
maybe the worst combination of characteristics for an important service.

I think there's a real opportunity here to build something that could
have an outsized impact on the self-hosted web. I don't want my git
setup to evoke the same feelings as the word "modem." I don't want to
compromise. I want big tech capabilities in a small and efficient
package. So let's leverage ecosystem advancements, think deeply about
how we can [facilitate collaboration], and make something.

Keep an eye out for some form of [tangible] [deliverable] in this area
sometime (hopefully) soon. I'm probably going to call it Tragit.

---
[^1]: I have met a profoundly depressing amount of young programmers who
cannot distinguish the latter two.
[^2]: The latter of which, of course, is purely aesthetic and has no
bearing on security or access rights.

[dovecot]: https://www.dovecot.org
[mailcow]: https://mailcow.email
[maddy]: https://maddy.email 
[GitHub]: https://github.com
[email-based method]: https://git-send-email.io
[My own setup]: https://git.figbert.com
[`stagit`]: https://codemadness.org/stagit.html
[`git-daemon`]: https://git-scm.com/docs/git-daemon
[crabmail]: https://crabmail.flounder.online
[tangible]: @/posts/tangible-deliverables.md
[deliverable]: https://fosstodon.org/@FIGBERT/112734909021642855 
[facilitate collaboration]: https://pr.pico.sh
