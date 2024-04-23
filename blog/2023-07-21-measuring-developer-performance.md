---
slug: measuring-developer-performance.html
title: "Measuring Developer Performance"
subtitle: "Using Jira data to gauge developer Sprint contributions."
date: 2023-07-20
image: "../img/sprint_velocity_1.png"
authors: [royrusso]
tags: [software, agile, nitroiq]
---

import Image1 from '../img/sprint_velocity_2.png';
import Image2 from '../img/sprint_velocity_3.png';
import Image3 from '../img/sprint_velocity_4.png';

Measuring Sprint Velocity and Burndown (or Burnup) is common practice in agile shops. It allows leaders to better resource and capacity plan, because knowing what your teams' past performance metrics, is a decent gauge of future performance in upcoming sprints.

<!-- truncate -->

However, one thing I have always wanted to measure is individual team member performance, velocity and burndown, during a sprint. Atlassian Jira doesn't make this easy, but in an upcoming product we will be releasing, we have added exactly this...

<p align="center">
<img src={Image1} className="doc_image"/>
</p>

... and of course, the accompanying per-developer Burndown chart per Sprint...

<p align="center">
<img src={Image2} className="doc_image"/>
</p>

Having coded for decades in, and a lot of that in Agil environments, I specially enjoy seeing this burndown chart, as it exposes what is all too common in developer ranks, and that's _crashing the plane_.

<b>Crashing the Plane is visible as a steep burndown of issues and points near the end of the sprint.</b> This is generally not good behavior in Agile, as it impacts future sprint planning, QA, and Product Management teams that rely on a steady (smooth?) progress of issue completion.

<p align="center">
<img src={Image3} className="doc_image"/>
</p>

Lastly, we've added a handy table that displays all of the issues an assignee has worked on in the selected sprints, along with the churn count for each issue.
