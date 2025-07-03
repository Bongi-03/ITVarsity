#Strings
#String methods: .upper(), .lower(), .title(), etc.
greeting = "Hello, World!"
print(greeting)

#String concatenation:
first_name = "Bongi"
last_name = "Mavuso"
full_name = first_name + " " + last_name

#String formatting:
print(f"My name is {full_name}")

#Numeric Data: int and float
age = 25
height = 1.75

#Variables
country = "South Africa"
print(country)

#Operators on Numeric Data
#Arithmetic operators: +, -, *, /, //, %, **
result = 10 + 5

#Operators on Strings
#String repetition:
print("Ha" * 3)
#Combining strings: +
#Checking substrings:
"Hello" in "Hello, World!"

#Control Statements
#if, else, elif conditions:
age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("Minor")

#Control Statements Part 2
#Nested conditions
#Logical operators: and, or, not
if age >= 18 and country == "South Africa":
    print("Eligible")

#Loops
#while loops:
count = 0
while count < 5:
    print(count)
    count += 1

#Loops Part 2
#for loops:
for i in range(5):
    print(i)
#Looping through strings or lists:
for char in "Hello":
    print(char)