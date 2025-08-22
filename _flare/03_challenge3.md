---
layout: notes_desc
title: Challenge-3
collection: flare
description: "Understand the meaning of XOR. It can be used both for the encryption and the decryption.😎😎"
image: /assets/Flare-on-2014/Challenge3/evil.jpg
signature: Investigate. Decode. Educate
---

Let's understand what a sample is:

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image2.png" alt="image2">

Okay, I got to know that Tiny C compiler is 9 times faster than GCC 😯. For more info: <a href="https://bellard.org/tcc/">Tiny C Compiler </a>

The header info gives, MZ info, so changing this file into .exe file can be further useful for anlysis.

Additionally, analyzing the file, its not packed. 
<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image3.png" alt="image3">


On running an exe:
<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image4.png" alt="image4">

I looked into any API calls, but nothing seems interesting. Let’s see how this program works. No better tool then **IDA** to see the basic work flow:

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image5.png" alt="image5">

I will be looking at the **sub_401000** call, as it is the relevant call after setting all the runtime environment.

Under this call, several arguments are passed for **EAX** register and for that I need to analyze the code in Debugger (**x32dbg)**

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image6.png" alt="image6">

Setting a breakpoint at **EAX**:

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image7.png" alt="image7">

Stepping into the **CALL EAX**, I found a loop which eventually passed through the **XOR** operation with key `0x66` and series of bytes.

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image8.png" alt="image8">

After stepping into the instruction within a loop, I need to set a breakpoint after the loop so that with the completion of the loop, I can examine the changes made on the contents and traces accordingly.

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image9.png" alt="image9">

And now following the `EAX` on the memory dump, I got some information, **and so it begins**

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image10.png" alt="image10">

Furthermore, I stepped into (F8) the instructions and some information like `ebx:nopasaurus`is mentioned. It was unclear at the beginning but later, stepping into the instruction, `XOR` operation with `nopasaurus` key was used in a loop to perform necessary changes on the executable.

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image11.png" alt="image11">

Running the executable after setting breakpoint until the loop ends, and following the `EAX`in dump, to reaveal the changes `get ready to get nop'ed so damn hard..`

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image12.png" alt="image12">

Once again, when I stepped into (F8) into the instruction, I again come to the point where the `XOR`operation is done along with the key `476C4F62`. As like above, setting the breakpoint and see the changes made via following on the dump.

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image13.png" alt="image13">

I don't understand wtf is going on, but can obviously see the changes made after the `XOR` operation is performed.

Further stepping into the instruction, I again got in contact with `XOR` 😒. Similarly, like before, I set the breakpoint and follow the dump to extract the changes made by the XOR operation.

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image14.png" alt="image14">

But looking now the instruction for `JMP` I `step over` (F8) to execute the `XOR` operation. 

And, within this breakpoint, I can get the actual flag:

<img class="zoomable" src="\assets\Flare-on-2014\Challenge3\image15.png" alt="image15">

And finally, I got the flag:
```text
such.5h311010101@flare-on.com
```