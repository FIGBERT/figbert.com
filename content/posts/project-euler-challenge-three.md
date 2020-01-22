+++ 
date = "2020-01-20"
title = "Project Euler Challenge #3"
slug = "project-euler-challenge-three" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

This challenge was a little harder through perhaps not for the reason you would expect – rather than any difficulty 
with the programming itself, I had some mild trouble as a high school student with the math behind it. In this 
challenge, I was tasked to:

> The prime factors of 13195 are 5, 7, 13 and 29.
>
> What is the largest prime factor of the number 600851475143 ?

As I was writing this challenge, I realized I was going to have to find the square root of a number – the first thing 
I did when writing my solution with to `import math`. After that, I defined another two functions, `primeFactors` and 
`largestInList`.

`primeFactors` accepts an integer prop `num` and returns a list of `num`'s prime factors. In order to 
do this, I divide `num` by two as many times as I can and then divide `num` by `i`, a variable which iterates over the 
odd numbers from `3` up until `the square root of num`. `largestInList` accepts a list prop `lst` and returns the 
largest integer in the `lst`.

Combining these two functions gives us the [final code][code], which looks like this:
```python3
# problemName = "Largest prime factor"
# problemNum = 3
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "21/01/2020"
import math

def primeFactors(num):
    primes = []
    factorLimit = int(math.sqrt(num)) + 1

    while num % 2 == 0: 
        primes.append(2)
        num = num / 2
    
    for i in range(3, factorLimit, 2):
        while num % i == 0: 
            primes.append(i)
            num = num / i
    
    if num > 2: 
        primes.append(num)
    
    return primes

answer = max(primeFactors(600851475143))
print("The largest prime factor of the number 600851475143 is %s" % answer)
```

## Edit 21/01/2020
Today I found out that the `largestInList` function I coded already existed, and ships as `max` in Python 3. Cut out a 
whole bunch of the code that way, and the solution is now much simpler. The code above has been edited to reflect the 
changes.

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem003.py
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/