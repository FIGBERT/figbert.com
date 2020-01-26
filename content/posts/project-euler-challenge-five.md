+++ 
date = "2020-01-23"
title = "Project Euler Challenge #5"
slug = "project-euler-challenge-five" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

For this challenge, I created two versions of the solution. The first solution was a brute force attack that took some 
**serious** time, and the second solution utilized nested for loops to skip over a significant chunk of solving time. 
In this challenge, I was tasked to:

> 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
>
> What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

The brute force is the simplest solution. The first thing I did was define a function `divisibleByOneToTwenty` to 
determine if the passed `num` prop was divisible by every number by one to twenty. You could do this by writing an if 
statement with a bunch of `% x == 0`, `and`, and a `return True`. However, that's not very Pythonic. So instead, I 
wrote this:
```python3
def divisibleByOneToTwenty(num):
    for i in range(1,21):
        if num % i != 0:
            return False
```

Next, I wrote a while loop to increment an integer variable `answer` by 2 (because it needs to be divisible by 2) if 
`divisibleByOneToTwenty(answer)` is `False`. That looks like this:
```python3
answer = 2
while not divisibleByOneToTwenty(answer):
    answer += 2
print(answer)
```
However, though this solution still finds the correct answer, it takes 8 minutes and 53 seconds to do so (on my machine). 
That is waaaaaay too long. ~~Also I just realized I could have made it increment by 5 instead of 2 and that would 
have been faster but whatever I'm not doing it again.~~

So, I rewrote the whole thing and now it solves it almost instantly! Basically, I just replaced all the adding from the 
last one with multiplying (but I had to be careful how I multiplied so that I wouldn't go over the number). I defined 
an `answer` variable with a value of one, and then created a for loop over all `i` in `range(1, 21)`. Then, I check if 
`answer` divided by `i` **does have** a remainder – if it does, I create a second nested for loop over `k` in 
`range(1, 21)` and check if `answer * k` **doesn't have** remainder when divided by `i`. If this evaluates as true, 
I multiply `answer` by `k` and return the parent loop.

The [final code][code] looks like this:
```python3
# problemName = "Smallest multiple"
# problemNum = 5
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "21/01/2020"

answer = 1
for i in range(1, 21):
    if answer % i > 0:
        for k in range(1, 21):
            if (answer * k) % i == 0:
                answer *= k
                break
print("The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is %s" % answer)
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem005.py
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/