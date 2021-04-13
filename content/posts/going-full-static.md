+++
title = "Going Full Static with Zola"
description = ""
date = 2020-08-22
updated = 2021-04-12
+++

Those of you who read [my last "I Wrote This" post][i-wrote-this-three]
will know that I was having some trouble with my website. My site was
coded using [Sapper][sapper], a [Svelte][svelte]-based web-app
framework I had been using for some time. I had chosen to use Sapper
because it allowed me to stay as close to the web-metal as possible,
while still letting me do some fancy things like use components,
scoped CSS, and [server routes][server-routes]. However, after diving
deeper into website tests and statistics, I started noticing that my
"static" site had a lot more moving parts than I thought. The HTML was
crammed full of inline scripts and `blob://`s, tanking performance,
wreaking havoc on my [CSP][csp], and breaking the site for people with
scripts disabled. I decided to move the site to [Zola][zola], a
ludicrously simple static site generator made in Rust. Feel free to
check out the [source code here][source].

<!-- more -->

## NPM Hell

I decided I was going to rewrite my site ~~because I have a bad habit
of rewriting everything all the time~~ largely because of Sapper's
underwhelming response to [this Github issue][strict-export], which
proposes a "strict export" for Sapper sites to remove inline scripts
and use of `eval()`. I think this is a great idea, but it
unfortunately has not received much attention (though it appears that
as I'm writing this, it has been added to a "Roadmap Triage" project
board). I started a new branch and began working to translate my site
to Sapper's main competitor, [Routify][routify]. Sapper and Routify
are not the same thing, but for me they both would serve well enough.
After around two days, I had a working MVP of my site in Routify.

**EDIT:** Sapper is being retired in favor of [SvelteKit][sk], which
has [the same issue][strict-export-sk]. smh.

Then disaster struck: I got a bunch of emails from Github. A series of
high priority security vulnerabilities had been found in dependencies
used by basically all of my web projects. I spent a day force-updating
all the dependencies of my web projects – a bit of a pain because npm
refuses to natively upgrade breaking changes – and decided to stay
as far away from the Javascript ecosystem as possible. I hate that
when I install a JS framework, a fundamental tool of modern web
development, I install a million other dependencies that could, and
often do, have critical security vulnerabilities. I'm thankful that
Dependabot caught these ones, but it really killed my enthusiasm for
using any JS framework on my site – which means Routify was out of the
picture.

## The Last Dependency Standing

I decided to use a [static site generator][staticgen]. I'd heard of
many of the big boys in the past, like [Hugo][hugo], [Jekyll][jekyll],
and [Eleventy][11ty], but they all had their own problems when I
looked at them in the past. Hugo has god-awful templating syntax,
Jekyll is Ruby-based and I don't know Ruby, and Eleventy isn't even an
escape from Javascript! So I decided to use [Zola][zola], a "one-stop
static site engine." Zola is made in Rust, so it's super fast, and
it's designed to be dead simple. Seriously: the CLI has only five
commands, everything is configured from one `.toml` file, and your
content is all written in "[Augmented][shortcodes]
[Markdown][internal-links]."

The interesting thing is that there's honestly not much more to the
story because of how easy and simple Zola is to use. All of my posts
and projects go into the `content` directory, my CSS, favicon, and
miscellaneous files (non-content related stuff like emojis and public
keys) go in the `static` directory, and templates and shortcodes go
into the `templates` directory. If I was using a theme, it's files
would go into a `theme` directory.

### Benefits

* My slow Python script to convert Markdown posts to Svelte (which was
perfect at first but I then packed full excess tests and sandboxing)
is gone. Zola handles that automatically.
* I got rid of TailwindCSS, and replaced it with [custom styles][css].
It's actually pretty fun to write simple custom CSS, especially with
modern tools like variables.
* Writing new posts is ludicrously easy now. I write a post in
Markdown, throw any images or videos used [in the same
directory][colocation], and publish.
* Zola comes with a whole bunch of features built-in that I didn't
have before, like syntax highlighting and anchor links (the latter of
which I have yet to set up). Other things are just handled
automatically, like feed generation or i18n.
* Build times are much faster. Exporting with Sapper wasn't slow, but
it didn't feel instant. Zola does.

### Drawbacks

* You sacrifice a certain amount of control by using a static site
generator, like [link][issue-681] [properties][issue-695]. You could
solve this with [shortcodes][shortcodes], or by contributing to the
project (which I plan to do).
* I mean that's really it to be honest.

**EDIT:** You can now add attributes like noreferrer to links
automatically with Zola... So I guess there's no more drawbacks?
Yeah that feels right.

## To Infinity and Beyond

I'm really happy with using Zola, and I look forward to continuing to
work with it in the future. I want to publish my blog's styles and
templates as a [Zola theme][themes], but I have to iron out a few
kinks (like anchor links, which are still a bit finicky on my end)
before that. I also have yet to re-implement a bunch of the indie-web
features and [GoatCounter][gc] analytics of my old site into this
version. Overall though, I think it's been a really fun and productive
experiment using Zola, and I'd highly recommend using it for anybody
looking for a great, no-nonsense static site generator.

**EDIT:** I fixed anchor links, and I decided to forgo analytics
altogether. My site's better off without JS.

Until next time, FIGBERT.

[i-wrote-this-three]: @/posts/i-wrote-this-three/index.md#next-steps
[sapper]: https://sapper.svelte.dev/
[svelte]: https://svelte.dev/
[server-routes]: https://sapper.svelte.dev/docs#Server_routes
[csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
[zola]: https://www.getzola.org/
[source]: https://git.figbert.com/figbert.com/figbert.com
[strict-export]: https://github.com/sveltejs/sapper/issues/1175
[routify]: https://routify.dev/
[sk]: https://kit.svelte.dev
[strict-export-sk]: https://github.com/sveltejs/kit/issues/93
[staticgen]: https://www.staticgen.com/
[hugo]: https://gohugo.io/
[jekyll]: https://jekyllrb.com/
[11ty]: https://www.11ty.dev/
[shortcodes]: https://www.getzola.org/documentation/content/shortcodes/
[internal-links]: https://www.getzola.org/documentation/content/linking/
[css]: /global.css
[colocation]: https://www.getzola.org/documentation/content/overview/#asset-colocation
[issue-681]: https://github.com/getzola/zola/issues/681
[issue-695]: https://github.com/getzola/zola/issues/695
[themes]: https://www.getzola.org/themes/
[gc]: https://www.goatcounter.com/

