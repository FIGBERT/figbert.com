+++
title = "CSS System Colors Dashboard"
description = "A website that gives developers a visual preview of CSS' underused system-color data type."
date = 2024-05-20
+++

[**CSS System Colors Dashboard**][dash] is a website that gives
developers a visual preview of CSS' underused `system-color` data type.
These colors are context-dependent, changing between operating systems
and browsers; the dashboard provides effective visualization of the
colors across environments.

I discovered native colors in CSS through [Jim Nielsen][jim]. These
colors are extremely useful for developing "along the grain" of a
platform. I now use them all the time! [This new dashboard][dash] lists
the available system colors and displays their value in context.

The dashboard is a [tangible deliverable]. It's a simple, cute tool with
a lot of utility.

This project was developed in part as an experiment in learning Rust.
I used [axum] and [askama] in building the site, selected for their
(aspirationally) intuitive interfaces and strong embrace of the type
system. However, I found the development experience in the language
overcomplicated and unergonomic. I still hope to enter the Rust
community—I am enthusiastic about the ideals of the language and its
potential—but will seek out other ways to do so.

Check out [the live website][dash] in your browser to explore your
system colors and view the source code [on my forge][git].

[dash]: https://systemcolors.xyz
[jim]: https://blog.jim-nielsen.com/2021/css-system-colors/
[tangible deliverable]: @/posts/tangible-deliverables.md
[axum]: https://github.com/tokio-rs/axum
[askama]: https://github.com/djc/askama
[git]: https://git.figbert.com/css-system-colors/
