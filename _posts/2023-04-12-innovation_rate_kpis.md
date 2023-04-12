---
layout: post
title: "Calculating Innovation Rate KPIs"
subtitle: "Balancing forward progress and maintenance in software."
description: A Roadmap to Aligning DataScience and Engineering within a software product company. 
date: 2023-04-10
background: "/img/matrix.jpg"
author: "Roy Russo"
categories: [Startups,Management]
tags: [startups, software, management]
image:
    path: /img/matrix.jpg
---

I've long run my teams using metrics calculated mostly using JIRA JQL and spreadsheet gymnastics. One of the most practical measurements of forward progress I've come to rely on is what we call "Innovation Rate", which is seeking to describe how much time is my product/engineering team spending on New Features compared to maintenance tasks or bugs. 

It's important to note, and I cover why later, that I used this as an internal metric and do not use it as a goal to drive behavior. I'm mainly interested in using it to answer the following:

- Do we need to hire more QA resources?
- Do we need a dedicated bug-squashing team?
- Is the make-up of the engineering team, the correct mix of architects, developers, seniority, for the work at hand?
- Do we need to open up deeper conversations with product over the mix of work coming from the business units?

<img class="center" style="border: 1px solid #CCCCCC"  src="/img/innovation_rate_ss.png" title="Innovation Rate in NitroIQ" alt="Innovation Rate in NitroIQ">


### Calculating Innovation Rate

Calculating the rate of new features vs. other can be tricky in JIRA. The calculations are not built in, and will require extracting data to a spreasheet for some simple math to be applied. 

#### How-to 

To make this easier, I recommend you label (tag) stories in JIRA with a `feature` flag. Bugs and Tasks are already an Issue Type. How you maintain your JIRA instance is up to you, and I would not recommend doing anything special for this calculation, because out-of-the-box-JIRA already has the distinctions between stories/tasks and bugs built-in. 

So the calculations are pretty simple once the data is downloaded:

- Innovation Rate: % of issue count devoted to Features vs Other
- Innovation Rate: % of issue count devoted to Features vs Other bugs, etc… by sprint
- Number of features and number of bugs completed per sprint

**Trends matter:** I typically create a worksheet that tracks the number of stories/features vs. other over time (or sprint, for you scrum folks). Arguably, the trend matters more to me as a manager than individual sprint rates for forward-looking capacity planning. 

#### Don't Forget: Goodhart's Law

> "When a measure becomes a target, it ceases to be a good measure".

The challenge with any metric is ["Goodhart's law"](https://en.wikipedia.org/wiki/Goodhart%27s_law). That is, this metric like any other can be gamed, when **it is used as a goal**. My own advice is to use this internal metric to gauge what your teams are mostly spending their time on (do we need more QA resources? Do we need a bug-squashing-dedicated team?), but not attach this metric to ICs as a goal.  

The warning here is that relying on this metric as a goal that teams are incentivized with may lead to feature-work over maintenance and repair work... which inevitably leads to brittle software systems and subsequent reduction in morale and increased employee turnover. 