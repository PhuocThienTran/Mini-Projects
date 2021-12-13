# Thien Tran Programming Series
# Episode 10: The Python’s Basics II
# YouTube Link: https://youtu.be/YPn9zoBc0RQ

# Boolean Value Tables
# not False -> True
# not True -> False
#
# False and False -> False
# True and True -> True
# False and True -> False
# True and False -> False
#
# False or False -> False
# True or True -> True
# False or True -> True
# True or False -> True

# Python's Relational Operators:
# < less than
# > greater than
# <= less than or equal to
# >= greater than or equal to
# == equal to
# != not equal to

# Python's Type Bool:
# 0 -> False
# print(bool(0))
# Non-zero numbers -> True
# print(bool(42))
# Empty strings -> False
# print(bool("")
# Non-empty strings -> True
# print(bool("Hi"))
# Question: print(bool("False"))

# ------
# Question: print(bool(True or 0))
# Question: print(bool(False or 0))
# Question: print(bool(0 or 42))
# Question: print(bool(False and "a"))
# Question: print(bool("a" and True))
# Question: print(bool("a" and False))
# Question: print(bool("a" and "b"))
# Question: print(bool(True and "a"))

# Python's If's Syntax:
# inputs
# if condition:
#     actions
# elif condition:
#     if condition:
#         actions
#     else:
#         actions
# else:
#     actions
# actions

# Python's if syntax examples:
a, b = 3, 1
if b > a:
    print("b > a")
elif a > b:
    if a == 2 and b == 1:
        print("a > b")
    else:
        print("W")
else:
    print("False")
print("hi")


year = int(input("Year: "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Year is leap year")
else:
    print("Year is a common year")
