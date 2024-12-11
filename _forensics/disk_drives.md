---
layout: notes_desc
title: "Disk Drives"
description: "It's the most important topic we gonna discuss and it is complex tooo....."
image: /assets/notes_image/forensics/disk/1.png
signature: Investigate. Decode. Educate
---
<img class="zoomable" src="/assets/notes_image/forensics/disk/2.png" alt="image2">

<img class="zoomable" src="/assets/notes_image/forensics/disk/3.png" alt="image3">

Each layer of data requires a different type of analysis. Especially, disks and file systems analysis is divided into four layers:

→ Physical media

→ Volume

→ File System

→ Application and OS

<img class="zoomable" src="/assets/notes_image/forensics/disk/4.png" alt="image4">

<img class="zoomable" src="/assets/notes_image/forensics/disk/5.png" alt="image5">

### <ins>Hard Disk Drives:</ins>
Hard disk drive is a storage unit that uses magnetic storage to store and retrieve digital data.

***How Magnetic storage store data?***

*The hard drive contains spinning platter with a thin magnetic coating. A “head” moves over the platter, writing 0’sa and 1’s as tiny areas of magnetic North or South on the platter. To read the data back, the head goes to the same spot, notices the North and South spots flying by, and so deduces the stored 0’s and 1’s.*

**<ins>HDD Characteristics:</ins>**

There are many components ****of HDD but the mainly interested **four** are:

→ **Platter**
    - Similar to plate, it is the one that store the digital data.

→ **Spindle**
    - Used to mount (Carry) platters and spin them.

→ **Head**
    - This part is concerned with reading from or writing on the platter.

→ **IDE Connector**
    - It is the interface connector used to connect the HDD to the main board (its type is IDE)

<img class="zoomable" src="/assets/notes_image/forensics/disk/6.png" alt="image6">

Other characteristics :

→ **Actuator**: A mechanical arm that moves the ***head*** for reading and writing in an axis direction.

→ **Power Connector:**  Connecting power source to the drive.

→ **Jumper Block:** Small conductors used to configure the hard disk drive priority connected to the same cable.

Modern HDD are constructed from a number of Platters, not just a one. And all the platters are placed in single spindle.

<img class="zoomable" src="/assets/notes_image/forensics/disk/7.png" alt="image7">

**Cylinder:** From figure, if we select a track number 1 on first platter, and track number 1 on second platter, and so on, this will form what we call a **cylinder.** So, the cylinder is the respective circular tracks aligned (to get into line) through the stack of platters.

*That means, the number of cylinders is equal to the number of tracks available on the disks.*

Each platter has **two heads,** one from each side.

<img class="zoomable" src="/assets/notes_image/forensics/disk/8.png" alt="image8">

Each platter is divided into the number of tracks, just like a circular path. And each tracks is divided into number of **sectors**. As in fig:

<img class="zoomable" src="/assets/notes_image/forensics/disk/9.png" alt="image9">

[*Note: On an IBM-PC Compatible, there is 63 sectors , as six bits used for no of sectors]*

Most HDD have a logical sector size of **512-bytes** except a new industry type of disks with **Advanced Format (AF)**  which are moving to **4096-bytes** sector size.

[Note: The sector size is the smallest amount of data read or written by HDDs]

In order to calculate the total disk capacity, we need to have the info of:

1. Number of Cylinders (which is equal to number of Tracks)
2. Number of Heads
3. Number of Sectors per Tracks
4. Sector Size

```powershell
Disk Capacity = (Cylinders) x (Heads) x (Sectors) x (Sector Size)
```

To access a specific sector, there are two physical addressing methods:

→  Cylinder, Head, Sector (CHS)

→  Logical Block Addressing (LBA)


<br>
**<ins>Using CHS Addressing:</ins>**

This is the old method, where the addressing is based on the physical geometry of the Cylinder, Head and Sector (CHS). Example: If you want to access the first sector on the disk, the address will be (0,0,1) , second will be (0,0,2) and so on. It means:

First Cylinder → 0

First Head → 0

First Sector → 1

[*Note: For CHS addressing method, the **sector** always starts with 1 not 0]*

Another important aspect: The head number is used to specify the side of the plate that you want to access. Example: If we say head 1, it means it will be accessing the bottom side of the plate. That means head 0 → top side of the plate. (In above example, head is top side as head = 0)

In CHS, three bytes are used for addressing and are divided as:

1. Cylinders (C) uses 10 bits
2. Heads (H) uses 8 bits
3. Sectors (S) uses 6 bits

<img class="zoomable" src="/assets/notes_image/forensics/disk/10.png" alt="image10">

[ From above fig: understand, Sector always starts with 1.]

<img class="zoomable" src="/assets/notes_image/forensics/disk/11.png" alt="image11">

**<ins>Using LBA Addressing:</ins>**

LBA Addressing uses a single number to address each sector. It means: the CHS address (0,0,1) corresponds to LBA address 0, and CHS address (0,0,2) corresponds to LBA address 2, and so on.

[Due to backward limitation on LBA, some file systems still need to be able to address sectors based on CHS, it means a conversion equation is needed]

The CHS scheme exposed the physical details of the storage device to the software of operating system. In CHS, blocks were addressed by means of the tuple which defined the cylinder, head and sector at which they appeared on the hard disk. CHS did not map well to devices other than hard disks (such as tapes and networked storage) and was generally not used for them. CHS was used in early MFM (Modified Frequency Modulation [a run-length limited (RLL) line code used to encode data on most floppy disks and most HDDs]) and RLL drives and bot it and its successor, extended cylinder-head-sector (ECHS), were used in the first ATA drives. 

To convert from CHS to LBA address, use the following equation:

```powershell
LBA Address = (((Cylinder x HeadsPerCylinder) + Head) x SectorsPerTrack) + Sector - 1
```

<img class="zoomable" src="/assets/notes_image/forensics/disk/12.png" alt="image12">

Modern HDD uses LBA addressing method (due to lack of limitations like CHS) and is not related to the geometry of the HDD. Every block will have a unique number, and that number will be referenced whenever that block is needed either for reading or writing.
