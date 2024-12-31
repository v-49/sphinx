.. _main_installation:

Installation
============

This section guides you through the installation of all dependencies required for the Velogif project, including Docker and the NVIDIA Container Toolkit (if CUDA acceleration is needed).

### 1. Install Docker (Required)

1. Visit the [Docker official website](https://www.docker.com/products/docker-desktop/) and download the latest version of Docker.

2. Follow the specific installation guide for your operating system (Windows, macOS, or Linux):

   - **Windows**: Download the Docker Desktop installer, run the installation, and follow the prompts to complete it. After installation, enable the WSL 2 feature.

   - **macOS**: Download the Docker Desktop version for either Apple Silicon or Intel chips, and run the installer to complete the installation.

   - **Linux**: Use the following commands to install Docker (example for Ubuntu):

     .. code-block:: bash

         sudo apt-get update
         sudo apt-get install -y ca-certificates curl gnupg
         sudo install -m 0755 -d /etc/apt/keyrings
         curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
         echo \
           "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
           $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
         sudo apt-get update
         sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

3. Start the Docker service (Linux only):

   .. code-block:: bash

       sudo systemctl start docker
       sudo systemctl enable docker

4. Verify that Docker is running correctly:

   .. code-block:: bash

       docker --version

### 2. Install NVIDIA Container Toolkit (For CUDA Acceleration)

If you need to use GPU and CUDA, install the NVIDIA Container Toolkit.

1. Ensure that your system has NVIDIA drivers installed and that CUDA is properly configured.

   - You can check if the NVIDIA drivers are available using the following command:

     .. code-block:: bash

         nvidia-smi

2. Install the NVIDIA Container Toolkit:

   - Add NVIDIA's package repository:

     .. code-block:: bash

         distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
         && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
         && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
             sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

   - Update the package list and install the NVIDIA Container Toolkit:

     .. code-block:: bash

         sudo apt-get update
         sudo apt-get install -y nvidia-container-toolkit

   - Configure the container runtime and restart Docker:

     .. code-block:: bash

         sudo nvidia-ctk runtime configure --runtime=docker
         sudo systemctl restart docker

3. Test if the GPU is working correctly within the container:

   .. code-block:: bash

       docker run --rm --gpus all nvidia/cuda:12.2.0-base nvidia-smi

   If the above command outputs GPU information, the installation is successful.
