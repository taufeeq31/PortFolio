---
title: "Boyer-Moore Majority Vote Algorithm for (n/3)"
date: "2026-03-11"
category: "Algorithms"
description: "A simple, visual guide to solving the Boyer-Moore Majority Vote problem in O(n) time."
image : "/blog_cover/majority_element_ii.png"
---

Here is the link problem statement for the **<a href="https://leetcode.com/problems/majority-element-ii/" target="_blank" rel="noopener noreferrer">Majority Element II</a>** problem.


The **Boyer-Moore Majority Vote Algorithm** is a powerful technique used to find the majority element in a list. The majority element is the element that appears more than n/3 times in the list.

### The Story Behind the Algorithm
The Boyer-Moore Majority Vote Algorithm was developed by Robert S. Boyer and J Strother Moore in 1981. It is an efficient algorithm that runs in O(n) time and O(1) space, making it ideal for finding the majority element in a list.

### The Analogy
Think of the algorithm like an election where numbers vote for themselves.

Each number in the array is a voter supporting its own value as a candidate. The rule is that a winner must get more than `n/3` votes.

**Important observation:** if a number must have more than `n/3` votes, there can be at most two winners. Because three numbers each having more than `n/3` votes would exceed `n`.

So during the scan we only keep track of **two possible leaders**.

Now the analogy: Imagine a room where all the voters (numbers) are standing. When three voters supporting three different candidates come together, they cancel each other and leave the room. None of them can dominate because they balance each other out.

Example: If we have the array `[1, 2, 3]`, the voters are:
- First `1` votes for 1
- Second `1` votes for 1
- Third `3` votes for 3
Each supports a different candidate, so they cancel each other out and leave the room. No candidate can dominate.

Now another example: If we have the array `[1, 1, 1, 2, 2, 3]`, the voters are:
- First `1` votes for 1
- Second `1` votes for 1 and strengthens 1's position
- Third `1` votes for 1 and strengthens 1's position even more

- Now `2` votes for 2 - becoming second candidate.
- Next `2` votes for 2 and strengthens 2's position

- Finally `3` votes for 3 - but it doesn't have enough support to become a candidate.

Because `1` appear many times, it survives the cancellations.

So the mental model is this:
- The first pass is candidate filtering through the cancellation process.
- The second pass is validating of the survivors.

## Boyer-Moore Majority Vote Algorithm
**Moore’s Voting** works by canceling votes of different elements so that only frequent elements survive.

For normal majority problems ( > n/2 ), we keep the track of one candidate and its votes because only 1 element can break the threshold.

Here the threshold is `n/3`, so we need to keep track of **two candidates** and their votes.

### Step 1: First Pass - Candidate Selection
Initialize two candidate variables and their corresponding vote counts.

```java
int candidate1 = 0, candidate2 = 1; // Initialize to different values
int count1 = 0, count2 = 0;
```

### Step 2: Iterate through the array
For each element in the array, we checks some conditions:
- If the current element matches `candidate1`, we increment `count1`.
- Else if it matches `candidate2` we increment `count2`.

If it matches neither candidates:
- If `count1` is zero, we set `candidate1` to the current element and reset `count1` to 1.
- Else if `count2` is zero, we set `candidate2` to the current element and reset `count2` to 1.

If both candidates exist and number matches neither:
- We decrement both `count1` and `count2` because they cancel each other out, this represents the cancellation process.

```java
for (int ele : nums) {
    if (ele == candidate1) {
        count1++;
    } else if (ele == candidate2) {
        count2++;
    } else if (count1 == 0) {
        candidate1 = ele;
        count1 = 1;
    } else if (count2 == 0) {
        candidate2 = ele;
        count2 = 1;
    } else {
        count1--;
        count2--;
    }
}
```

### Step 3: Second Pass - Validation
After the first pass, we have at most two candidates. Now we need to verify if they actually appear more than `n/3` times in the array.

```java
count1 = 0;
count2 = 0;
for (int ele : nums) {
    if (ele == candidate1) count1++;
    else if (ele == candidate2) count2++;
}
List<Integer> res = new ArrayList<>();
if (count1 > nums.length / 3) res.add(candidate1);
if (count2 > nums.length / 3) res.add(candidate2);
```

## Java Implementation
Here is the Java implementation of the Boyer-Moore Majority Vote Algorithm for finding elements that appear more than `n/3` times in an array.
```java
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int candidate1 = 0, candidate2 = 1;
        int count1 = 0, count2 = 0;
        // Finding the potential candidates
        for(int ele: nums){
            if(ele == candidate1){
                count1++;
            } else if(ele == candidate2){
                count2++;
            } else if(count1 == 0){
                candidate1 = ele;
                count1 = 1;
            } else if(count2 == 0){
                candidate2 = ele;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        //Validating the candidates
        count1 = 0;
        count2 = 0;
        for(int ele: nums){
            if( ele == candidate1 ){
                count1++;
            } else if( ele == candidate2 ){
                count2++;
            }
        }
        //Adding answer to ArrayList
        int n = nums.length;
        List<Integer> res = new ArrayList<>();
        if (count1 > (n / 3) ) res.add(candidate1);
        if (count2 > (n / 3) ) res.add(candidate2);

        return res;

    }
}
```

## Time Complexity
The time complexity of this algorithm is `O(n)` because we traverse the array twice: once to find the candidates and once to validate them.

## Space Complexity
The space complexity is `O(1)` because we are using only a constant amount of extra space to store the candidates and their counts.



