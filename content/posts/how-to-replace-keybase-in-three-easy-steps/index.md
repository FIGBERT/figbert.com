+++
title = "How to Replace Keybase in 3 Easy Steps"
date = 2020-07-03
updated = 2021-04-12
+++

Ever since [Keybase was acquired by Zoom][keybase-joins-zoom], a
[company][zoom-security-one] [with][zoom-security-two]
[a][zoom-security-three] [very][zoom-security-four]
[bad][zoom-security-five] [history][zoom-security-six]
[with][zoom-security-seven]
[security][zoom-security-eight]/[privacy][zoom-security-nine],
[people wanted an alternative][zoom-security-ten]. There have been a
few different alternatives proposed: this is ~~the best~~ mine.

<!-- more -->

## What is Keybase?

Before we talk about replacing [Keybase][keybase], we should have a
good idea of what Keybase actually is. It's main features are as
follows (ordered as on the website):

* E2EE chats and messaging (people and teams).
* Cryptographic identity verification from around the net.
* [KBFS][kbfs] (Public signed file hosting, private E2EE file storage
w/ sharing, [Static site hosting??][kbfs-static])
* Git repositories? Crypto? [An alternative to PGP?][saltpack]

## Previous Attempts to Replace Keybase

I'm not the first person to try this, obviously. Some brave folks have
tried to build Keybase alternatives, such as [keys.pub][keys.pub] and
the brand-new [Keyoxide][keyoxide]. I've tried both, but found that
though they both are good in their own right, they are not the
solutions that I am looking for.

## OK Time for the Steps

### Step #1: Chat/Messaging

There are a few great pre-existing options for encrypted messaging:
[Signal][signal], [ProtonMail][protonmail] if you want to go full
email, [Telegram][telegram], and [WhatsApp][whatsapp]. However, they
all have their problems (though I use the first two on a daily basis).
Signal requires a phone number, and is more of an iMessage/text
replacement than a Slack-style chat app. Protonmail is literally not
chat – it's email. Telegram is (debatably) [not][telegram-security-one]
[secure][telegram-security-two]. If you use WhatsApp for security you
might be crazy – I only use it because it's *the way* to communicate
with people in the Middle East and Africa.

Instead, I would recommend you use [**Matrix**][matrix]. Matrix is an
"open network for secure, decentralized communication," and it's the
perfect replacement for Keybase's chat ~~and I would argue most other
chat apps too~~. It utilizes E2E encrypted messaging, and can be
self-hosted as well ~~or if you're cheap like me just get your friend
to host~~.

In addition to a Matrix server, you also need a client. For this, I
recommend [**Element**][element] – though [Nio][nio], once stable,
will almost surely be my go-to. Element is a beautiful Matrix client
with a bunch of awesome features, including Slack-like integrations,
and apps for pretty much every major platform (Linux, MacOS, Windows,
iOS, Android, and a web client). ~~Plus it looks a lot like Discord.~~

### Step #2: Identity verification

Replacing Keybase's [original function][keybase-archive] is probably
the most difficult part of this tutorial: cryptographically verified
identity proofs is a great and innovative idea. I would swap this out
with an [**IndieWeb**][indieweb] profile – one [part][h-card] of the
larger [microformats][microformats] HTML structure. There are some
pretty great tutorials out there (I would recommend [this
one][kev-article] by the fantastic [Kev Quirk][kev] and [this
one][brian-article] by [Brian Wisti][brian]), so I won't go into too
much detail about exactly how to do that. However, it's important to
note that though Kev recommends hiding your h-card with the
`display: none;` property: [don't do that][invisible-metadata]. I just
merged my about and contact pages onto my homepage, and added the
microformats classes to my existing markup.

{{ image(sources=["h-card.png"], fallback_path="h-card.png", fallback_alt="My Indieweb h-card") }}

### Step #3: File Storage

Replacing KBFS is easy to do, but hard to get right. Swapping to
[Google Drive][drive] is probably the move that most people would
make, but that abandons the entire security/encryption aspect of
Keybase. There's also [Dropbox][dropbox], but that has the same
problems as above. [ProtonDrive][proton-drive] has potential, but it's
not out yet.

**EDIT:** ProtonDrive is now in beta for paying subscribers, but I am
shifting away from the Proton ecosystem for other reasons and do not
recommend it. More in a future blog post.

Enter [**Syncthing**][syncthing]. [Nikita Tonsky][sync-article] wrote
one of my favorite posts of all time about Syncthing – go read it. One
reason Syncthing is so great is that it's not the same thing as KBFS
or any of the other "Drive" solutions. Instead of being a file hosting
system, it's a "continuous file synchronization program" – aka p2p.
You have no data limits other than your storage and no third-party to
worry about. Plus, sharing folders is also incredibly easy. Just read
the article.

### Bonus Step #4: Video Calling

It would be a shame to talk about text chat, or really any form of
communication, in this new pandemic age without talking about video
chat. After all, the whole reason I'm writing this article is because
the new videocalling giant [Zoom][zoom]. So, how have I replaced Zoom
and how does that relate to replacing Keybase? Well, Matrix happens to
have a fantastic [Jitsi Meet][jitsi] [integration][jitsi-in-matrix].
Plus, the folks over at Jitsi are [working on E2E encryption for their
calls][jitsi-e2e]. I've integrated Jitsi Meet into my self-hosted
instance of Matrix, and now all my videocalls are just that – mine!

## Summary

* Swapped chat to Matrix and Riot.
* Swapped identity verification to Indieweb.
* Swapped file storage/sync to Syncthing.
* Added videocalling to chat program via Jitsi.

## Conclusion

Keybase is a great service, and the people who work there should be
really proud of what they've built. However, given Zoom's aquisition
of the company, the stability and security of the product have been
called into question. So, ever one to hop on a hype train, I jumped
ship. I'm really happy with my solution, and I'd love to hear your
thoughts as well.

[keybase-joins-zoom]: https://keybase.io/blog/keybase-joins-zoom
[zoom-security-one]: https://medium.com/bugbountywriteup/zoom-zero-day-4-million-webcams-maybe-an-rce-just-get-them-to-visit-your-website-ac75c83f4ef5
[zoom-security-two]: https://theintercept.com/2020/03/31/zoom-meeting-encryption/
[zoom-security-three]: https://twitter.com/c1truz_/status/1244737672930824193
[zoom-security-four]: https://protonmail.com/blog/zoom-privacy-issues/
[zoom-security-five]: https://www.axios.com/zoom-closes-chinese-user-account-tiananmen-square-f218fed1-69af-4bdd-aac4-7eaf67f34084.html
[zoom-security-six]: https://twitter.com/nicoagrant/status/1268020841054269440
[zoom-security-seven]: https://citizenlab.ca/2020/04/move-fast-roll-your-own-crypto-a-quick-look-at-the-confidentiality-of-zoom-meetings/
[zoom-security-eight]: https://twitter.com/DanAmodio/status/1245329512889487361
[zoom-security-nine]: https://twitter.com/Ouren/status/1241398181205889024
[zoom-security-ten]: https://news.ycombinator.com/item?id=23103386
[keybase]: https://keybase.io/
[kbfs]: https://book.keybase.io/docs/files
[kbfs-static]: https://book.keybase.io/docs/files#keybase-pub
[saltpack]: https://saltpack.org/
[keys.pub]: https://keys.pub/
[keyoxide]: https://keyoxide.org/
[signal]: https://signal.org/
[protonmail]: https://beta.protonmail.com/
[telegram]: https://telegram.org/
[whatsapp]: https://www.whatsapp.com/
[telegram-security-one]: https://news.ycombinator.com/item?id=6936539
[telegram-security-two]: https://translate.google.com/translate?hl=en&sl=ru&u=http://habrahabr.ru/post/206900/
[matrix]: https://matrix.org/
[element]: https://element.io/
[nio]: https://nio.chat/
[keybase-archive]: https://web.archive.org/web/20140322062148/https://keybase.io/
[indieweb]: https://indieweb.org/
[h-card]: http://microformats.org/wiki/h-card
[microformats]: http://microformats.org/
[kev-article]: https://kevq.uk/how-to-create-an-indieweb-profile/
[kev]: https://kevq.uk/
[brian-article]: https://randomgeekery.org/post/2020/04/indieweb-h-cards/
[brian]: https://randomgeekery.org/
[invisible-metadata]: https://indieweb.org/antipatterns#invisible_metadata
[drive]: https://www.google.com/drive/
[dropbox]: https://www.dropbox.com/
[proton-drive]: https://twitter.com/ProtonMail/status/1278389663078768641
[syncthing]: https://syncthing.net/
[sync-article]: https://tonsky.me/blog/syncthing/
[zoom]: https://zoom.us/
[jitsi]: https://jitsi.org/
[jitsi-in-matrix]: https://matrix.org/blog/2020/04/06/running-your-own-secure-communication-service-with-matrix-and-jitsi
[jitsi-e2e]: https://jitsi.org/blog/e2ee/
