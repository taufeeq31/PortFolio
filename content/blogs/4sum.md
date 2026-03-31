---
title: "4Sum Problem"
date: "2026-03-14"
category: "Algorithms"
description: "A simple, visual guide to solving the 4Sum problem in O(n^2) time."
image : "/blog_cover/4Sum.png"
---

Here is the link problem statement for the **<a href="https://leetcode.com/problems/4sum/" target="_blank" rel="noopener noreferrer">4Sum</a>** problem.

The problem is to find all unique quadruplets in the array which is equal to the target. This is an extension of the 3sum problem and can be solved using a similar approach. The main idea is to use two use two anchors instead of one.

This is a problem that can be solved using the two-pointer technique but after sorting the array. The goal is to find all unique quadruplets in the array which gives the sum of zero.

### Mental Model
Imagine you have a list of numbers `[-1,0,1,2,-1,-4]` and you want to find four numbers that add up to the target
1. First, you sort the list to make it easier to skip the duplicates as they will be adjacent.
2. Then, you fix the two number (`i` and `j`) and use two pointers (`left` and `right`) to find the pair that add upto the target.
3. You move the pointers based on whether the sum is less than, greater than, or equal to the target.
4. You also skip duplicates to ensure unique quadruplets.

### Step 1: Sort the Array
Sorting the array helps us in two things:
1. It allows us to use the two-pointer effectively. If the sum is less - we move to left, if the sum is more - we move to right.
2. It helps us to easily skip duplicates - as they will be adjacent to each other.

```java
Arrays.sort(nums);
```

### Step 2: Fix Two Numbers - Anchors
We iterate through the sorted array and fix two numbers `i` and `j` at a time. Also we need to skip duplicates for the fixed numbers to avoid repeating the same quadruplet.

```java
for (int i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicate for i

    for (int j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] == nums[j - 1]) continue; // Skip duplicate for j

        // Two-pointer logic goes here
    }
}
```
### Step 3: Two Pointers
After fixing two numbers, we use two pointers to find the quadruplet that sum up to the target.
we initialize `left` to `j+1` and `right` to the end of the array (`n-1`). We then check the sum of the four numbers:
- If the sum is less than zero, we need a larger number, so we move the `left` pointer to the right.
- If the sum is greater than zero, we need a smaller number, so we move the `right` pointer to the left.
- If the sum is equal to zero, we found a quadruplet, and we add it to our result as a list.

### Step 4: Skip Duplicates for Left and Right Pointers
Once a valid quadruplet is found, moving left and right by just one step isn't enough—we might land on the exact same numbers again. We must use a while loop to advance the pointers past any consecutive duplicate values.


```java
int l = j + 1;
int r = n - 1;

while (l < r) {
    long sum = (long) nums[i] + nums[j] + nums[l] + nums[r];

    if (sum == target) {
        res.add(Arrays.asList(nums[i], nums[j], nums[l], nums[r]));

        // Move pointers first
        l++;
        r--;

        // Then skip any duplicates
        while (l < r && nums[l] == nums[l - 1]) l++;
        while (l < r && nums[r] == nums[r + 1]) r--;
    } else if (sum < target) {
        l++;
    } else {
        r--;
    }
}
```

## Java Implementation
Here is the complete Java implementation of the 4Sum problem:
```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;
        List<List<Integer>> res = new ArrayList<>();

        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;

                int l = j + 1;
                int r = n - 1;

                while (l < r) {
                    long sum = (long) nums[i] + nums[j] + nums[l] + nums[r];

                    if (sum == target) {
                        res.add(Arrays.asList(nums[i], nums[j], nums[l], nums[r]));
                        l++;
                        r--;
                        while (l < r && nums[l] == nums[l - 1]) l++;
                        while (l < r && nums[r] == nums[r + 1]) r--;
                    } else if (sum < target) {
                        l++;
                    } else {
                        r--;
                    }
                }
            }
        }
        return res;
    }
}
```
### Time Complexity
The time complexity of this algorithm is $O(n^3)$.
We have two nested loops to fix i and j which takes $O(n^2)$ time. Inside the inner loop, the two-pointer approach scans the remaining elements, taking $O(n)$ time. Sorting the array initially takes $O(n \log n)$ time, but since $O(n^3)$ dominates the sorting time, the overall asymptotic time complexity is $O(n^3)$.

### Space Complexity
The space complexity is $O(1)$ auxiliary space (excluding the space required to store the output list of quadruplets). Depending on the internal implementation of Arrays.sort(), the sorting algorithm itself may take $O(\log n)$ space on the call stack.
