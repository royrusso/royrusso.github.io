---
layout: post
title: "Aligning Data Science and Software Development"
subtitle: 6 Lessons Learned (the Hard Way)
description: A Roadmap to Aligning DataScience and Engineering within a software product company. 
date: 2019-12-15
background: "/img/tower-of-babel.jpg"
author: "Roy Russo"
categories: [DataScience]
tags: [datascience, startups, software]
image:
    path: /img/tower-of-babel.jpg
---

I learned a lot while building and leading the engineering team at Predikto. Aligning and integrating data science in to the software development process was something relatively new in the industry (because, "AI"). 
This is something that I believe the team got "right" after a lot of hard work and wrong turns over the years. I think we finally got our method of operating and aligning right when it lead to a great product and a even greater [exit](https://www.marketwatch.com/press-release/united-technologies-acquires-predikto-inc-2018-08-21). 

The good news is that other people can benefit from my experiences (good and bad), the lessons learned, and now this **highly opinionated** article. ;-) 

Here are 6 important lessons I learned when aligning data science with software development: 
  
## 1. Define Data Science goals and purpose 
  
> "The man without a purpose is like a ship without a rudder" - _Thomas Carlyle_

A data science team formed to work on skunk works projects and provide "insights" is a cost center barge floating in the ocean with no rudder, and likely a horrible distraction.

#### What Doesn't Work:

Lack of defined and stated goals, will lead to *failure*. Where *failure* is defined as providing little to no value to the core offering of the company.  

#### What Does Work:

* Set the goals of the data science team *up front* - where *"up front"* is defined as "before you hire bodies". *Bonus*: This helps you define how many bodies. ;-)
* Initial goals should be defined as simply as: **The first beach-head for data science is to work with product management and software development on features that enhance the current product.**

In a sense, the goals of a data science team are no different than any other team within a startup - *stay focused*. 

## 2. Data Science Reporting Structure

I'll preface this section by stating an assumption that Engineering and Product are peers, ie. the CTO is **not** reporting to the Chief Product Officer, or vice versa.   

#### What Doesn't Work:

This may be controversial for some, but I have seen mixed success having data science report in to product management.  
These are two entirely different disciplines with little-to-nothing in common in how they work day-to-day or even how they communicate. 

#### What Does Work:

Having Data Science act as a sister-org to Engineering. That is, they would both be reporting up to the office of the CTO as peers. Data  
Science should normally be allowed to grow in to a research and innovation arm for the company, and being tethered to engineering facilitates this. 

## 3. Data Science and the SDLC

So now you have data science and engineering as peers. How should data science take part in the SDLC?

#### What Doesn't Work:

Isolating data science to work on skunk works projects without a direct voice that you would offer to a customer. 

#### What Does Work:

Data science acts as a stakeholder for data science related features and also aids QA and product management in blessing work as "done". Treating data science as a customer at times will ensure that they have a voice in the product and innovative features make in to the offering.

## 4. The Data Science Liaison

I was fortunate at Predikto to have a great developer within the engineering team that understood how to speak "data science" and could translate their feature requests in to actual code.

#### What Doesn't Work:

Blocking communication between engineering and data science or losing data science feature requests in translation will be detrimental to the product, simply because your data scientists and engineers speak completely different languages and work in a completely different mode. 

#### What Does Work:

Find a developer that understands how to implement what the data scientists are asking for and appoint him as a liaison. Part of his job function is to sit in on the data science
morning stand-up and planning meetings. This solves two potential issues:

* The liaison has awareness in to what's coming next and can funnel that information to the developers.
* The liaison helps set expectations within data science on what is possible to implement within the current platform.

## 5. Data Science and Agile

Data science work is lumpy, with periods of short and quick iterations and other periods of long and deep research. So should data science use Kanban, Scrum, or ... ?

#### What Doesn't Work:

Data science without a work methodology or timelines.

#### What Does Work:

Here are some things I've found helpful:

* Data science on Kanban; Setting artificial time-blocks ("2-week sprints") simply doesn't work well because of the dynamic nature of their work.
* Data science should have its own and separate-from-engineering Kanban board in your tracking tool of choice.
* Work should be planned and (hopefully) broken-out in to small bite-sized tasks.
* Work effort should be estimated, just like engineering tasks, and not be open-ended and never-ending.

## 6. Data Science Needs Tooling

Efficient poking and prodding of data requires custom scripts and lots of local work.

#### What Doesn't Work:

Expecting data science to strictly with cloud-based software managed by your devops team.  

#### What Does Work:

Data science requires loading/ETLing data, understanding/analyzing data, building models, and reading output. Cloud-hosted offerings can get you part of the way there, depending on the volume of data and customization 
required to make sense of it. Some of the lessons learned at Predikto, that I think really helped the data science team may seem foreign to some, but I feel they let the team excel at delivering: 

* Data science maintained its own code repos and shared libraries that were hosted on a private PyPi server.
* Tooling libraries were used and maintained by members of the data science team that all knew how to code in Python. 
* Sometimes those data science libraries would even act as prototypes for features that could be added to the platform by engineering. 







