+++
title = "SimplyTranslate"
description = "A collection of translation scrapers with interfaces for gemini and the web."
date = 2021-07-02
updated = 2022-09-22
[extra]
icon = """<svg viewBox="0 0 706 437" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g fill-rule="evenodd"><path d="m595.5 345-213.5-1-1-151.75 2-.375 211.5-.875 2.5 2.5v150zm-3.5-4v-145h-207v145z"/><path d="m314 343.125-211.5-.125-1.5-1.5v-151.5h215v152.75zm-2-4.125v-145h-207l-1 146z"/><path d="m353 128h-1v-1h1z"/><path d="m354.5 135-3.25 1.75.25-1.75.5-1.5 3.5-3.5 5-3 .5-.5-1.5-1.5-10.5-.875-3.75-1.375v-2.5h2.5l.5 1.75 17.5 1.125.25 2.375-4.5 4.5-2.5 1.5z"/><path d="m489.5 138h-110l-1.5-1.5v-17.25l2-.375 108.5.125 1.5 1.5 1 16zm-2.5-4v-12h-105v12z"/><path d="m324.5 140-2.25-1.25-.5-1.5-1.25-.25-2-2-1 1-1-1-2.5-.5-7.75-2.75-.25-1.25-1-1 2.5-2.5 2.5-.625 7-2.875 2-1 1.5-.5 1-1 1.5 1.5-3.5 3.5h-1l-.5.5 1.5 1.5 1-1 1 1 1-1 1 1 1.5-.25h9l8-1.375 5 .125 3.5.5 1.5 1.5-.25 1.375-9.75-.625-27 1.75.5 1 2.5.625 2 .875 1.5.5 3.5 3.5v2zm-8.5-11.625 1.5-.375.5-1h-.5l-4 1-.5 1zm-4.5 1.625.5-1h-1.5l-.5 1zm3 1 .5-1h-2.5l-.5 1z"/><path d="m294.5 141h-109l-2.5-2.5.875-15.5.375-2 110.625 1 1.125 17.5zm-2.5-4v-12h-105v12z"/><path d="m448 71.375-33 .125-12-2.125-14-2.75-61 1.875-7 .875-16-.125-3-.75-4.875-1.75v-4.5l1.375-.25 3-3 2.5-.625 8-3.875 1.5-.5h.5l-.5-1-8.5.625-17 3.875-26 7-28 3.375-2-.25-12-3.25-2-.875-4.5-2.5-1.5-1.5v-3l2.5-2.5h2l4 4 10.5 2.25 12 .125 19-2.875 39-10 14-2 11.5-.5 2.5 2.5v2l-5.5 5.5-2.5 1.5-3.5 2.5-4.5 2.5-1.5.5h-.5l.5 1 10.5-.5 50-4.25 23 2.375 19 3.875 27 .875 31-4.875 7 .125 2.75.625v2.5l-1.25.25-2 2-3.5.5z"/><path d="m448 381.380005-59 4-6-1-6-1.880005-4-.869995h-8l-30 6.619995h-18l-12-2.619995-7-.130005-6 1-35.5 7.5-2 2h-3l-1.5-1.5 1-1 .25-1.25 1.25-.25 2-2 41.5-8.369995h10l14 2.75h11l6-.880005 24-5.75h15l9 2.380005 67-3.75 5-.630005 14.5-.75 1.5 1.5-2.5 2.5z"/><path d="m703.5 437h-701l-2.5-2.5 1-433.25 2-.375 701.5-.875 1.5 1.5v433zm-641-435 .5-1h-39.5l-.5 1zm636.5 428v-424l-694-1.875 1 425.875z"/></g></svg>"""
+++

[**SimplyTranslate**][st] is a collection of "translation scrapers with
interfaces for gemini and the web," made by [metalune]. In other words,
it's a privacy-respecting front end for Google Translate, similar to
Twitter's [Nitter]. Over the course of a couple days – and one
synchronous hacking session – I containerized the program to make it
easier to deploy on servers worldwide.

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
