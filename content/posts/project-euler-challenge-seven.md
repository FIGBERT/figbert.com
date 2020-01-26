+++ 
date = "2020-01-25"
title = "Project Euler Challenge #7"
slug = "project-euler-challenge-seven" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

This challenge was the first challenge that required me to implement a well known algorithm: 
[the Sieve of Eratosthenes][sieve]. In this challenge, I was tasked to:

> By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
>
> What is the 10,001st prime number?

To start, I had to create a filter to find prime numbers. Though I initially thought of attempting to create my own 
algorithm to find primes, I remember what a mentor of mine once said:

> Work smarter, not harder. Google is your friend.

After a quick search (using Duckduckgo, not Google) of the interwebs, I found a [Wikipedia](https://www.wikipedia.org/) 
article on [the Sieve of Eratosthenes][sieve]. The Sieve is "a simple, ancient algorithm for finding all prime numbers 
up to any given limit" – exactly what we needed! Taking a look at the [pseudocode][pseudo] in the article, I translated 
it into our first function: `sieveOfEratosthenes`.

`sieveOfEratosthenes` accepts an integer prop `limit`, and generates a list containing all the prime numbers up until 
the number `limit`. The first step in this process is generating a list `prime`, which is equal to 
`True for _ in range(limit+1)`. Next, we go to a while loop that runs as long as `p * p <= limit` where `p` is initially 
defined as 2. Inside the loop, we check if `prime[p]` is `True`. If it isn't, `p` is incremented by one and the loop 
runs again. If it is, which is only true if the number is prime, all of its multiples up until the end of the array are 
set to `False`. This is done using a for loop, which iterates over `range(p * 2, limit + 1, p)` to select the right 
numbers. After the loop, the first two members of the list `prime` (0 and 1) are set to `False`, because 
[primes must be greater than one][primeDef]. The function then returns a list containing all numbers that have a value 
of `True` in the `prime` list, using an inline for loop (`p for p in range(limit + 1) if prime[p]`).

Outside of the function, we define two variables: `searchRange` and `returnValue`, which are set to 1000 and 
`sieveOfEratosthenes(searchRange)` respectively. The program then loops `while len(returnValue) < 10001`, increasing 
`searchRange` and updating `returnValue`. One the loop completes, the program prints out the 10,001st prime.

The [final code][code] looks like this:
```python3
# problemName = "10001st prime"
# problemNum = 7
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "24/01/2020"

def sieveOfEratosthenes(limit):
    prime = [True for _ in range(limit+1)]
    p = 2
    while (p * p <= limit): 
        if (prime[p] == True): 
            for i in range(p * 2, limit + 1, p): 
                prime[i] = False
        p += 1
    prime[0:2] = [False, False]
    return [p for p in range(limit + 1) if prime[p]]

searchRange = 1000
returnValue = sieveOfEratosthenes(searchRange)
while len(returnValue) < 10001:
    searchRange += 1000
    returnValue = sieveOfEratosthenes(searchRange)
print("The 10,001st prime number is %s" % returnValue[10000])
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem007.py
[sieve]: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
[pseudo]: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
[primeDef]: https://en.wikipedia.org/wiki/Prime_number#Definition_and_examples
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/
