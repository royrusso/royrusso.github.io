---
slug: jira-tracking-status-changes.html
title: "Status Changes as a Measure of Efficiency"
date: 2023-06-07
authors: [royrusso]
tags: [startups, software, management, agile, nitroiq]
---

import Image1 from '../img/jira_status_changes_1.png';
import Image2 from '../img/jira_status_changes_2.png';

More fun with JIRA data. ;-)

Can the number of status changes in a given Jira Issue be an indicator of missing or confusing requirements, bad resource management, or other team deficiencies that can affect sprint performance?

<!-- truncate -->

A few friends and I have been diving deep into Jira data extraction and analysis for the purpose of deciphering why some teams and sprints "behave" better than others, and are there early-warning indicators that can alert engineering managers to future sprints and epics not hitting roadmap targets. The data lies in Jira... it's just not easy to get to or analyze.

<p align="center">
<img src={Image1} className="doc_image"/>
</p>

The chart (nivo, if you're interested) above is one of the many we've come up with to help IT and Product Managers decipher which issues in a given sprint have an outsized number of Status Changes - therefore prompting a closer look.

<p align="center">
<img src={Image2} className="doc_image"/>
</p>

Taking a higher vantage point is necessary here, so the table above has been added to help team leads find outliers. That is, which sprints have had an outsized (1 std deviation from mean) number of status changes.

These are just a sample of the tooling a few colleagues and I have been building out lately to help CTOs and Product Managers extract insights from their Jira data.
