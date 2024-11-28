---
layout: notes_desc
title: "FTK-Imager"
description: "Let's properly capture the image before analyzing it"
image: /assets/notes_image/forensics/ftk/1.png
signature: Investigate. Decode. Educate
---

## Creating a Forensic Image Using FTK Imager

<img class="zoomable" src="/assets/notes_image/forensics/ftk/2.png" alt="image2">


Let’s first view the volume details within each disks from **Computer Management > Disk Management**

Now to create a disk image using FTK Imager, goto **File > Disk Manage,** further select the **Source** accordingly.

<img class="zoomable" src="/assets/notes_image/forensics/ftk/3.png" alt="image3">

**Creating Forensics Image for specific directory:**

Choose **Disk Image > Contents of a Folder > Select Image Source > Image Destination**
(When contents of Folder is selected as source type, it includes only **Logical Files)**


<img class="zoomable" src="/assets/notes_image/forensics/ftk/4.png" alt="image4">

(Note: The AD Encryption is used to **Protect Sensitive Data)**

Further Password prompt dialog box appears, and configure it.
<img class="zoomable" src="/assets/notes_image/forensics/ftk/5.png" alt="image5">

Our image is created successfully
<img class="zoomable" src="/assets/notes_image/forensics/ftk/6.png" alt="image6">


To view our image:

<img class="zoomable" src="/assets/notes_image/forensics/ftk/7.png" alt="image7">


### Mounting a Forensics Image using other tools:

- Arsenal Image Mounter:

    <img class="zoomable" src="/assets/notes_image/forensics/ftk/8.png" alt="image8">

- OSFMount 
    <img class="zoomable" src="/assets/notes_image/forensics/ftk/9.png" alt="image9">


### Calculating Files Hashes Using HashCalc
<img class="zoomable" src="/assets/notes_image/forensics/ftk/10.png" alt="image10">

**Now select any file and drag it to the hashcalc and it will generate required hashes**