---
title: "Study Notes"
permalink: /study/
classes: study-index-page
---

This page collects study notes, paper summaries, and technical learning records.

{% assign study_posts = site.categories.study %}
{% if study_posts.size > 0 %}
{% for post in study_posts %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  {{ post.date | date: "%Y-%m-%d" }} · {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
{% endfor %}
{% else %}
No study notes yet.
{% endif %}

These exported notes are grouped by the folder names under `study_files/`.

### PML Advanced 스터디

- [9장 Message Passing Algorithms]({{ "/study-files/pml-advanced/message-passing-algorithms/" | relative_url }})
- [21장 Variational Autoencoders]({{ "/study-files/pml-advanced/variational-autoencoders/" | relative_url }})
- [29장 State Space Models]({{ "/study-files/pml-advanced/state-space-models/" | relative_url }})

### 수리통계학 2

- [5장 Consistency and Limiting Distributions]({{ "/study-files/math-stat/consistency-limiting-distributions/" | relative_url }})
- [6장 Maximum Likelihood Methods (1)]({{ "/study-files/math-stat/maximum-likelihood-methods-1/" | relative_url }})
- [6장 Maximum Likelihood Methods (2)]({{ "/study-files/math-stat/maximum-likelihood-methods-2/" | relative_url }})
- [6장 Maximum Likelihood Methods (3)]({{ "/study-files/math-stat/maximum-likelihood-methods-3/" | relative_url }})
- [7장 Sufficiency (1)]({{ "/study-files/math-stat/sufficiency-1/" | relative_url }})
- [7장 Sufficiency (2)]({{ "/study-files/math-stat/sufficiency-2/" | relative_url }})
- [8장 Optimal Tests of Hypotheses (1)]({{ "/study-files/math-stat/optimal-tests-hypotheses-1/" | relative_url }})
- [8장 Optimal Tests of Hypotheses (2)]({{ "/study-files/math-stat/optimal-tests-hypotheses-2/" | relative_url }})

### 통계전산

- [1장 Introduction to Statistical Computing + Monte-Carlo Simulation]({{ "/study-files/stat-computing/introduction-monte-carlo-simulation/" | relative_url }})
- [2장 Generating from Univariate Random Variables]({{ "/study-files/stat-computing/generating-univariate-random-variables/" | relative_url }})
- [3장 Generating from Multivariate Random Variables]({{ "/study-files/stat-computing/generating-multivariate-random-variables/" | relative_url }})
- [4장 Discrete Event Simulation]({{ "/study-files/stat-computing/discrete-event-simulation/" | relative_url }})
- [5장 Statistical Analysis of Simulated Data]({{ "/study-files/stat-computing/statistical-analysis-simulated-data/" | relative_url }})
- [6장 Variance Reduction Techniques]({{ "/study-files/stat-computing/variance-reduction-techniques/" | relative_url }})
