+++ 
date = "2020-02-12"
title = "Project Euler Challenge #12, #13, and #14"
slug = "project-euler-challenge-twelve-thirteen-fourteen" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

Got three coming up for you, hot off the griddle ~~(actually quite cold I finished these a bit ago writing them up is 
hard)~~.
## Challenge Twelve
In this challenge, I was tasked to:
> The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 +
> 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
>
> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
>
> Let us list the factors of the first seven triangle numbers:
>
>  1: 1
>
>  3: 1,3
>
>  6: 1,2,3,6
>
> 10: 1,2,5,10
>
> 15: 1,3,5,15
>
> 21: 1,3,7,21
>
> 28: 1,2,4,7,14,28
>
> We can see that 28 is the first triangle number to have over five divisors. What is the value of the first triangle
> number to have over five hundred divisors?

For this challenge, we define two functions – `more_than_five_hundred_factors`, which accepts one integer prop `num`, 
and `triangle`, which accepts another integer prop `pos`.

`more_than_five_hundred_factors` utilizes the `reduce` function in a fairly clever way to find the total number of 
factors of the passed integer. Working from the inside out, we generated a list of factors with an inline for loop: 
`[i, num//i] for i in range(1, int(sqrt(num)) + 1) if num % i == 0`. This list is then run through the 
[functools.reduce][reduce] function, with the first argument being `list.__add__` and the second being the list from 
before. The result of the reduce function is then converted to a list, and the `len` value of the list is assigned to 
the value `factors`. The function statement then returns the provided `num` if its total amount of factors is more than 
500, or otherwise `False`.

`triangle` uses the aforementioned `pos` property in its main for loop. After defining a `val` variable to 0, the 
function loops over every number from 1 until `pos`, iterating `val` by one each time. The function then returns the 
value of `more_than_five_hundred_factors(val)`.

In the main code, we define a variable `answer` as 2. Then we enter a loop incrementing answer by one while 
`triangle(answer)` returns `False` or a `falsy` value. Once the loop exits, `answer` is redefined to `triangle(answer)`, 
and we've got our answer!

The [final code][codeOne] looks like this:
```python3
# problemName = "Highly divisible triangular number"
# problemNum = 12
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "05/02/2020"
from functools import reduce
from math import sqrt

def more_than_five_hundred_factors(num):
    factors = len(list(reduce(
        list.__add__, (
            [i, num//i] for i in range(1, int(sqrt(num)) + 1) if num % i == 0
        )
    )))
    return num if factors > 500 else False

def triangle(pos):
    val = 0
    for i in range(1, pos + 1):
        val += i
    return more_than_five_hundred_factors(val)

if __name__ == "__main__":
    answer = 2
    while not triangle(answer):
        answer += 1
    answer = triangle(answer)
    print((
        "The value of the first triangle number to have over "
        f"five hundred divisors is {answer}"
    ))
```
## Challenge Thirteen
In this challenge, I was tasked to:
> Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
>
> 37107287533902102798797998220837590246510135740250
>
>                           ***
>
> 53503534226472524250874054075591789781264330331690

This one was fairly simple – first, we define `STRVAL` as a multi-line string equal to the provided hundred numbers. 
Then, we iterate over the lines of the the string, convert them to integers, and append them to a list `VAL`. Next, we 
define the `answer`. To do this, we first `sum` the `VAL` list, and then convert it to a string (using `str`), and 
select the first ten digits of the resulting string. That's the answer! Simple as that!

The [final code][codeTwo] looks like this:
```python3
# problemName = "Large sum"
# problemNum = 13
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "05/02/2020"

VAL = []
STRVAL = """
37107287533902102798797998220837590246510135740250
                     ***
53503534226472524250874054075591789781264330331690
""".strip()
for line in STRVAL.splitlines():
    VAL.append(int(line))

if __name__ == "__main__":
    answer = str(sum(VAL))[0:10]
    print((
        "The first ten digits of the sum of the provided "
        f"one-hundred 50-digit numbers are {answer}"
    ))
```
*As you probably noticed, some rows are missing from the number provided. It was too long to fit comfortably.* 
 *~~That's what she said.~~*
## Challenge Fourteen
In this challenge, I was tasked to:
> The following iterative sequence is defined for the set of positive integers:
>
> n → n/2 (n is even)
>
> n → 3n + 1 (n is odd)
>
> Using the rule above and starting with 13, we generate the following sequence:
>
> 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
>
> It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been
> proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
>
> Which starting number, under one million, produces the longest chain?
>
> NOTE: Once the chain starts the terms are allowed to go above one million.

First, we program the `collatz` function, which accepts a single `num` prop. From there we calculate the length of the 
sequence by beginning a loop `while num > 1`. Inside the loop, we check if the number is even – if it is, we divide it 
by two. If it isn't, we multiply it be three and add one.

Now we begin the main section of the code by defining a variable `answer` as an array equal to 
`[999999, 999999, collatz(999999)]`. The first integer in the array is equal to the current number being checked, the 
second is equal to number that generates the largest sequence, and the last is the number of terms in the sequence 
generated by the number that generates the largest sequence. Make sense? Hopefully it will after some further explanation.

From there, we start another loop, checking the current number minus one (`answer[0] - 1`) and its collatz sequence. If 
the sequence generated by this `potential` answer is larger than that of the previous largest sequence, the older one 
is replaced. `answer[0]` is then decremented by one, and if it's greater than or equal to one the loop repeats.

The [final code][codeThree] looks like this:
```python3
# problemName = "Longest Collatz sequence"
# problemNum = 14
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "06/02/2020"

def collatz(num):
    sequence = 1
    while num > 1:
        if num % 2 == 0:
            num = num//2
        else:
            num = (3*num) + 1
        sequence += 1
    return sequence

if __name__ == "__main__":
    answer = [999999, 999999, collatz(999999)]
    while answer[0] >= 1:
        potential = (answer[0] - 1, collatz(answer[0] - 1))
        if potential[1] > answer[2]:
            answer[1] = potential[0]
            answer[2] = potential[1]
        answer[0] = answer[0] - 1
    print((
        "The starting number, under one million, that produces the "
        f"longest chain from the given iterative sequence is {answer[1]}"
    ))
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[codeOne]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem012.py
[codeTwo]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem013.py
[codeThree]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem014.py
[reduce]: https://docs.python.org/3/library/functools.html#functools.reduce
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/