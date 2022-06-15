+++
title = "Tofu"
date = 2021-04-07
weight = 3
+++

[**Tofu**][tofu] is an easy-to-use, open-source, two-factor
authentication app designed specifically for iOS, made by
[Calle Luks][calle]. I adopted it after migrating from Authy,
and ended up overhauling its icon system.

<!-- more -->

It's a really well designed app:

![A screenshot of Tofu in action][sc]

When I migrated to Tofu, it had a limited number of hand-designed
icons in one big [Sketch file][sketch]. Each icon was created and
exported manually. I set out to [simplify][issue] the process, and
Calle [proposed][proposal] we create a shell script to generate
icons on-demand from a folder of pngs.

I got my shell hat on and a week later, [my pull request][pr]
was commited to upstream with a brand new bash script. [The
script][script] iterates over a given directory using `sed`
and [regex][post] to grab the names of each png inside and add
them to Xcode's assets folder. It uses a [heredoc][heredoc] as
a template for the new imageset's JSON, and the `sips` cli to
generate properly sized icons for use in the app.

Contributing to open source projects is incredibly fun. If you've
got a free weekend, take some time to hack on your favorite codebase.
Big thanks to [Calle][calle] for creating such an awesome app – I
look forward to collaborating more in the future.

Download the app [on the App Store][store], and explore the source
code [on GitHub][tofu].

[tofu]: https://github.com/calleluks/Tofu
[calle]: https://www.calleluks.com

[sc]: accounts.jpg

[sketch]: https://github.com/calleluks/Tofu/blob/d6b4544f7a996fd2c7a4feaa77cdee7735240749/IssuerIcons.sketch
[issue]: https://github.com/calleluks/Tofu/issues/52
[proposal]: https://github.com/calleluks/Tofu/issues/52#issuecomment-760989928

[pr]: https://github.com/calleluks/Tofu/pull/60
[script]: https://github.com/calleluks/Tofu/blob/master/GenerateIssuerIconAssets.sh
[post]: @/posts/my-first-regex.md
[heredoc]: https://stackoverflow.com/a/2954835

[store]: https://apps.apple.com/app/tofu-authenticator/id1082229305
