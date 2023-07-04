---
layout: post
title: "Agile Churn"
subtitle: "Measuring and Reducing Agile Churn" 
date: 2023-07-04
background: "/img/churn1.png"
author: "Roy Russo"
categories: [Startups,Management, Agile, NitroIQ]
tags: [startups, software, management, agile, nitroiq]
image:
    path: /img/churn_1.png
---

> Agile Churn: When changes in the list of tasks or scope occur during a Sprint (or iteration). 

*Churn in sprints is inevitable, but should not be a consistenly occuring event.* Stories being added, removed, or story points being adjusted mid-sprint are a fact of life in a dynamic Agile environment, but minimizing disruptions to the team and deliverables should be the goal of every Agile lead. 

Finding individial Sprints with high churn and stories that have churned numerous times, can be difficult to reveal within Jira. This is something I've been working on with a few key engineers to extract from the data locked behind JIRA's doors...

<img class="center" style="width:100%; border: 1px solid #CCCCCC"  src="/img/churn2.gif" title="Issue Churn- NitroIQ" alt="Issue Churn - NitroIQ">

Having deployed our new project to a few key *friendlies*, we have been able to see patterns emerging in their data that point to some correlation with churn...

<img class="center" style="width:100%; border: 1px solid #CCCCCC"  src="/img/churn3.png" title="Churn Causes - NitroIQ" alt="Churn Causes - NitroIQ">

We all know that churn can be caused lots of context-switching among developers, but our initial discoveries playing with live data from prospects, is that there are other correlaries that deserve some attention:

1. Too many points in a Sprint
2. Too many Issues/Stories/Bugs in a Sprint.
3. Stories with high point values.
4. Specific Assignees may have higher churn, and lastly...
5. Specific Creators of Stories may be causing churn with vague acceptance criteria...

<img class="center" style="width:100%; border: 1px solid #CCCCCC"  src="/img/churn4.png" title="Churn By Creator - NitroIQ" alt="Churn By Creator - NitroIQ">

The causes for churn are complicated to uncover, and may vary from sprint to sprint, but if churn has become a pattern, it deserves a closer look, as it not only affects deliverable dates, but team morale and future resourcing. 