---
path: avoid-unnecessary-css-nesting
date: 2022-03-06T14:05:30.779Z
title: Avoid unnecessary CSS nesting
---
### Why?

The more selector we include in styling the element, the higher the CSS-specificity will be, and it's harder to override in the future.

So when you're styling your code, if it's not a must, just keep your css nesting as light as possible so later you don't have to use `!important` everywhere.