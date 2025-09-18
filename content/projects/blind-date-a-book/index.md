+++
title = "Blind Date A Book"
description = "A website to help you find your next read, with a charming twist."
date = 2025-01-19T17:20:00-08:00
updated = 2025-09-17T19:19:00-04:00
+++

[Blind Date A Book] is part ecommerce website and part art project. I
first encountered its physical counterpart at a Barnes and Noble some
five years ago: I remember thinking to myself even then that it was a
perfect candidate for digitization. At long last, using the approach to
making I picked up [in DESIGN11], I've hacked together a boutique
version of this experience accessible for anyone with an internet
connection. And at the [Recurse Center], I overhauled the site for a
more fun, correct, and cost-effective developer experience. This is the
story of how I became the proprietor of my very own bookshop.

![A table at SF's Telescope Coffee covered in disguised books](cafe.jpg)

At first I was confused by the lack of digital equivalent to the
physical stands. Surely ordering books online is a solved problem. I
mean, that's what Amazon was founded for—and a custom frontend that just
displays things differently seems a trifling project.

Turns out it's hard to buy things with code. So it actually came out a
bit more [personal]:

1. A list of books chosen by people I care about.
2. Descriptions they hand-wrote.
3. A funky little website.
4. Me going to buy the real book and sending it you myself.

More of a sensitive touch, perhaps.

![Early ideation of the website in my notebook](notebook.png)

The tech stack of the site bears further analysis. I've long puzzled
over the best way to go about building web projects, going so far in my
complaints-sans-solutions as to coin [Benji's Rule of Frameworks]. For
[CLIs] and [iOS/macOS] apps, the answers have been easy: but building
for the internet has always seemed more experimental.

In the first iteration of this project, I tried out a framework called
[Web Origami] and ran the commerce via Shopify. It wasn't all sunshine
and rainbows—the product was far too JavaScript-y for me—so I continued
poking around until eventually I found [Gleam]. Building in Gleam is
weird and exciting, which is exactly what I'm looking for! I like it so
much that I gave a talk about it at Recurse, the [slides and notes] for
which are available to read here.

I also moved from Shopify to Stripe, which has allowed me to a) have a
single source of truth by using key-value metadata in Stripe as a
database and b) save $500/year by paying a percentage of profits instead
of a fixed and pricey subscription.

Check out [the website][Blind Date A Book] for yourself to find your
next read and explore [the code on GitHub]!

[Blind Date A Book]: https://blinddateabook.com
[in DESIGN11]: @/posts/stanford-quarterly-reflection-05/index.md#academics
[Recurse Center]: https://www.recurse.com/scout/click?t=0d85c06dc14f97552f2130471d4e3086
[personal]: https://bsky.app/profile/andy.works/post/3lclb4jvle72u
[Benji's Rule of Frameworks]: https://fosstodon.org/@FIGBERT/113683895559149910
[CLIs]: https://charm.sh
[iOS/macOS]: https://developer.apple.com/xcode/swiftui/
[Web Origami]: https://weborigami.org
[Gleam]: https://gleam.run/
[slides and notes]: for-profit-library.pdf
[the code on GitHub]: https://github.com/figbert/bdab
