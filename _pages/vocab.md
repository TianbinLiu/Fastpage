---
layout: base
permalink: /vocab/
title: CSA Vocabulary
search_exclude: true
---

{% include head-custom2.html %}
{% include live2d.html %}
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
    <td>---------------------------------------------------</td>
    <td>------------------------------------------------------------------------------------</td>
   </tr>
  
   <tr>
    <td>Plans Week 14</td>
    <td>Assign Vocabulary</td>
   </tr>
  
   <tr>
    <td>---------------------------------------------------</td>
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
    <td>
     Rounding a number in the range [2.5, 3.5) returns the number 3<br>
Truncating a number in the range [3.0, 4.0) returns the number 3<br>
      <br>
     Truncating 3.3 returns 3<br>
Truncating 3.8 returns 3<br>
     java code truncating ex:<br>
     truncated = Math.round(nontruncated - 0.5f); <br>
       <br>
     Rounding 3.465 to two decimal places returns 3.47 <br>
Rounding 3.464 to two decimal places returns 3.46 <br>
     java code rounding ex:  <br>
     roundedToTwoDecimals = Math.round(unrounded*100)/100f;
     <br>
     <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#FRQ2-APCalendar:~:text=int%20weekday%20%3D%20%20(int)%20Math.round(week)%3B">Work Link</a><br>
     <a href="https://www.ualberta.ca/computing-science/media-library/teaching-resources/java/truncation-rounding.html">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Wrapper Classes, why wrap int, double. Show examples</td>
    <td>Wrapper classes provide a way to use primitive data types (int, boolean, etc..) as objects.<br>
      Sometimes you must use wrapper classes, for example when working with Collection objects, such as ArrayList, where primitive types cannot be used (the list can only store objects)<br>
     Ex:<br>
     ArrayList<Integer> myNumbers = new ArrayList<Integer>(); // Valid<br>
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=ArrayList%3CString%3E%20namePlayer%20%3D%20new%20ArrayList%3CString%3E()%3B%0A%20%20%20%20%20%20%20%20ArrayList%3CInteger%3E%20CEPlayer%20%3D%20new%20ArrayList%3CInteger%3E()%3B">Work Link</a><br>
      <a href="https://www.w3schools.com/java/java_wrapper_classes.asp">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Concatenation, explain or illustrate rules on mixed type Concatenation</td>
    <td>Concatenation -  the operation of joining two strings together.<br>
     You can join strings using either the addition (+) operator or the String’s concat() method.<br>
     Ex:<br>
     System.out.println("pan" + "handle");<br>
      <br>
     Mixed type Concatenation<br>
      Ex:<br>
      int age = 12;<br>
      System.out.println("My age is " + age);<br>
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=System.out.println(whilei2%20%2B%20%22th%20fibonacci%20number%20is%3A%20%22%20%2B%20forn3)%3B">Work Link</a><br>
      <a href="https://www.thoughtco.com/concatenation-2034055">Definition Resource Link</a>
     </td>
   </tr>
  
   <tr>
    <td>Math class, specifically Random usage</td>
    <td>The java.lang.Math.random() method returns a pseudorandom double type number greater than or equal to 0.0 and less than 1.0.<br>
      Ex. <br>
      double rand = Math.random();<br>
      <br>
      output: 0.0~1.0<br>
      <br>
      random.nextInt(num) - gives a random number inside range 0 to num<br>
      <br>
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=int%20ranCE2%20%3D%20random.nextInt(100)%3B">Work Link</a><br>
      <a href="https://www.geeksforgeeks.org/java-math-random-method-examples/">Definition Resource Link</a></td>
   </tr>

  
   <tr>
    <td>Compound Boolean Expression</td>
    <td>If two boolean values/expressions are combined with a logical and (&&) and the first expression is false, then the second expression won't be executed <br>
      The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.<br>
      <br>
     <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Truth Tables</td>
    <td>A truth table has one column for each variable, one row for each possible combination of variable values, and a column that specifies the value of the function for that combination.<br>
      <br>
      A truth table is a breakdown of a logic function by listing all possible values the function can attain. <br>
      <br>
      <a href="https://www.techtarget.com/whatis/definition/truth-table">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>De Morgan’s Law</td>
    <td>  
      De Morgan's Law show how the NOT operator (!) can be distributed when it exists outside a set of patenthesis. <br>
      Ex:<br>
      !(A && B) is the same as !A || !B<br>
      !(A || B) is the same as !A && !B<br>
      !(C > D) is the same as C <= D<br>
      !(C < D) is the same as C >= D<br>
      !(C >= D) is the same as C < D<br>
      !(C <= D) is the same as C > D<br>
      !(E == F) is the same as E != F<br>
      !(E != F) is the same as E == F<br>
      !(A && B && C) is the same as !A||!B||!C<br>
      <br>
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://exlskills.com/learn-en/courses/java-basics-basics_java/control-flow-statements-wbzYVXqrsQeO/logical-operators-IPplvhjNoHJu/de-morgans-law-VvnphQZZtJxK">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Comparing Numbers</td>
    <td>A Double is NEVER equals to an Integer. Moreover, a double is not the same as a Double.<br>
        To compare two Numbers in Java you can use the compareTo method from BigDecimal.<br>
      EX:<br>
      public int compareTo(Number n1, Number n2) {<br>
    // ignoring null handling<br>
    BigDecimal b1 = new BigDecimal(n1.doubleValue());<br>
    BigDecimal b2 = new BigDecimal(n2.doubleValue());<br>
    return b1.compareTo(b2);<br>
}<br>
      <br>
      Or use if statement:<br>
       if(num1 > num2){<br>
 System.out.println(num1 + " is greater than " + num2);<br>
 }<br>
      <br>
     <a href="https://9to5answer.com/comparing-numbers-in-java">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Comparing Strings</td>
    <td>
There are three ways to compare String in Java: <br>
By Using equals() Method <br>
By Using == Operator <br>
By compareTo() Method <br>
      <br>
<a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(last_run%20%3D%3D%20null%20%7C%7C%20!today.equals(last_run))">Work Link</a> <br>
     <a href="https://www.javatpoint.com/string-comparison-in-java">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Comparing Objects</td>
    <td>     
Java provides the two methods of the Object class to compare the objects are as follows:<br>
<br>
Java equals() Method<br>
Java hashCode() Method<br>
<br>
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=selection.equals(MENUS%5B1%5D)">Work Link</a> <br>
     <a href="https://www.javatpoint.com/how-to-compare-two-objects-in-java">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>for loop, enhanced for loop</td>
    <td>     
Java for-loop is a control flow statement that iterates a part of the program multiple times. For-loop is the most commonly used loop in java. <br><br>
If we know the number of iteration in advance then for-loop is the best choice.<br>
      <br>
This for-loop was introduced in java version 1.5 and it is also a control flow statement that iterates a part of the program multiple times. <br>
This for-loop provides another way for traversing the array or collections and hence it is mainly used for traversing array or collections. <br>
This loop also makes the code more readable and reduces the chance of bugs in the code.<br>
      <br>
     <a href="https://www.geeksforgeeks.org/difference-between-for-loop-and-enhanced-for-loop-in-java/">Definition Resource Link</a></td>
   </tr>

  
   <tr>
    <td>while loop versus do while loop</td>
    <td>     
A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. <br>
      The while loop can be thought of as a repeating if statement.<br>
      <br>
do while loop is similar to while loop with the only difference that it checks for the condition after executing the statements, <br>
and therefore is an example of Exit Control Loop.<br>
      <br>
      ex:<br>
do<br>
{<br>
    statements..<br>
}<br>
while (condition);<br>
      <br>
     <a href="https://www.geeksforgeeks.org/difference-between-while-and-do-while-loop-in-c-c-java/">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>nested loops</td>
    <td>     
      If a loop exists inside the body of another loop, it's called a nested loop.<br>
      <br>
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=for%20(int%20i%20%3D%200%3B%20i%20%3C%20img.getHeight()%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(int%20j%20%3D%200%3B%20j%20%3C%20img.getWidth()%3B%20j%2B%2B)%20%7B">Work Link</a> <br>
     <a href="https://www.programiz.com/java-programming/nested-loop">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Creating a Class, describe Naming Conventions</td>
    <td>     
It should start with the uppercase letter.<br>
It should be a noun such as Color, Button, System, Thread, etc.<br>
Use appropriate words, instead of acronyms.<br>
      <br>
     <a href="https://www.javatpoint.com/java-naming-conventions">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Constructor, describe why there is no return</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://stackoverflow.com/questions/6801500/why-do-constructors-in-java-not-have-a-return-type">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Accessor methods, relationship to getter</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Mutator methods, relationship to setter, describe void return type</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Static variables, Class variables, show use case in code</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Show use case of access modifiers: Public, Private, Protected</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Static methods, Class methods</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>this Keyword</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>main method, tester methods</td>
    <td>    
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Inheritance, extends</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Subclass constructor, super Keyword</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Overloading a method, same name different parameters</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Overriding a method, same signature of a method</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Abstract Class, Abstract Method</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Standard methods: toString(), equals(), hashCode()</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Late binding of object, referencing superclass object, ie Animal a = new Chicken(); Animal b = new Goat();</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Polymorphism: any of overloading, overriding, late binding</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
   </tr>
  
   <tr>
    <td>Big O notation for Hash map, Binary Search, Single loop, Nested Loop</td>
    <td>     
      <a href="https://tianbinliu.github.io/Fastpage/jupyter/2022/08/22/Java-notebook.html#:~:text=if%20(greater%20%26%26%20less)%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.println(%22You%20find%20the%20number%22)%3B%0A%20%20%20%20%20%20%20%20%7D">Work Link</a> <br>
     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Definition Resource Link</a></td>
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

