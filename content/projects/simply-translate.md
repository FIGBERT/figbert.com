+++
title = "SimplyTranslate"
date = 2021-07-02
updated = 2022-09-22
weight = 6
+++

[**SimplyTranslate**][st] is a collection of "translation scrapers with
interfaces for gemini and the web," made by [metalune]. In other words,
it's a privacy-respecting front end for Google Translate, similar to
Twitter's [Nitter]. Over the course of a couple days – and one
synchronous hacking session – I containerized the program to make it
easier to deploy on servers worldwide.

<!-- more -->

When I first found the program, I immediately wanted to add it to my
collection of self-hosted front ends. I had only one problem: I run my
services with Docker, and SimplyTranslate had no Dockerfile. I tried
slapping something together quickly, but curling from the container only
threw an error:

```
curl: (52) Empty reply from server
```

I hopped onto the `#simple-web` IRC channel on [Libera.Chat] and started
chatting with the devs. A couple days of back-and-forth later, we sat
down to debug together. After scouring the internet, we determined that
the application was binding to the wrong interface: `127.0.0.1`, which
is only accessible from the local machine, instead of `0.0.0.0`, which
is public.

I cooked up a pair of working Dockerfiles – the first running the app
directly and the second through [uvicorn]. Metalune made a [repo for the
Dockerfiles][repo], and I sent in a [patch via email][patch]. It was
[committed] within the hour.

This contribution was particularly interesting! We collaborated over IRC
and across timezones, and I ended up returning to git's roots by
submitting the patch via `git send-email`. Compared to the GitHub
workflow, this feels very natural!

You can use SimplyTranslate over on metalune's [hosted instance], and
browse the source code [on Codeberg].

[st]: https://simple-web.org/projects/simplytranslate.html
[metalune]: gemini://metalune.xyz
[Nitter]: https://github.com/zedeus/nitter
[Libera.Chat]: https://libera.chat
[uvicorn]: https://www.uvicorn.org
[repo]: https://codeberg.org/SimpleWeb/SimplyTranslate-Docker
[patch]: https://lists.sr.ht/~metalune/simplytranslate-devel/patches/23516
[committed]: https://codeberg.org/SimpleWeb/SimplyTranslate-Docker/commit/4fc34e3503def3a8436dab4f84a1731070a715ba
[hosted instance]: https://simplytranslate.org
[on Codeberg]: https://codeberg.org/SimpleWeb
