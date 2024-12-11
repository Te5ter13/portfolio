---
layout: notes_desc
title: "Lab 4: Extracting Metadata from Documents"
description: "Metadata are very important. Do you know them???"
image: /assets/notes_image/forensics/metadata/1.png
signature: Investigate. Decode. Educate
--- 

## Scenario:

Our suspect seems very careful with leaving traces behind, especially when it comes to tracking him down and identifying locations visited. In this lab, we will use the evidence found on his USB, which we found recently in one of the motels he was staying in. We will focus this time on extracting and analyzing EXIF data instead of file headers like we did in previous labs. We will also see how useful EXIF data is when analyzing files and especially photos. Analyzing EXIF data is extremely important especially in our case since we want to track down our suspect. EXIF data analysis is not useful just for tracking, but if you have a child abuse/pornography case or any other case that involves digital photos.

## Tasks:
### Task 1: Discover File Types using Exiftool:
In this task, you are required to do a preliminary analysis of the files we found on the suspect's USB drive [you can find the suspect's files at C:\DFP\Labs\Module3\Lab4]. We want to discover the file type for each of the files you found. Use exiftool (regardless of platform) to accomplish the task.

### Solution:
We have a list of files and need to explore the type of file within the given sample.
**→ 2D3Fa2a**
We now here explore the file with exiftool(-k).exe. Just open the file with this tool and command line info will prompt out:

<img class="zoomable" src="/assets/notes_image/forensics/metadata/2.png" alt="image2">

**PDF file.**
Similarly, we can explore other files too.

**→ AW3DXW**

- **JPEG** file.

**→ MX#234**

- **PPT** file

**→ XFaWxVa**

- **PDF** file

**→ ZC2f2d2**

- **XLSX** file


If we have a linux OS, it can directly done within a cmd using “exiftool” as:

```bash
find -type f -print -exec exiftool -filetype {} \;
```

<img class="zoomable" src="/assets/notes_image/forensics/metadata/3.png" alt="image3">

### Task 2: Analyzing File's EXIF Data
Our next step in analyzing the evidence will be to extract EXIF data 
out of the files found and identify mainly each of the properties below:

1. Tool Version
2. File Size
3. File Creation Date
4. File Type
5. Producer
6. Creator and Author
7. Product

Add anything else you believe is necessary.

### Solution:
→ Tool Version:

The details tab for the tool can be viewed to determine its version:
<img class="zoomable" src="/assets/notes_image/forensics/metadata/4.png" alt="image4">

Further, all properties of file size, creation date, file type etc can be extracted using the exiftool.

-  **2D3Fa2a**

    → File Size: 140KB

    → File Creation Date: 2017:08:11 04:45:30-07:00

    → File Type: PDF

    → Producer: Microsoft << Word 2016

    → Creator and Author: Ali Hadi

    → Product: Microsoft@2016


- **AW3DXW**

    → File Size: 859KB

    → File Creation Date: 2009:07:14 05:32:32+00:00

    → File Type: JPEG

    → Creator : Corbis

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/5.png" alt="image5">

    Further there are some of the useful information within the file:


    **→** Thumbnail Offset tag is extremely useful as it could be used to check whether the original
        image was modified or not. So , we can extract it and compare it with the original image.

    **→** XMP Toolkit tag describes the toolkit used which here is Adobe XMP Core.

   **→** Date/Time Digitized tag describes when this image was stored in digital format.

- **MX#234**

    → File Size: 381KB

    → File Creation Date: 2017:08:11 12:34:58+00:00
    
    → File Type: PPT

    → Producer: Microsoft << Word 2016

    Further important information:
    <img class="zoomable" src="/assets/notes_image/forensics/metadata/6.png" alt="image6">

    → The software used to create this file is Microsoft Office PowerPoint

    → It seems the file was modified by the Author him/herself

- **XFaWxVa**

    →  File Size: 140KB

    →  File Creation Date: 2017:08:11 12:32:42+00:00

    →  File Type: PDF

    →  Producer: Microsoft << Word 2016

    →  Product: Microsoft@2016

    Further useful information:

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/7.png" alt="image7">


- **ZC2f2d2**

    → File Size: 9.7 KB

    → File Creation Date: 2017:08:11 12:36:16+00:00

    → File Type: XLSX

    Further info:

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/8.png" alt="image8">

### Task 3: Extracting Photos EXIF Data and Discovering GPS Coordinates

Our next step is to try and track down the locations the suspect has visited and try to discover if there is a connection between each of them (CSI stuff). So, in this task, you are required to analyze EXIF data found in evidence photos [located at C:\DFP\Labs\Module3\Lab4\pics] and answer the following questions:

1. What manufacturer does the camera belong to?
2. What is the camera model?
3. Was the flash used to take the photo or not?
4. If the camera was from a cellular phone, was it the rear or the front camera that was used?
5. What are the GPS coordinates of the camera at the time the photo was taken if any was found?
6. When was the photo taken?
7. What are the photo resolutions and was a thumbnail generated or not?

Add anything else you believe is necessary for the investigation.

### Solution:
First, we need to focus on what tool to be used while analyzing any forensics evidence. Only the proper tool will lead to accurate result. So, to investigate photos EXIF data we will use **ExifReader** tool, which is found in our lab.

<img class="zoomable" src="/assets/notes_image/forensics/metadata/9.png" alt="image9">

We have a lot of pictures to analyze:

<img class="zoomable" src="/assets/notes_image/forensics/metadata/10.png" alt="image10">

- **DSCN0010:**

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/11.png" alt="image11">

    → Manufacturer → NIKON

    → Camera Model → COOLPIX P6000

    → Flash taken to capture photo → No

    → The camera was not from mobile phone

    → GPS Coordinates → GPSLatitude: 43 2802.814 [DMS] GPSLongitude: 11 5306.45599999 [DMS]

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/12.png" alt="image12">

    Not clear?? We can view from exiftool as:
    
    <img class="zoomable" src="/assets/notes_image/forensics/metadata/13.png" alt="image13">

    When we look through a google map:

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/14.png" alt="image14">

    Photo taken at → 2008:10:23 14:27:07 [Can be viewed in GPS info]

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/15.png" alt="image15">

    The resolution of image is → 640x480 and yes thumbnail is generated along with this email.

    Further you can image and analyze the file.

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/16.png" alt="image16">

- **DSCN0012**

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/17.png" alt="image17">

    →  Manufacturer of the camera → NIKON

    →  Camera Model → COOLPIX P6000

    →  Flash light → Not Fired

    →  The image was never clicked from mobile phone

    →  GPS Co-ordinate → 43deg 28’ 1.76”N, 11deg 53’ 7.42”E

    →  Photo taken → 2008:10:23 14:28:17 [Look through GPS information]

    →  The resolution of image → 640x480

- **DSCN0025.jpg** 

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/18.png" alt="image18">

    → Manufacturer of the camera → NIKON

    → Camera Model → COOLPIX P6000

    → Flash light → Not Fired

    → The image is directly photographed using camera without using mobile

    → GPS co-ordinate → 43 deg 28’ 6.11” N, 11 deg 52’ 53.89” E

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/19.png" alt="image19">

    → Photo Taken at → 2008:10:23 14:41:49 and there is a thumbnail embedded within this photo.

    → The resolution of the image → 640x480

- **DSCN0042**

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/20.png" alt="image20">

    → Manufacturer of the camera → NIKON

    → Camera Model → COOLPIX P6000
    → Flash light → Not Fired

    → The image was never clicked from mobile phone

    → GPS Co-ordinate → 43deg 27’ 52.04”N, 11deg 52’ 53.32”E

    → Photo taken → 2008:10:23 14:57:41 [Look through GPS information]

    → The resolution of image → 640x480

- **image02006**

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/21.png" alt="image21">

    The EXIF reader tool throws the error while looking at the jpeg image file. As we know that we can’t totally depend upon only one tool. Let’s explore using exiftool.

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/22.png" alt="image22">

    The image has been created using Adobe Fireworks CS4 {Adobe Fireworks is a discontinued graphics editor, and as of 2021 Adobe has officially discontinued support and development for the software}

    → Photo taken → 2009:08:04 10:35:03

    → The resolution of image → 65x65

    → Creator Tool → Adobe Fireworks CS4

- **iphone_hdr_NO**

    <img class="zoomable" src="/assets/notes_image/forensics/metadata/23.png" alt="image23">

    → Manufacturer of the camera → Apple

    → Camera Model → iPhone 6

    → Software → 8.3

    → Flash light → Not Fired

    → The image was clicked  from iPhone with back camera 4.15

    → GPS Co-ordinate → 40deg 26’ 49.10” N, 3 deg 43’ 29.11”W

    → Photo taken → 2015:04:10 20:12:23.016

    → The resolution of image → 3264x2448

### Task 4: Generating a Data Sheet Report of Extracted Data

When the extraction of the EXIF data and their analysis are done, it is now time to add all this information into a single data sheet that will accompany your final investigation report.

### Solution:

To generate the report for each image we can easily do it using ExifReader Save Button.

<img class="zoomable" src="/assets/notes_image/forensics/metadata/24.png" alt="image24">

Further we can create a file for all the images using exiftool command as:

```bash
exiftool(k).exe -a -u -g1 -w %f.txt *.jpg
```
-a → (- -duplicates) Allow duplicates tags to be extracted

-g → (-groupHeadings) Organize output by tag group

-w → (-textOut) Write output text file for each tag

<img class="zoomable" src="/assets/notes_image/forensics/metadata/25.png" alt="image25">

Using a single command all the text file for the given sample is created.

Further we can make a CSV file which contain all the information about the file, and can be done as:

```bash
exiftool(-k).exe *.jpg -csv > report.csv
```
-csv → Export information in CSV format

<img class="zoomable" src="/assets/notes_image/forensics/metadata/26.png" alt="image26">
