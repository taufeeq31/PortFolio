---
title: "Longest Consecutive Sequence (LeetCode 128)"
date: "2026-03-02"
category: "Algorithms"
description: "A simple, visual guide to solving the Longest Consecutive Sequence problem in O(n) time."
image : "/blog_cover/longest_consecutive_sequence.png"
---

Here is the link problem statement for the **<a href="https://leetcode.com/problems/longest-consecutive-sequence/description/" target="_blank" rel="noopener noreferrer">Longest Consecutive Sequence</a>** problem.



The **Longest Consecutive Sequence** problem is a classic algorithmic challenge. The goal is to find the length of the longest consecutive sequence of numbers in an unsorted array.

Here is how to break the problem down and solve it efficiently in O(n) time.

Let' use `nums = [100,4,200,1,3,2]` as our example.

### Step 1: Create a HashSet and Add All Elements
To achieve O(n) time complexity, we can use a HashSet to store all the elements of the array. This allows for O(1) average time complexity for lookups.

```java
HashSet<Integer> set = new HashSet<>();
for (int num : nums) {
    set.add(num);
}
```

> `set` will contain: {100, 4, 200, 1, 3, 2}


### Step 2: Find the Start of a Sequence

Next, we iterate through the HashSet and look for the start of a sequence.

A number is a start of a sequence if there is no number that is one less than it in the set.

For example, if we are looking at the number `3`, we check if `2` is in the set. If it is not, then `3` is the start of a sequence.

```java
if(!set.contains(num-1)){
    // This is the start of a sequence
}
```

> In our example, the numbers `1` and `100` are the starts of sequences because `0` and `99` are not in the set, respectively. The number `4` is not a start because `3` is in the set, and so on.

### Step 3: Count the Sequence

If we found the start of a sequence, we can then count how long the sequence is by checking for the next numbers in the sequence (num + 1), (num + 2), and so on,

until we find a number that is not in the set.

```java
while(set.contains(x+1)){
    count++;
    x++;
}
```

> For the number `1`, we will find `2`, then `3`, and then `4`, giving us a sequence length of 4. For the number `100`, there are no consecutive numbers, so the sequence length is 1.


### Step 4: Keep Track of the Longest Sequence
As we count the length of each sequence, we keep track of the longest one we have found so far.
We can use a variable `ans` to store the length of the longest sequence.

We initialize `ans` to 1 (since the minimum length of a sequence is 1).
Updating `ans` at the end of each sequence count:

```java
ans = Math.max(ans, count);
```

## The Java Implementation

Here is how those visual steps translate into clean, highly efficient Java code:

```java
class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length==0) return 0; //returning if the no element found
        //Create a HashSet
        HashSet <Integer> set = new HashSet<>();
        int ans = 1;
        for(int i=0;i<nums.length;i++){
            set.add(nums[i]); //Adding all to set
        }
        for(Integer num: set){
            int count = 1;
            int x = num;
            if(!set.contains(num-1)){
                while(set.contains(x+1)){
                    count++;
                    x++;
                }
            }
            ans = Math.max(ans,count);
        }
        return ans;
    }
}
```

**Time Complexity:**
$O(n)$ — Each number is processed at most twice (once as a possible start, and once in the while loop).

**Space Complexity:**
$O(n)$ — We are using a HashSet to store all elements, so the space required is proportional to the number of elements in the input array.
