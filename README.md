# Yoordi Code-Challenge

Welcome to the Yoordi Fullstack Developer Code Challenge. In this repository you find all you need to solve the Code Challenge.

## Install and run

1. Clone the repository
1. `run npm install`
1. `run npm start` (Frontend)
1. `run npm start:server` (Backend server)
1. `run npm dev:server` (Backend compiler)

`run npm test` for Jest tests.

## Rules

We assume that you spend **ONLY** 1 hour for this challenge. If you don`t complete every task it is absolutly fine. We want to assess your skill-level to be comparable to other applicants.

**Don`t use new Frameworks or Libs.**

Npm installation and solving code dependencies do not count to the time and should be solved first.

After you installed everything you are ready.

Make an inital commit and make a commit every 10 Minutes.

Please zip after **1 hour** the whole folder (including .git and **without node_modules**) and send it to joerg@yoordi.com

# Challenges

Please create a order display for the restaurant staff. The guests order via Yoordi and the order display receives the orders. There the restaurant staff can work on the incoming orders and tick the done orders off.

## Frontend

-   Create a view which shows the orders inclusive cart.
    -   The view should be responsive and usable on a smartphone.
    -   The orders should be sortable by date.
    -   The orders should show the total price of the order.
-   Every order should be markable as done by the user.
    -   A button which marks the order as done.
    -   All done orders should be shown in a new tab.
-   Write at least 2 tests
-   Fix all //@ts-ignores

## Backend

-   Every order should be markable as done.
-   Only new orders should be fetchable by frontend.
-   If 2 devices are open and 1 device marks an order as done the change should be synched to all devices.
-   Write at last 2 Tests
-   Fix All //@ts-ignores
