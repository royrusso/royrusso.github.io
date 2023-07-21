---
layout: post
title: "Measuring Developer Performance"
subtitle: "Using Jira data to gauge developer Sprint contributions." 
date: 2023-07-20
background: "/img/sprint_velocity_1.png"
author: "Roy Russo"
categories: [Agile, NitroIQ]
tags: [software, agile, nitroiq]
image:
    path: /img/sprint_velocity_1.png
---

Measuring Sprint Velocity and Burndown (or Burnup) is common practice in agile shops. It allows leaders to better resource and capacity plan, because knowing what your teams' past performance metrics, is a decent gauge of future performance in upcoming sprints. 

However, one thing I have always wanted to measure is individual team member performance, velocity and burndown, during a sprint. Atlassian Jira doesn't make this easy, but in an upcoming product we will be releasing, we have added exactly this...

[<img class="center" src="/img/sprint_velocity_2.png" width="100%" style="width:100%; border: 1px solid #CCCCCC"/>](/img/sprint_velocity_2.png){:target="_blank"}

... and of course, the accompanying per-developer Burndown chart per Sprint...

[<img class="center" src="/img/sprint_velocity_3.png" width="100%" style="width:100%; border: 1px solid #CCCCCC"/>](/img/sprint_velocity_3.png){:target="_blank"}

Having coded for decades in, and a lot of that in Agil environments, I specially enjoy seeing this burndown chart, as it exposes what is all too common in developer ranks, and that's *crashing the plane*. 

<b>Crashing the Plane is visible as a steep burndown of issues and points near the end of the sprint.</b> This is generally not good behavior in Agile, as it impacts future sprint planning, QA, and Product Management teams that rely on a steady (smooth?) progress of issue completion.

[<img class="center" src="/img/sprint_velocity_4.png" width="100%" style="width:100%; border: 1px solid #CCCCCC"/>](/img/sprint_velocity_4.png){:target="_blank"}

Lastly, we've added a handy table that displays all of the issues an assignee has worked on in the selected sprints, along with the churn count for each issue. I've blogged about [churn count](jira-tracking-issue-churn.html) before, and being able to track high churn counts to specific Assigneed or Creators in Jira is an added benefit.
