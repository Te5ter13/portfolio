---
layout: notes_desc
title: "Lab 1: How To Acquire Data"
description: "Sample Lab to demonstrate the practical way of acquiring the data for detecting evidences"
image: /assets/notes_image/forensics/lab1/1.png
signature: Investigate. Decode. Educate
---

## Task 1: Collecting Volatile Data Manually

Evidence acquisition is one of the most important tasks to be done in order to start your investigation. Since part of computers' nature is  that data is not always consistent, especially those that are volatile, we need to start our data collection process by acquiring the volatile 
evidence first.

---

For this task, create a directory to store all acquired evidence, and gather the following data:

- Date and Time
    ```
    For PS
    >> date
    For cmd
    >> echo %date% %time%

    ```
<img class="zoomable" src="/assets/notes_image/forensics/lab1/2.png" alt="image2">
<img class="zoomable" src="/assets/notes_image/forensics/lab1/3.png" alt="image3">

- Currently running tasks
```
    >> tasklist
    For listing out with modules use:
    >> tasklist /m

    Listing the services used on task:
    >> tasklist /svc
```
<img class="zoomable" src="/assets/notes_image/forensics/lab1/4.png" alt="image4">

- Current network connections
```
For both PS and cmd
>> netstat -ano
```
<img class="zoomable" src="/assets/notes_image/forensics/lab1/5.png" alt="image5">

- ARP Cache
```
    >> arp -a
```
<img class="zoomable" src="/assets/notes_image/forensics/lab1/6.png" alt="image6">

- Network Configurations
```
    ipconfig
```
<img class="zoomable" src="/assets/notes_image/forensics/lab1/7.png" alt="image7">

- DNS and Routing Table
```
    >> ipconfig /displaydns

    For routing table\
    >> route PRINT
```
<img class="zoomable" src="/assets/notes_image/forensics/lab1/8.png" alt="image8">
<img class="zoomable" src="/assets/notes_image/forensics/lab1/9.png" alt="image9">

- System Variables

    This is slightly different from cmd to PS
    ```
        For cmd
        >> set

        For PS
        >> Get-ChildItem env:
    ``` 
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/10.png" alt="image10">    
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/11.png" alt="image11">

    
- User Information
    This can be done according to user choice
    ```
    For cmd
    >> net user %username%

    For PS
    >> whoami
    >> net user [output of whoami]
    ```
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/12.png" alt="image12">
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/13.png" alt="image13">

- Network Shares

    <img class="zoomable" src="/assets/notes_image/forensics/lab1/14.png" alt="image14">
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/15.png" alt="image15">

- System Information

    <img class="zoomable" src="/assets/notes_image/forensics/lab1/16.png" alt="image16">
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/17.png" alt="image17">

## Task 2: Dumping the System's Memory

For this task, let's assume that we want to dump the system's memory 
(make a copy) so we can perform memory forensic investigations later on.
 Use the FTK Imager tool to acquire the memory of the suspect's machine.

Compare the size of the memory image and the size of the actual system's memory, and make sure they match!

---

**Make sure to use Capture Memory option from the FTK-Imager option**
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/18.png" alt="image18">
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/19.png" alt="image19">
    
If we include pagefile and create AD1 file, then it will create both of the file.

## Task 3: Creating a Custom Forensic Image

**Important:** You don't need Task 2 to go to Task 3 or Task 4. Note that if you perform Task 2, then storage will be full. Before proceeding to Task 3, Reset the lab (Stop Button then Reset button) -> space is now freed -> go straight to Task 3 or Task 4. You 
don't need Task 2 that will fill up the space.

---

In this task, we will continue to use AccessData's FTK Imager to create an image file of specific system files to use for analysis. The custom image and files could be used to start the investigation process until a full system image comes through, if possible.

Let's assume that the suspect's system that we want to gather information from already has an external drive (ex: USB) containing all required tools plugged into it. **In a real-life scenario, the only difference will be that you will be plugging in your own USB thumb drive and running FTK-Imager from there.**

In this task, create a custom image and make sure you gather the following:

- File System Files

    To extract all the File systems which may be deleted, can be extract using “Add Evidence Tab” >> Physical Drive
        <img class="zoomable" src="/assets/notes_image/forensics/lab1/20.png" alt="image20"><br>
        *After selecting the option, we select the Physical Drive to extract all the files within the drive*
        <img class="zoomable" src="/assets/notes_image/forensics/lab1/21.png" alt="image21">

    Since there are two partitions and we must aware that Windows uses the first partition to store the system files.
    Here we need to know few important system files, which are named as:

    - $MFT :→ Master File Table (MFT) is the most important files in NTFS file system. It ***keeps the records of all files in a volume***, the ***file’s location in the directory***, the ***physical location in the directory***, the ***physical location of the files in the drive***, and ***file metadata***. (For info: https://whereismydata.wordpress.com/2009/06/05/forensics-what-is-the-mft/)
    - $LogFile :→ NTFS allows an operating system to maintain transaction record of all changes made to volume such as file creation, deletion, renaming, writing and moving; these transactions are stored in transaction log called $LogFile.
    - $UsnJrnl :→ Update Sequence Number Journal (USNJRNL) file is a crucial component of the NTFS filesystem, as it allows the system to keep track of changes made to the drive and maintain data integrity. Without the $USNJRNL file, the system would be unable to properly recover from error or crashes, potentially leading to data loss or corruption. (For more info: https://asdfed.com/page-1756777)

    The two files, $MFT and $LogFile can easily be extracted from [root]  and add both to Custom Content Image (AD1)
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/22.png" alt="image22">
    Another file $USNJRNL can be found within $Extend file path
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/23.png" alt="image23">


- Windows Registry Files
```
    a.  SAM
    b.  SYSTEM
    c.  SOFTWARE
    d.  SECURITY
    e.  DEFAULT
```
Further add above mentioned important system files from config  located in (C:\Windows\System32\Config). 
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/24.png" alt="image24">

- Recycle Bin Files

    Select the $Recycle.Bin path and add the custom image
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/25.png" alt="image25">

- Log Files (evtx, log, etc.)

    One of the important log file is the **setupapi.dev.log** (It logs the information about device installation in plain-text log file that you can use to verify the installation of a device and to troubleshoot device installation problems. If signing problem exists, SetupAPI will log information about the signing problem in the log file).

    This file is located within **Windows >INF**

    (*Note: INF (Setup Information File) contains all the information that device installation components use to install a driver package on a device)*

    <img class="zoomable" src="/assets/notes_image/forensics/lab1/26.png" alt="image26">

- Link Files (.lnk)

    There could be a lot of link files. So we can use the option of wildcard to extract and create a custom image for all exisiting link files. This can be done as:
  
    First select New option from Custom Content Sources Panel

    <img class="zoomable" src="/assets/notes_image/forensics/lab1/27.png" alt="image27">

    Now edit the * by adding the contents as:

    <img class="zoomable" src="/assets/notes_image/forensics/lab1/28.png" alt="image28">

    Similarly, evtx files can also be added.

- Cache Files (RecentFileCache.bcf)

    The cache file is located within: C:\Windows\AppCombat\Programs\RecentFileCache.bcf [Can’t locate it on the Win10 machine]

- User Files

    Navigate to C:\Users tab and create a custom image
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/29.png" alt="image29">

- Task Files

    Navigate to Windows >> Tasks and creat a Custom Image

    <img class="zoomable" src="/assets/notes_image/forensics/lab1/30.png" alt="image30">


Finally, don't forget to encrypt the data gathered.

**Important**: <u>You shouldn't add the AdminELS user's directory to the image. He is the user that was given to you to do the investigation. No need to investigate this account. Consider it 
clean....</u>

Now time to create an image for all the selected file evidence. To do this, select Image from Custom Content Source Pane
    <img class="zoomable" src="/assets/notes_image/forensics/lab1/31.png" alt="image31">

Now Add the evidence information for that image

<img class="zoomable" src="/assets/notes_image/forensics/lab1/32.png" alt="image32">

Further, Next select Image Destination

<img class="zoomable" src="/assets/notes_image/forensics/lab1/33.png" alt="image33">

As we are asked to use AD encryption, then we further set the password.

<img class="zoomable" src="/assets/notes_image/forensics/lab1/34.png" alt="image34">

Finally, set the directory listing of all files for created image.

<img class="zoomable" src="/assets/notes_image/forensics/lab1/35.png" alt="image35">

Now our image will be created:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/36.png" alt="image36">

The result obtain as:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/37.png" alt="image37">

To view the file created for the image:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/38.png" alt="image38">

Further, doc file can be viewed as:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/39.png" alt="image39">

Also open the csv file using Excel to view all the contents 

## Task 4: Creating a Full System Image

In this task, we will be showing you how you could use AccessData's FTK Imager to create a forensic image file of the entire hard disk drive. An image file is a bit-stream copy (forensic copy)
 of the source physical drive. Various forensic analysis suites can open and examine FTK Image Files like AccessData's Forensic Toolkit, EnCase, Digital Forensics Framework, OSForensics, and Autopsy (more on this suite later) to only name a few.

**Note**: <u> For performance reasons, you are not required to take a forensic image of the Win10 machine's C: drive; this would take hours to complete, and there is not enough space to save the 
forensic image. This task's purpose is to show you how you could take a forensic image of a machine's entire disk, in a step-by-step manner.</u>

**Make sure you understand the difference between this task and Task #3.**

To create a full system image we can use Create Disk Image >> Physical Drive >> Raw (dd) >> Evidence Item Information

<img class="zoomable" src="/assets/notes_image/forensics/lab1/40.png" alt="image40">

Now your required image will be created:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/41.png" alt="image41">
Now navigate to destination path and you will see two files (hdd_serial_no.001 and hdd_serial_no.001.txt (text file)) for the image will be created.
After completion

<img class="zoomable" src="/assets/notes_image/forensics/lab1/42.png" alt="image42">
<img class="zoomable" src="/assets/notes_image/forensics/lab1/43.png" alt="image43">

## Task 5: Automated Live Response

In this part of the lab, you are asked to use the BriMor Labs Windows Live Response Collection toolkit. One of the great benefits of using BriMor's Windows Live Response toolkit is that even if you forgot to choose a specific artifact to acquire and add to your evidence image, the toolkit will acquire it automatically for you. The toolkit is being regularly updated with new tools and files to acquire. Use the toolkit to run a live acquisition of system and user artifacts securely.

<img class="zoomable" src="/assets/notes_image/forensics/lab1/44.png" alt="image44">

Now select the Secure Triage  option and Run selected windows live response script


<img class="zoomable" src="/assets/notes_image/forensics/lab1/45.png" alt="image45">

Now the CMD terminal will run few scripts and ask to press any key, which will finally generate a zip file. After accessing the zip file:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/46.png" alt="image46">

Final Response from the Bambiraptor, and Key is copied to Notepad

<img class="zoomable" src="/assets/notes_image/forensics/lab1/47.png" alt="image47">

Now let’s extract all those 7z file. We need to open 7z within CMD , located at **C:\DFP\Tools\LiveResponseCollection-Bambiraptor\Windows_Live_Response\Tools\7zip** 

<img class="zoomable" src="/assets/notes_image/forensics/lab1/48.png" alt="image48">

From the previous saved password, we can extract the compressed files. For my system, the output file is located at:

<img class="zoomable" src="/assets/notes_image/forensics/lab1/49.png" alt="image49">

We can view the further information from this extracted files.