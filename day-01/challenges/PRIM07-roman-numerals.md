CH: Romain Numerals
---

## Challenge

Write a function which receives roman numeral as a string and returns an integer number of the equivalent decimal value.

Symbol | Value 
---|---
I | 1     
V | 5     
X | 10    
L | 50    
C | 100   
D | 500   
M | 1000 

A symbol max 3 times:

Symbol | Value
---|---
II     |    2     
III    |    3     
CCC    |    300   

Instead of repeating a symbol a 4th time, it is used as a negative value preceding a higher symbol:

Symbol | Value
---|---
IV |       4     
XC |       90    

No negative values, and roman numbers always start at the highest symbol and end at the lowest:

Symbol | Value
---|---
MCXIV     | 1114  
MMCMXCIII | 2993  

[Here is a chart](https://literacy.kent.edu/Minigrants/Cinci/romanchart.htm) of first 10 numerals plus examples/

## Function Interface

```js
function convert(roman) {
```

> **You can assume valid input**

## Test Cases

Input | Output
---|---
III    | 3
XIX    | 19
XCII   | 92
MCXIV  | 1114
