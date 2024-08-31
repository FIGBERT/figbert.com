+++
title = "My First RegEx"
date = 2021-01-21
[extra]
type = "post"
+++

`(?<=\.\/IssuerIcons\/).*(?=\.png)`
<!-- more -->

## What it does

Let's break it apart piece by piece. It's meant to return the filename
from a given path in a specific format. When given
`./IssuerIcons/Example.png`, the script should return `Example`.

The first section is a positive lookbehind: `(?<=\.\/IssuerIcons\/)`.
This asserts that the selected portion must by preceeded by
`./IssuerIcons/`.

The section section is a pattern match: `.*`. This matches all
characters, excluding newlines, of any length.

The third and final section is a positive lookforward: `(?=\.png)`.
This asserts that the selected portion must be followed by `.png`.

## Background

Yesterday, I wrote my first regular expression. I've always regarded
regex as an arcane art of true shell wizards – and for the most part,
I still do. Now though, I've gotten a glimpse of their world.

I wrote this expression for [Tofu][tofu], an open-source 2FA app for
iOS. I had been thinking of making more "issuer icons" for the app
when I noticed that the icons were all designed in one Sketch file.
This could become a problem if two people were to edit the file at
one time, so I suggested a [solution][issue].

The author got back to me with another idea: ditch Sketch altogether,
and replace it with a shell script that generates icons from a
directory of `png`s. I [wrote it][pr]. I've since refined it, with
help from [ThinkChaos][tc], to make it independent of any preceding
directories using `sed`: `sed -E 's:.+/(.+)\.png:\1:'`.

It was a really fun experience – I've never written bash before! It
reminded me a lot of Drew DeVault's post [Become shell literate][sl].
I work primarily from my terminal, and am slowly working my way up to
true mastery – I'm nowhere near close, but this was a step in the right
direction.

[tofu]: https://www.tofuauth.com/
[issue]: https://github.com/calleerlandsson/Tofu/issues/52
[pr]: https://github.com/calleerlandsson/Tofu/pull/60
[sl]: https://drewdevault.com/2020/12/12/Shell-literacy.html
[tc]: https://github.com/ThinkChaos
