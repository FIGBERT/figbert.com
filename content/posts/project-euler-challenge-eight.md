+++ 
date = "2020-01-25"
title = "Project Euler Challenge #8"
slug = "project-euler-challenge-eight" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

For this challenge, I updated my Python installation to version 3.8 for the 
[prod](https://docs.python.org/3.8/library/math.html#math.prod). In this challenge, I was tasked to:

> The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
>
> 73167176531330624919225119674426574742355349194934
  96983520312774506326239578318016984801869478851843
  85861560789112949495459501737958331952853208805511
  12540698747158523863050715693290963295227443043557
  66896648950445244523161731856403098711121722383113
  62229893423380308135336276614282806444486645238749
  30358907296290491560440772390713810515859307960866
  70172427121883998797908792274921901699720888093776
  65727333001053367881220235421809751254540594752243
  52584907711670556013604839586446706324415722155397
  53697817977846174064955149290862569321978468622482
  83972241375657056057490261407972968652414535100474
  82166370484403199890008895243450658541227588666881
  16427171479924442928230863465674813919123162824586
  17866458359124566529476545682848912883142607690042
  24219022671055626321111109370544217506941658960408
  07198403850962455444362981230987879927244284909188
  84580156166097919133875499200524063689912560717606
  05886116467109405077541002256983155200055935729725
  71636269561882670428252483600823257530420752963450
>
> Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

While thinking out my solution, I realized I was going to have to multiply adjacent numbers. My initial thought was to 
convert the integer to a string, append each letter to a list, and multiply the list by one. Then, I found out that 
Python 3.8 ships with this natively in the updated version of the `math` module via `math.prod` so I updated the Python 
in my `PATH` to my `homebrew` install and imported `prod`.

From there, I defined a variable `VAL` to equal the 1000-digit number provided, and a function `product_of_string` that 
takes a prop `string` and returns the product of the string with an inline for loop. ~~God I love inline for loops.~~

Next, I wrote out the heavy lifter – a function called `find_largest_product` that accepts a prop called `num`. In the 
first few lines, I declared four variables. The first three, `start`, `end`, and `str_num`, equal 0, 13, and `str(num)` 
respectively. The last one, `largest_product`, is set initially to 0. The program then loops while `end <= len(str_num)`, 
checking if the product of the splice of `str_num`, from `start` to `end`, is larger than `largest_product`. If it is, 
it sets `largest_product` to the splice (defined as `product_of_string(str_num[start:end])`). `start` and `end` are then 
incremented by one, and the loop begins again. Once the loop ends, `largest_product` is returned and the problem is 
solved.

The [final code][code] looks like this:
```python3
# problemName = "Largest product in a series"
# problemNum = 8
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "25/01/2020"
from math import prod

STRVAL = """
73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450
""".strip()
VAL = int("".join([line for line in STRVAL.splitlines()]))

def product_of_string(string):
    return prod([int(i) for i in string])

def find_largest_product(num):
    start, end, str_num = 0, 13, str(num)
    largest_product = 0
    while end <= len(str_num):
        if product_of_string(str_num[start:end]) > largest_product:
            largest_product = product_of_string(str_num[start:end])
        start += 1
        end += 1
    return largest_product

if __name__ == "__main__":
    answer = find_largest_product(VAL)
    print((
        "The value of the greatest product of thirteen adjacent digits in "
        f"the provided 1000-digit number is {answer}"
    ))
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem008.py
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/