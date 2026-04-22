---
title: "Boyer Moore Voting Algorithm Explained"
date: "2026-04-22"
category: "Algorithms"
description: "Learn the Boyer Moore Voting Algorithm with intuition, dry run, and C++ implementation in O(n) time and O(1) space."
image: "/blog_cover/boyer_moore.png"
---

## Introduction

The Boyer Moore Voting Algorithm is one of those problems that looks almost magical when you first see it.

You are given an array, and you need to find the **majority element**. The twist is that you must do it in **O(n) time and O(1) space**.

At first, most people think of counting frequencies using a hashmap. That works, but it uses extra space.

The real question is:
**Can we find the majority element without storing counts for every number?**

That is exactly what this algorithm solves.

---

## Problem Statement

Given an array of size `n`, find the element that appears **more than n/2 times**.

This element is called the **majority element**.

Example:

```

Input: [2,2,1,1,1,2,2]
Output: 2

```

Because `2` appears 4 times and `n = 7`, so `4 > 7/2`.

---

## Naive Approaches (Quick Revision)

The first approach that comes to mind is brute force.

Check every element and count its frequency.
This takes O(n²), which is too slow.

A better approach is using a hashmap.

Store frequency of each element while traversing.
This reduces time to O(n), but space becomes O(n).

We want something better.

---

## Core Intuition

Think of this like an election.

Each number is a candidate.
We are trying to find the one that has more than half the votes.

Now imagine this:

Whenever you see two different elements, they **cancel each other out**.

So instead of counting everything, we just keep track of a **balance**.

- Same element → increase support
- Different element → decrease support

The key idea is:

> If an element appears more than n/2 times, it **cannot be fully cancelled out**.

No matter how many different elements try to cancel it, it will always remain at the end.

---

## Algorithm Idea

We maintain two things:

- `candidate`
- `count`

Process:

1. Start with `count = 0`
2. Traverse the array
3. If `count == 0`, pick current element as candidate
4. If current element == candidate → `count++`
5. Else → `count--`

At the end, the candidate will be the majority element.

---

## Step by Step Dry Run

Let’s take this example:

`[2, 2, 1, 1, 1, 2, 2]`

We track two things: candidate and count.<br>

Start:<br>
candidate = 0, count = 0<br>
Now iterate:<br>

See 2<br>
count == 0 → pick candidate = 2<br>
count = 1<br>

See 2<br>
same as candidate → count = 2<br>

See 1<br>
different → count = 1<br>

See 1<br>
different → count = 0<br>

See 1<br>
count == 0 → pick candidate = 1<br>
count = 1<br>

See 2<br>
different → count = 0<br>

See 2<br>
count == 0 → pick candidate = 2<br>
count = 1<br>

Final candidate = 2<br>

You can clearly see the cancellation happening.<br>
Different elements reduce the count, same elements strengthen it.<br>

Even after all cancellations, the majority element survives.<br>

---

## C++ Implementation

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int candidate = 0;
        int count = 0;

        for(int num : nums){
            if(count == 0){
                candidate = num; // pick new candidate
            }

            if(num == candidate){
                count++; // support increases
            } else {
                count--; // cancellation happens
            }
        }

        return candidate;
    }
};
````

---

## Why It Works

The algorithm is based on **pair cancellation**.

Whenever we see two different elements, we remove one occurrence of each.

If a majority element exists:

* It appears more than n/2 times
* All other elements combined are less than n/2
* So they cannot fully cancel it

This guarantees that the final candidate is the majority.

---

## Edge Cases

If no majority element exists, this algorithm still returns a candidate.

So in such cases, you need a **second pass** to verify:

```cpp
int count = 0;
for(int num : nums){
    if(num == candidate) count++;
}

if(count > nums.size()/2) return candidate;
return -1;
```

Other cases:

* Single element → always majority
* All elements same → works fine
* Mixed elements → depends on condition

---

## Common Mistakes

Many developers misunderstand what this algorithm does.

It does **not** find the most frequent element.
It only works when a majority element is guaranteed.

Another mistake is skipping the validation step when the problem does not guarantee a majority.

Also, people get confused when `count` becomes zero.
That just means we reset and start fresh with a new candidate.

---

## Time and Space Complexity

Time Complexity: O(n)
We traverse the array once.

Space Complexity: O(1)
No extra storage is used.

Compared to hashmap:

* Same time
* Much better space

---

## When To Use This

Whenever you see:

* Majority element (> n/2)
* Constraint on space
* Linear time requirement

This pattern should click instantly.

It also extends to problems like:

* Elements appearing more than n/3 times

---

## Conclusion

The Boyer Moore Voting Algorithm works because of a simple but powerful idea:

**Majority elements cannot be cancelled out completely.**

Once you understand the cancellation intuition, the code becomes obvious.

This is less about memorizing and more about thinking in terms of balance.
