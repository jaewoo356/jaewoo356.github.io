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

## Imported Notes

These are existing exported notes already in this repository.

- [9장 Message Passing Algorithms]({{ "/PML Advanced 스터디/9장 Message Passing Algorithms/9장 Message Passing Algorithms 2291c57bb8b480b3b605fee5f34af7b4.html" | relative_url }})
- [21장 Variational Autoencoders]({{ "/PML Advanced 스터디/21장 Variational Autoencoders/21장 Variational Autoencoders 2401c57bb8b4805b98bdc19cd69decf5.html" | relative_url }})
- [29장 State Space Models]({{ "/PML Advanced 스터디/29장 State Space Models/29장 State Space Models 24e1c57bb8b480bab755e0e4b1fa4720.html" | relative_url }})

## Add a New Note

Create a new Markdown file in `_posts` named like this:

```text
YYYY-MM-DD-short-title.md
```

Use this header:

```markdown
---
title: "Your Note Title"
date: YYYY-MM-DD
categories: study
tags:
  - LLM
  - Paper
---
```
