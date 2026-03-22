---
title: "Optimization with Confidence Intervals"
slug: "optimization-with-confidence-intervals"
date: 2024-09-10
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Simulation models are stochastic in nature, which means that every time you run a simulation model you will get different results, if you use different seeds. In order to communicate these varied resu"
---

Simulation models are stochastic in nature, which means that every time you run a simulation model you will get different results, if you use different seeds. In order to communicate these varied results to the stakeholders, you need to use a statistical tool called confidence intervals. In simple terms, this tool will tell you how confident you can be that your results lie in a particular interval. To do this you need to run Montecarlo simulations which is simply running the simulation as many times as needed for your confidence interval to have the smallest error that you are willing to allow or accept.

Please book a meeting with us or contact us to request a demo to see if this library works for your needs.

# How to Download

You can download the library in the following link, along with the helper files:

[https://github.com/noorjax/optimizationWithMontecarlo](https://github.com/noorjax/optimizationWithMontecarlo)

You will need a license to use it.

# How to get a license

To get a license, follow the instructions in the following link:

[/en/blog/getting-a-license-for-a-library/](/en/blog/getting-a-license-for-a-library/)

The price for this library:

- Academic use – 3 months: €200 (purchase must be made with a university email, and you can't use it with AnyLogic Pro)

- Commercial use – 1 year: €1500

Our prices can change at any time without notice

# Optimization Experiment

This library has been tested with AnyLogic 8.9.1. Previous version might not work.

## Introduction

When conducting an optimization experiment, each set of chosen parameters values is called a solution. When a solution is used to run the model, it is not enough to run the model only once with this solution. It is important to replicate it until the confidence level is reached. Based on this concept, this optimization library ensures confidence in the result of each solution by conducting a Montecarlo experiment for each solution.

## Installation Instructions

Download the library (link at the beginning of this document) and save it somewhere safe.

Inside Anylogic, add the library to your palette using the + button on the palette tab, and find the .jar file you downloaded.  Always keep that .jar file in the same location, or you will run into issues.

[![](/images/blog/optimization-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)](/images/blog/optimization-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

In the project folder that you intend to use the library in, you should add the excel file named "input" that you will receive as part of the library package when you buy it. Do not change the name of the file or the names of any of the sheets in it or you will get errors.

## How To Use the Library

First you need to add inputOptimization.xlsx that you find when you download the library in the additional files folder in your AnyLogic project folder since the library will use the information in there to execute the optimization.

You can drag and drop the available "Optimization Experiment" object in the library palette in any agent in your model.

The following setup for the experiment is mandatory in your model: Add a new agent type in your model, call it whatever you want, for example, MyOptimization. Then create a new simulation experiment that has MyOptimization as the top-level agent. Drag and drop the available "Optimization Experiment" object and "settingsOpt" object from the library palette into the MyOptimization agent and configure the parameters for these objects as described here in the next section.

Note that the above-described setup is preferred but not obligatory. You can use the "Optimization Experiment" in any agent, however, make sure that the top-level agent of the simulation experiment that you run is the agent that contains the "Optimization Experiment" object or that it is an agent that contains the agent that contains the object.

## Objects Configuration

Drag and drop SettingsOpt and configure the parameters as described below:

### License:

- *Token*: write down the token that you will receive when you buy this tool.

- *Check New Version*: check this box if you want to check for new versions of this library with new features. If there's a new version, the information will be printed in the console once you run a model.

Drag and drop the Optimization Experiment and configure the parameters as described below:

### License:

- *Settings*: choose the settingsOpt object that has the token.

### Logic Agent:

- *Agent type*: the top-level agent type. Write the name of the agent type then followed by ".class". Example: MyAgent.class.

### Model Time:

- *Model time units*: time units of the model

- *Stop*: the stop condition for the model. Choose the needed option from the drop-down list. This can be a time in model time units (Stop at specified time) or a date (Stop at specified date). The third option is Never. Use this option when you have a stop condition already added in your model logic, like an event that ends the simulation, for example.

Note: When you add a stop condition in your model logic, use finishSimulation() instead of stopSimulation().

- *Start time*: The initial time in model time units for the simulation time horizon.

- *Start date*: The initial calendar date for the simulation time horizon.

- *Stop time*: enabled only when the "Stop at specified time" option is chosen for the *Stop* parameter and is the time to stop the model run at in model time units.

- *Stop date*: enabled only when the "Stop at specified date" option is chosen for the *Stop* parameter and is the calendar date to stop the model run at.

The above time parameters will be applied to all replication runs.

### Optimization:

- *Objective:* choose whether the objective from the optimization is to maximize or minimize the objective function.

- *Expression*: the objective function that needs to be optimized. When defining this expression, to reach the top-level agent that you specified in the *Agent type*, you need to use root but also cast it to that agent type. Example: ((MyAgent)root).variable

- *Number of iterations*: the number of iterations that will be conducted, each iteration constitutes a set of possible solutions.

- *Automatic stop*: If selected, optimization will be stopped, if the value of the objective function stops improving significantly, even if the number of iterations specified has not been reached.

To do this, the difference (in percentage) between the average of the results of all solutions in an iteration and the nth iteration after that will be calculated. If this difference is less than a certain ratio x, the experiment will be stopped. You need to specify n and x (see below) as you find appropriate.

- *Number of consecutive iterations*: enabled only when *Automatic stop* is chosen and is the number of iterations n as described above.

- *Change percent*: enabled only when *Automatic stop* is chosen and is the ratio x as described above. Should be a value between 0 and 1.

### Replications:

- *Minimum replications:* the minimum number of simulation runs that will be conducted in the Montecarlo experiment.

- *Maximum replications:* the maximum number of simulation runs that will be conducted in the Montecarlo experiment. The experiment will keep replicating runs until the results converge. If they don't, this is the maximum number of runs that will be conducted.

- *Confidence level:* you can choose from the specified options the confidence level that the Montecarlo experiment must ensure when finding the confidence interval.

- *Error percent:* variation percent around the mean of the needed *expression*. Should be a value between 0 and 1.

### Java Actions:

- *Initial setup:* The code you add here will be executed on the experiment setup.

- *Before simulation run*: The code you add here will be executed before each simulation run (solution).  At this moment the top-level agent of the model is already created, but the model is not started yet. You may perform here some actions with elements of the top-level agent, using ((MyAgent)root).

- *After simulation run*: The code you add here will be executed after each simulation run (solution). You may perform here some actions with elements of the top-level agent.

- *Before replication:* The code you add here will be executed before each replication run (from the Montecarlo) of a solution. You may perform here some actions with elements of the top-level agent.

- *After replication:* The code you add here will be executed after each replication run (from the Montecarlo) of a solution. You may perform here some actions with elements of the top-level agent.

- *After experiment:* The code you add here will be executed after the experiment is terminated.

Note that you can leave these empty if no action is needed.

### Results Export:

- *Show export button:* if this option is chosen, a button will appear at the end of the experiment that allows you to export the results.

## Use Instructions

When all the dragged elements are properly configured, run your simulation experiment (at this point the inputOptimization.xlsx file should be closed). Go to your model folder and open the inputOptimization.xlsx file. In the sheet named "params_ranges", you will notice that now you can see the names of all the parameters that are found in the agent that you defined as your top-level agent listed in the column named "parameter". For each parameter, define the characteristics as follows:

- *is an array:* sometimes your parameters can be arrays. If the parameter is an array, this should be TRUE, if not it should be FALSE.

- *Array size:* if the parameter is in array, you need to specify the array size here. If the parameter is not an array, just write 0.

- *type:* the type can be one of four options (CONTINUOUS, DISCRETE, FIXED, BOOLEAN). Choose the appropriate type from the dropdown list. Do not write anything other than the values indicated in the dropdown list because this will cause an error when you run the experiment.

- *ranges:* for CONTINUOUS parameters, define the minimum and the maximum. For DISCRETE parameters, define the minimum, maximum, and step. For FIXED parameters, define the fixed value. For BOOLEAN parameters, there is no need to define anything. For all cells that are not needed, you can write any value (zero for example) but don't keep them empty. For example, for CONTINUOUS parameters, you can write 0 for the step since it will not be used. For the case of arrays that are not FIXED, the indicated ranges will be applied to all array components. It is not possible to define different ranges for each component of an array. Again, for BOOLEAN arrays, there is no need to define anything. Finally, for the case of FIXED arrays, in the fixed value column, you need to define the values of the array components using this format:  if the array size is 3 for example. This is the only acceptable format, any other format will give an error.

As an example, refer to the image below:

[![](/images/blog/optimization-with-confidence-intervals/new-config-optimization.png)](/images/blog/optimization-with-confidence-intervals/new-config-optimization.png)

When you finish filling out the parameters ranges, save the file and go back to your model which is still running and press the "START" button to start the experiment. If you have closed the model run, don't worry, you can run the simulation experiment again and now you can press "START" immediately.
If you add/remove parameters at any point during your simulation development, if you run the model, the excel file will be automatically updated with the parameters that exist now. Just make sure that you add a number to the min, max, step and fixed value before pressing start to avoid errors.

## Results

When you run the experiment, you will see a graph that progresses with the conducted simulation runs. The graph shows the best results (of the expression or objective function) with each iteration. One line shows the best solution mean (from the Montecarlo), the second line shows the best solution lower bound, and the third line shows the best solution upper bound. These 2 last lines represent the confidence interval of the best solution in each iteration. Moreover, as the experiment progresses, the best result is also shown next to the graph. When the experiment is done, you will see the values of the parameters that constitute the best solution.

Additionally, when the experiment ends, a button will appear that allows you to export these parameter values to a csv file. When you press the button, a new folder named "exports" will appear in your model folder, and inside that folder you will find the exported results sheet. The sheet which is named "parameters values" shows the names of the parameters in the first column and the values for each parameter in the second column.

## Additional Options

*Constraints*: constraints are restrictions or conditions related to the parameters values. A constraint is a well-formed arithmetic expression describing a relationship between the optimization parameters. It always defines a limitation by specifying a lower or an upper bound, for example, p1+p2>10. Constraints are evaluated before the model run and instantiation of the top-level agent, so they cannot involve any of the top-level agent's contents. To define constraints for your optimization experiment, you need to use the "constraints_db" sheet in the inputOptimization.xlsx file. Each row will constitute one constraint. In the first column, write any number as a unique id for the constraint. Then define whether you want to enable the constraint when you run the experiment by specifying TRUE for enabled and FALSE for disabled. If the constraint is disabled, it will not be taken into consideration in the experiment. This option is added in case you want to test different combinations of the constraints. We will describe the "on array" column in the next paragraph. Next, you need to define the expression which should be composed of parameters name/names and the mathematical symbols to define the arithmetic relationship. Following that, you need to define the type of limitation. The allowable symbols here are: =, >=, <=. Using any other symbol will cause an error. Finally, you define the bound which is any number.

For arrays, the constraints are a special case. It is not possible to use constraints on more than one array in one expression, or on an array and a normal parameter in one expression. You are **only** allowed to use constraints in arrays on the components of the array itself. In the "on array" column, if the constraint you are going to add in this row is related to an array, this value should be TRUE, otherwise it should be FALSE. The format of the expression would be as follows for example: 2*p1+p1/4, where p1 and p1 represent components of the array at the relevant positions based on the numbers indicated in between the square brackets. For example, if this is array p1: , p1 would be 5.3, and p1 would be 9.5. Any constraint expression that contains the name of more than one array or that contains a mix of a name of an array and a name of a normal parameter will give an error during runtime.

*Requirement*: requirements are additional restrictions imposed on the results found by the optimization engine. These restrictions are tested after a simulation run and can involve any of the top-level variables. To define requirements for your optimization experiment, you need to use the "requirements_db" sheet in the inputOptimization.xlsx file. Follow the same rules as the constraints, however, in the expression here use variables instead of parameters.

# FAQ

## It doesn't work even though I have a license

This library works only with internet connection. Make sure you have your internet connectivity working.

## Is this better than optQuest?

First, you can export this experiment to an executable file, which is not possible with OptQuest unless you buy a special expensive license for that.
Second, it is significantly easier to work with thousands of variables. The native optQuest experiment in AnyLogic is very hard to use if you have so many variables

Finally, we added a comparison document that you can find in the addtional files when you download this library. We used 3 typical models that you can find in the AnyLogic examples and concluded that our optimization algorithm is quite similar and gives if not better results, very similar to the AnyLogic native ones.

## What are confidence intervals?

For more information about the theoretical background of confidence intervals and the definitions of the technical terms used in the library, please refer to these videos:

[Confidence Intervals Explained - Part 1](https://youtu.be/tWGnQxMgu8A?si=HbPHDZ4YbmrlPE1a)

[Confidence Intervals Explained - Part 2](https://youtu.be/5UcKw-dZG7c?si=9HUuseB2H11DxiQp)

## My computer is using 100% CPU during optimization, why?

This depends probably on the type of computer you have, the number of cores your computer has and other characteristics. Running an optimization is computationally expensive and we are trying to use all your cores. We might change this in the future if it leads to issues.

## Does the export work on the cloud?

Currently it doesn't.
