

# Week 5


### Topics/Todos: 

**Python**

* Install Python
* Python installation and setup
* Basic Python syntax and data types
* Mathematical and logical operations in Python (addition, subtraction, modulo, comparison etc)
* Control flow (if, elif, else), loops (for, while) and match-case.
* String and list - their operations
* tuples, dictionaries, and sets & differences: list vs set vs tuple
* List and dict comprehension
* Defining and using functions, decorators
* Object-oriented programming concepts - classes, staticmethods, class methods, properties, inheritance
* File handling
* Error & exception handling

**Testing python programs using pytest**


* [Getting Started With Testing in Python](https://realpython.com/python-testing/#executing-your-first-test) - Read the tutorial upto the section “Executing your first test”
* [Effective Python Testing With Pytest](https://realpython.com/pytest-python-testing) - Read this pytest tutorial 


### Resources:

_Students need not refer to every resource given. Select any 1/2 resources for a single topic_

Use [Python Tutor](https://pythontutor.com/)  - To see execution flow of code 

[_Recommended_] Search [RealPython](realpython.com) for each topic in curriculum. They have good text tutorials on almost all Python topics.

**Courses**:

[Learn Python 3 | Codecademy](https://www.codecademy.com/learn/learn-python-3) 

[_recommended_] [Python for Everybody (PY4E)](https://www.py4e.com/lessons) 

[_free certificate_] [Free Python Course Online With Certification](https://www.scaler.com/topics/course/python-for-beginners/) 

**Youtube Videos:**

[Python Tutorial for Beginners (with mini-projects)](https://www.youtube.com/watch?v=qwAFL1597eM) 

[Python for Beginners – Full Course [Programming Tutorial]](https://www.youtube.com/watch?v=eWRfhZUzrAc) 

**Free Online book:**

[Automate the Boring Stuff with Python, 2nd Edition](https://automatetheboringstuff.com/2e/chapter0/) 

**Others:**

[https://docs.pytest.org/](https://docs.pytest.org/) 

[How To Write Unit Tests in Python • Pytest Tutorial](https://www.youtube.com/watch?v=YbpKMIUjvK8) 


### Weekly Practical Tasks:

**Solve the below problems:**



1. Problem 1:Sum of Numbers 

    Write a program to find the sum of all numbers from 1 to a given number. 

2. Problem 2: Find the Largest Number 

    Write a program that finds the largest number in a list of integers. Do not use max()

3. Problem 3: Prime Number Check 

    Write a program to determine if a given number is prime or not.

4. Problem 4: Factorial Calculation 

    Calculate the factorial of a given number using a loop.

5. Problem 5: Reverse a Number 

    Take an integer as input and reverse it. For example, if the input is 123, the output should be 321. Do not convert the number to a string. Perform the task using mathematical operations only.

6. Problem 6: Palindrome Check 

    Write a program to check if a given string is a palindrome (reads the same forwards and backward).

7. Problem 7: Count Vowels and Consonants 

    Count the number of vowels and consonants in a given string.

8. Problem 8: Multiplication Table 

    Print the multiplication table for a given number.

9. Problem 9: FizzBuzz 

    Print numbers from 1 to a given number. For multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for numbers that are multiples of both 3 and 5, print "FizzBuzz."


**Task 1: To-Do List Application**


* Create a Python class named "TodoList."
* Inside the TodoList class, implement methods for adding to-do items. You can use a list to store the items.
* Implement a method to view all the to-do items stored in the list.

    ```python
        def view_items(self):
        	...
    ```

* Add a method for removing to-do items by specifying their index.

    ```python
        def remove_item(self, index):
        	...
    ```

* Ensure that you handle cases where users provide invalid indices when trying to remove items. Use try-except to catch such errors.
* Create a loop that will continuously prompt the user for actions (add, remove, display, exit). You can use a while loop that runs until the user chooses to exit.
* Use pytest to write test cases for each of the methods in the TodoList class for adding, listing, and removing. Also test that removal using an invalid index will raise an exception.

Also try to persist the todo list data across program runs (added data should not be cleared on re-running the program). You can use any python libraries for the same. You should avoid using concepts we haven’t covered so far (eg: databases)
