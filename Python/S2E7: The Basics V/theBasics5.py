# Thien Tran Programming Series
# Season 2 Episode 7: The Python’s Basics V
# YouTube Link: https://youtu.be/CJGZpnZdARA

# Python's Basic Data Structures: List, Set, Tuples, and Dictionary

# Concept of Mutable vs. Immutable:
    # Mutable allow an object to be modified after its creation via modifying, adding into the object, deleting from
# an object.
    # Immutable doesn't allow an object to be modified after its creation.

# Tuple: Consist of multiple values, separated by commas, maintain values in order, is immutable, can be
# written in parentheses but not required, doesn't require elements to be of same type, i.e.:
    # (1,2) or 1,2 or type((1,2)) -> tuple

# List: Consist of multiple values in order, can be empty, is mutable, can be written in brackets, doesn't require
# elements to be of same type, i.e.:
    # list() or [] for empty lists. list(range(10)) -> [0, 1, 2... 9]
# List Methods (s in this case is a list):
    # s.append(x) -> adds x to end of s
    # s.insert(index ,x) -> inserts x to s at given index
    # s.pop(index) -> return and remove the element at index from s
    # s.pop() -> return and remove the last element
    # s.clear() -> remove all elements from s
    # s.remove(x) -> removes the first occurrence of x from s
    # s.reverse() -> reverse the order of s
    # s.sort() -> sorts the elements of s

# Set: Unordered collection of values. Values are unique (no duplicates), is mutable, but the elements - numbers,
# strings, bools, tuples, must be immutable, i.e.:
    # set() for empty sets. {1, 3, "Thien"} non-empty sets example.
    # The order of elements in sets aren't important or preserved, i.e.:
        # print({i for i in range(10) if i % 3 == 0}) -> {0, 9, 3, 6}
# Set Methods (s in this case is a set):
    # set() -> Make empty set
    # set(sequence) -> make set from values in the sequence, i.e.: s = set([1, 2, 3]) -> {1, 2, 3}
    # s.add(x) -> add x to s
    # s.remove(x) -> remove x from s
    # len(s) -> count set s number of elements
    # s.pop() -> return and remove a random element from s
    # s.clear() -> remove all elements from s
    # s.isdisjoint(t) -> are s and t disjoint?
    # x in s -> is x an element in s?
    # x not in s -> is x not an element in s>
    # s.union(t) or s|t -> the set that contain all elements in both sets
    # s.intersection(t) or s&t -> the set of all elements in both sets
    # s.difference(t) or s-t -> the set of all elements of s that aren't in t
    # s.subset(t) or s<=t -> all the elements of s are also in t
    # s<t -> all elements of s are also in t, but s != t
    # s.superset(t) or s>=t -> is s a superset of t
    # s>t -> s is proper superset of t?
# Note: in, not in, .subset() or <=, <, .superset() or >=, .isdisjoint() will return a bool answer

# Dictionary: Unordered collection of keys. Each keys must be unique (no duplicates) and be associated to a value -
# which doesn't have to be unique. It's mutable, its keys are immutable and values are mutable, i.e.:
    # dict() or {} for empty dicts. {"Thien": 21, "Barn": 20} non-empty dicts example.
# Dictionary Methods (d in this case is a dictionary):
    # d.get(key, [default]) -> return the value associated with key in d, optionally returning default if specified keys
# isn't in d.
    # key in d -> does the key exists in d, only consider key not value
    # del d[key] -> delete specific key from d
    # d.clear() -> delete all keys from d
    # d[key] = value -> add/replace the associated value with key in d
    # d.update(d2) -> update d with the data in dictionary "d2"
    # d.keys() -> return a sequence of all the keys in d
    # d.values() -> return a sequence of all the values in d
    # d.items() -> return a sequence of tuples containing all keys and values in d
# Note: key in d will return a bool answer
