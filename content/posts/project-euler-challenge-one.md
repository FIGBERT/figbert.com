+++ 
date = "2020-01-20"
title = "Project Euler Challenge #1"
slug = "project-euler-challenge-one" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

This challenge was a fairly simple start to the Project Euler challenge. I programmed my solution in Python, in 17 sloc 
(including comments). In this challenge, we were tasked to:

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
> multiples is 23.
>
> Find the sum of all the multiples of 3 or 5 below 1000.

To solve the challenge, I created two functions. The first function, `multOfThreeOrFive`, accepts an integer prop `num` 
and determines if it is divisible by either 3 or 5 and returns the resulting boolean value. The second function, 
`sumOfMultiplesOfThreeOrFive`, accepts an integer prop `num` and iterates over every number smaller than `num` and 
greater than 0. It tests each resulting number against the `multOfThreeOrFive` function, and if it returns `True` adds 
the number to a list. The function then returns the sum of all the numbers in the list using `sum()`.

The [final code][code] looks like this:
```python3
# problemName = "Multiples of 3 and 5"
# problemNum = 1
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "20/01/2020"

def multOfThreeOrFive(num):
    return num % 3 is 0 or num % 5 is 0

def sumOfMultiplesOfThreeOrFive(num):
    lstOfMults = []
    numStep = num - 1
    while numStep > 0:
        if multOfThreeOrFive(numStep):
            lstOfMults.append(numStep)
        numStep -= 1
    return sum(lstOfMults)

answer = sumOfMultiplesOfThreeOrFive(1000)
print("The sum of all the multiples of 3 or 5 below 1000 is %s" % answer)
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem001.py
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/
