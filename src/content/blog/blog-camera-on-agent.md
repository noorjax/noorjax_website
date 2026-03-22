---
title: "Camera Inside an Agent - Possible Problems"
slug: "blog-camera-on-agent"
date: 2022-01-25
categories: ["AnyLogic Tips"]
tags: ["System Dynamics"]
excerpt: "# Placing a Camera on an Agent  ## The Importance of 3D Animations  We all know what 3D animation is, but little is said about how useful it is for the modeler and the stakeholders. An animation can a"
---

# Placing a Camera on an Agent

## The Importance of 3D Animations

We all know what 3D animation is, but little is said about how useful it is for the modeler and the stakeholders. An animation can act as a tool for the modeler to correct errors during the development phase, giving access to things that are not available by just using the process logic. In the same way, the parties involved also benefit from this animation, since they can validate that what is being done is correct or incorrect, allowing them to improve the specifications of the process in the software or even identify opportunities for improvement.

In this article we will talk about how to solve some common errors when placing the camera in an agent in order to have a good visualization of our model.

## Role of the camera in a 3D animation

In Anylogic, once the 3D objects are integrated in our model, we must be able to show the animation we created. This can be done using the "3D Window" objects, since they allow us to show scenes or frames of our animation. Now, to display specific sections of our model from a particular perspective, it is essential to use the "Camera" object, which allows us to define a specific frame of our model that we want to observe from a certain angle and coordinates.

It is well known, due to Anylogic's documentation, how a camera can be linked to a 3D Window object. This can be selected in a fixed way in the 3D Window properties where it says "camera:" connected with the name of the created camera or it can also be selected as "Not Specified" which allows the user to program in Java the camera that will be used for that 3D frame according to any necessary criteria.

## Following a target during simulation, how to do it and possible drawbacks

Among the possibilities, we may want to follow an object that moves during our simulation, which could be a box moving through conveyor belts in a distribution center or perhaps a person walking inside a constructed building or simply a car being driven through the streets of a busy area, whatever the case, we must be able to identify the instance of the specific agent we want to track and, consequently, the type of agent.

Let's think about the case of cars driving towards a parking floor and then returning to their starting point. In this case the agent would be of type "Car" and the instances of this agent could be multiple, which can be identified in the population "cars". To place a camera that records any car within our car population, we simply go to the window of our agent type "Car" and set up a camera that can record our vehicle as shown in figure 1.

[![](/images/blog/blog-camera-on-agent/Picture1.png)](/images/blog/blog-camera-on-agent/Picture1.png)

*Figure 1 - Camera behind a car*

By default, our animation will be in the coordinates (0,0,0) in our "Car" window, so we can place the camera in (-60, 0, 15) so that it is 6 meters behind our car and 1.5 meters above the height at which the car is (calculated based on the distance scale).

Now we need to call that camera in our Main window, and for it, we can create a button or an event in the agent in which the car population lives (for instance Main), that fixes the view of the camera in our 3D Window. For it we must write the following code:

```java
window3d.setCamera(cars.random().camera, true);
```

This way, our "window3d" will have as a view the "camera" of a random car of our created car population and will follow its trajectory since the option to follow the object is set to **true**.

At this point we may want to see the 3D window with the model running, but there are two possible drawbacks:

- That we have no car in our simulation when we execute the action, which will cause an error
- That the camera is not displaying what it should be displaying, and this error is not necessarily due to the position of the camera in our Car window (although it can be a reason).

To solve the first error, you can use try/catch as follows:

```java
try {
    window3d.setCamera(cars.random().camera, true);
} catch (Exception e) {
    //do something to tell the user that there is no car available
}
```

And to solve the second error, we must make sure that we have a presentation in the parent agent. Then, the presentation of our agent must be in the origin coordinates (0,0,0) of the parent agent, otherwise the camera will have an unpleasant offset that will depend on how far the animation object of the car is and the scale of the parent agent. The car object must be placed at the origin (0,0,0) as shown in figure 2:

[![](/images/blog/blog-camera-on-agent/Picture2.png)](/images/blog/blog-camera-on-agent/Picture2.png)

*Figure 2 - Agent position in parent agent*

*Written by Joaquin Guzman.*
