+++
title = "txtodo"
description = ""
date = 2020-05-20
updated = 2020-08-19
weight = 0
+++

[**txtodo**][txtodo] is a minimalist open-source todo list app inspired by Jeff Huang's [*One File to Rule Them All*][one-file-to-rule-them-all]. It lists your immediate,
short-term tasks to help you get things done without overthinking it. With txtodo, you list all your tasks for the day in the morning, and throughout the day you check off tasks
as you complete them. Then, at midnight, all tasks are discarded so you can start fresh tomorrow – you can also create up to three long-term tasks that "float" with you from
day-to-day. You can also delay tasks to the next day, but only once – if you don't complete the task the next day, txtodo moves on. Did I mention that it's completely
open-source and built with SwiftUI? You can download txtodo from the app store [here][txtodo-store] and view the source code [here][txtodo-src].

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
txtodo is programmed 100% in Swift, with no third-party dependencies. It's also written with the most recent frameworks, [SwiftUI][swiftui] and [Combine][combine] (though
initially this required some UIKit wrappers, though it now uses the WWDC2020 [App and Scene][app-scene-architecture] SwiftUI structure). The tasks are stored using the core data
`Task` model below:

```swift
extension Task {
  @nonobjc public class func fetchRequest() -> NSFetchRequest<Task> {
    return NSFetchRequest<Task>(entityName: "Task")
  }
  @NSManaged public var completed: Bool // whether or not the task is done
  @NSManaged public var daily: Bool // whether the task is daily or floating
  @NSManaged public var date: Date // if it's a daily task, the date it was created. otherwise, the date it was most recently marked as completed
  @NSManaged public var id: UUID // a unique task ID
  @NSManaged public var name: String // the name/main text of the task
  @NSManaged public var notes: [String] // an array of the task's notes
  @NSManaged public var priority: Int16 // the task priority (1, 2, or 3)
  @NSManaged public var hasBeenDelayed: Bool // if it's a daily task, this bool shows whether or not the task has been delayed
}
```

Once a task is initialized, it's stored in an `NSPersistentCloudKitContainer` until its deleted, and displayed on the homescreen by a `ForEach` loop iterating over a
`FetchRequest`. (For more on Core Data and SwiftUI, I would point you to [this excellent tutorial][core-data-tutorial].) This `ForEach` loop is the only place where we can
control all the tasks in the list at once, and so it's here that we manage the tasks. Once we initialize each task's view, we add an `onAppear()` modifier to check if the task
should be deleted. If we're modifying a daily task, we check if the task's `date` precedes the current day and, if true, deletes the task from storage. If we're modifying a
floating task, the process is a little more complicated. The task should only be deleted if it is completed and the completion is a day or more old. This process looks something
like this:

```swift
let currentDay = Calendar.current.component(.day, from: Date.init())

TaskView() // A floating task
  .onAppear(perform: {
    if (
      task.completed &&
      Calendar.current.component(.day, from: task.date) < self.currentDay
    ) {
      // delete the task
    }
  })
TaskView() // A daily task
  .onAppear(perform: {
    if Calendar.current.component(.day, from: task.date) < self.currentDay {
      // delete the task
    }
  })
```

Tasks are sorted on the homescreen by two `FetchRequest`s. To split Core Data objects of the same type into two different variables, we use `NSPredicate` to select what is added
to each array, and then we sort the array using chained `NSSortDescriptor`s. The current variables are defined as such:

```swift
@FetchRequest(
  entity: Task.entity(),
  sortDescriptors: [
    NSSortDescriptor(keyPath: \Task.completed, ascending: true),
    NSSortDescriptor(keyPath: \Task.priority, ascending: false),
    NSSortDescriptor(keyPath: \Task.name, ascending: true)
  ],
  predicate: NSPredicate(format: "daily == %d", false)
) var floatingTasks: FetchedResults<Task>
@FetchRequest(
  entity: Task.entity(),
  sortDescriptors: [
    NSSortDescriptor(keyPath: \Task.completed, ascending: true),
    NSSortDescriptor(keyPath: \Task.priority, ascending: false),
    NSSortDescriptor(keyPath: \Task.name, ascending: true)
  ],
  predicate: NSPredicate(
    format: "daily == %d AND date < %@",
    argumentArray: [
      true,
      Calendar.current.startOfDay(
        for: Calendar.current.date(
          byAdding: .day,
          value: 1,
          to: Date()
        )!
      )
    ]
  )
) var dailyTasks: FetchedResults<Task>
```

Floating tasks are selected by checking if `daily == false`, and then sorted first by completion status (completed tasks are below tasks yet to be marked as done), then by
priority, and then alphabetized. Daily tasks are more complicated: the predicate first filters out all floating tasks, before filtering out all the daily tasks **that have dates
less than tomorrow at midnight**. What this ends up doing is returning all daily tasks created today and any time before, but lets tasks with creation dates in the future –
daily tasks that have been delayed – sit in the database until their date arrives.

## Website
The txtodo website, [txtodo.app][txtodo], is programmed with [Svelte][svelte] and [TailwindCSS][tailwind]. The combination of these two frameworks has become my all time
favorite – together, they give the comforting feeling of programming in pure HTML+JS+CSS, with the ease and enhaced capability of the most modern competing frameworks. You can
[view the code for the site here][site-src].

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
[app-scene-architecture]: https://developer.apple.com/documentation/swiftui/app-structure-and-behavior
[core-data-tutorial]: https://www.hackingwithswift.com/quick-start/swiftui/introduction-to-using-core-data-with-swiftui
[svelte]: https://svelte.dev/
[tailwind]: https://tailwindcss.com/
[site-src]: https://github.com/FIGBERT/txtodo.app

