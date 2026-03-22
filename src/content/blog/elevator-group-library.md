---
title: "Elevator Group Library"
slug: "elevator-group-library"
date: 2024-06-23
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "AnyLogic has a native elevator object that works for pedestrians, but only for pedestrians. Since it's often that in models you have normal agents and resources that also need to use elevators, the pe"
---

AnyLogic has a native elevator object that works for pedestrians, but only for pedestrians. Since it's often that in models you have normal agents and resources that also need to use elevators, the pedestrian elevator was not enough. Additionally, it's often the case that elevators work in groups as the move around to pick up requests from different floors. This library covers this gap, but also works with pedestrians.

Check this model in action in the following link: [AnyLogic Cloud Demo](https://cloud.anylogic.com/model/35315a4b-59b7-4849-a7c6-4a88d466651b)

You can also check the video demo in the following link:
[https://youtu.be/FKvWgCZJ2r0](https://youtu.be/FKvWgCZJ2r0)

## How to Download

You can get the free version with limitations here:
[Noorjax Elevator Library on Github](https://github.com/noorjax/elevator)

You will need a license to get full functionality. The free version is limited to a maximum of 1 hour of simulation time.

## How to get a license

To get a license, follow the instructions in the following link:

[/en/blog/getting-a-license-for-a-library/](/en/blog/getting-a-license-for-a-library/)

The price for this library:

- Academic use - 1 year: €59 (purchase must be made with a university email)
- Commercial use - 1 year: €200

Our prices can change at any time without notice

## Elevator Group Documentation

This library has been tested with AnyLogic 8.9.1. Previous version might not work.

## General description

This Elevator object expands on what AnyLogic offers for the Pedestrian elevator, by allowing you to use it with pedestrian, normal agents and resource type agents that are used in the Process Modeling Library.

The library contains the following objects:

- **ElevatorSpecialAgent**: This is the Agent from which any agent that will use this elevator has to extend from.
- **ElevatorSettings**: This contains the information on the building in which the elevators will be used
- **ElevatorGroup**: This objects represents a set of n elevators that will be used together.
- **TakeElevator**: This is the process block that you will use in your flow for the process modeling library (when you use resources and/or normal agents).
- **TakeElevatorByPed**: This is the process block you will using your flow for pedestrians.
- **ElevatorObject**: This must not be used as it's used internally by the ElevatorGroup object.

## How to Install and Use The Library

First download the library at [Noorjax Elevator Library on Github](https://github.com/noorjax/elevator) and save it somewhere safe.

Inside Anylogic, add the library to your palette using the + button on the palette tab, and find the .jar file you downloaded... Always keep that .jar file in the same location, or you will run into issues.

![](/images/blog/elevator-group-library/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

You can drag and drop any of the available objects to develop your model, except the ElevatorObject that is not used, and the ElevatorSpecialAgent that has special conditions as explains in the next section.

The library makes use of the levels feature of AnyLogic, so it's important that you are familiar with that before engaging with this library.

## Elevator Special Agent

In order to use the objects provided by this library, an agent has to extend from this type. For this you need to go to the advanced section of your agent type properties and do it there as shown in the following image:

![](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-13.42.21.png)

By extending from this special agent type, the agent has access to some functions that are necessary.

**getDestinationLevel()**: returns the level to which the agent wants to go.

**setDestinationLevel(Level x)**: defines the level to which the agent wants to go.

When an agent that will take the elevator is created, you can define the following parameters:

**weigth**: this is a optional parameter that you can use in case the elevators have maximum weight allowed. If you don't want to use this, you can define any value or leave the default.

## Elevator Settings

### Settings

**Token:** You will need this to be able to use this library in its full capacity. Licenses can only be used in 1 computer.

### Animation

**Door Animation Update Frequency**: The door animation of the elevator is updated discretely. Smaller time leads to a smoother animation.

**Check New Version:** If you check this box, the settings object will connect to the server to check if there is a new version of this library. If there is, this will printed in the console.

## Elevator Group

### Settings

**Elevator Settings**: You need the elevator settings defined for licensing purposes

**Waiting Nodes**: Since the Process Modeling Library requires the agents to integrate a network as they move around, we need to define here what the nodes are in each level. Agents will wait on these nodes for the elevator to come. You will define here all the nodes. You don't need to order them in any particular way, but make sure that the number of waiting nodes fit with the number of levels used by this elevator group. A waiting node MUST be in the level it belongs to. The Z coordinate value has to be 0 for all waiting nodes. All waiting nodes need to be rectangles.

**Number of Elevators**: Here you define how many elevators are in this group. You can define only 1 if you don't want a group.

### Dimensions and Movement

The object you see in the AnyLogic Canvas is the following, in which the center of the first elevator corresponds to the center of the left elevator, and everything is placed towards the right depending on dimensions and separation between elevators:

![](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-14.38.17.png)

**Space Between Elevators:** here you define the space between elevators

**Width, Depth and Height**: These dimensions are defined as shown in the image

![](/images/blog/elevator-group-library/Monosnap-Elevator0.0.1-_-Simulation-AnyLogic-Pro.png)

**Color:** this will be color of the elevator and the doors of the elevator. We suggest using transparency to see the agents inside.

**Vertical Speed**: This is the speed of the elevator as it moves up or down. There is no acceleration.

### Operations

**Door Time Delay**: This is the amount of time it takes for the doors of the elevator to open. The same amount of time is used for the time it takes for the elevator doors to close.

**Use Agent Number Limit**: You can choose for the elevators to limit the amount of agents that can be inside.

**Agents Allowed Inside (visible if use agent number limit is on)**: If you choose to use agent number limit, this will be the maximum number of agents that can be inside the elevator.

**Use Weight Limit:** You can decide to use a maximum weight an elevator can hold.

**Maximum Weight (visible if use weight limit is on):** If you use weight limit, this will be the weight limit the elevator can hold.

**Doors:** You can choose if elevators will open only the front door or both front and back doors. No matter what, you can only choose 1 waiting node in each floor.

**Use same levels for all elevators**: if you check this, you will get only one list of levels that will apply to all elevators.

**Levels**: Here you can choose what levels each elevator of the group can go to. Make sure to add on this list as many as there are are elevators (unless you are using same levels for all elevators). In the following image, we see a case in which there are 4 elevators. The first elevator, which has index 0 and is position to the left of the group, will be able to go to level and level1, the second elevator to level, level1 and level2, and so on. There are 4 lists, so this means that the "number of elevators" parameter MUST be 4. Note that it doesn't matter in which order you add the levels. In this case there are also 3 possible levels: level, level1 and level2, which means you MUST have 3 waiting nodes.

![](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-14.27.22.png)

## Take Elevator

### Settings

**Elevator Group**: This defines what elevator group will be chosen for the agent to move through levels.

**Population at Exit**: It is mandatory for the agent that takes the elevator belongs to a defined population, and at the exit of the elevator, the agent needs to move back to that same population or a different one. You have to cast this population into an agent array list as follows: `(AgentArrayList)population`

**Resource Population at Exit**: If the agent has been seized by a resource, the resource has to extend from the SpecialElevatorAgent as well and you have to place here the population that the resource will belong to when it exits the elevator.

### Operations

**Use Timeout**: Here you determine if agents will wait forever for the elevator or will wait an amount of time.

**Waiting Timeout (visible if use timeout is on):** This is the amount of time an agent is willing to wait.

**Destination Level:** This is the level the agent wants to go to. If the destination level is the same as the current level, the agent will go to the waiting node and exit the Take Elevator block. You can use the agent getDestinationLevel() function if you have defined a destination level for the agent beforehand.

### Actions

**On Start Waiting**: This action is triggered when the agent arrives to the waiting node.

**On Enter Elevator**: This action is triggered when the agent enters the elevator. You have the assigned elevator index available. Indexes go from 0 to n-1, where n is the number of elevators in the group.

**On Exit Elevator**: This action is triggered when the agent arrives to the waiting node.

## Take Elevator By Ped

This block has the same options as Take Elevator but doesn't have the option to use resources (so the option to define resource population at exit doesn't exist). Additionally you have to define the pedestrian aspects.

### Pedestrian Aspects

**Reach Tolerance**: this is used to define when the pedestrian gets to the waiting node destination.

**Comfortable Speed at Exit**: this will be the comfortable speed of the pedestrian when it starts to leave the elevator.

**Initial Speed at Exit**: this will be the initial speed of the pedestrian when leaving the elevator.

**Diameter at Exit:** this will be the diatmeter of the pedestrian when leaving the elevator.

## F.A.Q.

### How does the algorithm work?

When an agent arrives to the waiting node, a request is sent to the elevator group, and things will happen with the following priority:

- If an elevator is already on that level and can reach the destination, the agent is assigned that elevator
- The closest elevator that can reach the level in which the agent is on and can reach the agent destination will be chosen and moved towards the agent's level
- If an elevator stops at the agent's current level and the elevator can be boarded, the agent will use that elevator, even if another elevator was sent to that agent before

An elevator will keep moving in the same direction and picking up agents in all the levels as long as it can do so and as long as there are agents inside.

### I don't see the elevators properly in 3D

Depending on the transparency used for the elevator color, elevators might become invisible depending on other 3D objects in the scene and the angle of the camera. You can adjust the transparency to solve this. You will always see the elevators without transparency.

### I get an error saying that the agent should be located in the same network

This can happen if you define destinations incorrectly. For instance if you send a resource to level3 when the home node is in level2, it's not possible for the agent to find a route from level3 to level2 when leaving the elevator. You should be careful to send agents to the correct levels.

### Does it work with transporters?

AnyLogic just released the functionality we need for transporters to be used with their version 8.9.1, so we can now add them, but we will include them in the next version if there's interest.

### Can I define where the elevators start?

No, currently the elevators start generally at the lowest allowed level in general, but different configurations of your level might lead to different starting positions. This might be improved in the future.

### I get an error with getLevel()

The elevator waiting node, when using the process modeling library must be placed in a network. The elevator library uses the getLevel() internal function, and this function is reliable only if the node used is in a network. Make sure the waiting node belongs to one.

### My exported model doesn't work

When you export a model, it doesn't require a license, as long as you exported it with a license (both for the cloud and java export). In order to export it, you should have run the simulation model at least one time in AnyLogic with internet on, which will generate a valid licenseKey.txt file (if you purchased a license). This file must be integrated in any exported version, and to do that you need to go to resources/data/licenseKey.txt properties and turn on "Resource is referrenced from user code". This will allow the model to export the licenseKey.txt file, as you see in the following image:

![](/images/blog/elevator-group-library/usercodereference.png)
