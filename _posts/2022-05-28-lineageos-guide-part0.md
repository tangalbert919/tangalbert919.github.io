---
layout: post
author: albert
title: How to port LineageOS (or any custom ROM) to your device
---
WARNING: This guide is not endorsed by any director, maintainer, or developer of any custom ROM whatsoever.

This guide is intended for those who have an Android device and want to port a custom ROM to it. Although there are plenty of other guides out there (like on XDA or on [an old GitHub site that has not been updated in years](https://fat-tire.github.io/porting-intro.html)), many of them can be outdated or difficult to read, even for someone who may already know how to do this. As such, this guide has been written in such a way that is easy to read and is not prone to aging poorly. So with that in mind...

## Welcome to "How to port LineageOS (or any custom ROM) to your device".

Before we can even begin, we need to answer the most important question regarding your device:

**Can you unlock your bootloader?**

To answer this question, open Google, type in the name of your device, followed by "unlock bootloader", and then press "Enter" on your keyboard. If there is a guide that shows you how to unlock the bootloader on your device, and you are able to complete the guide, then the answer to that question is "yes". If there is not a guide anywhere, or none of the guides work, then:

**Stop reading this guide. Your device cannot run any custom ROMs whatsoever.**

Normally, this is the case if you bought your device directly from your telecom carrier (e.g. AT&T in the US, TELUS in Canada), since they typically ensure the bootloaders on the devices they sell have no way of being unlocked whatsoever.

If you are able to unlock the bootloader on your phone, then continue reading this guide. Why you need an unlocked bootloader for this, I will explain later.

### Part 0: Prerequisites

Before you can even begin porting any custom ROM to your device, there are some prerequisites that must be fulfilled. Being able to unlock the bootloader is one of them, and that is why I asked you that at the beginning of this guide. Here are the other prerequisites you must fulfill (and you must read the entire list before you decide what to do next):
* You must be able to solve problems, with or without using Google to look it up.
* You must be able to read the [Android Open Source Project (AOSP)](https://source.android.com) documentation. Otherwise, you will not make it through this guide.
* You must know how to use a Linux distribution. The easiest to setup is [Ubuntu](https://ubuntu.com), which you can setup either as a virtual machine ([VirtualBox](https://virtualbox.org) or [VMware](https://vmware.com) is a good start) or directly onto your machine (dual-boot, do NOT use Windows Linux Subsystem).
* You must know how to program in C. This is important for reasons we will get to later in the guide.
* You must have a computer that has more than 16 GB of RAM, at least 300 GB of free disk space, and be less than 10 years old. Android is a large operating system, and building it requires a lot of resources.
* If you are using a virtual machine, you must allocate at least 16 GB of RAM, 300 GB of free space, and 2 CPU cores to it.
* You must know how Git and Repo work. This is already covered in the AOSP documentation, so read it when you can.
* You must have a fast internet connection. There is a lot of code you will need to download, and 10 Mbps is NOT fast (unless you are AT&T).
* You must have a [GitHub](https://github.com) account. That way, you have a place to upload your work, and others can look at it and assist you if they can.

Clearly, this is a long list of prerequisites to fulfill, and it is important that you fulfill all of them. There is more in the AOSP documentation that I did not list here, so make sure you read that too.

Once you have fulfilled all of those prerequisites, we can move on to Part 1 of the guide, right? We have everything we need to truly get started.

**WRONG. JUST WRONG.**

There is one more prerequisite that you must fulfill, and it might be the most important one of all:

**You must be willing to spend hundreds of hours on porting a custom ROM to your device.**

You are going to learn a lot about your device, how Android works, and why your device works the way it does. This is not an easy task, and this guide is not supposed to make it easy. Once you succeed with the device you have now, it will become easier to port other devices you may acquire in the future because you already know what to do.

With that out of the way, we can now begin with Part 1.

### Part 1: Setup

