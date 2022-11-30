---
layout: default
permalink: /vocab/
title: CSA Vocabulary
search_exclude: true
---

{% include head-custom2.html %}

  <table>
  
   <tr>
    <th>Vocab</th>
    <th>Definition</th>
   </tr>
   
   <tr>
    <td>software engineer</td>
    <td>a person who designs, develops, and tests software for home, school, and business use</td>
   </tr>
  
   <tr>
    <td>class header</td>
    <td>consists of the class keyword and the name of the class</td>
   </tr>
  
   <tr>
    <td>integrated development environment (IDE)</td>
    <td>a software application for writing, compiling, testing, and debugging program code</td>
   </tr>
  
   <tr>
    <td>software</td>
    <td>a collection of instructions that is run by a computer</td>
   </tr>
  
   <tr>
    <td>source code</td>
    <td>a collection of programming commands</td>
   </tr>
   
   <tr>
    <td>syntax</td>
    <td>the rules for how a programmer must write code for a computer to understand</td>
   </tr>
   
   <tr>
    <td>syntax error</td>
    <td>a mistake in the code that does not follow a programming language's syntax</td>
   </tr>
   
   <tr>
    <td>(super) keyword/td>
    <td>a keyword used to refer to the superclass</td>
   </tr>

   
   <tr>
    <td>constructor signature</td>
    <td>the first line of the constructor which includes the (public) keyword, the constructor name, and the values to specify when an object is created</td>
   </tr>
  
     
   <tr>
    <td>inheritance</td>
    <td>an object-oriented programming principle where a subclass inherits the attributes and behaviors of a superclass</td>
   </tr>
  
     
   <tr>
    <td>subclass</td>
    <td>a class that extends a superclass and inherits its attributes and behaviors</td>
   </tr>
  
     
   <tr>
    <td>superclass</td>
    <td>a class that can be extended to create subclasses</td>
   </tr>
  
     
   <tr>
    <td>method signature</td>
    <td>consists of a name and parameter list</td>
   </tr>
  
     
   <tr>
    <td>code review</td>
    <td>the process of examining code and providing feedback to improve the quality and functionality of the program</td>
   </tr>
  
     
   <tr>
    <td>comment</td>
    <td>a text note that is ignored by the compiler to explain or annotate the code</td>
   </tr>
  
   <tr>
    <td>documentation</td>
    <td>written descriptions of the purpose and functionality of code</td>
   </tr>
  
   <tr>
    <td>programming style</td>
    <td>a set of guidelines for formatting program code</td>
   </tr>
  
   <tr>
    <td>(while) loop</td>
    <td>a control structure which executes a block of code repeatedly as long as a condition is true</td>
   </tr>
  
   <tr>
    <td>algorithm</td>
    <td>a set of instructions to solve a problem or accomplish a task</td>
   </tr>
  
   <tr>
    <td>control structure</td>
    <td>a conditional or iteration statement which affects the flow of a program</td>
   </tr>
  
   <tr>
    <td>efficient</td>
    <td>getting the best outcome with the least amount of waste</td>
   </tr>
  
   <tr>
    <td>infinite loop</td>
    <td>a loop where the Boolean expression always evaluates to true</td>
   </tr>
  
   <tr>
    <td>iteration statement (loop)</td>
    <td>a control structure that repeatedly executes a block of code</td>
   </tr>
  
   <tr>
    <td>pseudocode </td>
    <td>a plain language description of the steps in an algorithm</td>
   </tr>
  
  
   <tr>
    <td>NOT ( ! ) operator</td>
    <td>a logical operator that returns true when the operand is false and returns false when the operand is true</td>
   </tr>
  
   <tr>
    <td>if-else statement (two-way selection statement)</td>
    <td>specifies a block of code to execute when the condition is true and a block of code to execute when the condition is false</td>
   </tr>
  
   <tr>
    <td>logical operator</td>
    <td>an operator that returns a Boolean value</td>
   </tr>
  
   <tr>
    <td>concatenation</td>
    <td>joining two strings together</td>
   </tr>
  
   <tr>
    <td>Method Decomposition</td>
    <td>the process of breaking a problem down into smaller parts to write methods for each part</td>
   </tr>
  
   <tr>
    <td>edge case</td>
    <td>a bug that occurs at the highest or lowest end of a range of possible values or in extreme situations</td>
   </tr>
  
   <tr>
    <td>redundant code</td>
    <td>code that is unnecessary</td>
   </tr>
  
   <tr>
    <td>inheritance hierarchy</td>
    <td>where a class serves as a superclass for more than one subclass</td>
   </tr>
  
   <tr>
    <td>open source code</td>
    <td>code that is freely available for anyone to use, study, change, and distribute</td>
   </tr>
  
   <tr>
    <td>-----------------------------------------------------------</td>
    <td>------------------------------------------------------------------------------------</td>
   </tr>
  
   <tr>
    <td>Plans Week 14</td>
    <td>Assign Vocabulary</td>
   </tr>
  
   <tr>
    <td>-----------------------------------------------------------</td>
    <td>------------------------------------------------------------------------------------</td>
   </tr>
  
   <tr>
    <td>Casting, specifically for Division</td>
    <td>1 / 3 - return 0 - (if you are doing division with integers that you want an integer result and it will truncate and throw away the part after the decimal point.)<br>
     1.0 / 3 - return 0.33333333333333 - (if you use a mixture of integers (int) and decimal (double) numbers Java will assume that you want a double result.)<br>
      <br>
     Values of type double can be rounded to the nearest integer by adding or subtracting .5 and casting with (int) using formulas like the following.<br>
     int nearestInt = (int)(number + 0.5);<br>
     int nearestNegInt = (int)(negNumber – 0.5);</td>
   </tr>
  
   <tr>
    <td>Casting, specifically for Truncating or Rounding</td>
    <td><a href="https://www.ualberta.ca/computing-science/media-library/teaching-resources/java/truncation-rounding.html">Definition</a></td>
   </tr>
  
   <tr>
    <td>Wrapper Classes, why wrap int, double. Show examples</td>
    <td>Wrapper classes provide a way to use primitive data types (int, boolean, etc..) as objects.<br>
      Sometimes you must use wrapper classes, for example when working with Collection objects, such as ArrayList, where primitive types cannot be used (the list can only store objects)<br>
     Ex:<br>
     ArrayList<Integer> myNumbers = new ArrayList<Integer>(); // Valid<br>
      <a href="https://www.w3schools.com/java/java_wrapper_classes.asp">Link</a></td>
   </tr>
  
   <tr>
    <td>Concatenation, explain or illustrate rules on mixed type Concatenation</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Math class, specifically Random usage</td>
    <td></td>
   </tr>

  
   <tr>
    <td>Compound Boolean Expression</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Truth Tables</td>
    <td></td>
   </tr>
  
   <tr>
    <td>De Morgan’s Law</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Comparing Numbers</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Comparing Strings</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Comparing Objects</td>
    <td></td>
   </tr>
  
   <tr>
    <td>for loop, enhanced for loop</td>
    <td></td>
   </tr>

  
   <tr>
    <td>while loop versus do while loop</td>
    <td></td>
   </tr>
  
   <tr>
    <td>nested loops</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Creating a Class, describe Naming Conventions</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Constructor, describe why there is no return</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Accessor methods, relationship to getter</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Mutator methods, relationship to setter, describe void return type</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Static variables, Class variables, show use case in code</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Show use case of access modifiers: Public, Private, Protected</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Static methods, Class methods</td>
    <td></td>
   </tr>
  
   <tr>
    <td>this Keyword</td>
    <td></td>
   </tr>
  
   <tr>
    <td>main method, tester methods</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Inheritance, extends</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Subclass constructor, super Keyword</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Overloading a method, same name different parameters</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Overriding a method, same signature of a method</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Abstract Class, Abstract Method</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Standard methods: toString(), equals(), hashCode()</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Late binding of object, referencing superclass object, ie Animal a = new Chicken(); Animal b = new Goat();</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Polymorphism: any of overloading, overriding, late binding</td>
    <td></td>
   </tr>
  
   <tr>
    <td>Big O notation for Hash map, Binary Search, Single loop, Nested Loop</td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>
  
   <tr>
    <td></td>
    <td></td>
   </tr>

