# Javascript and Classes
---
## OOPS

## Object
- Collection of properties and methods.

- Some methods toLowerCase(), toUpperCase(), Promises are nothing but objects.

## Why we use OOPS?

## Parts of OOPS
- Object literal (The meaning of this word is nothing but an object)

- Constructor function

- Prototypes    

- Classes

- Intances (new, this keywords)

---
## 4 pillars of OOPS
- Abstraction => Hiding internal details. For eg: fetch().

- Encapsulation => Wrapping of data such as methods and variables into a single unit.

- Inheritance => It is the ability to create new class (Child class) from an existing one (parent class)

- Polymorphism => It is the ability of an object to take multiple forms.

## Constructor Function

# 'new' keyword

Here's what happens behind the scenes when the new keyword is used:

- Step1 => A new object is created: The new keyword initiates the creation of a new JavaScript object.

- Step2 => A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- Step3 => The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- Step4 => The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


## instanceof Operator in Javascript

- The instanceof operator in JavaScript is used to check the type of an object at run time. 

- It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 

---

# Property Descriptor

## A property descriptor of an object consists of some of the following attributes to define each property:

**1. value** : It is the value associated with the property that is called.

**2. writable** : It indicates if the property can be changed or not. It only returns true if the property can be manipulated.

**3. enumerable** : If the property is visible during enumeration of the properties of the corresponding object, then it returns true.

**4. configurable** : It indicates if the property descriptor can be changed or removed from the corresponding object.

