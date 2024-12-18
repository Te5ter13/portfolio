---
layout: notes_desc
title: "Disk Analysis - WinHex"
description: "To understand the disks, we need a tool and WinHex is there for you!!!!!"
image: /assets/notes_image/forensics/disk_analysis/winhex.jpg
signature: Investigate. Decode. Educate
---
WinHex is one of the best tool for the disk analysis which is created by X-Way’s. The dashboard sample:
<img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/2.png" alt="image2">
It seems blank at first, but lets open the disk to analyze from the header using: Tools >> Opendisk tab:

<img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/3.png" alt="image3">

Here, I am using virtual machine and analyze the disk. Press on OK  and now:

<img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/4.png" alt="image4">

This is actual scenario where we analyze the disk.

***The partition seems to be done by MBR as we have confirmed from PowerShell as:***

<img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/5.png" alt="image5">

It can also be identified from Disk Management as:

1. Right click on Disk # 

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/6.png" alt="image6">

2. Select Properties >> Volume option, there we can see the Partition:
    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/7.png" alt="image7">

    Also Partition 1  seems to be the System Reserved or NTF Healthy file. This can be compared from the actual Disk Management option within Computer Management Application.
    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/8.png" alt="image8">

    The sector information is given in Hex form within the table and these info is much more important while analyzing the disks. The sector  within this table is separated by the line.

    Now, let’s select the **Partition 1** and we can see that it redirects automatically to first sector value and when we select **Partition 2** we will redirect to another sector.

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/9.png" alt="image9">

    Let’s select the Start Sectors again and now we will begin our analysis on MBR. We read earlier that the MBR size is 512 bytes, which is a sector and its always end with 55 AA (usually called end of the sector marker)

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/10.png" alt="image10">

    Here we will require the understanding of MBR layout, let’s recall it:

    1. Bootcode → **446 bytes**
    2. Partition 1 → **16 bytes**
    3. Partition 2 → **16 bytes**
    4. Partition 3 → **16 bytes**
    5. Partition 4 → **16 bytes**
    6. Signature → **2 bytes (**0x55 + 0xAA)

    Now, let’s select the Boot-code which is 446 bytes within the WinHex.

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/11.png" alt="image11">

    The total bytes we have selected will be mentioned at the right-end of the tool which shows **1BE,** this equals to **446-bytes.**

    Furthermore, let’s represent this selected area with a name and shaded region.

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/12.png" alt="image12">

    Click **OK** and our final GUI within WinHex will be:

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/13.png" alt="image13">

    We will perform similar action for the partition (total 4) too, with **16 bytes** each and signature with **2-bytes.** The final GUI will be:

    **Remember** while selecting the partition, for **16-bytes** the size within Hex shows **10.**
    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/14.png" alt="image14">

    Finally:

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/15.png" alt="image15">


    Further, we will also analyze how single partition of **16-byte** is structured. We know for every **16-byte** the size is differentiated as:

    1. Bootable (0x80) / Non-Bootable (0x00) → **1 byte**
    2. Starting CHS → **3 byte**
    3. Partition Type → **1 byte**
    4. Ending CHS → **3 byte**
    5. LBA → **4 byte**
    6. No of Sectors in Partition → **4 bytes**

    CSH layout too, is differentiated based on the size (**bits)** as:

    1. Head → **8 bits**
    2. Sector → **6 bits**
    3. Cylinder → **10 bits**

    Remember, we call it CHS but the values are stored in **HSC** manner

    Let’s explore the partition values :

    First copy the partition 1 values by selecting **Partition 1 values >> Edit >>Copy Block >> Hex Values**

    <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/16.png" alt="image16">

    **Copied value from partition 1 = 80202100077F39060008000000900100**

    **Partition 1** 

    1. Bootable = 80 (using first byte)

    2. **Starting CHS** : 202100 → 001202 (Finally → C/H/S = /0/2/18)
        
        Now convert those CHS values into bits (as CHS values are distributed in bits) using a calculator:

        <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/17.png" alt="image17">

        Make sure the calculator has **Programmer** function **enabled**.

        Values in bits:→ 0001 0010 0000 0010

        **Head:** 0000 0010 ⇒ 2

        **Sector:** 01 0010 ⇒ 18

        **Cylinder**: 0000000000 ⇒ 0

    3. **Partition Type** = 07 (1-byte)
    
        Explore the site to know the actual partition :
        [Partitions-Mass-Storage-Definitions-Naming-HOWTO (tldp.org)](https://tldp.org/HOWTO/html_single/Partition-Mass-Storage-Definitions-Naming-HOWTO/)
        
        <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/18.png" alt="image18">

        ***So 07 is NTFS file system.***

    4. **Ending CHS (3-byte):** 7F3906 → 6093F7 = 1011 0010 → (Finally C/H/S) →12/114/6
    
        **0110 0000 1001 0011 1111 0111**
        
        Head = 1111 0111 (8-bits) = 247
        
        Sector = 01 0011 (6-bits) = 19
        
        Cylinder = 0110 0000 10 (10-bits) = 386
            
    5. **LBA (4-bytes):**  00080000 →00000800 → 2048
        
        This can be verified within **WinHex** as:

        <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/19.png" alt="image19">

        → Little-endian conversion is done. (Visit below site):

        → <a href="https://www.scadacore.com/tools/programming-calculators/online-hex-converter/">https://www.scadacore.com/tools/programming-calculators/online-hex-converter</a>

        → Simply understand (Little-endian will have highest value at end {right side}) and just swap all the alternate byte address, (1 swap with 4; 2 swap with 3):

    6. No. Of sectors (4-bytes): 00900100 →00019000 → 102400 x 514 bytes= 52428800 bytes → 50 MB

        To verify the size of partition 1 we can view within the WinHex as:
        <img class="zoomable" src="/assets/notes_image/forensics/disk_analysis/20.png" alt="image20">

        Further more we can also analyze the number of heads and cylinder within the right side of WinHex with our caculated value.

    <br>
    **Partition 2:**

    Copied value for partition 2: 

    007F3A0607FEFFFF009801006E702E06

    →0607FEFFFF009801006E702E06

    1. 6E702E06
    2. Bootable (1-byte) → 00 → yes it’s bootable
    3. Starting CHS (3-byte) →7F3A06 → 60A3F7
    4. Partition type (1-byte) → 07 → NTFS
    5. Ending CHS (3-byte) →FEFFFF → FFFFEF
    6. LBA (4-byte) → 00980100 → 104,448(Little Endian)
    7. No of Sector (4-byte) → 6E2E7006 → 06702E6E = 108,015,214 x **512 bytes** = 55,303,789,568 bytes = 51GB

