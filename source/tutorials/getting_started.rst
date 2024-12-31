.. _tutorials_getting_started:

Getting Started
===============

Follow these steps to quickly get started with the Velogif project:

### 1. Set the Image Repository and Pull the Image

First, configure the provided image repository address and account information, then pull the required Docker image:

.. code-block:: bash

    docker pull your_repository/velogif:latest

### 2. Start the Container (Mount GPU and Specify Directory)

Start the container using the following command, mounting the GPU and specifying the directory:

.. code-block:: bash

    docker run -d --gpus all --name velogif -v /opt/pysc:/app your_repository/velogif:latest

### 3. Access the Container Console

Enter the interactive terminal of the container with the following command:

.. code-block:: bash

    docker exec -it velogif /bin/bash

### 4. Execute the Scripts in the Container

After entering the container, navigate to the application directory and run the calculation script:

.. code-block:: bash

    cd /app
    python run_all.py

Once the computation is complete, you can generate charts by running the following script:

.. code-block:: bash

    python Get_graph.py
