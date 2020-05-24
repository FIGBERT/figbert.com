txtodo,txtodo,20/05/2020,1

[**txtodo**](https://txtodo.app/) is a minimalist open-source todo list app inspired by Jeff Huang's [*One File to Rule Them All*](https://jeffhuang.com/productivity_text_file/). It lists your immediate, short-term tasks to help you get things done without overthinking it. With txtodo, you list all your tasks for the day in the morning, and throughout the day you check off tasks as you complete them. Then, at midnight, all tasks are discarded so you can start fresh tomorrow – you can also create up to three long-term tasks that "float" with you from day-to-day. Did I mention that it's completely open-source and built with SwiftUI?

<div class="my-6 flex space-x-10">
	<div class="w-40 h-12 rounded-lg border border-2 border-current border-solid flex items-center">
		<a href="https://apps.apple.com/us/app/txtodo/id1504609185" class="flex" target="_blank" rel="noopener noreferrer">
			<img src="/content/txtodo/apple.svg" alt="apple logo" class="w-5 mx-2">
			<span class="text-xs leading-snug">download from the app store</span>
		</a>
	</div>
	<div class="w-40 h-12 rounded-lg border border-2 border-current border-solid flex items-center">
		<a href="https://github.com/therealFIGBERT/txtodo" class="flex" target="_blank" rel="noopener noreferrer">
			<img src="/content/txtodo/github.svg" alt="Github logo" class="w-5 mx-2">
			<span class="text-xs leading-snug">view the code</span>
		</a>
	</div>
</div>

## # Mobile App
### ## Story
On 15 February 2020, I found myself staring at [a blank Xcode project][1]. Minutes earlier, I had deleted my account with [Trello][2]. For those not familiar with Trello, it's a [kanban-style][3] productivity tool made by [Atlassian][4] to keep track of tasks in a project with multiple engineers. I, however, am a solo devloper. I already know what features need work, which graphics need a refresh, and what languages aren't yet supported – because I'm working actively on everything. Keeping track of every little move in a PMS for a solo project quickly turned Trello from productivity software to [crudware][5] with fancy graphics. I wanted an app that could [trick the instant gratification monkey][6] into getting something done. Something free from the [creeping featurism][7] in todo apps. I decided to build a simple app to do just that.

And so, I found myself staring at the aforementioned blank Xcode project. I decided to learn and use the new [SwiftUI][swiftui] framework to make use of the latest features in iOS development. I began coding. **txtodo** is built from the ground up to fix the problems I've found with modern task managers – something straightforward and easy-to-use, that helps you get things done instead of getting bogged down making lists. I did this by creating a dead-simple UX with an important key feature: tasks you create disappear at midnight. This prevents the overwhelming buildup of tasks we delay, and trains you to be highly productive – dealing only with tasks you can get done *that day*.

I've personally found this to be very useful, especially in the COVID-19 quarantine/shelter-in-place. Even when days melt together, txtodo has helped me maintain productivity: pushing me to finish schoolwork, code everyday, and keep developing new projects.

### ## Code
txtodo is programmed 100% in Swift, with no third-party dependencies. It's also written with the most recent frameworks, [SwiftUI][swiftui] and [Combine][8] (though as SwiftUI is still new, I did have to write some wrappers from UIKit). The tasks are stored using the two core data models below:

![core data models][9]

Once a task is initialized, it's stored in an `NSPersistentCloudKitContainer` until its deleted, and displayed on the homescreen by a `ForEach` loop iterating over a `FetchRequest`. (For more on Core Data and SwiftUI, I would point you to [this excellent tutorial][10].) This `ForEach` loop is the only place where we can control all the tasks in the list at once, and so it's here that we manage the tasks. Once we initialize each task's view, we add an `onAppear()` modifier to check if the task should be deleted. If we're modifying a `dailyTaskView`, we check if the task's `creationDate` is equal to the day's date – if the dates match the task is displayed, and if they don't the task is deleted from storage. If we're modifying a `floatingTaskView`, the process is a little more complicated. The task should only be deleted if it is completed and the completion is a day or more old. This process looks something like this:

![task deletion modifiers][11]

Another interesting thing about SwiftUI: the order of certain view modifiers affects the behavior of the view they're modifying. This is particularly apparent when dealing with different combination of tap gestures. In my case, I want my task views to have single-tap, double-tap, and long press interactions. To get these interactions to work together without conflicting, they have to be ordered like so:

![order of tap modifiers][12]

I plan on writing more about that in a blog post about the quirks and bugs of SwiftUI.

## # Website
The txtodo website ([txtodo.app][13]) is programmed with [Svelte][14] – not [Sapper][15], it's a single static page and doesn't need all that extra overhead – and [TailwindCSS][16]. The combination of these two frameworks has become my all time favorite – together, they give the comforting feeling of programming in pure HTML+JS+CSS, with the ease and enhaced capability of the most modern competing frameworks. You can [view the code for the site here][17].

[1]: https://github.com/FIGBERT/txtodo/commit/1b3ef45d5b22cae7ce533286a6a966f600dab3b0
[2]: https://trello.com/
[3]: https://en.wikipedia.org/wiki/Kanban
[4]: https://www.atlassian.com/
[5]: http://catb.org/jargon/html/C/crudware.html
[6]: https://www.youtube.com/watch?v=arj7oStGLkU
[7]: http://www.catb.org/jargon/html/C/creeping-featurism.html
[8]: https://developer.apple.com/documentation/combine
[9]: /content/txtodo/core-data-structs.png
[10]: https://www.hackingwithswift.com/quick-start/swiftui/introduction-to-using-core-data-with-swiftui
[11]: /content/txtodo/manage-task-deletion.png 
[12]: /content/txtodo/tap-modifiers-order.png
[13]: https://txtodo.app/
[14]: https://svelte.dev/
[15]: https://sapper.svelte.dev/
[16]: https://tailwindcss.com/
[17]: https://github.com/FIGBERT/txtodo.app
[swiftui]: https://developer.apple.com/xcode/swiftui/
