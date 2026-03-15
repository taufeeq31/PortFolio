---
title: "3Sum Problem"
date: "2026-03-14"
category: "Algorithms"
description: "A simple, visual guide to solving the 3Sum problem in O(n^2) time."
image : "/blog_cover/3Sum.png"
---

Here is the link problem statement for the **<a href="https://leetcode.com/problems/3sum/" target="_blank" rel="noopener noreferrer">3Sum</a>** problem.

This is a classic problem that can be solved using the two-pointer technique but after sorting the array. The goal is to find all unique triplets in the array which gives the sum of zero.

The problem is often asked in coding interviews and is a great way to test your understanding of sorting and the two-pointer technique.

### Mental Model
Imagine you have a list of numbers `[-1,0,1,2,-1,-4]` and you want to find three numbers that add up to zero
1. First, you sort the list to make it easier to find pairs that sum up to a specific value.
2. Then, you fix one number (`i`) and use two pointers (`left` and `right`) to find pairs that sum up to the negative of the fixed number. eg: if the fixed number is `-1`, you want to find pairs that sum up to `1` (because `-1 + 1 = 0`).
3. You move the pointers based on whether the sum is less than, greater than, or equal to zero, and you also skip duplicates to ensure unique triplets.

### Step 1: Sort the Array
Sorting the array helps us in two things:
1. It allows us to use the two-pointer effectively. If the sum is less - we move to left, if the sum is more - we move to right.
2. It helps us to easily skip duplicates - as they will be adjacent to each other.

```java
Arrays.sort(nums);
```

### Step 2: Fix One Number - Anchor
We iterate through the sorted array and fix one number at a time. Also we need to skip duplicates for the fixed number to avoid repeating the same triplet.

```java
for(int i=0;i<n-2;i++){
    //Using i>0 for index bound error
    if(i>0 && nums[i]==nums[i-1]){ //Skipping duplicate
        continue;
    }
// ... rest of the code
}
```
### Step 3: Two Pointers
After fixing one number, we use two pointers to find the other two numbers that sum up to the negative of the fixed number.
we initialize `left` to `i+1` and `right` to the end of the array. We then check the sum of the three numbers:
- If the sum is less than zero, we need a larger number, so we move the `left` pointer to the right.
- If the sum is greater than zero, we need a smaller number, so we move the `right` pointer to the left.
- If the sum is equal to zero, we found a triplet, and we add it to our result list.
- We also skip duplicates for the `left` and `right` pointers to ensure we only add unique triplets to our result.

```java
int left = i+1;
int right = n-1;
while(left < right){
    int sum = nums[i] + nums[left] + nums[right];
    if(sum == 0){
        res.add(Arrays.asList(nums[i], nums[left], nums[right]));

        while(left < right && nums[left]==nums[left+1]){
            left++;
        }
        while(left < right && nums[right]==nums[right-1]){
            right--;
        }
        left++;
        right--;
    } else if(sum<0){
        left++;
    } else {
        right--;
    }
}
```

## Java Implementation
Here is the complete Java implementation of the 3Sum problem:
```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        for(int i=0;i<n-2;i++){
            if(i>0 && nums[i]==nums[i-1]){ //Skipping duplicate
                continue;
            }
            //Two Pointers
            int left = i+1;
            int right = n-1;
            while(left < right){
                int sum = nums[i] + nums[left] + nums[right];
                if(sum == 0){
                    res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while(left < right && nums[left]==nums[left+1]){
                        left++;
                    }
                    while(left < right && nums[right]==nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                } else if(sum<0){
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
```
### Time Complexity
The time complexity of this algorithm is O(n^2). This is because we have a loop that interate through the array (O(n)) and for each element, we use two pointers to find pairs that sum up to a specific value (O(n)). Therefore, the overall time complexity is O(n^2).

Also Sorting the array takes O(n log n) time, but since O(n^2) dominates O(n log n), the overall time complexity is O(n^2).

### Space Complexity
The space complexity of this algorithm is O(1) if we don't consider the space used for the output list.
