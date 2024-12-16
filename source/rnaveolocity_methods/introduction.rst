Introduction
==============================


.. list-table::
   :header-rows: 1

   * - Method
     - Year
     - Publication
     - Based splicing
     - Key Words / Major innovation
     - Core Algorithm
     - GPU acceleration
     - Need origin RNA velocity
     - Mode
     - Deep Learning Framework
   * - `velocyto <http://velocyto.org/velocyto.py/index.html>`_
     - 2018
     - Nature
     - √
     - steady state
     - extreme expression quantiles regression
     - 
     - √
     - 
     - 
     
   * - `scVelo <https://scvelo.readthedocs.io/en/stable/>`_
     - 2020
     - Nature Biotechnology
     - √
     - dynamic, EM, latent time
     - expectation-maximization (EM)
     - √
     - 
     - "stochastic (default), dynamic"
     - 
     
   * - `VeloAE <https://github.com/qiaochen/VeloAE>`_
     - 2021
     - Proceedings of the National Academy of Sciences
     - √
     - autoencoder，GCN，attention
     - autoencoder (AE)
     - √
     - optional: for velocity constraint
     - 
     - Torch
     
   * - `VeloVAE <https://github.com/welch-lab/VeloVAE>`_
     - 2022
     - International Conference on Machine Learning
     - √
     - variational mixture of ODEs, latent state
     - variational autoencoder (VAE)
     - √
     - 
     - 
     - 
     
   * - `UniTVelo <https://github.com/StatBiomed/UniTVelo>`_
     - 2022
     - Nature Communications
     - √
     - temporally unified，top-down
     - radial basis function (RBF)
     - √
     - 
     - "unified-time (default), independent "
     - TensorFlow
     
   * - `DeepVelo (2022) <https://github.com/aicb-ZhangLabs/deepvelo>`_
     - 2022
     - Science Advances
     - √
     - neural differential equation
     - VAE
     - √
     - for training output
     - 
     - 
     
   * - `cellDancer <https://github.com/GuangyuWangLab2021/cellDancer>`_
     - 2023
     - Nature Biotechnology
     - √
     - single-cell resolution inference of velocity kinetics
     - deep neural networks (DNN)
     - √
     - 
     - 
     - 
     
   * - `veloVI <https://velovi.readthedocs.io/en/latest/>`_
     - 2023
     - Nature Methods
     - √
     - variational inference, velocity uncertainty
     - VAE
     - √
     - √
     - 
     -
     
   * - `LatentVelo <https://github.com/Spencerfar/LatentVelo>`_
     - 2023
     - Cell Reports Methods
     - √
     - neural ODE,  batch，variational autoencoder
     - VAE
     - 
     - 
     - 
     - 
     
   * - `DeepVelo (2024) <https://github.com/bowang-lab/DeepVelo>`_
     - 2024
     - Genome Biology
     - √
     - GCN, time-dependent kinetics and multiple lineages
     - convolutional networks (GCN)
     - √
     - 
     - 
     - 
     
   * - `STT <https://github.com/cliffzhou92/STT>`_
     - 2024
     - Nat Methods
     - √
     - multiscale dynamical model, spatial transcriptomics
     - "stochastic differential equation (SDE), generalized Perron cluster cluster analysis (GPCCA)"
     - 
     - 
     - 
     - 
     
   * - `dynamo <https://dynamo-release.readthedocs.io/en/latest/index.html>`_
     - 2022
     - Cell
     - splicing / new + exp / new + u + s
     - GMM，transcriptomic vector fields
     - "generalized method of moments (GMM), negative binomial (NB) method or Curve fitting."
     - √
     - 
     - 
     - 
     
   * - `MultiVelo <https://github.com/welch-lab/MultiVelo/>`_
     - 2022
     - Nature Biotechnology
     - c + u + s
     - chromatin accessibility
     - EM
     - 
     - √
     - 
     - 
     
   * - `PhyloVelo <https://github.com/kunwang34/PhyloVelo>`_
     - 2023
     - Nature Biotechnology
     - lineage  +  exp
     - phylogenetic time, monotonically expressed genes
     - diffusion process of gene expressions
     - √
     - 
     - 
     - 
    
   * - `TFvelo <https://github.com/xiaoyeye/TFvelo>`_
     - 2024
     - Nature Communications
     - regulatory + exp
     - gene regulatory
     - Least Absolute Shrinkage and Selection Operator (LASSO) regression, generalized EM
     - 
     - 
     - 
     - 
    