---
title: "Research"
permalink: /research/
classes: research-page
---

## Research Interests

1. **Efficient Reasoning**

   - **Parameter Subspace**: When utilizing RL-involved algorithms on training for reasoning (RLVR), it has been found that most of the changes happen within the off-principal components, i.e. the components that do not correspond to the high eigenvalues, where recent research even suggest that a single rank component update may be sufficient for RLVR training. However, the reason behind this is not explored enough. I aim to explore more about this phenomenon, then utilize these results to figure out a method that enables efficient training.
   - **Optimal Objectives**: Algorithms such as DAPO have shown that carefully redesigning the RL objective, through techniques like decoupled clipping, dynamic sampling, and token-level loss aggregation, can substantially improve both training stability and final reasoning performance. Yet these design choices are often introduced as empirical fixes rather than derived from first principles. I aim to study what an optimal training objective for reasoning should look like, identifying which components genuinely drive improvement and which are merely incidental, so that future objectives can be designed in a principled rather than ad-hoc manner.

2. **Understanding Reasoning**

   - **Dataset**: Among the three key components of AI (Architecture, Algorithm, Data), the latter part of picking which dataset for what type of reasoning has not been explored enough. Long-context or long reasoning is known to help enhance reasoning qualities, but to which extent, and details about this is not explored enough. I wish to systematically characterize how dataset properties such as length, difficulty distribution, domain diversity, and the structure of reasoning traces shape the type and quality of reasoning a model acquires, then provide concrete guidelines on which data to use for which reasoning capabilities.
   - **Exploration**: Exploration is a huge topic in Reinforcement Learning, but much of the research has focused on traditional RL settings rather than the unique landscape of LLM reasoning, where the action space is the vocabulary itself and rewards are sparse and verifiable. I am interested in how exploration manifests in RLVR. For instance, how a model discovers genuinely novel reasoning paths, and whether premature convergence such as entropy collapse limits a model's reasoning ceiling. I also wish to develop methods that encourage productive exploration without sacrificing training efficiency.

## Publications

<ul class="publication-list">
  <li>
    <span class="publication-number">[P1]</span>
    <span class="publication-entry">
      <span class="publication-authors">Junehong Baek, <strong>Jaewoo Shin</strong>, Jy-yong Sohn, Albert No.</span>
      <span class="publication-title">Latent Space based Token Selection for LLM Unlearning.</span>
      <span class="publication-meta">Working Paper.</span>
    </span>
  </li>
  <li>
    <span class="publication-number">[P2]</span>
    <span class="publication-entry">
      <span class="publication-authors"><strong>Jaewoo Shin</strong>, Hyeonggene Kim, Jy-yong Sohn, Dongjun Han.</span>
      <span class="publication-title">Spectrally-Decomposed Projections for RLVR Training.</span>
      <span class="publication-meta">Working Paper.</span>
    </span>
  </li>
</ul>
