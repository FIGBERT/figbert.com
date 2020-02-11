+++ 
date = "2020-01-31"
title = "Project Euler Challenge #9 and #10"
slug = "project-euler-challenge-nine-and-ten" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

Double post! I knocked these two out in one night, so I figured I'd combine them for the writeup. Let's jump into it!
## Challenge Nine
In this challenge, I was tasked to:
> A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
>
> a² + b² = c²
>
> For example, 3² + 4² = 9 + 16 = 25 = 5².
>
> There exists exactly one Pythagorean triplet for which a + b + c = 1000.
> Find the product abc.

Now, if this *sounds* really complex and intimidating, that's because it is – or at least, it is very intimidating. But, 
like with most problems, if we break it down to a series of steps, it basically solves itself.

Lets take a look at the requirements:
- `a + b + c = 1000`
- `a < b < c`
- `a² + b² = c²`

First, we need to generate the numbers. The easiest way to do this would be to generate `a` and `b`, and then generate 
`c` afterwards to make sure that it is always equal to the square root of `a² + b²`. I did this using – once again – an 
inline for loop to generate a list of all possible `(a, b)` combinations. That looks something like this:
```python3
[(a, b) for a in range(500) for b in range(500) if a < b]
```
Iterating over this using a regular for loop, we check it against a function I wrote called `triplet`. `triplet` accepts 
two numbers props, `a` and `b`, and returns either a `truthy` value – the integer answer – or `False` (to learn more 
about `truthy` and `falsy` values, I'd point you toward [this awesome article][yValuesPython]). The first thing the 
function does is define `c` as the square root of a² + b², to satisfy the Pythagorean triplet. Then, if `a + b + c` equals 
1000, the function returns `a*b*c`. Otherwise, the function returns `False`.

The [final code][codeOne] looks like this:
```python3
# problemName = "Special Pythagorean triplet"
# problemNum = 9
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "28/01/2020"
from math import sqrt

def triplet(a, b):
    c = sqrt(a**2 + b**2)
    if a + b + c == 1000:
        return int(a*b*c)
    return False

if __name__ == "__main__":
    for (i, k) in [(a, b) for a in range(500) for b in range(500) if a < b]:
        answer = triplet(i, k)
        if answer:
            print((
                "The product of abc, where:\n\ta < b < c,\n\ta2 + b2 = c2,\n"
                f"\ta + b + c = 1000\nis {answer}"
            ))
```
## Challenge Ten
In this challenge, I was tasked to:
> The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
>
> Find the sum of all the primes below two million.

This one is stupidly easy. We already programmed a sieve of Eratosthenes for [problem #7][probSeven], so I just 
copy-pasted that sieve function into my code. Then I defined a list variable `primes` as `sieve_of_eratosthenes(2000000)` 
to get all the primes we need. After that it's as simple as running `sum(primes)`, and you have your answer!

The [final code][codeTwo] looks like this:
```python3
# problemName = "Summation of primes"
# problemNum = 10
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "28/01/2020"

def sieve_of_eratosthenes(limit):
    prime = [True for _ in range(limit+1)]
    prime_pos = 2
    while (prime_pos**2 <= limit):
        if (prime[prime_pos] == True):
            for i in range(prime_pos * 2, limit + 1, prime_pos):
                prime[i] = False
        prime_pos += 1
    prime[0:2] = [False, False]
    return [prime_pos for prime_pos in range(limit + 1) if prime[prime_pos]]

if __name__ == "__main__":
    primes = sieve_of_eratosthenes(2000000)
    print(f"The sum of all the primes below two million is {sum(primes)}")
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[codeOne]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem009.py
[codeTwo]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem010.py
[yValuesPython]: https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python/
[probSeven]: /posts/project-euler-challenge-seven/
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/