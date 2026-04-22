---
title: "Kadane’s Algorithm Explained"
date: "2026-04-22"
category: "Algorithms"
description: "Learn Kadane’s Algorithm to find maximum subarray sum in linear time with intuition and dry run."
image: "/blog_cover/kadane.png"
---

Kadane’s Algorithm is one of those problems that looks simple on the surface but teaches a very important mindset in problem solving.<br>
It helps you find the **maximum sum of a contiguous subarray** in an array in **O(n)** time.<br>

If you try to solve this naively, you might think of checking all subarrays, which takes O(n²) or even O(n³).<br>
Kadane reduces this to a single pass.<br>

Let’s understand it like an engineer, not just memorizing code.<br>

---

## Problem Statement

Given an integer array `nums`, find the contiguous subarray with the largest sum and return that sum.<br>

Example:<br>

```

Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

```

The subarray `[4,-1,2,1]` gives sum = 6.<br>

---

## Mental Model

Think of walking through the array and carrying a "running sum".<br>

At every element, you ask yourself:<br>

**"Should I continue my current subarray, or start fresh from here?"**<br>

That’s the entire idea.<br>

If your current sum becomes negative, it will only hurt future sums.<br>
So you drop it.<br>

This is the key intuition.<br>

---

## Core Idea

At each index `i`, you decide:<br>

```

currentSum = max(nums[i], currentSum + nums[i])

```

Meaning:<br>

Either start a new subarray from `nums[i]`<br>
Or extend the previous subarray<br>

And track the best answer:<br>

```

maxSum = max(maxSum, currentSum)

```

---

## Step by Step Intuition

Let’s take this array:<br>

```

[-2,1,-3,4,-1,2,1,-5,4]

```

We move left to right.<br>

Start:<br>

```

currentSum = -2
maxSum = -2

```

Now process each element:<br>

### Index 1 → 1

```

currentSum = max(1, -2 + 1) = 1
maxSum = max(-2, 1) = 1

```

### Index 2 → -3

```

currentSum = max(-3, 1 - 3) = -2
maxSum = 1

```

### Index 3 → 4

```

currentSum = max(4, -2 + 4) = 4
maxSum = 4

```

Notice here, we dropped previous sum and started fresh.<br>

### Index 4 → -1

```

currentSum = max(-1, 4 - 1) = 3
maxSum = 4

```

### Index 5 → 2

```

currentSum = 5
maxSum = 5

```

### Index 6 → 1

```

currentSum = 6
maxSum = 6

```

### Index 7 → -5

```

currentSum = 1
maxSum = 6

```

### Index 8 → 4

```

currentSum = 5
maxSum = 6

````

Final answer = 6<br>

---

## Why It Works

The key observation is this:<br>

A negative sum will always reduce your future total.<br>

So instead of carrying baggage, you reset.<br>

This is similar to dropping a bad investment early instead of trying to recover it.<br>

Kadane is greedy but correct because at every step, it makes the best local decision that leads to global optimum.<br>

---

## C++ Implementation

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];

        for(int i = 1; i < nums.size(); i++){
            // Either extend or restart
            currentSum = max(nums[i], currentSum + nums[i]);

            // Update global max
            maxSum = max(maxSum, currentSum);
        }

        return maxSum;
    }
};
````

---

## Dry Run Walkthrough

Let’s dry run a smaller case:<br>

```
nums = [5, -2, 3, -1]
```

Start:<br>

```
currentSum = 5
maxSum = 5
```

Index 1:<br>

```
currentSum = max(-2, 5 - 2) = 3
maxSum = 5
```

Index 2:<br>

```
currentSum = max(3, 3 + 3) = 6
maxSum = 6
```

Index 3:<br>

```
currentSum = max(-1, 6 - 1) = 5
maxSum = 6
```

Answer = 6<br>

---

## Edge Cases

All negative numbers:<br>

```
[-3, -1, -2]
```

Kadane still works because we initialize with `nums[0]`.<br>
Answer = -1<br>

Single element:<br>

```
[7]
```

Answer = 7<br>

Large negatives breaking sequence:<br>

```
[4, -100, 5]
```

Algorithm correctly restarts at 5.<br>

---

## Common Mistakes

Starting `currentSum` from 0 instead of `nums[0]`.<br>
This breaks all negative cases.<br>

Forgetting to update `maxSum` at every step.<br>

Trying to track subarray manually without understanding reset logic.<br>

---

## Intuition in One Line

**Keep adding while it helps, reset when it hurts.**<br>

---

## Time and Space Complexity

Time Complexity: O(n)<br>
We traverse the array once.<br>

Space Complexity: O(1)<br>
No extra space used.<br>

---

## Real World Analogy

Imagine tracking your daily profit and loss.<br>

If you are in profit, you continue.<br>

If losses exceed your gains, you restart tracking from today.<br>

You always keep the best profit seen so far.<br>

That’s Kadane.<br>

---

## Where This Helps

This pattern appears in:<br>

Maximum profit problems<br>

Stock trading variations<br>

Dynamic programming optimizations<br>

Prefix sum optimizations<br>

---

## Summary

Kadane’s Algorithm is about making a local decision at each step.<br>

Either extend your current subarray or start fresh.<br>

By doing this greedily, you guarantee the optimal solution in linear time.<br>

Once you understand this deeply, many DP problems start feeling simpler.<br>

