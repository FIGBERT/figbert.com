+++
title = "I Wrote This #3"
description = "It appears I'm not that great at keeping a weekly schedule. Right after I published my last post, I started a class on text adventures and have been living and breathing in Inform7 ever since. I've also spent some time working on this site – though I've got even bigger changes coming in the future – learning a few new languages, and listening to a whole lot of music. I think something happened in cybersec too? Oh also I learned how to drive."
date = 2020-07-04
updated = 2021-08-10
+++

It appears I'm not that great at keeping a weekly schedule. Right after I published my last post, I started a class on text adventures and have been living and breathing in
[Inform7][inform] ever since. I've also spent some time working on this site – though I've got even bigger changes coming in the future – learning a few new
languages, and listening to a whole lot of music. I think [something happened in cybersec][twitter] too? Oh also I learned how to drive.

<!-- more -->

## Interactive Fiction

These past few weeks, my main work has been on interactive fiction as part of a summer class for my school. The first week was spent learning the history of text adventures (as
I will refer to them for the rest of the article, becuase calling them "interactive fiction" makes me sound like ~~a dick~~ a snob). I gathered a collection of games to play in
free time (if I ever have any more of that), from the very first of the genre – Adventure – to modern ones like Lost Pig.

{{ image(sources=["collection.png"], fallback_path="collection.png", fallback_alt="My collection of text adventures: Adventure, Bronze, Counterfeit Monkey, Curses, Hitchhiker's Guide to the Galaxy, Lost Pig, and Slouching Towards Bedlam") }}

In the second week, we all made our own text adventures. It was a really interesting experience – drastically different than any other programming I've done. The main thing I
struggled with was the semi-NLP style of [Inform7][inform]. Rather than telling the computer what to do, I felt like I was making suggestions. I also struggled with the editor a
bit. Inform7 isn't open source, which means there's only one IDE you can use to program in the language. That would be fine if the IDE was high quality, but I often found it
~~really bad and draining~~ mediocre. This was made a little better after I changed the editor colors to be much more vibrant ~~so I wouldn't fall asleep~~, but I still
felt like it needed some work. Regardless of any struggles along the way, the payoff after the game was finished was huge. Watching my little sister play a text adventure for
the first time, *one I had made*, was awesome.

Without further ado, I present to you: *One Angry Wizard, or the Tentacular Adventures of our Brave Hero through a World Most Strange and Foreign*. You can ~~play it online
here or~~ download the .gblorb [here][angry-wizard]. **EDIT:** I've removed the online version for privacy concerns. I'm going to push a project write-up to the projects
page soon, and plan on updating the game consistently for a while (if you want to send me feedback, send it to my [email address][email]). Enjoy!

## Site Work

I made some changes that you guys can see, and some other ones behind the scenes.

### Joining Webrings

I first encountered webrings on [Hacker News][geekring-hn], where I find most of my interesting internet things. From there, I decided to join both the [geekring][geekring] and
the [Hotline Webring][hotline-webring] – you can find links to the webrings in the nav on every page. Joining the Hotline Webring was designed to be supremely easy, but the
geekring was a little more complicated. I've never been a big IRC person (though not for lack of trying), and I ended up joining via the HTML form and getting my key via email
(I may or may not have confused my number with my private-ish key, and had to use a little bit of [bfg][bfg] magic to fix that).

### Self-Hosting

My site was previously hosted using a continuous deploy on [Netlify][netlify]. This was a pretty great system for me – all I had to do was commit my code to the GitHub repo,
which I was already doing, and the they would take care of everything and serve a great site – here's the kicker – **for free**. This was working really well for me for a while,
until I decided to add security headers to the site. I tried doing this in two different ways: using [Helmet][helmet] as described [in the Sapper Docs][sapper-csp] and using
Netlify [\_headers][netlify-headers]. The Helmet middleware didn't work with Netlify, and I'm honestly not sure why – possibly because of how they host the file server (I'm not
sure what/how they server the site), or maybe I just f\*cked up somewhere idk JavaScript is hard. Using the Netlify config didn't work either because I'm not a paying
subscriber, which wasn't too clear at first. This would probably be solved if I just gave them money, but I'm not going to do that any time soon.

I decided to move to [DigitalOcean][digitalocean] and host the site myself (or I guess not totally myself – I don't feel comfortable running it on a Pi from my house just yet)
with [Caddy][caddy]. I went with DigitalOcean partially because of their dev-focused business model, but mostly because they're cheap (my droplet is USD$5/month and I get $50
credit with them from the [GitHub Student Developer Pack][student-pack] – my first year of hosting for only $10).

Unfortunately, I didn't quite run the transition too well. It definitely wasn't zero downtime – it was probably more like a-few-hours downtime. I doubt this really affected
anyone because of my small audience, but I was still up late working on it. If it had happened a few days later, it might have gotten mixed up with the [Cloudflare
downtime][cloudflare] (I don't use Cloudflare).

My current setup uses a custom CaddyServer configuration to serve my site, which I am absolutely loving so far: it is so much easier to run advanced setups with Caddy than
Apache or Nginx. I wanted to move away from Javascript analytics (via [GoatCounter][goatcounter]) to log-based analytics (via [GoAccess][goaccess]) but found that Caddy's
structured logs are not supported natively. I'm hoping [they'll add it][goaccess-gh] soon though! Also, I stumbled on [this article][goaccess-script] while writing this, and may
check that out.

### Next Steps

I've got two major todos for my site in the near future. The first thing I want to do is Dockerize. Using Docker will significantly clean up my current setup, and allow me to
host more fun things on the same machine (for example, [my own analytics][plausible] and maybe [git][gitea]). With that said, I probably should get a little better at Docker
first... For beginners, [Flavio Copes'][flavio-docker] has a few pretty great posts on the subject.

The second thing I want to do is a bit of a larger project, and one I'm not yet sure how I'm going to solve it. I've run into some problems with the frameworks I use to develop
[figbert.com][figbert]. Sapper generates inline scripts and blobs, which tanks the security of my CSP. [Their proposed solution][sapper-csp] is to inject nonces with JS
middleware, but this doesn't work with CaddyServer. I would much rather Sapper [avoid inline scripts][sapper-gh] altogether, but this doesn't seem likely. I really like the
freedom that writing static sites in Svelte provides me versus other static site generators, but this could be a dealbreaker. I might talk a look at [Routify][routify] and see
if that's any better. I've also been reconsidering using TailwindCSS, however useful it is, after reading [these][etcd] [three][library-overuse][^1] [articles][tailwind]. I
attempted to replicate the current look of [figbert.com][figbert] without TailwindCSS, and failed. So I'm probably going to rewrite the site again, though I'm not sure how.
Through iteration, we will arrive at a stable version – this one, unfortunately, is not yet it. If I do leave Svelte, which is probably a 50/50 chance at this point, I would
probably go either back to [Hugo][hugo] (with some variation of the incredible [archie][archie] theme) or to [Zola][zola].

## Real World Updates

### CyberSec

So, some pretty crazy things have happened. For one, [Twitter got hacked][twitter] by some people from [OGUsers][ogusers] who got access to some internal managment tools. This
hack, though not necessarily the most technical hack, was super high profile. There were a few [really good articles][more-money] written about the hack, but I also noticed a
few people acting in ways that I thought were not appropriate. More specifically, [Biran Krebs][krebson], who reacted to the hack be [repeatedly][dox-one] [doxxing][dox-two] the
hackers, many of whom are still teenagers. He's received relatively little [criticism][dox-callout] for doing this, though it appears to be [a pattern of behavior][dox-past].

There was also a brief mention of a new [macOS malware][mac-malware], but judging by the lack of further publicity it's probably not that common in the wild. That, or people
don't care because it's spread mainly through torrenting sites and they don't want to protect people they perceived to be morally below them – which is wrong, obviously.

### Driving

I learned how to drive! Or rather, I got kind-of licensed to drive a car in the US. I've been driving around a lot lately as something fun I can do to pass time in quarantine,
and last week I finished my online driver's ed course and got my learner's permit. It was a surprisingly simple and COVID-friendly process! The most complicated/least
COVID-friendly part was going to the DMV to take the written test, but I wore a mask and gloves and glared at anybody who got remotely close to me. The next steps are much more
dangerous to do during a pandemic, but we have a year to complete them so we're going to delay them (some in-person driver's training and the driver's test) for a bit. For now
though, I have a piece of paper that says I can learn to drive!

### Better Platforms

I've also taken some time to focus on decentralization. I've had a [Mastodon account][mastodon] for a while, but I rarely used it. I didn't have a mobile client, and I almost
never use social media on my computers. To help change my behaviour I downloaded [Mast][mast], a paid Mastodon client for the Apple ecosystem. I went with Mast mostly because
it's absolutely *gorgeous* – and [open source][mast-src] – which is something I value in the apps I use. Apps that look really nice are fantastic inspiration for my own apps'
designs, and this one is no exception.

I've also started using three other apps much more heavily recently: [Feedly][feedly], [Octal][octal], and [Element][element]. Feedly is a fantastic RSS reader, which helps me
keep track of all the interesting blogs that I find online (I read somewhere about self-hosting an RSS reader, which sounds pretty cool, but I forget what it was called). Octal
is a HN client for iOS, which is really handy for keeping up with my favorite tech news when I'm away from my computer. Element (previously Riot), is the first-party
[Matrix][matrix] client that makes using a decentralized E2EE chat service feel better than Discord. I love it. In an ideal world where I could choose the tools I use to
communicate with people, I would only use Signal and Element/Matrix (for replacing iMessage and Discord/Slack, respectively).

### Music

Oh my god there's so much new music.
* [Jonny by Bar Tsabari](https://www.youtube.com/watch?v=52CzYCmJFD8)
* [Kukuriku by Eden Ben Zaken and Omer Adam](https://www.youtube.com/watch?v=d60H5D9GefE)
* [Ta'azri et Atzmech by Dekel Vaknin](https://www.youtube.com/watch?v=_Vs-1s2BtJA)
* [Sivuvim by Eden Hason](https://www.youtube.com/watch?v=ZTNmNJnvdzc)
* [Lecha Dodi by Moshe Peretz and others](https://www.youtube.com/watch?v=2AWLqffzR9k)
* [Haravot BaPita (Album) by Peled](https://www.youtube.com/watch?v=NV3e7d1bELI&list=OLAK5uy_kMpEzEcDVrgK_muDGEoy2r-iTxWbCKet0)
* [Magevet BaAvir by Noroz](https://www.youtube.com/watch?v=5_5PtfmoIQk)
* [Nadav\_15 by Shekel](https://www.youtube.com/watch?v=_wIkyNfJYYc)
* [Moshe by Narkis and Miri Mesikah](https://www.youtube.com/watch?v=CjHiYZU1gJE)
* [Tik Tok by Mohamed Ramadan and Super Sako](https://www.youtube.com/watch?v=YQpuETX_tr0)
* [Aliyato VeNiflato Shel Shem Tov Hevi by Tamir Bar](https://www.youtube.com/watch?v=I9xBb3MDxgk)
* [Falafel Pop (Album) by Quarter to Africa](https://www.youtube.com/watch?v=7VWBTxOEHoQ&list=OLAK5uy_lRWsEN-9ydoMrdEzkw7xySe1105vhZLYc)
* [Lama Kacha Atzuva by Idan Raichel and Stav Beger](https://www.youtube.com/watch?v=sZHSE6tyccQ)
* [Kapara by Kevin Robin and Rotem Cohen](https://www.youtube.com/watch?v=1EZBnZRyjpc)
* [Ehad HaAm by Aya Zahavi Fayglin](https://www.youtube.com/watch?v=MADaEN_3N18)

## Wrapup

I hope you enjoyed reading this update! I know it's much longer than usual, and I'll try and keep them shorter than this from now on. I plan on uploaded more short,
topic-focused articles rather than just updates, but those will come soon. For now though, I need to focus on knocking out some of the larger projects that I'm working on. I
keep finding cool and interesting things to do, and I need to work on finishing the ones that I've already started!

Salamat, FIGBERT

---

[^1]: The site appears to be down, and I neglected to archive it. Such is the nature of the internet.

[inform]: http://inform7.com/
[angry-wizard]: /content/One%20Angry%20Wizard%2C%20or%20the%20Tentac.gblorb
[email]: mailto:figbert+textadventures@figbert.com
[geekring]: https://geekring.net/
[geekring-hn]: https://news.ycombinator.com/item?id=23549471
[hotline-webring]: https://hotlinewebring.club/
[bfg]: https://rtyley.github.io/bfg-repo-cleaner/
[netlify]: https://www.netlify.com/
[helmet]: https://helmetjs.github.io/
[sapper-csp]: https://sapper.svelte.dev/docs#Security
[netlify-headers]: https://docs.netlify.com/routing/headers/
[digitalocean]: https://www.digitalocean.com/
[caddy]: https://caddyserver.com/
[student-pack]: https://education.github.com/pack/
[cloudflare]: https://techcrunch.com/2020/07/17/cloudflare-dns-goes-down-taking-a-large-piece-of-the-internet-with-it/
[goatcounter]: https://www.goatcounter.com/
[goaccess]: https://goaccess.io/
[goaccess-gh]: https://github.com/allinurl/goaccess/issues/1768#issuecomment-646674023
[goaccess-script]: https://alexmv12.xyz/blog/goaccess_caddy/
[plausible]: https://docs.plausible.io/self-hosting/
[gitea]: https://docs.gitea.io/en-us/install-with-docker/
[figbert]: https://figbert.com/
[flavio-docker]: https://flaviocopes.com/tags/docker/
[sapper-gh]: https://github.com/sveltejs/sapper/issues/1175
[routify]: https://routify.dev/
[etcd]: https://www.roguelazer.com/2020/07/etcd-or-why-modern-software-makes-me-sad/
[library-overuse]: https://edvinleander.com/2020/07/15/stop-the-overuse-copy-pasting-and-unecessary-libraries/ 
[tailwind]: https://johanronsse.be/2020/07/08/why-youll-probably-regret-using-tailwind/
[hugo]: https://gohugo.io/
[archie]: https://github.com/athul/archie
[zola]: https://www.getzola.org/
[twitter]: https://techcrunch.com/2020/07/15/twitter-accounts-hacked-crypto-scam/
[ogusers]: https://ogusers.com/
[more-money]: https://fortenf.org/e/security/2020/07/15/twitter-hack.html
[krebson]: https://krebsonsecurity.com/
[dox-one]: https://krebsonsecurity.com/2020/07/twitter-hacking-for-profit-and-the-lols/
[dox-two]: https://krebsonsecurity.com/2020/07/whos-behind-wednesdays-epic-twitter-hack/
[dox-callout]: https://news.ycombinator.com/item?id=23865035
[dox-past]: https://itwire.com/security/infosec-researchers-slam-ex-wapo-man-krebs-over-doxxing.html
[mac-malware]: https://www.wired.com/story/new-mac-ransomware-thiefquest-evilquest/
[mastodon]: https://fosstodon.org/@figbert 
[mast]: https://apps.apple.com/us/app/mast/id1437429129
[mast-src]: https://github.com/tiagomartinho/Mast2
[feedly]: https://feedly.com/
[octal]: https://apps.apple.com/us/app/octal/id1308885491
[element]: https://element.io/
[matrix]: https://matrix.org/

