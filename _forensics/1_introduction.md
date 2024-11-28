---
layout: notes_desc
title: "Introduction to Forensics"
description: "This module covers the basics of digital forensics..."
image: /assets/notes_image/forensics/intro/1.png
signature: Investigate. Decode. Educate
---
- The main goal of digital forensics is to answer the big five W’s, regarding any digital incidents.

```
    1. What
    2. Where
    3. When
    4. Who
    5. How
```
<img class="zoomable" src="/assets/notes_image/forensics/intro/2.png" alt="image2">

- Digital Evidence Life Cycle

```
    1. Acquisition
    2. Analysis
    3. Presenation
```
<img class="zoomable" src="/assets/notes_image/forensics/intro/3.png" alt="image3">

### Source of Digital Evidence
**Active Data** <br>
**Archive or Backup Data**<br>
**Hidden Data**

<img class="zoomable" src="/assets/notes_image/forensics/intro/4.png" alt="image4">


## DATA ACQUISITION

<img class="zoomable" src="/assets/notes_image/forensics/intro/5.png" alt="image5">

<b> Order of Volatility</b>
    <img class="zoomable" src="/assets/notes_image/forensics/intro/6.png" alt="image6">


**Storage Formats:**
- One popular tool to image a disc in a raw format is **DD**  tool available for both Linux and Windows(with RawWrite Studio)
- **DD**  allows investigator to image a disk in raw format and split the single file into multiple files.
    
    *Mostly used in linux*:
    <img class="zoomable" src="/assets/notes_image/forensics/intro/7.png" alt="image7">

- (AFF) Advanced Forensics Format :- It is an open image format developed by Basis Technology. Alongside compression, which helps save disk space, and integrity checks most AFF tools allows the investigator to add customary fields. It also allows the investigator to embed metadata within or on a separate file.

- Data Acquisition vs Copy:
        <img class="zoomable" src="/assets/notes_image/forensics/intro/8.png" alt="image8">

    Eg: If disk have 60% capacity and remaining 40% of rubbish (deleted files or random bytes), then imaging will occupy the both used and unused parts. But copying will only mirror the 60% of the memory:

    <img class="zoomable" src="/assets/notes_image/forensics/intro/9.png" alt="image9">


## Acquisition Methods

1. First way is : **from disk drive to image file (Imaging)**
2. Second way is: **from disk drive to disk drive (Cloning)**

*Sparse Acquisition:- It is when the investigator doesn’t mirror all the disk content. This acquisition is mostly used when it might take hours to forensically image or clone the drive.*


## **Live Data Acquisition:**
    
**Collecting the data while the machine is running.**

### Tools

**Write Blockers:-** These tools allow the investigator to perform data acquisition by eliminating the chance of damage or altering the disk contents.
    It works by blocking the hard disk from writing and this is done by filtering the **write** commands and preventing it from being executed.

<img class="zoomable" src="/assets/notes_image/forensics/intro/10.png" alt="image10">

**Bootable Disks**:- Contains  fully functioning, bootable OS. This allows the investigator to launch an OS on suspect’s machine without touching and modifying main disk.

**Non-writable USB:-** Microsoft introduced a USB-write blocking feature (first in Windows XP). It can be activated from Registry and will prevent the write access on the USB devices preserving the evidence integrity. Note: **This is useful when we are creating an image for USB devices.**


<i>This can be created using **regedit**:</i>
```
- Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
- Create a new key StorageDevicePoilcies
- Create new DWORD(32)Value (named: WriteProtect) key value set to 1
```

<img class="zoomable" src="/assets/notes_image/forensics/intro/11.png" alt="image11">

**FTK(Forensic Toolkit) Imager**:- It is the most famous tools in forensics world. This tool allows to acquire various types of storage devices and store them in different formats for analysis.

**Live Response Tools**:-  Live Response collection is a vary handy framework from Bambiraptor, which can collect various and useful information from machine

### Memory Forensics Tools:
**Volatility Framework**:- It is a completely collection of tools, implemented in Python.

## Other Forensic Tools

**Bulk Extractor:-** Computer forensics tool, that scans disk image, file or a directory of files and extracts useful information without parsing the file system or file system structures.

<img class="zoomable" src="/assets/notes_image/forensics/intro/12.png" alt="image12">

