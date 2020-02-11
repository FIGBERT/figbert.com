+++ 
date = "2020-01-24"
title = "Project Euler Challenge #6"
slug = "project-euler-challenge-six" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

For this challenge, I didn't write any functions – a simple for loop was all that was needed. In this challenge, I was 
tasked to:

> The sum of the squares of the first ten natural numbers is,
>
> 12+22+...+102=385
> The square of the sum of the first ten natural numbers is,
>
> (1+2+...+10)2=552=3025
> Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
> 3025−385=2640.
>
> Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

To start I defined two variables, `sum_of_the_squares` and `square_of_the_sum`, both zero. The directions specify the 
first one hundred numbers, so a simple `for i in range(1, 101)` should do all the looping we need. From there, we need 
to add the squares of the numbers, and the number itself (`i**2` and `i`) to `sum_of_the_squares` and `square_of_the_sum` 
respectively.

This challenge was really easy, and explaining it any further would be pointless, so here's the [final code][code]:
```python3
# problemName = "Sum square difference"
# problemNum = 6
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "24/01/2020"

if __name__ == "__main__":
    sum_of_the_squares = 0
    square_of_the_sum = 0
    for i in range(1, 101):
        sum_of_the_squares += i**2
        square_of_the_sum += i
    square_of_the_sum = square_of_the_sum**2
    answer = square_of_the_sum - sum_of_the_squares
    print((
        "The difference between the sum of the squares of the first one "
        "hundred natural numbers and the square of the sum is %s" % answer
    ))
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem006.py
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/