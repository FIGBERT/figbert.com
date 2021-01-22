+++
title = "SASS and Light Mode"
description = "I'm on a roll! A second blog post in less than a month! Crazy. Anyway, as you may have noticed – depending on whether or not you read this via RSS or on the main site – I changed the site styles. I got rid of dark mode, added styles for code and keyboard blocks, and changed the look of links to a new cool design."
date = 2021-01-02
updated = 2021-01-22
+++

I'm on a roll! A second blog post in less than a month! Crazy. Anyway,
as you may have noticed – depending on whether or not you read this
via RSS or on the main site – I changed the site styles. I got rid
of dark mode, added styles for code and keyboard blocks, and changed
the look of links to a new cool design.

**Update:** I brought back dark mode. Light mode gave me anxiety.
<!-- more -->

It all started the other day when I was cruising through cyberspace
and noticed a rather unique looking link style. Instead of the
[traditional underline styling][link-recommendation], hyperlinks were
surrounded in square brackets (like Markdown). I thought it was a
really cool change, and made the site stand out – so I stole the
idea and implemented it here! Yay for stealing. ~~More on this in a
future post...~~

However, when I went to add the new style to my site I noticed that my
`global.css` file had gotten rather lengthy and disorganized. Given
that [Zola][zola] comes with [built-in support][zola-sass] for
[Sass][sass], I thought I might try it out. I found it easy enough to
pick up given that I already know CSS. I decided to use Sass'
[indented syntax][sass-syntax], which required more work to convert
from my existing CSS but – in my humble opinion – looks much
cleaner.

Given that I was already tinkering with site styles, I decided to
implement a couple other changes. I abandoned the site's dark mode,
as though I myself am an avid dark mode user, I couldn't find a way to
implement it in a satisfying way. If I figure out a Sass-y way to do
so, I may add it back. I added a border around inline `code` blocks
~~because I thought I already had done that~~. Lastly, I added
StackExchange's amazing <kbd>kbd</kbd> styling so I could write
<kbd>⌥</kbd> + <kbd>⌘</kbd> + <kbd>N</kbd> in [this article][post].

I'm pretty happy with the new styles, but I have no doubt I'll
continue to tweak it as I find cool designs around the web.

Thanks for dropping by: see you next time!

FIGBERT

---

**PS:** It's interesting that Sass supports both of the two modern
syntax paradigms, both the indents and linebreaks camp and the
brackets and semicolons camp. I don't really prefer one over the
other, but it's an interesting divide.

[link-recommendation]: https://www.w3.org/WAI/WCAG21/Techniques/general/G183
[zola]: https://www.getzola.org/
[zola-sass]: https://www.getzola.org/documentation/content/sass/
[sass]: https://sass-lang.com/
[sass-syntax]: https://sass-lang.com/documentation/syntax
[post]: @/posts/how-to-mirror-your-iphone-to-your-mac.md

