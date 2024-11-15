# keyed-collections
# Data Collections in JavaScript

This chapter introduces collections of data indexed by a key, specifically focusing on **Map** and **Set** objects. These collections are iterable in the order of their insertion, making them easy to work with for ordered data storage and retrieval.

## Map Object

A **Map** object is a simple key-value collection that maintains the order of insertion for its elements. Unlike plain objects, maps allow any type of key (primitive values, objects, etc.) and offer a consistent way to access and iterate through entries. 

The following code shows some basic operations with a Map. See also the Map reference page for more examples and the complete API. You can use a for...of loop to return an array of [key, value] for each iteration.