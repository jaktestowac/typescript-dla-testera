# TEST_CASES

Prompt for testing code and suggesting test cases:

```diff
Here's some code:

[paste code]

Give me examples of positive test cases (valid inputs) and negative test cases (invalid or unexpected inputs).

Create table with test cases in this format:
- Test name: what the test is about
- Input: what input to use
- Expected output: what output to expect
- Explanation: what result I should see in each case.
- Priority: high, medium, low (explain why)

Include:
1. Normal test cases
2. Edge cases
3. Boundary cases
4. Negative cases

At the end, write these test cases to a file (markdown format) so I can reuse them.
```

or:


```diff
Here's my code - give me examples of positive test cases (valid inputs) and negative test cases (invalid or unexpected inputs).

Create table with test cases in this format:
- Test name: what the test is about
- Input: what input to use
- Expected output: what output to expect
- Explanation: what result I should see in each case.
- Priority: high, medium, low (explain why)

Include:
1. Normal test cases
2. Edge cases
3. Boundary cases
4. Negative cases

At the end, write these test cases to a file (markdown format) so I can reuse them.
```