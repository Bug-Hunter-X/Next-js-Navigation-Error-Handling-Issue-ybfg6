# Next.js Navigation Error Handling

This repository demonstrates a potential issue with error handling in Next.js when performing asynchronous operations after initiating navigation using `router.push`.  The issue arises because the navigation starts asynchronously and any errors thrown after the `router.push` call might not be properly caught within the component's scope.

## Problem Description

The provided `bug.js` file contains a component that navigates to another page using `next/router`. It also includes an asynchronous operation (`doSomethingAsync`) which has a 50% chance of failing (simulating a real-world scenario). If the asynchronous operation fails after navigation has started, there's no way to catch and handle the error properly within the component.

## Solution

The `bugSolution.js` file presents a solution using async/await and a try...catch block to reliably catch any errors thrown during the asynchronous operation, irrespective of navigation timing.