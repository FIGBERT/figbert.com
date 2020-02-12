+++ 
date = "2020-02-11"
title = "Project Euler Challenge #11"
slug = "project-euler-challenge-eleven" 
tags = ["Algorithms", "Data Structures", "Challenge", "Python"]
categories = ["Computational Science", "Challenge"]
series = ["Project Euler"]
disable_comments = true
+++

**Quick preface:** *I am writing this article while sick with a fever, so apologies for not being fully lucid.*

In this challenge, I was tasked to:
> In the provided 20×20 grid, four numbers along a diagonal line have been marked in red.
>
> The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
>
> What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in 
> the 20×20 grid?

I'm sure that there is some way to do this that uses more generalized code (especially in the `largest_diagonal` 
function), but this works – and it works pretty well too.

The first step is processing the provided grid of numbers, `STRVAL`. This is done by iterating over `line`s in 
`STRVAL.splitlines()`, and appending an array of all the numbers in that line to the `VAL` array. Then, we define three 
functions, `largest_vertical`, `largest_horizontal`, and `largest_diagonal`.

All of the functions use a system of three `for` loops to iterate over the 2D array provided. First, an exterior loop 
(`i`) to iterates vertically over the 2D array, while itself being equal to a 1D array. Another loop (`k`) iterates 
horizontally over `i`, itself being equal to an integer. The third and last loop iterates `for j in range(4)`, and is 
different for each function. In `largest_vertical`, `j` is added to `i`. In `largest_horizontal`, `j` is added to `k`. 
In `largest_diagonal`, it gets a little more complicated. Because the "diagonal" direction is really four directions 
(up-left, up-right, down-left, down-right), `j` is used in a combination of ways, adding and subtracting from both `i` 
and `k` to create the directions.

>![A visualization of the largest_vertical function][gif]
>
> A visualization of the `largest_vertical` function

When the program runs, all three functions are run with `VAL`. Then, `answer` is defined as the `max` of an array with 
all three aforementioned values.

The [final code][code] looks like this:
```python3
# problemName = "Largest product in a grid"
# problemNum = 11
# solutionBy = "FIGBERT"
# language = "Python"
# dateCompleted = "01/02/2020"

VAL = []
STRVAL = """
08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
""".strip()
for line in STRVAL.splitlines():
    VAL.append([int(number) for number in line.split()])

def largest_vertical(lst):
    largest = 0
    for i, _ in enumerate(lst):
        if i + 4 <= len(lst):
            for k, _ in enumerate(lst[i]):
                vertical_mult = 1
                for j in range(4):
                    vertical_mult *= lst[i+j][k]
                largest = vertical_mult if vertical_mult > largest else largest
    return largest

def largest_horizontal(lst):
    largest = 0
    for i, _ in enumerate(lst):
        for k, _ in enumerate(lst[i]):
            if k + 4 <= len(lst[i]):
                horizontal_mult = 1
                for j in range(4):
                    horizontal_mult *= lst[i][k+j]
                if horizontal_mult > largest:
                    largest = horizontal_mult
    return largest

def largest_diagonal(lst):
    largest = 0
    for i, _ in enumerate(lst):
        for k, _ in enumerate(lst):
            if i - 3 >= 0:
                if k - 3 <= 0:
                    up_left = 1
                    for j in range(4):
                        up_left *= lst[i-j][i-k]
                    largest = up_left if up_left > largest else largest
                if k + 4 <= len(lst[i]):
                    up_right = 1
                    for j in range(4):
                        up_right *= lst[i-j][k+j]
                    largest = up_right if up_right > largest else largest
            if i + 4 <= len(lst[i]):
                if k - 3 <= 0:
                    down_left = 1
                    for j in range(4):
                        down_left *= lst[i+j][k-j]
                    largest = down_left if down_left > largest else largest
                if k + 4 <= len(lst[i]):
                    down_right = 1
                    for j in range(4):
                        down_right *= lst[i+j][k+j]
                    largest = down_right if down_right > largest else largest
    return largest

if __name__ == "__main__":
    diagonal = largest_diagonal(VAL)
    horizontal = largest_horizontal(VAL)
    vertical = largest_vertical(VAL)
    answer = max([diagonal, horizontal, vertical])
    print((
        "The greatest product of four adjacent numbers in the same "
        f"direction in the 20×20 grid is {answer}"
    ))
```

### Links
* [Announcement tweet][1]
* [GitHub repository][2]
* [Project Euler official site][3]
* [freeCodeCamp challenge announcement][4]
* [freeCodeCamp port of Project Euler][5]

[code]: https://github.com/therealFIGBERT/ProjectEuler100/blob/master/problem011.py
[gif]: /images/project-euler-challenge-eleven-selection-visualization.gif
[1]: https://twitter.com/therealFIGBERT/status/1219155513855733761
[2]: https://github.com/therealFIGBERT/ProjectEuler100
[3]: https://projecteuler.net/
[4]: https://www.freecodecamp.org/news/projecteuler100-coding-challenge-competitive-programming/
[5]: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/