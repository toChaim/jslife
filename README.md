# A library for javascript 
![Build Status](https://travis-ci.org/toChaim/jslife.svg?branch=master)
## Classes
### Heap
Modeled after Array.sort, Heap takes a comparator and returns a priorety heap. Change the comparator to get min, max, or priorety heaps. Push new values on the heap. Pop the top most value off. Peek returns the top value without removing it. Length tells you how many items are in the heap.
If no comparator is given it sorts stings or integers.
### Trie
### LinkedList
### Graph
## Modified Classes
### add .keys to objects
### add .values to objects
### add .forEach to objects
### add .map to objects
### add .reduce to objects
## Functions
### times
The times is an arrow Function to repatedly do things.  
It takes a posotive integer of how many times to do things.  
And it takes a function to do each time.  
The function is passed the count (starting from 0) as an argument.  
Times returns true if it ran and false if it did not.  
### deepEquals
### cache
Takes a function and cache it.  
If you do this when the function is created you can make a memoized function.  