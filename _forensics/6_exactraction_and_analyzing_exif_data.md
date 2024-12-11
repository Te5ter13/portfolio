---
layout: notes_desc
title: "Extraction and Analyzing EXIF Data"
description: "What's EXIF? Let's understand it!!!!"
image: /assets/notes_image/forensics/exif/1.png
signature: Investigate. Decode. Educate
---

Firstly <a href="https://exiftool.org/">download</a> the ExifTool by Phil Harvey and also download the pyexiftoolGUI (No longer supported).

Now select the image and place it on the exiftool(-k).exe 

<img class="zoomable" src="/assets/notes_image/forensics/exif/2.png" alt="image2">

Now we will see the output of the image in cmd as:

<img class="zoomable" src="/assets/notes_image/forensics/exif/3.png" alt="image3">

Within the image we can find several tags. To find the appropriate tag, we can view from the website: <a href="https://exiv2.org/tags.html">(https://exiv2.org/tags.html)</a>

<img class="zoomable" src="/assets/notes_image/forensics/exif/4.png" alt="image4">

Jeffrey’s Image Metadata Viewer → Not supporting right now

<img class="zoomable" src="/assets/notes_image/forensics/exif/5.png" alt="image5">

We can explore the extensions supported by the Jeffrey’s Image Metadata viewer from above figure.

Due the unavailability I used the **Metadata++** tool to view the exif data:

<img class="zoomable" src="/assets/notes_image/forensics/exif/6.png" alt="image6">

### Image Document Analysis Using Ghiro

 From the official page of <a href="https://www.getghiro.org/">Ghiro</a>  we came to know that there are several ways to deploy this tool and evaluate the forensic image. I downloaded the OVA file and ran on the virtual machine.
 
 <img class="zoomable" src="/assets/notes_image/forensics/exif/7.png" alt="image7">

Now open up the web page using the same IP and now we can view the website as:

 <img class="zoomable" src="/assets/notes_image/forensics/exif/8.png" alt="image8">

 Enter the default credentails:

 **ghiro:ghiromanager**

 The logged in homepage is:

  <img class="zoomable" src="/assets/notes_image/forensics/exif/9.png" alt="image9">

  Now click on Cases and add a new case with all the description. Again, click at the left of the page to add images and click on Start Upload button. Our file uploaded as:

<img class="zoomable" src="/assets/notes_image/forensics/exif/10.png" alt="image10">

