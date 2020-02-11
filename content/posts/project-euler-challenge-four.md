+++ 
date = "2020-01-21"
title = "Project Euler Challenge #4"
slug = "project-euler-challenge-four" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

This challenge was really fun, because I got to use inline for loops – one of my favorite features in Python 3!
```python3
foo = [bar for bar in foobar]
```
Beautiful, right? In this challenge, I was tasked to:

> A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is
> 9009 = 91 × 99.
>
> Find the largest palindrome made from the product of two 3-digit numbers.

My solution to this problem only includes one what I would call "actual" line of code. However, this line is very long 
and complicated so I'll break it down for you now.

Working backwards, the line ends with the expression `if int(str(a*b)[::-1]) == a*b`. This expression checks to see if 
`a*b` is a palindrome, and returns the corresponding boolean. Continuing leftward, we hit a double in-line for loop: 
`for a in range(999, 99, -1) for b in range(999, 99, -1)`. These loops create the variables `a` and `b`, which work 
backwards from 999 until 99 (not including 99). This cuts down on the time it takes to find the largest palindrome by 
moving the variables from largest to smallest. The beginning of the expression, `a*b`, is only evaluated if the final 
if statement returns `True` - when evaluated, it is appended to the list.

The [final code][code] looks like this:
```python3
# problemName = "Largest palindrome product"
# problemNum = 4
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "21/01/2020"

if __name__ == "__main__":
    all_possible_combos = [
        a*b for a in range(999, 99, -1) for b in range(999, 99, -1) 
        if int(str(a*b)[::-1]) == a*b
    ]
    print((
        "The largest palindrome made from the product of two 3-digit "
        "numbers is %s" % max(all_possible_combos)
    ))
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem004.py
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/