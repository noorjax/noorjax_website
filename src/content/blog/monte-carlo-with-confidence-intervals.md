---
title: "Monte Carlo with Confidence Intervals"
slug: "monte-carlo-with-confidence-intervals"
date: 2024-07-14
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Simulation models are stochastic in nature, which means that every time you run a simulation model you will get different results, if you use different seeds. In order to communicate these varied resu"
---

Simulation models are stochastic in nature, which means that every time you run a simulation model you will get different results, if you use different seeds. In order to communicate these varied results to the stakeholders, you need to use a statistical tool called the confidence intervals. In simple terms, this tool will tell you how confident you can be that your results lie in a particular interval. To do this you need to run Montecarlo simulations which is simply running the simulation as many times as needed in order for your confidence interval to have the smallest error that you are willing to allow or accept.

Based on the above description, this tool from Noorjax allows you to conduct Montecarlo simulations and provides you with the confidence interval based on a chosen confidence level.

You can see this library in action in the following link:
[View on AnyLogic Cloud](https://cloud.anylogic.com/model/6cbfd17d-3e39-4293-b881-8c4476f37291)

# How to Download

You can download the library in the following link:

[https://github.com/noorjax/optimizationWithMontecarlo](https://github.com/noorjax/optimizationWithMontecarlo)

This library is part of the optimization package. Free to use.

# Montecarlo Simulations Library

This library has been tested with AnyLogic 8.9.1. Previous version might not work.

## How to Install and Use the Library

Download the library and save it somewhere safe.

Inside Anylogic, add the library to your palette using the + button on the palette tab, and find the .jar file you downloaded.  Always keep that .jar file in the same location, or you will run into issues.

[![](/images/blog/monte-carlo-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)](/images/blog/monte-carlo-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

## Documentation

Drag and drop the Monte Carlo Experiment and configure the parameters as described below:

### Logic Agent:

Agent type: the top-level agent type. This is usually the agent that includes the main logic in the model as well as the elements or variables needed for specifying the expression (described later). Write the name of the agent type then followed by ".class". Example: MyAgent.class

### Model Time:

- *Model time units*: time units of the model

*Stop*: the stop condition for the model. Choose the needed option from the drop-down list. This can be a time in model time units (Stop at specified time) or a date (Stop at specified date). The third option is Never. Use this option when you have a stop condition already added in your model logic, like an event that ends the simulation, for example.

Note: When you add a stop condition in your model logic, use finishSimulation() instead of stopSimulation().

- *Start time*: The initial time in model time units for the simulation time horizon.

- *Start date*: The initial calendar date for the simulation time horizon.

- *Stop time*: enabled only when the "Stop at specified time" option is chosen for the *Stop* parameter and is the time to stop the model run at in model time units.

- *Stop date*: enabled only when the "Stop at specified date" option is chosen for the *Stop* parameter and is the calendar date to stop the model run at.

The above time parameters will be applied to all replication runs.

### Replications:

- *Minimum replications:* the minimum number of simulation runs that will be conducted in the experiment.

- *Maximum replications:* the maximum number of simulation runs that will be conducted in the experiment. The experiment will keep replicating runs until the results converge. If they don't, this is the maximum number of runs that will be conducted. If this number of runs is reached when you run the experiment, it is a good idea to increase this number and run the experiment again.

- *Confidence level:* you can choose from the specified options the confidence level that the experiment has to insure when finding the confidence interval.

- Error percent: variation percent around the mean of the needed expression. Should be a value between 0 and 1.

- *Expression:* this is the value that you are looking for from the model. When defining this expression, to reach the upper-level agent that you specified in the *Agent type*, you need to use root but also cast it to that agent type. Example: ((MyAgent)root).variable.

### Results Export:

- *Show export button:* if this option is chosen, a button will appear at the end of the experiment that allows you to export the results.

When all your parameters are properly configured, run the model and press START to start the experiment.

## How To Use the Library

Even though this library can be used in many ways, we advise you to use the following setup for the experiment in your model as best practice. Let's assume your top-level agent is called Main (which is what most models use)

- Add a new agent type in your model, call it whatever you want, for example, MyMonteCarlo.

- Create a new simulation experiment that has MyMonteCarlo as the top-level agent.

- Drag and drop the available "Monte Carlo Experiment" object from the library palette into the MyMonteCarlo agent and configure the parameters as described in the previous section.

- In the MonteCarloExperiment object, the Agent Type parameter will be Main.class

Note that the above-described setup is preferred but not obligatory. You can use the "Monte Carlo Experiment" in any agent, however, make sure that the top-level agent of the simulation experiment that you run is the agent that contains the "Monte Carlo Experiment" object or that it is an agent that contains the agent that contains the object.

When you run your simulation experiment, you will see a START button that you can click to start the Montecarlo experiment.

## Results

When you run the experiment, you will see 2 graphs that progress with the conducted simulations runs or replications. The first graph shows how the error percent varies with the number of runs. The second graph shows how the three values that represent the confidence interval vary with the number of runs. These three values are: the mean of the expression, the lower bound of the expression, and the upper bound of the expression. When the experiment stops, this means that the needed error percent with the specified confidence level has been reached. Then, you can read the final values for the lower bound, upper bound, and the mean at the last replication or simulation run. Moreover, when the experiment stops, a button will appear that allows you to export the results of the graphs to a csv file. When you press the button, a new folder named "exports" will appear in your model folder, and inside that folder you will find the exported results sheets. The first sheet named "error percent" shows the results relevant to the error percent graph with the first column showing the replication number and the second column showing the error percent. The second sheet named "ranges" shows the results relevant to the confidence interval graph. The first column shows the replication number and then we can see the lower bound, the mean, and the upper bound of the confidence interval.

## F.A.Q

## **Will I get the same results every time I run the experiment?**

It depends on the seed chosen for your simulation experiment. If you choose a fixed seed, then you will get the same results anytime you run the experiment. If you choose a random seed the results will be different every time you run the experiment. Note, however, that the results will not vary significantly, meaning that the final range should be close in all experiment runs.

## **Why can't I just use the AnyLogic Monte-Carlo experiment that comes with AnyLogic?**

That experiment, even though it shows an option to choose a confidence interval and error margin to run as many simulations as needed to reach that confidence interval, it doesn't work. This issue, (which is confirmed to be a bug) was raised in 2020 to AnyLogic support and again in 2023, and so far in September 2024, it hasn't been fixed. Anything else in that experiment works great so if you don't need to use confidence intervals or you want to calculate them yourself, then you don't need this.
BUT, if you are using the PLE, well, you don't have access to the monte-carlo experiment. Now you will since this works with the PLE version of AnyLogic.

## **Does the export work on the cloud?**

Currently it doesn't.

## **What are confidence intervals?**

For more information about the theoretical background of confidence intervals and the definitions of the technical terms used in the library, please refer to these videos:

[Confidence Intervals Explained - Part 1](https://youtu.be/tWGnQxMgu8A?si=HbPHDZ4YbmrlPE1a)

[Confidence Intervals Explained - Part 2](https://youtu.be/5UcKw-dZG7c?si=9HUuseB2H11DxiQp)
