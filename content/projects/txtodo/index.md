+++
title = "txtodo"
description = ""
date = 2020-05-20
weight = 0
+++

[**txtodo**][txtodo] is a minimalist open-source todo list app inspired by Jeff Huang's [*One File to Rule Them All*][one-file-to-rule-them-all]. It lists your immediate,
short-term tasks to help you get things done without overthinking it. With txtodo, you list all your tasks for the day in the morning, and throughout the day you check off tasks
as you complete them. Then, at midnight, all tasks are discarded so you can start fresh tomorrow – you can also create up to three long-term tasks that "float" with you from
day-to-day. Did I mention that it's completely open-source and built with SwiftUI? You can download txtodo from the app store [here][txtodo-store] and view the source code
[here][txtodo-src].

<!-- more -->

## Mobile App
### Story
On 15 February 2020, I found myself staring at [a blank Xcode project][empty-project]. Minutes earlier, I had deleted my account with [Trello][trello]. For those not familiar
with Trello, it's a [kanban-style][kanban] productivity tool made by [Atlassian][atlassian] to keep track of tasks in a project with multiple engineers. I, however, am a solo
devloper. I already know what features need work, which graphics need a refresh, and what languages aren't yet supported – because I'm working actively on everything. Keeping
track of every little move in a PMS for a solo project quickly turned Trello from productivity software to [crudware][crud] with fancy graphics. I wanted an app that could
[trick the instant gratification monkey][ted-talk] into getting something done. Something free from the [creeping featurism][featurism] in todo apps. I decided to build a simple
app to do just that.

And so, I found myself staring at the aforementioned blank Xcode project. I decided to learn and use the new [SwiftUI][swiftui] framework to make use of the latest features in
iOS development. I began coding. **txtodo** is built from the ground up to fix the problems I've found with modern task managers – something straightforward and easy-to-use,
that helps you get things done instead of getting bogged down making lists. I did this by creating a dead-simple UX with an important key feature: tasks you create disappear at
midnight. This prevents the overwhelming buildup of tasks we delay, and trains you to be highly productive – dealing only with tasks you can get done *that day*.

I've personally found this to be very useful, especially in the COVID-19 quarantine/shelter-in-place. Even when days melt together, txtodo has helped me maintain productivity:
pushing me to finish schoolwork, code everyday, and keep developing new projects.

### Code
txtodo is programmed 100% in Swift, with no third-party dependencies. It's also written with the most recent frameworks, [SwiftUI][swiftui] and [Combine][combine] (though as
SwiftUI is still new, I did have to write some wrappers from UIKit). The tasks are stored using the two core data models below:

![core data models][core-data-models]

Once a task is initialized, it's stored in an `NSPersistentCloudKitContainer` until its deleted, and displayed on the homescreen by a `ForEach` loop iterating over a
`FetchRequest`. (For more on Core Data and SwiftUI, I would point you to [this excellent tutorial][core-data-tutorial].) This `ForEach` loop is the only place where we can
control all the tasks in the list at once, and so it's here that we manage the tasks. Once we initialize each task's view, we add an `onAppear()` modifier to check if the task
should be deleted. If we're modifying a `dailyTaskView`, we check if the task's `creationDate` is equal to the day's date – if the dates match the task is displayed, and if they
don't the task is deleted from storage. If we're modifying a `floatingTaskView`, the process is a little more complicated. The task should only be deleted if it is completed and
the completion is a day or more old. This process looks something like this:

![task deletion modifiers][task-deletion-modifiers]

Another interesting thing about SwiftUI: the order of certain view modifiers affects the behavior of the view they're modifying. This is particularly apparent when dealing with
different combination of tap gestures. In my case, I want my task views to have single-tap, double-tap, and long press interactions. To get these interactions to work together
without conflicting, they have to be ordered like so:

![order of tap modifiers][ordering-modifiers]

I plan on writing more about that in a blog post about the quirks and bugs of SwiftUI.

## # Website
The txtodo website, [txtodo.app][txtodo], is programmed with [Svelte][svelte] – not [Sapper][sapper], it's a single static page and doesn't need all that extra overhead – and
[TailwindCSS][tailwind]. The combination of these two frameworks has become my all time favorite – together, they give the comforting feeling of programming in pure HTML+JS+CSS,
with the ease and enhaced capability of the most modern competing frameworks. You can [view the code for the site here][site-src].

[txtodo]: https://txtodo.app/
[one-file-to-rule-them-all]: https://jeffhuang.com/productivity_text_file/
[txtodo-store]: https://apps.apple.com/us/app/txtodo/id1504609185
[txtodo-src]: https://github.com/FIGBERT/txtodo
[empty-project]: https://github.com/FIGBERT/txtodo/commit/1b3ef45d5b22cae7ce533286a6a966f600dab3b0
[trello]: https://trello.com/
[kanban]: https://en.wikipedia.org/wiki/Kanban
[atlassian]: https://www.atlassian.com/
[crud]: http://catb.org/jargon/html/C/crudware.html
[ted-talk]: https://www.youtube.com/watch?v=arj7oStGLkU
[featurism]: http://www.catb.org/jargon/html/C/creeping-featurism.html
[swiftui]: https://developer.apple.com/xcode/swiftui/
[combine]: https://developer.apple.com/documentation/combine
[core-data-models]: core-data-structs.png
[core-data-tutorial]: https://www.hackingwithswift.com/quick-start/swiftui/introduction-to-using-core-data-with-swiftui
[task-deletion-modifiers]: manage-task-deletion.png 
[ordering-modifiers]: tap-modifiers-order.png
[svelte]: https://svelte.dev/
[sapper]: https://sapper.svelte.dev/
[tailwind]: https://tailwindcss.com/
[site-src]: https://github.com/FIGBERT/txtodo.app

