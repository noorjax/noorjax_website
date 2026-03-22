---
title: "Stacker Crane Library for Automated Storage & Retrieval Systems (ASRS)"
slug: "pallet-crane-library"
date: 2024-07-14
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Automated storage processes with automated stacker cranes are commonly used in warehouses and factories management by enhancing efficiency and accuracy. These systems streamline the storage and retrie"
---

Automated storage processes with automated stacker cranes are commonly used in warehouses and factories management by enhancing efficiency and accuracy. These systems streamline the storage and retrieval of goods, reducing human error and operational costs. Automated stacker cranes maximize space utilization by accessing high and deep storage areas that are difficult for manual operations.

This custom library has a stacker crane agent that can be attached to the Storage markup element of AnyLogic Material Handling Library (MHL). In addition, the library has a process block incorporated which can handle the materials/agents with the stacker crane, having the possibility of storing, repositioning and retrieving objects in and out of the storage.

Check this model in action in the AnyLogic cloud: [View on AnyLogic Cloud](https://cloud.anylogic.com/model/fbb78b8f-e175-4606-8a31-1b425e38fb49)

You can also check a video demo in the following link:
[Watch video demo on YouTube](https://youtu.be/fQwLOUNW2s4)

# How to Download

You can get the free version with limitations here:
[https://github.com/noorjax/stacker-crane](https://github.com/noorjax/stacker-crane)

You will need a license to get full functionality. The free version is limited to a maximum of 1 hour of simulation time.

# How to get a license

To get a license, follow the instructions in the following link:

[/en/blog/getting-a-license-for-a-library/](/en/blog/getting-a-license-for-a-library/)

The price for this library:

- Academic use - 1 year: €59 (purchase must be made with a university email)

- Commercial use - 1 year: €175

Our prices can change at any time without notice

# Stacker Crane Library

This library has been tested with AnyLogic 8.9.1. Previous version might not work. This library allows you to use an automated system to store, reposition and retrieve pallets from the storage object in AnyLogic.

# General Description

The library has four objects/agents that need to be used together to ensure the proper functioning. There are: StackerCrane, MoveByStackerCrane, SettingsSC and SpecialAgentSC.

# How to Use

First download the library at [https://github.com/noorjax/stacker-crane](https://github.com/noorjax/stacker-crane) and save it somewhere safe.

Inside Anylogic, add the library to your palette using the + button on the palette tab, and find the .jar file you downloaded… Always keep that .jar file in the same location, or you will run into issues.

[![](/images/blog/pallet-crane-library/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)](/images/blog/pallet-crane-library/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

You can drag and drop any of the available objects to develop your model, except the Fork that is not used.

[![](/images/blog/pallet-crane-library/Monosnap-AnyLogic-Professional-2024-08-18-07.07.09.png)](/images/blog/pallet-crane-library/Monosnap-AnyLogic-Professional-2024-08-18-07.07.09.png)

The library makes use of the Storage object of AnyLogic MHL, so it's important that you are familiar with that before engaging with this library.

As of current version, there are some limitations for the pallet racks that can be used:

- Must have 1 rack.

- Number of cells 1 per slot.

- Rack placement type must be Stand-alone.

[![](/images/blog/pallet-crane-library/Picture1racl.png)](/images/blog/pallet-crane-library/Picture1racl.png)

## Stacker Crane

The Stacker Crane agent is the 3D object that will be visible doing all the actions, as picking up agents, moving, storing and retrieving them. The stacker crane is made up of a z linear slide, which is the column on which the fork is attached, and the fork which is the part that collects the objects.

[![](/images/blog/pallet-crane-library/pallet-rack.png)](/images/blog/pallet-crane-library/pallet-rack.png)

Follow the steps to configure the agent:

- Drag the stacker crane agent from the library and drop where you want to use the agent

- Make sure the presentation of the stacker crane is shown in the origin of the environment agent. If not, click Show presentation in Advanced properties of the stacker crane.

[![](/images/blog/pallet-crane-library/Picture3jjj.png)](/images/blog/pallet-crane-library/Picture3jjj.png)

- Drag and position the presentation of the stacker crane to where you want to define its initial location. Since this object works only with Storage object of MHL, it is recommended to position the presentation of the stacker crane in front of the Storage.

[![](/images/blog/pallet-crane-library/Picture4ss.png)](/images/blog/pallet-crane-library/Picture4ss.png)

- It is not necessary to rotate the presentation of the stacker crane, since the rotation is automatically defined according to the storage rotation.

- The distance between the initial location of the stacker crane and the storage will be consider as the "safe distance" between these two objects, so the movements of the stacker crane will consider this distance during all the simulation run.

[![](/images/blog/pallet-crane-library/Picture5m.png)](/images/blog/pallet-crane-library/Picture5m.png)

Now you are ready to configure all the stacker crane parameters.

### General Parameters

- **Storage:** must select the storage object of MHL that will be used with this stacker crane. The storage must have 1 rack and 1 number of cells per slot only to work properly. Also, rack replacement type must be Stand-alone.

- **Population at exit:** must have the population of the agents that will be moved by this stacker crane. This is to return the agents to the initial population after moving them. Use this syntax: `(AgentArrayList)nameOfThePopulation`
Maintain what's inside the parenthesis and just change the nameOfThePopulation with the name of the custom population of the agent. Example: if your agent is called Pallet, then the custom population of the agent may be named as pallets, so what you should write in this parameter is: `(AgentArrayList)pallets`

- **Initial z**: is where the fork of the stacker crane will be in the z axis at the beginning of the simulation.

- **XY max speed**: max reachable speed of the stacker crane in the XY plane.

- **XY max acceleration**: max acceleration of the stacker crane in the XY plane.

- **Z max speed**: max reachable speed of the stacker crane's fork in the Z axis.

- **Z max acceleration**: max acceleration of the stacker crane's fork in the Z axis.

- **Enter cell distance**: safe distance between the stacker crane and the storage cell when entering a cell.

[![](/images/blog/pallet-crane-library/Picture7.png)](/images/blog/pallet-crane-library/Picture7.png)

- **Loading time:** loading time when picking up an agent.

- **Unloading time**: unloading time when dropping an agent.

### Precision

- **Position error allowed**: maximum distance allowed between the current position of the stacker crane and the target position. If this allowed error is reached, it can be considered that the stacker crane is already in the target position.
*if abs(targetPosition-CurrentPosition)<Position error allowed*
*then the stacker crane is already at the target position.*

- **Speed error allowed**: in conjunction with position error allowed, this is the maximum speed allowed to stop the stacker crane movement, if the current speed is more than that, then the stacker crane would not stop its movement. This only applies to PID movement, which is explained later.

- **Position update frequency**: the time between each update in the stacker crane variables, such as animation, position, speed, acceleration, and others.

### Movements

**Movement defined by:** defines how the movement will be ruled. Can be one of the following options:

- **Uniformly Accelerated Rectilinear Motion**: describes the motion of an object moving in a straight line with a constant acceleration. In this type of motion, the object's velocity changes uniformly over time, meaning it speeds up or slows down at a steady rate. In this specific case, the stacker crane will do its movements accelerating according to its acceleration parameters, then will reach its maximum speed and will slow down decelerating at a certain point to reach the target position with speed near zero.

- **PID (do not use unless you have a great understand of PID controllers and how to calibrate them)**: is a widely used control mechanism in industrial and mechanical systems to maintain a desired output or setpoint. It adjusts the control inputs to a system by considering three key components: Proportional-Integral-Derivative. In this specific case, this controller is applied to the accelerations of the stacker crane, adjusting the acceleration automatically based on the K's parameters. These K's are the constants or factors that adjust the implication of each component, having Kp for proportional, Ki for integrative and Kd for derivative.

- **Ki side to side**: integrative constant for the acceleration of the stacker crane in the parallel movement with respect of the storage.

- **Kp side to side**: proportional constant for the acceleration of the stacker crane in the parallel movement with respect of the storage.

- **Kd side to side:** derivative constant for the acceleration of the stacker crane in the parallel movement with respect of the storage.

- **Ki entering cell**: integrative constant for the acceleration of the stacker crane when entering and leaving a cell.

- **Kp entering cell**: proportional constant for the acceleration of the stacker crane when entering and leaving a cell.

- **Kd entering cell:** derivative constant for the acceleration of the stacker crane when entering and leaving a cell.

- **Ki z axis:** integrative constant for the acceleration of stacker crane's fork when it moves up and down.

- **Kp z axis**: proportional constant for the acceleration of stacker crane's fork when it moves up and down.

- **Kd z axis:** derivative constant for the acceleration of stacker crane's fork when it moves up and down.

### Appearance

- Z linear slide height: height of the z linear slide.

- Z linear slide radius: radius of the z linear slide.

- Z linear slide color: color of the z linear slide.

[![](/images/blog/pallet-crane-library/Picture8.png)](/images/blog/pallet-crane-library/Picture8.png)

[![](/images/blog/pallet-crane-library/Picture9.png)](/images/blog/pallet-crane-library/Picture9.png)

### Special Agent SC

This is the agent type that will be stored in the storages with the stacker crane. To be able to use the library, it is necessary to use the option "Extends other agent" in advance settings of your material item agent that you will be using in your model. For example, if you would like to store a pallet in the storage, you will have a Pallet agent type that must be an extension of SpecialAgent of this library.

[![](/images/blog/pallet-crane-library/Monosnap-AnyLogic-Professional-2024-08-18-07.43.52.png)](/images/blog/pallet-crane-library/Monosnap-AnyLogic-Professional-2024-08-18-07.43.52.png)

### MoveByStackerCrane

This is the flowchart block that can be used to control the movements of the stacker crane agent. This block can be used to store, reposition and retrieve agents in and out of the storage object.

When an agent enters the moveByStrackerCrane block, it will be waiting in a FIFO queue until it is its turn to be moved. If necessary, to remove the agent from the queue of the bloc, the user can use the function `moveByStackerCrane.remove(agent);` (consider that this function will work correctly only if the agent is not being moved by the stacker crane).

#### How to configure:

- Drag & drop the agent from the Stacker crane library to where you have your logic model.

- The agent that will move trough this block must be an extension of SpecialAgent agent of the stacker crane library.

Now configure the parameters of the block

- Stacker crane ASRS: select the stacker crane agent that you want to use with this block.

- Action ASRS: select the automated action you want to use with the agents. There are three options:

Store: can be used to store agents in the storage. Works having the agent somewhere near the storage and the stacker crane will go to pick it up and move to a storage cell.

- X origin: x position of the agent for the pickup.

- Y origin: y position of the agent for the pickup.

- Z origin: z position of the agent for the pickup.

Reposition: moves the agent from the current cell to a new one in the same storage.

Slotting policy: the target cell of the agent.

- Random available: a random cell available in the storage. If no cells are available, an error will be triggered.

Specific slot: specific target cell.

- Storage shelf: storage level index for the target position.

- Storage bay: storage bay index for the target position.

Retrieve: must be used to retrieve an agent from a cell and move it out of the storage.

- X destination: x position of the target position.

- Y destination: y position of the target position.

- Z destination: z position of the target position.

- **Task priority**: The priority of the task for the incoming agent (the larger the higher). Helps to prioritize agents that are waiting to be moved by the stacker crane.

**Actions**

Can be used agent to use it dynamically.

- **On enter queue**: action triggered when the agent enters the block.

- **On exit queue**: action triggered when the agent exits queue, either before of starting storing process or because of the use of `remove(agent);` function.

- **On start storing process**: action triggered when stacker crane starts moving to the agent that is going to be picked.

- **On end storing process**: action triggered when the stacker crane drops off the agent in its target location.

## Settings SC

- **Token:** You will need this to be able to use this library in its full capacity. Licenses can only be used in 1 computer.

- **Check New Version:** If you check this box, the settings object will connect to the server to check if there is a new version of this library. If there is, this will printed in the console.

## FAQ

### Can I use multiple stacker cranes for one storage?

No. The relation between storage and stacker crane is 1:1, one storage can have one stacker crane and one stacker crane can be attached to only one storage.

### PID is not working

PID controller can only be used with model time units in seconds. If your model is using other time units, the PID will not work. We might change this in the future.

## My exported model doesn't work

When you export a model, it doesn't require a license, as long as you exported it with a license (both for the cloud and java export). In order to export it, you should have run the simulation model at least one time in AnyLogic with internet on, which will generate a valid licenseKey.txt file (if you purchased a license). This file must be integrated in any exported version, and to do that you need to go to resources/data/licenseKey.txt properties and turn on "Resource is referrenced from user code". This will allow the model to export the licenseKey.txt file, as you see in the following image:

[![](/images/blog/pallet-crane-library/usercodereference-1030x260.png)](/images/blog/pallet-crane-library/usercodereference.png)
