.. _main_installation:

Installation
===============================

This section guides you through the installation of all dependencies required for the VeloGIF project, including Docker and the NVIDIA Container Toolkit (optional, for CUDA acceleration).

1. Install Docker (Required)
-------------------------------------------------------------------------------------------

1. Visit the |docker_link| and download Docker.

.. |docker_link| raw:: html

   <a href="https://www.docker.com/" target="_blank">Docker official website</a>

2. Add Docker permissions to the current user:

   .. code-block:: bash

       sudo groupadd docker
       sudo gpasswd -a ${USER} docker
       sudo service docker restart

3. Verify that Docker is running correctly:

   .. code-block:: bash

       docker --version

2. Install NVIDIA Container Toolkit (Optional, For CUDA Acceleration)
-------------------------------------------------------------------------------------------

If you need to use GPU and CUDA, install the |nvidia_link|. Ensure that your system has NVIDIA drivers installed and that CUDA is properly configured.

.. |nvidia_link| raw:: html

   <a href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html" target="_blank">NVIDIA Container Toolkit</a>

1. You can check if the NVIDIA drivers are available using the following command:

   .. code-block:: bash

       nvidia-smi

3. Set the Image Repository and Pull the Image
-------------------------------------------------------------------------------------------

1. Configure the provided image repository address and account information, then pull the required Docker image:

   .. code-block:: bash

       docker pull your_repository/velogif:latest

2. Check local images and ensure that the VeloGIF image is successfully pulled:

   .. code-block:: bash

       docker images

4. Download the Scripts and Extract Files
-------------------------------------------------------------------------------------------

1. Download the scripts from the |velogif_link|.

.. |velogif_link| raw:: html

   <a href="https://codeload.github.com/liyarubio/VeloGIF/zip/refs/heads/main?token=BBN3X4CK6LC6CPKXHCPTKXDHO6YBA" target="_blank">VeloGIF GitHub repository</a>

2. Extract the downloaded files:

   .. code-block:: bash

       unzip VeloGIF-main.zip
       cd VeloGIF-main
       unzip tools.zip
