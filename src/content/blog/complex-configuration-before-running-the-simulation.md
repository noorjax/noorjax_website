---
title: "Complex configuration before running the simulation"
slug: "complex-configuration-before-running-the-simulation"
date: 2018-10-18
categories: ["AnyLogic Tips"]
tags: []
excerpt: "Have you ever been in a situation where you want to generate a complex scenario in the simulation experiment but you have no idea how to do it?  There are features in AnyLogic that require the simulat"
---

Have you ever been in a situation where you want to generate a complex scenario in the simulation experiment but you have no idea how to do it?

There are features in AnyLogic that require the simulation model to be on runtime mode in order to work and will not be available in the simulation experiment configuration screen, or in any other experiment for that matter. For example, you may want to generate GIS points on the map before even running the simulation, or you may need to generate and modify agents before the simulation even start. How do you do it then without defining everything in an external Software or trying to write down everything on a database or Excel?

There are two possible solutions, and even though I don't like any of them, There is one better than the other.

## The Business Case

Let's make an obvious business case. Imagine the user of the simulation (your client, boss or professor) wants you to define the geolocations of a distribution center as parameters of the model. If you want to define them before the simulation starts, your best bet is to use a shape file, or to define latitude and longitude in a database.

But the user may not be sure where these distribution centers will be located, and may want a flexible system where he can click on the map and define the position of the distribution centers in there, and then save what was done in a database for posterior use. Unfortunately, you can't even put the map in the simulation experiment (figure 1). So what to do now?

![](/images/blog/complex-configuration-before-running-the-simulation/Screen-Shot-2018-10-18-at-16.16.42-300x163.png)

*Figure 1 - GIS Map not allowed in the simulation experiment*

It is clear that your only option is to generate the map in Main. Your first thought might be then to pause the simulation immediately after you run it. By doing this, you allow the user to start adding distribution centers at time zero. The user will then click some new button to run the simulation for real after he finishes configuring everything. At this point you are almost forced to create your agents (most likely a distribution center will be defined as an agent) immediately when the user clicks the map (figure 2).

![](/images/blog/complex-configuration-before-running-the-simulation/Screen-Shot-2018-10-18-at-16.42.13-300x159.png)

*Figure 2 - Two distribution centers added to the map by clicking in it.*

But wait! If you allow the user to add distribution centers, from a usability perspective, you will also need to include the a feature to remove them. But if the simulation is paused and the distribution center is defined as an agent, AnyLogic will not remove agents when the user clicks the "stop simulation" button, so if the user wants to go back to the configuration page of the simulation experiment, the error in figure 3 will appear.

![](/images/blog/complex-configuration-before-running-the-simulation/Screen-Shot-2018-10-18-at-16.43.11-300x89.png)

*Figure 3 - Error destroying agents*

And that's not all. The map will not update when the simulation is paused, so if you want to move to other locations of the map to add new distribution centers, it will be as if you had no internet available.

## Solution

So now we have discovered that pausing the simulation to make the Main agent work as the configuration page is not ideal in most cases. I wish I could just pause the simulation, but I always end up needing to erase an agent, so instead of pausing the simulation I make it run extremely slow. So slowly that it's almost paused. The following code does the job:

```java
getEngine().setRealTimeMode(true);
getEngine().setRealTimeScale(0.000001);
```

Now the problem is mostly solved. But since the simulation is running, you just have to consider if this millisecond that will pass while the user configures the model will affect your model or not. I am pretty sure that in 99.99% of the cases it won't and if it does, you can reduce the time scale to something even smaller (I don't know what the smallest time scale limit is).

The final step is to add a button to run the simulation when the configuration is completed. You will need to change the time scale to 1

```java
getEngine().setRealTimeScale(1);
```

or maybe run it in virtual time

```java
getEngine().setRealTimeMode(false);
```

It depends on your needs. It's a good idea at this point to immediately save the configuration of the distribution centers to a database to replicate the same simulation in the future.

## Conclusion

I've been in this situation countless times. My clients always want a very flexible model with configuration options that are sometimes very specific. AnyLogic as a framework has limitations (or bugs sometimes) that we need to deal with. Occasionally, the user wants to build paths, generate shapes, architect layouts and configure several other things that the simulation experiment configuration doesn't let you do, and many times it's necessary to do it on runtime because most of the AnyLogic features work there.
