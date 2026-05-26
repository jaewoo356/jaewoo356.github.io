---
title: "Study Notes"
permalink: /study/
---

This page collects study notes, paper summaries, and technical learning records.

## Recent Notes

{% assign study_posts = site.categories.study %}
{% if study_posts.size > 0 %}
{% for post in study_posts %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  {{ post.date | date: "%Y-%m-%d" }} · {{ post.excerpt | markdownify | strip_html | truncate: 160 }}
{% endfor %}
{% else %}
No study notes yet.
{% endif %}

## Study Files

These exported notes are grouped by the folder names under `study_files/`.

### PML Advanced 스터디

- [9장 Message Passing Algorithms]({{ "/study_files/PML Advanced 스터디/9장 Message Passing Algorithms/9장 Message Passing Algorithms 2291c57bb8b480b3b605fee5f34af7b4.html" | relative_url }})
- [21장 Variational Autoencoders]({{ "/study_files/PML Advanced 스터디/21장 Variational Autoencoders/21장 Variational Autoencoders 2401c57bb8b4805b98bdc19cd69decf5.html" | relative_url }})
- [29장 State Space Models]({{ "/study_files/PML Advanced 스터디/29장 State Space Models/29장 State Space Models 24e1c57bb8b480bab755e0e4b1fa4720.html" | relative_url }})

### 수리통계학 2

- [5장 Consistency and Limiting Distributions]({{ "/study_files/수리통계학 2/5장 Consistency and Limiting Distributions/5장 Consistency and Limiting Distributions cd178ac5d0a647e599b4138f2733d2df.html" | relative_url }})
- [6장 Maximum Likelihood Methods (1)]({{ "/study_files/수리통계학 2/6장 Maximum Likelihood Methods (1)/6장 Maximum Likelihood Methods (1) 47a3aa7ab42d43faaaac0aba8a480be7.html" | relative_url }})
- [6장 Maximum Likelihood Methods (2)]({{ "/study_files/수리통계학 2/6장 Maximum Likelihood Methods (2)/6장 Maximum Likelihood Methods (2) 2796d6b7b9674aa6923405fb999ef992.html" | relative_url }})
- [6장 Maximum Likelihood Methods (3)]({{ "/study_files/수리통계학 2/6장 Maximum Likelihood Methods (3)/6장 Maximum Likelihood Methods (3) 867efd8cad8442968f1db12304de925f.html" | relative_url }})
- [7장 Sufficiency (1)]({{ "/study_files/수리통계학 2/7장 Sufficiency (1)/7장 Sufficiency (1) e8525c0cfa05492892497cb6bbc5d0cc.html" | relative_url }})
- [7장 Sufficiency (2)]({{ "/study_files/수리통계학 2/7장 Sufficiency (2)/7장 Sufficiency (2) d942c892c49145dcb3832b2872a9453e.html" | relative_url }})
- [8장 Optimal Tests of Hypotheses (1)]({{ "/study_files/수리통계학 2/8장 Optimal Tests of Hypotheses (1)/8장 Optimal Tests of Hypotheses (1) c707376ede9f4b74917f80b6e37cbef0.html" | relative_url }})
- [8장 Optimal Tests of Hypotheses (2)]({{ "/study_files/수리통계학 2/8장 Optimal Tests of Hypotheses (2)/8장 Optimal Tests of Hypotheses (2) d88ec38af4ce4eddba83a379d7f135c3.html" | relative_url }})

### 통계전산

- [1장 Introduction to Statistical Computing + Monte-Carlo Simulation]({{ "/study_files/통계전산/1장 Introduction to Statistical Computing + Monte-Carlo Simulation/1장 Introduction to Statistical Computing + Monte-C 21d1c57bb8b480538663ff1616fd751d.html" | relative_url }})
- [2장 Generating from Univariate Random Variables]({{ "/study_files/통계전산/2장 Generating from Univariate Random Variables/2장 Generating from Univariate Random Variables 21d1c57bb8b480b1b433d36fd1715169.html" | relative_url }})
- [3장 Generating from Multivariate Random Variables]({{ "/study_files/통계전산/3장 Generating from Multivariate Random Variables/3장 Generating from Multivariate Random Variables 21d1c57bb8b480ddb44ce0964aafe72c.html" | relative_url }})
- [4장 Discrete Event Simulation]({{ "/study_files/통계전산/4장 Discrete Event Simulation/4장 Discrete Event Simulation 21d1c57bb8b48066b366db9e82ad5339.html" | relative_url }})
- [5장 Statistical Analysis of Simulated Data]({{ "/study_files/통계전산/5장 Statistical Analysis of Simulated Data/5장 Statistical Analysis of Simulated Data 21d1c57bb8b480e6aa2cfbb1eb6141f9.html" | relative_url }})
- [6장 Variance Reduction Techniques]({{ "/study_files/통계전산/6장 Variance Reduction Techniques/6장 Variance Reduction Techniques 21d1c57bb8b4806fb2efd7f5c815b0c3.html" | relative_url }})
