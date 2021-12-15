# Thien Tran Programming Series
# Season 2 Episode 3: The Python’s Basics III
# YouTube Link: TBD

# Raw Concept of Loops: To iterate a certain element indefinitely or definitely.
# Python has 2 main loops: Indefinite (while loop) and Definite (for loop)

# Indefinite (while loop): the program can't know the amount of require iterations,
# so it's repeated until a condition is met, i.e.:

# Read 1 -> 10 then print:
# i = 1
# while i <= 10:
#     print(i, end=" ")
#     i += 1

# Read non-negative marks, print amount of entered marks, and its average:
# n, total = 0, 0.0
# mark = float(input("Enter Mark: "))
# while mark >= 0.0:
#     n += 1
#     total += mark
#     mark = float(input("Enter Mark: "))
# print("Number of Entered Marks: ", n)
# if n > 0:
#     print("Marks' Average: ", total / n)

# Definite (for loop): the program know when the loop starts, amount of iterations are
# required, i.e.:

# Count the amount of numbers in a given string:
# i.e.: "1999 is 1 year before I was born." -> 5 numbers entered in this string
# stringStatement = input("Enter a string: ")
# count = 0
# for i in stringStatement:
#     if i.isdigit():
#         count += 1
# print("Amount of numbers in string: ", count)

# Print a range of numbers between 1 and 100 but not including 100:
# n = 0
# for i in range(1, 100):
#     n += 1
#     print(n)
