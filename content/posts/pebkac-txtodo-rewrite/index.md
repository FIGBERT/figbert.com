+++
title = "Problem Exists Between Keyboard and Chair: How I Spent 2 Days Chasing a Bug that Didn't Exist"
description = "Post-WWDC2020, I decided to rewrite the backend of txtodo in SwiftUI using the new App and Scene structure. Rebuilding the app from scratch may have not been the best choice, but during that process I have massively simplified the app's data structure, despaghettified some messy UI code, and spent two full days trying to solve a problem that didn't exist. This is the story of that last bit."
date = 2020-07-28
+++

Post-[WWDC2020][wwdc], I decided to rewrite the backend of txtodo in SwiftUI using the new [App and Scene structure][app-and-scene]. Rebuilding the app from scratch may have not
been the best choice, but during that process I have massively simplified the app's data structure, despaghettified some messy UI code, and spent two full days trying to solve a
problem that didn't exist. This is the story of that last bit.

<!-- more -->

## Structural Changes 

The new app, so far, was mostly the same as the old version but without the `AppDelegate.swift` or `SceneDelegate.swift` files (using the new XCode 12 multiplatform app
template). I also combined the Core Data `FloatingTask` and `DailyTask` entities into one `Task` entity. By this point, everything was running well enough so I started to
migrate more code into the new codebase starting with the fetch request:

```swift
@FetchRequest(
    entity: Task.entity(),
    sortDescriptors: [
        NSSortDescriptor(keyPath: \Task.completed, ascending: true),
        NSSortDescriptor(keyPath: \Task.priority, ascending: false),
        NSSortDescriptor(keyPath: \Task.name, ascending: true)
    ]
) var tasks: FetchedResults<Task>
```

## Breaking TaskView

Tasks are displayed as `TaskView`s in a `ForEach` loop on the homescreen, which is simple enough. The `TaskView` struct, however, is relatively complicated. The purpose of
`TaskView` is to represent and manipulate a single `Task`. In the previous version of the app (I'm going to call the original version 2.0 and the rewrite 3.0 from now on), this
involved passing a number of attributes individually to be manipulated as the view's `@State`. When migrating the view, I reduced this to a single `@ObservedObject`. I also
removed some of the text styling, which I planned to port over after I got the UI functional.

I ran the app on my device, and this happened:

![As you check off any task in the vertical stack, instead of checking off the task that you selected, tasks are checked off starting from the bottom and moving upwards in an
ascending order.][ascending-checkmarks-error]

Well that was unexpected. Instead of checking off the tasks I selected, tasks were checked off starting from the bottom and ascending – obviously not the intended behavior! My
first thought was that it was caused by the use of `@ObservedObject` to declare the view's task property – I haven't seen it used to manipulate a Core Data entity before, but
it's worked fine so far in txtodo – so I rewrote the variables to match version 2.0.

![The variables declared before the UI of version 3.0 and version 2.0. Version 3.0 has two variables, task and config, but version 2.0 has nine: task, completed, name, priority,
deleted, editingText, editingPriority, viewingNotes, and confirmingDelete.][contrasting-variables]

Still no change. It was getting pretty late at this point, but I decided to stick it out for just a bit longer. I rewrote the `TaskView` struct from scratch *two more times* to
no avail. Something was wrong, but I had no idea where it was and there was no way I was going to figure it out at two in the morning by coding it again the exact same way.

## Fantastic Bugs and Where to Find Them

The next morning, I took a look at the code again. If the problem wasn't in `TaskView`, where was it? The only other thing in the UI was the button to make a new task, which
looked something like this:

```swift
Button(action: {
    let newTask = Task(context: self.managedObjectContext)
    newTask.name = "test"
    newTask.priority = 3
    newTask.notes = [String]() as NSObject
    newTask.id = UUID()
    newTask.date = Date.init()
    newTask.daily = true
    do {
        try self.managedObjectContext.save()
    } catch {
        print(error.localizedDescription)
    }
}) {
    Text("Add")
}
```

Some of you may have figured it out by this point. At the time, I was still confused – this was the exact method I was using in my previous app, but with preset values – how
could it be broken? I modified the generation slightly so I could tell the difference between tasks, and hopefully get to the bottom of the issue:

```swift
let newTask = Task(context: self.managedObjectContext)
newTask.name = String(UUID().uuidString.prefix(Int.random(in: 5..<9)))
newTask.priority = Int16.random(in: 1..<4)
newTask.notes = [String]() as NSObject
newTask.id = UUID()
newTask.date = Date.init()
newTask.daily = Bool.random()
```

I ran the app again and saw this:

![The tasks were not being marked off in ascending order – rather, they were being moved to the bottom when completed, which I couldn't tell before because they were all
identical.][the-big-reveal]

## Intentional Behavior

The tasks weren't being marked off in ascending order. They were being moved to the bottom automatically when marked as complete, which I couldn't see because a) all the tasks
were identical and b) there were no animations to indicate that was happening. They were sorted by the `FetchRequest` with a `NSSortDescriptor`, to make sure that the unfinished
tasks are the first thing the user sees. The "glitch" I had spent two days chasing down was entirely by design, and I had just forgotten.

There were two main things I learned from this experience. First, it's incredibly important to be able to take breaks. The difference between spending two days trying to fix a
non-existent glitch and realizing it's a feature you implemented could be as simple as a nap – it was for me. Secondly, your test and placeholder data is more significant than
you might think: [garbage in, garbage out][GIGO] definitely applies here. If all your test data is the same, your tests are not good tests.

## Wrap-up

To make the sorting more clear, I randomized the tasks' priority, name, and category (as seen above) and added an animation with `.animation(.easeIn(duration: 0.25))`. The
current prototype looks something like this:

![Animated, randomized tasks being checked off, deleted, and delayed.][current-txtodo]

This has been a really fun blog post to write! A got a big laugh out of this bug chase, and I hope you've enjoyed reading it.

Till next time, FIGBERT

[wwdc]: https://developer.apple.com/wwdc20/
[app-and-scene]: https://developer.apple.com/videos/play/wwdc2020/10037/
[ascending-checkmarks-error]: ascending-checkmarks-error.webm
[contrasting-variables]: variable-comparison.webp
[the-big-reveal]: randomized-test-values.webm
[current-txtodo]: update-preview.webm
[GIGO]: https://en.wikipedia.org/wiki/Garbage_in%2C_garbage_out

