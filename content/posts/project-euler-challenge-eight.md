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

From there, I defined a variable `VAL` to equal the 1000-digit number provided, and a function `productOfString` that 
takes a prop `string` and returns the product of the string with an inline for loop. ~~God I love inline for loops.~~

Next, I wrote out the heavy lifter – a function called `findLargestProduct` that accepts a prop called `num`. In the 
first few lines, I declared four variables. The first three, `start`, `end`, and `strNum`, equal 0, 13, and `str(num)` 
respectively. The last one, `largestProduct`, is set initially to 0. The program then loops while `end <= len(strNum)`, 
checking if the product of the splice of `strNum`, from `start` to `end`, is larger than `largestProduct`. If it is, 
it sets `largestProduct` to the splice (defined as `productOfString(strNum[start:end])`). `start` and `end` are then 
incremented by one, and the loop begins again. Once the loop ends, `largestProduct` is returned and the problem is 
solved.

The [final code][code] looks like this:
```python3
# problemName = "Largest product in a series"
# problemNum = 8
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "25/01/2020"
from math import prod

VAL = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450

def productOfString(string):
    return prod([int(i) for i in string])

def findLargestProduct(num):
    start, end, strNum = 0, 13, str(num)
    largestProduct = 0
    while end <= len(strNum):
        if productOfString(strNum[start:end]) > largestProduct:
            largestProduct = productOfString(strNum[start:end])
        start += 1
        end += 1
    return largestProduct

answer = findLargestProduct(VAL)
print(f"The value of the greatest product of thirteen adjacent digits in the provided 1000-digit number is {answer}")
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