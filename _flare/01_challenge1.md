---
layout: notes_desc
title: Challenge-1
collection: flare
description: "What has been decoded????"
image: /assets/Flare-on-2014/Challenge1/image1.png
signature: Investigate. Decode. Educate
---

- Looking first at the sample:

    <img class="zoomable" src="\assets\Flare-on-2014\Challenge1\image2.png" alt="image2">

### First view of the challenge:


<img class="zoomable" src="\assets\Flare-on-2014\Challenge1\image3.png" alt="image3">


- Clicked on Decode, and we get:

<img class="zoomable" src="\assets\Flare-on-2014\Challenge1\image4.png" alt="image4">

- As per the info given in the sample, we can use dnspy tool to look into the C++ code. Let’s look into the sample.

<img class="zoomable" src="\assets\Flare-on-2014\Challenge1\image5.png" alt="image5">

- I set the breakpoint for the **btnDecode_Click** function. Doing so, it will i can view the text before it is being  decoded. And I got something when i ran the code as:

<img class="zoomable" src="\assets\Flare-on-2014\Challenge1\image6.png" alt="image6">

Multiple text are generated, and the first text is the solution.  The other text2 and text3 are further decoded text which are actually generated after the loop.

**Flag** : <u>3rmahg3rd.b0b.d0ge@flare-on.com</u>