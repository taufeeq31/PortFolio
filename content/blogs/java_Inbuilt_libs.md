---
title: "Java Inbuilt Libraries"
date: "2026-03-14"
category: "Java"
description: "A simple guide to Java inbuilt libraries and their usage especially in coding interviews."
image : "/blog_cover/java.png"
---

From switching to Java from Python, It was a bit difficult to get used to the inbuilt libraries and their usage. In this blog, I will be sharing some of the most commonly used inbuilt libraries in Java and short explanation of their usage. This will be helpful for me and those who are new to Java and want to get familiar with the inbuilt libraries.

### Basics
Before using the libraries, we need to import them. Most commonly used libraries is `java.util` and this is all we need for now. We can import the whole library `import java.util.*;` or we can import specific classes like `import java.util.ArrayList;` and `import java.util.Arrays;`.

## Math Library
The `Math` class provides methods for performing basic numeric operations such as exponentiation, logarithms, square roots, and trigonometric functions. It also provides constants such as `Math.PI` and `Math.E`.
Some commonly used methods are:
- `Math.max(a, b)` - returns the maximum of two numbers.
- `Math.min(a, b)` - returns the minimum of two numbers.
- `Math.abs(a)` - returns the absolute value of a number. <br> <strong> example: </strong> `Math.abs(-5)` will return `5`.
- `Math.pow(a, b)` - returns(double) the value of `a` raised to the power of `b` .
- `Math.sqrt(a)` - returns the square root of a number. <br> <strong> example: </strong> `Math.sqrt(16)` will return `4`.
- `Math.random()` - returns(double) a random double value between 0.0 and 1.0.
- `Math.round(a)` - returns(double) the closest long to the argument, with ties rounding up.
- `Math.ceil(a)` - returns(double) the smallest double value that is greater than or equal to the argument and is equal to a mathematical integer.
- `Math.floor(a)` - returns(double) the largest double value that is less than or equal to the argument and is equal to a mathematical integer.

- `Math.PI` - returns(double) the value of pi equals approximately 3.14159.
- `Math.E` - returns(double) the value of e equals approximately 2.71828.


## Arrays Library
The `Arrays` class contains various methods for manipulating arrays (such as sorting and searching). To use this library, we need to import `java.util.Arrays;`. 

Some commonly used methods are:
- `Arrays.sort(arr)` - sorts the specified array into ascending numerical order. <br> <strong> example: </strong> `Arrays.sort(arr);` will sort the array `arr` in ascending order. TC is O(n log n). It internally uses Dual-Pivot Quicksort for primitive types and Timsort for objects.

- `Arrays.equals(arr1, arr2)` - returns true if the two specified arrays are equal to one another. <br> <strong> example: </strong> `Arrays.equals(arr1, arr2);` will return true if `arr1` and `arr2` are equal.
- `Arrays.fill(arr, value)` - assigns the specified value to each element of the specified array. <br> <strong> example: </strong> `Arrays.fill(arr, 0);` will fill the array `arr` with `0`.
- `Arrays.binarySearch(arr, key)` - searches the array for the specified value using the binary search algorithm. The array must be sorted before making this call.
- `Arrays.toString(arr)` - returns a string representation of the contents of the specified array. <br> <strong> example: </strong> `Arrays.toString(arr);` will return a string representation of the array `arr`. eg `[1, 2, 3, 4]` becomes `"[1, 2, 3, 4]"`.

## Collections Library
The collections library contains static methods for operating on or returning collections. To use this library, we need to import `java.util.Collections;`.
Some commonly used methods are:
- `Collections.sort(list)` - sorts the specified list into ascending order, according to the natural ordering of its elements.

- `Collections.reverse(list)` - reverses the order of the elements in the specified list.
- `Collections.shuffle(list)` - randomly permutes the specified list using a default source of randomness.
- `Collections.max(collection)` - returns the maximum element of the given collection, according to the natural ordering of its elements.
- `Collections.min(collection)` - returns the minimum element of the given collection, according to the natural ordering of its elements.
- `Collections.frequency(collection, element)` - returns the number of elements in the specified collection equal to the specified object. <br> <strong> example: </strong> `Collections.frequency(list, 1);` will return the number of times `1` appears in the list `list`.

Note: Collections library is a utils library for collections and it is not a collection itself.

## String Library
The `String` class provides methods for manipulating strings. Import is not required for String class as it is part of `java.lang` package which is imported by default.
Some commonly used methods are:
- `str.length()` - returns the length of the string. <br> <strong> example: </strong> `str.length();` will return the length of the string `str`.

- `str.charAt(index)` - returns the char value at the specified index. <br> <strong> example: </strong> `str.charAt(0);` will return the first character of the string `str`.
- `str.substring(start, end)` - returns a new string that is a substring of this string. <br> <strong> example: </strong> `str.substring(0, 5);` will return the substring of `str` from index `0` to index `4`. Note that the end index is exclusive.
- `str.equals(anotherString)` - compares this string to the specified object. <br> <strong> example: </strong> `str.equals("hello");` will return true if `str` is equal to `"hello"`    .
- `str.equalsIgnoreCase(anotherString)` - compares this string to another string, ignoring case considerations. <br> <strong> example: </strong> `str.equalsIgnoreCase("hello");` will return true if `str` is equal to `"hello"` ignoring case.
- `str.contains(sequence)` - returns true if this string contains the specified sequence of char values.
- `str.indexOf(substring)` - returns the index within this string of the first occurrence of the specified substring. <br> <strong> example: </strong> `str.indexOf("hello");` will return the index of the first occurrence of the substring `"hello"` in the string `str`. If the substring is not found, it will return `-1`.
- `str.replace(oldChar, newChar)` - returns a new string resulting from replacing all occurrences of `oldChar` in this string with `newChar`. <br> <strong> example: </strong> `str.replace('a', 'b');` will return a new string where all occurrences of `'a'` in `str` are replaced with `'b'`.

- `str.split(regex)` - splits this string around matches of the given regular expression. <br> example: `str.split(" ");` will return an array of strings computed by splitting `str` around matches of the given regular expression (in this case, a space).
- `str.trim()` - returns a string whose value is this string, with any leading and trailing whitespace removed. <br> <strong> example: </strong> `str.trim();` will return a new string with leading and trailing whitespace removed from `str`.
- `str.toLowerCase()` - converts all of the characters in this String to lower case using the rules of the default locale. <br> <strong> example: </strong> `str.toLowerCase();` will return a new string with all characters in `str` converted to lower case.
- `str.toUpperCase()` - converts all of the characters in this String to upper case using the rules of the default locale. <br> <strong> example: </strong> `str.toUpperCase();` will return a new string with all characters in `str` converted to upper case.
- `str.isEmpty()` - returns true if, and only if, length() is 0. <br> <strong> example: </strong> `str.isEmpty();` will return true if `str` is an empty string.
- `str.isBlank()` - returns true if the string is empty or contains only white space codepoints, otherwise false. <br> <strong> example: </strong> `str.isBlank();` will return true if `str` is an empty string or contains only white space.

## StringBuilder Library
The `StringBuilder` class provides an API for creating and manipulating strings. It is more efficient than using the `String` class when we need to concatenate strings in a loop or when we need to modify a string multiple times. Import is not required for StringBuilder class as it is part of `java.lang` package which is imported by default.
Some commonly used methods are:
- `StringBuilder sb = new StringBuilder();` - creates a new StringBuilder object.

- `sb.append(str)` - appends the specified string to this character sequence. <br> <strong> example: </strong> `sb.append("hello");` will append the string `"hello"` to the StringBuilder `sb`.
- `sb.toString()` - returns a string representing the data in this sequence. <br> <strong> example: </strong> `sb.toString();` will return a string representation of the data in the StringBuilder `sb`.
- `sb.length()` - returns the length of the character sequence. <br> <strong> example: </strong> `sb.length();` will return the length of the character sequence in the StringBuilder `sb`.
- `sb.charAt(index)` - returns the char value at the specified index. <br> <strong> example: </strong> `sb.charAt(0);` will return the first character of the character sequence in the StringBuilder `sb`.
- `sb.substring(start, end)` - returns a new string that is a substring of this sequence. <br> <strong> example: </strong> `sb.substring(0, 5);` will return the substring of the character sequence in the StringBuilder `sb` from index `0` to index `4`. Note that the end index is exclusive.
- `sb.delete(start, end)` - removes the characters in a substring of this sequence. The substring begins at the specified `start` and extends to the character at index `end - 1` or to the end of the sequence if `end` is greater than the length of the sequence. <br> <strong> example: </strong> `sb.delete(0, 5);` will remove the characters in the substring of the character sequence in the StringBuilder `sb` from index `0` to index `4`. Note that the end index is exclusive.
- `sb.insert(offset, str)` - inserts the specified string into this character sequence at the specified offset. <br> <strong> example: </strong> `sb.insert(0, "hello");` will insert the string `"hello"` into the character sequence in the StringBuilder `sb` at index `0`.
- `sb.reverse()` - causes this character sequence to be replaced by the reverse of the sequence. <br> <strong> example: </strong> `sb.reverse();` will reverse the character sequence in the StringBuilder `sb`.

## Integer / Long / Double Libraries
The `Integer`, `Long`, and `Double` classes provide methods for converting strings to their respective primitive types and vice versa. They also provide methods for parsing strings and for performing various operations on the primitive types. Import is not required for these classes as they are part of `java.lang` package which is imported by default.
Some commonly used methods are:
- `Integer.parseInt(str)` - parses the string argument as a signed decimal integer. <br> <strong> example: </strong> `Integer.parseInt("123");` will return the integer `123`.

- `Integer.toString(i)` - returns a string representation of the integer argument. <br> <strong> example: </strong> `Integer.toString(123);` will return the string `"123"`.
- `Long.parseLong(str)` - parses the string argument as a signed decimal long. <br> <strong> example: </strong> `Long.parseLong("123456789");` will return the long `123456789`.
- `Long.toString(l)` - returns a string representation of the long argument. <br> <strong> example: </strong> `Long.toString(123456789);` will return the string `"123456789"`.
- `Double.parseDouble(str)` - parses the string argument as a double. <br> <strong> example: </strong> `Double.parseDouble("3.14");` will return the double `3.14`.
- `Double.toString(d)` - returns a string representation of the double argument. <br> <strong> example: </strong> `Double.toString(3.14);` will return the string `"3.14"`.

## Character Library
The `Character` class provides methods for manipulating characters. Import is not required for Character class as it is part of `java.lang` package which is imported by default.
Some commonly used methods are:
- `Character.isDigit(ch)` - returns true if the specified character is a digit. <br> <strong> example: </strong> `Character.isDigit('1');` will return true because `'1'` is a digit.

- `Character.isLetter(ch)` - returns true if the specified character is a letter. <br> <strong> example: </strong> `Character.isLetter('a');` will return true because `'a'` is a letter.
- `Character.isWhitespace(ch)` - returns true if the specified character is a whitespace character. <br> <strong> example: </strong> `Character.isWhitespace(' ');` will return true because `' '` is a whitespace character.
- `Character.toUpperCase(ch)` - converts the character argument to upper case using case mapping information from the UnicodeData file. <br> <strong> example: </strong> `Character.toUpperCase('a');` will return `'A'`.
- `Character.toLowerCase(ch)` - converts the character argument to lower case using case mapping information from the UnicodeData file. <br> <strong> example: </strong> `Character.toLowerCase('A');` will return `'a'`.
- `Character.isUpperCase(ch)` - returns true if the specified character is an uppercase letter. <br> <strong> example: </strong> `Character.isUpperCase('A');` will return true because `'A'` is an uppercase letter.
- `Character.isLowerCase(ch)` - returns true if the specified character is a lowercase letter. <br> <strong> example: </strong> `Character.isLowerCase('a');` will return true because `'a'` is a lowercase letter.


### Conclusion
In this blog, we have covered some of the most commonly used inbuilt libraries in Java and their usage. Hopefully, this will be helpful for those who are new to Java and want to get familiar with the inbuilt libraries. I will update this blog with more libraries and their usage in the future.


