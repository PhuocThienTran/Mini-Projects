# Thien Tran Programming Series
# Episode 7: The Python’s Basics
# YouTube Link: https://youtu.be/te5XXpsyftE

# Types of numbers:
# Natural: 1, 2, 3
# Rational: -1 = -1/1, 0 = 0/1, 0.5 = 1/2
# Integers: -3, -2, -1, 0, 1, 2, 3
# Irrational: sqrt(2), pi 3.14
# Reals: irrationals, rationals

# Continuous: Measurable things: Weight, length, speed. Use reals numbers
# Discrete: Only whole number things, especially when you are counting. Use naturals or integers

age = int(input("Your age: ")) # int age
print(age)
print(id(age))

age = float(input("Your age: ")) # float age
print(id(age))

# Program calculates number of entered positive marks, and its average
n, total = 0, 0.0
mark = float(input("Marks: "))
while mark >= 0.0:
    n += 1
    total += mark
    mark = float(input("Marks: "))
if n > 0:
    print("Average: ", total / n)
    print("Amount of entered marks: ", n)
else:
    print("No marks")
