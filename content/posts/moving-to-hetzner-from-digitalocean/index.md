+++
title = "Moving To Hetzner Cloud from DigitalOcean"
date = 2020-11-01
+++

Since I began working on self-hosting, I've been using a
[DigitalOcean][do] (affiliate link) VPS running [Debian 10][debian].
However, after investigating the alternatives in the space,
I'll be moving to [Hetzner Cloud][hetzner] when my DigitalOcean
credits run out in six months. Here's why.
<!-- more -->

I went with DigitalOcean as my hosting platform primarily because
of the USD$50 credit included with [Github Student][gh-student].
I've used USD$20 of that credit as of today, and the remaining money
should run out around April 2020, giving me almost a year of VPS
for free. Not a bad deal.

With that said, as my credits hit the half-way point, I've begun
to think about what's to come. Namely, the fact that my current
server is running at a constant 80% memory usage – severely
limiting what I can self-host.

## Money talks...

I currently use the cheapest DigitalOcean VPS available. I have
1 vCPU, 1GB of RAM, 25GB of SSD, and 1TB of data transfer. All that
power is packed in a clean USD$5 per month. This is, as far as cloud
hosts go, pretty good bang for your buck. Hetzner **blows that out of
the water**. Take a look at this table:

| **USD/Month** | **vCPU** | **Memory** | **Storage** | **Traffic** | **Provider** |
|:--------------|:---------|:-----------|:------------|:------------|:-------------|
| $3.41 | 1 | 2GB | 20GB | 20TB | Hetzner |
| $4.77 | 2 | 2GB | 40GB | 20TB | Hetzner |
| $5.00 | 1 | 1GB | 25GB | 1TB | DigitalOcean |
| $6.70 | 2 | 4GB | 40GB | 20TB | Hetzner |
| $10.00 | 1 | 2GB | 25GB | 2TB | DigitalOcean |

Check out the math on that, seriously. Hetzner's base tier offers
1 vCPU, 2GB of ram, 20GB of SSD, and 20TB of data transfer for
USD$3.41 per month. That's double the ram and 20 times the transfer
for almost **half the price** of my current DigitalOcean droplet.
The fourth down in the table above, the one I plan on purchasing, costs
USD$1.70 more than DigitalOcean and has **quadruple the performace**
of my current VPS. That's more than even *Docker* could need. Ok that
might be a slight exaggeration, but it's still a lot.

## ...and it speaks for the trees.

Hetzner is a [green hosting provider][green-web-directory], as
certified by the [Green Web Foundation][gwf]. DigitalOcean is not.
Obviously, climate change is important. If we look at it objectively,
it's one of the only extinction-level threats to human existence at
the moment. All that is to say that switching to a green hosting provider
is the only thing [I need to do][my-carbon] according to [this online
website carbon calculator][carbon-calc], and you know I can't resist
online website metrics.

## So that's nice.

Anyways, that's a pretty good summary of my thoughts on the move. I'm
probably going to use the move to make a few other changes to my hosting
setup (i.e. `docker-compose` to [`k3s`][k3s], [`umami`][umami] to
[`plausible`][plausible]). I'll keep you all abreast of the latest updates
to my hosting in future posts.

Until then, this is FIGBERT signing off. I should make a more consistent outro.

[do]: https://m.do.co/c/1f23d011ae24
[debian]: https://www.debian.org/
[hetzner]: https://www.hetzner.com/
[gh-student]: https://education.github.com/pack
[green-web-directory]: https://www.thegreenwebfoundation.org/directory/
[gwf]: https://www.thegreenwebfoundation.org/
[my-carbon]: https://www.websitecarbon.com/website/figbert-com/
[carbon-calc]: https://www.websitecarbon.com/
[k3s]: https://k3s.io/
[umami]: https://umami.is/
[plausible]: https://plausible.io/
