---
title: How to Install NVIDIA Cuda Toolkit on Linux for Blender 2.8 Cycles
date: "2019-01-07"
description: Installing the NVIDIA Cuda Toolkit on Linux for Blender Cycles rendering is straightforward and much easier than the official documentation leads you to believe.
---


![Suzanne](/jared-nielsen-install-nvidia-cuda-linux-blender-cycles.png)

Installing the NVIDIA Cuda Toolkit on Linux for Blender Cycles rendering is actually easy and straightforward. Unfortunately, the NVIDIA documentation is not so easy or straightforward. I wrote this article primarily as a reference for myself as this is a process I have done before and will definitely do again. I hope you also find it useful.

If you have any edits or feedback, please let me know [@jarednielsen](https://twitter.com/jarednielsen).

## Download the NVIDIA CUDA Toolkit
Navigate to the [NVIDIA CUDA Toolkit download page](https://developer.nvidia.com/cuda-downloads)

Select the following (if you’re running an Ubuntu-based distro, such as Linux Mint 64bit):
1. Linux
2. x86_64
3. Ubuntu, latest version (18.04)
4. deb [local]
5. Download

## Install the NVIDIA CUDA Toolkit
After the installer finishes downloading, run the following commands from the command line, replacing `<version>` with your version of CUDA (you can skip the first command if the .deb file opens after it finishes downloading):

```sh
sudo dpkg -i cuda-repo-<version>.deb
sudo apt-key add /var/cuda-repo-<version>/7fa2af80.pub
sudo apt-get update
sudo apt-get install cuda
```

As the installation process nears completion, you will see a message:
```sh
*****************************************************************************
*** Reboot your computer and verify that the NVIDIA graphics driver can   ***
*** be loaded.                                                            ***
*****************************************************************************
```

So,
```sh
reboot
```

## Post-Installation Actions
After rebooting, check to see if the NVIDIA daemon is running:

`systemctl status nvidia-persistenced`

If you get the error message:

`Failed to start NVIDIA Persistence Daemon.`

Reboot and try again.

If you encounter any issues, consult the [post-installation actions documentation](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#post-installation-actions)


## Configure NVIDIA CUDA Toolkit on Linux for Blender 2.8 Cycles
If you haven’t already, [download Blender](https://www.blender.org/download/).

Open Blender and under Edit, select Preferences.

In the Preferences panel select System menu option and within it, General.

Under Cycles Compute Device, select CUDA.

You can now close the Preferences panel and render away!
