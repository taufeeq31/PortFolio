---
title: "Next Permutation (LeetCode 31)"
date: "2026-03-02"
category: "Algorithms"
description: "A simple, visual guide to solving the Next Permutation problem in O(n) time."
image : "/blog_cover/next_permutation.png"
---

The **Next Permutation** problem is a classic algorithmic challenge. The goal is simple: rearrange an array of numbers into its next lexicographically greater permutation (essentially, the next largest number you can make using the exact same digits).

If no larger arrangement is possible, you simply reverse the array to get the lowest possible order.

Here is exactly how to break this problem down into three visual steps.



## The 3-Step Algorithm

The most efficient way to solve this is in-place, meaning we don't create any new arrays. Let's use the array `[1, 3, 5, 4, 2]` as our example.

### Step 1: Find the Pivot
We need to find the first number from the right that breaks the descending order. We scan backward from the end of the array.
* Is `2 > 4`? No.
* Is `4 > 5`? No.
* Is `5 > 3`? **Yes!** The number `3` is our pivot point (index `i`).
> Current state: [1, <strong>3</strong>, 5, 4, 2]

### Step 2: Find the Next Larger Element & Swap
Now that we have our pivot (`3`), we need to find the number to its right that is *just slightly larger* than it. Because the right side of the array `[5, 4, 2]` is guaranteed to be in descending order, we can just scan backward again until we find a number bigger than `3`.
* Is `2 > 3`? No.
* Is `4 > 3`? **Yes!**

We swap our pivot (`3`) with this new number (`4`).
> State after swap: [1, <strong>4</strong>, 5, <strong>3</strong>, 2]

### Step 3: Reverse the Subarray
Finally, we need to make the right side as small as possible. Since `[5, 3, 2]` is in descending order, the easiest way to make it the smallest possible sequence is simply to reverse it into `[2, 3, 5]`.
> Final result: [1, 4, <strong>2, 3, 5</strong>]


## The Java Implementation

Here is how those three visual steps translate into clean, highly efficient Java code:

```java
class Solution {
    public void reverseArray(int[] nums){
        int i=0, j=nums.length-1;
        while(i<j){
            swap(nums, i, j);
            i++;
            j--;
        }
    }
    public void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public void nextPermutation(int[] nums) {
        // 1. Finding pivot, jahaan se element me changes krne hai
        int n = nums.length;
        int pivot = -1;
        for(int i=n-2;i>=0;i--){ //Starting from the end
            if(nums[i]<nums[i+1]){
                pivot = i;
                break;
            }
        }
        // 2. If no pivot reverse the array
        if(pivot == -1){
            reverseArray(nums);
            return;
        }
        // 3. Next larger element
        for(int i=n-1;i>pivot;i--){
            if(nums[i]>nums[pivot]){
                swap(nums, i, pivot); //swapping i and pivot
                break;
            }
        }
        // 4. Reverse pivot+1 and n-1
        int i = pivot+1, j=n-1;
        while(i<=j){
            swap(nums, i, j);
            i++;
            j--;
        }
    }
}
```
**Complexity Analysis**
Because we are only scanning the array a few times and swapping elements in place without allocating extra memory, our solution is optimal:

**Time Complexity:**
$O(n)$ — In the worst-case scenario, we only pass through the array twice.

**Space Complexity:**
$O(1)$ — We are modifying the array in-place, so no extra memory is required.
