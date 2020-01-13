+++
date = "2019-12-07"
title = "figbertMath"
slug = "figbertMath"
disable_comments = true
+++

# Summary
* Compiled several equation-solving algorithms programmed to solve common math problems.
* The final edition was programmed entirely in React {{< fab react >}}. The first version I had created was very basic 
website programmed with pure HTML/CSS/JS during 6th grade, which utilized basic forms. Due to bad graphic design and 
limited functionality, I decided to take the opportunity to redesign the site to learn the React framework.
* Implemented [Gaussian elimination][1] to solve multi-variable systems of equations of theoretically infinite size.
* Utilized the `immutability-helper` module to change array deep copies in the React {{< fab react >}} state property.
# Assembled Programs
* Simple Calculator
    * Automatically generate a number pad based on passed properties to `Pad`.
    * Create responsive higher level code structure employing basic low level button components.
    * **Reason for inclusion:** During the redesign, it seemed reasonable that if I was assembling a bunch of 
    calculators there should be a scientific calculator amongst them.
* Angular Size, Real Size, Distance Calculator
    * Generate buttons with text input based on passed properties to `Pad`.
    * Employ three boolean values to limit the amount of possible active buttons to two.
    * **Reason for inclusion:** I was having to manually calculate a bunch of these problems for my Physics class, and 
    thought it would be easy to automate because of the simple formula.
* Consecutive Number Calculator
    * Generate buttons with text input and a mode switch button based on passed properties to `Pad`.
    * Employ a custom iteration formula to solve the equations
    * **Reason for inclusion:** This was the first homework-solving program I made, back in 6th grade. I had a bunch of 
    problems on my homework asking for me to find consecutive numbers that summed to a given value, and decided I did 
    not want to deal with them anymore.
* Simultaneous Equation Calculator
    * By far the most complex dynamic generation: generate buttons with equations based on arrays containing arrays 
    containing strings to represent the addends, and separate arrays containing strings to represent the sums all 
    passed to `Pad`. The arrays are updated with the `immutability-helper` module.
    * Iterate over array values on input to determine if the necessary values are provided, and if the information has 
    been provided, use [Gaussian elimination][1] to solve for the variables. Though this strategy could be used to solve 
    for an infinite amount of variables, I have limited it to 5 so as not to crowd screen real estate.
    * **Reason for inclusion:** I had a bunch of these in my Algebra class, and they were pretty difficult. I decided to 
    automate it, because I couldn't find anybody online who had done that.
* Polygon Angle Calculator
    * Generate buttons with text input and a mode switch button based on passed properties to `Pad`.
    * Use division and rounding to find the total interior angles of a polygon, and the value of interior and exterior 
    angle if the polygon is regular.
    * **Reason for inclusion:** My Geometry teacher mentioned the formulas for polygon angle calculation briefly in class, 
    and I predicted that it may be useful to have the process automated for future use. So far this has proved false, 
    but it's still nice to have.
# Custom Pad Component
`Pad`, as referenced above, is perhaps the second most complicated part of the project (after the Simultaneous Equation 
Calculator). Using the required `type` property, the component returns a `div` containing a series of components – either 
`smallButtonRow`s or `largeButton`s.

The `smallButtonRow` returns a series of square buttons with the provided values and `onClick` function, unless the value 
is the designated 'back' value, in which case it is assigned the provided `changeMode` function.

The `largeButton` component is more complicated, which iterates over a series of truths provided by the `Pad` component 
based on the mode of the button (i.e. `acceptsInput`, `equationFormat`, `canBeDisabled`). Each of these buttons then 
are then returned with the appropriate properties and styles.
# Future Development
Going forward, I plan to continue to add calculators to the site when I stumble on formulas and problems that I 
~~am too lazy to do by hand~~ think I should automate. Another change I want to make is to make the calculator more 
accessible on small screens like phones.
# Live Version
| Site | GitHub |
|:----:|:------:|
|[{{< fas calculator 5x >}}][site]|[{{< fab github 5x >}}][repo]|

[1]: https://en.wikipedia.org/wiki/Gaussian_elimination
[site]: https://math.figbert.com/
[repo]: https://github.com/therealFIGBERT/figbertMath
