# A library for javascript 
![Build Status](https://travis-ci.org/toChaim/jslife.svg?branch=master)
I started this library when I did a code challenge that needed a max heap. I knew how to code one but it seemed like a lot of coding for one challenge. So I repeatedly sorted an array instead. I also started this library of things I wish I had in javaScript.
## Classes
### Heap
Modeled after Array.sort, Heap takes a comparator and returns a priorety heap. Change the comparator to get min, max, or priorety heaps. Push new values on the heap. Pop the top most value off. Peek returns the top value without removing it. Length tells you how many items are in the heap.
If no comparator is given it sorts stings or integers.
### Trie
Makes a trie. It takes function that takes a value or object and integer 
it should return a string that will be the key for the next node.
it must output undefined for end of sequence.
### LinkedList
### Graph
## Modified Classes
### add .keys method to objects
### add .values method to objects
### add .forEach method to objects
### add .map method to objects
### add .reduce method to objects
## Functions
### times
The times is an arrow Function to repatedly do things.  
It takes a posotive integer of how many times to do things.  
And it takes a function to do each time.  
The function is passed the count (starting from 0) as an argument.  
Times returns true if it ran and false if it did not.  
### deepEquals
### cache
Takes a function and caches it's results.  
If you do this when the function is created you can make a memoized function.
# Running tests
in terminal type "npm i"
then type "npm test"