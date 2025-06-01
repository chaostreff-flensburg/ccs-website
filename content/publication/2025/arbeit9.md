---
layout: Publications.tsx
tags:
  - publication
title: "Arbeit Nr. 9: Development of advanced cloud classification and
segmentation models for solar energy applications using deep
learning and synthetic data augmentation"
excerpt: "Geschrieben von: Raphael Gut"
date: "2025-06-01T15:23:39.000Z"
---

# "Development of advanced cloud classification and segmentation models for solar energy applications using deep learning and synthetic data augmentation"

<table class="table table-striped">
<thead>
<tr>
<th><strong>Titel:</strong></th>
<th>Development of advanced cloud classification and
segmentation models for solar energy applications using deep
learning and synthetic data augmentation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Untertitel:</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Hochschule:</strong></td>
<td>Hochschule Kempten</td>
</tr>
<tr>
<td><strong>Fachbereich:</strong></td>
<td>Computer Science</td>
</tr>
<tr>
<td><strong>Studiengang:</strong></td>
<td>Computer Science</td>
</tr>
<tr>
<td><strong>Geschrieben von:</strong></td>
<td>Raphael Gut</td>
</tr>
</tbody>
</table>

[Vollständige Arbeit als PDF zum Download](/arbeiten/arbeit-9-clouds.pdf)

## Abstract

The transition to clean and renewable energy is one of the most present and defining
challenges of our time. Among all available energy sources, solar power is the most
abundant, yet its availability is highly variable due to fluctuations in solar irradi-
ance. The primary cause of intra-hour fluctuations is cloud cover, which significantly
impacts local irradiance levels. To maintain grid stability, mitigate ramp events in
large-scale photovoltaic sites, and optimize the eﬀiciency of Concentrated Solar Power
(CSP) plants, reliable forecasting systems are essential. Nowcasting systems address
this need by providing intra-hour forecasts, enabling the anticipation of short-term
variations in solar irradiance.

A common approach to Nowcasting involves using ground-based All-Sky Imagers to
capture sky images, detect clouds, and track their movement to predict future solar
irradiance. The accuracy of these predictions largely depends on the quality of cloud
detection, which is typically performed at the pixel level. Modern deep learning-
based methods have emerged as the dominant approach, outperforming traditional
techniques. However, one of the key challenges of these methods is their reliance on
large, high-quality ground truth datasets for training and validation. Since manually
annotating such datasets is labor-intensive and time-consuming, obtaining suﬀicient
labeled data remains a significant challenge.

This thesis aims to enhance existing semantic cloud segmentation models by in-
corporating temporal dependencies between consecutive image sequences captured
by All-Sky Imagers. First, a semi-supervised video segmentation approach was em-
ployed to expand an existing human-annotated ground truth dataset by a factor of
20, resulting in a total of 16.170 images. Four different methods were proposed and
benchmarked against each other, demonstrating the effectiveness of this approach.
Additionally, a new model architecture was developed that integrates motion cues
from consecutive All-Sky Imager pairs alongside the primary image, leveraging cloud
dynamics and transitions to provide richer prior information for the semantic seg-
mentation process to learn better feature representation.

Evaluation on a validation dataset confirms the eﬀicacy of both approaches. In par-
ticular, the semantic cloud segmentation model benefits from the enlarged training
dataset, achieving improvements in accuracy and Intersection over Union (IoU) by
2.6% points and 3.5% points, respectively, compared to the current state-of-the-art
model. Moreover, the motion cue-enriched model significantly enhances the differ-
entiation of cloud classes, improving detection accuracy by up to 3.3% points for
previously challenging cloud types.

