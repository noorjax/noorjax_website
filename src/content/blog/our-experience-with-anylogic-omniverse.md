---
title: "Our Experience with AnyLogic Omniverse"
slug: "our-experience-with-anylogic-omniverse"
date: 2025-06-07
categories: ["AnyLogic Tips"]
tags: []
excerpt: "## Why This Article?  One of the main technical reasons using AnyLogic has been rejected by clients in the past years has been 3D visualizations, overpowered by other simulation Software such as FlexS"
---

## Why This Article?

One of the main technical reasons using AnyLogic has been rejected by clients in the past years has been 3D visualizations, overpowered by other simulation Software such as FlexSim or Visual Components. This was true not for big projects in which you wanted a true decision making tool, but when you needed a 3D demo to impress people or observe detailed equipment in action.

We wanted to write down our own experience using Omniverse and compare it with FlexSim... but FlexSim has an omniverse connection too, so the comparison is no longer fair.

Finally, as it wasn't so easy to configure the Omniverse with the information provided in the help documentation, we made our own, that you can download here:
**[how to configure](/images/blog/our-experience-with-anylogic-omniverse/how-to-configure-1.pdf)**

***IMPORTANT* the configuration steps are not valid as the Omniverse Launcher will be deprecated. Use the documentation if you already downloaded the Launcher, in the future we will update this with the new steps****

## Introduction - Impressive 3D animations are now not a problem

NVIDIA Omniverse feature has been recently added to the toolbox of Anylogic, to improve 3D visualization of simulation models created beforehand in Anylogic. This integration enables real-time rendering and highly realistic visuals. This connection opens powerful possibilities:

- **One-click rendering** – You can export an already-built Anylogic model into Omniverse with minimal effort, instantly bringing it into a high-fidelity 3D environment.

- **Full 3D customization** – Every rendered object, whether static or dynamic (e.g., mobile agents), can be modified in Omniverse with high realism, including materials, textures, lighting, and animations.

- **Real-time simulation playback with ultra-realistic visuals** – Run your model in Anylogic while visualizing it in Omniverse, taking advantage of cinematic-level graphics and even virtual reality support

## Our Personal experience

This experience started negatively, with a very powerful ThinkPad X1 Carbon Gen 10 with an Intel Iris Xe Graphics card, which was purchased as one of the best computers to work with AnyLogic, 2 years ago when GPU didn't matter. But with this graphic card it is not possible to use Omniverse, making this computer that used to be top-notch, not an option for this new feature. We continued trying with a different computer with better GPU: a machine with a 13th Gen Intel Core i7-1360P and an NVIDIA RTX A500 Laptop GPU (4 GB) .

The learning curve for Omniverse is steep if you want to use its full potential. It requires more thorough documentation review and more powerful hardware (minimum 6 GB GPU, with 10 GB recommended), which may present a barrier for certain users or projects. Simulation speed also depends heavily on the system's GPU and CPU. In one test using the Roundabout model from AnyLogic Cloud, we experienced a drop in simulation speed to about 33% when running live in USD Composer compared to running in AnyLogic alone. In contrast, a similar test using an Intel Core Ultra 7 155H and an NVIDIA RTX 1000 Ada Generation Laptop GPU (6 GB) showed minimal performance impact—suggesting that GPU architecture plays a key role when other system components are similar.

Omniverse, as a rendering engine for simulations built in AnyLogic, offers significant visual potential—especially in terms of realism and 3D object detail – enhancing quite a lot the Anylogic 3D baseline. With access to thousands of objects and materials, it allows users to easily replace AnyLogic's default assets and achieve a much higher level of visual fidelity. This capability, combined with extremely realistic rendering (e.g. grass appearing detailed at a granular level), makes Omniverse a strong choice for visually compelling presentations or scenarios where aesthetics and immersion are important.

However, the integration also comes with limitations. For instance, changes in object colors during runtime are not reflected in Omniverse, which can be restrictive when trying to represent dynamic data visually or to validate. Additionally, it does not support GIS views or KPI charts, and any change in the simulation model requires a new render—slowing down the iterative workflow.

Additionally, Omniverse only allows customization of individual parts if the 3D model is composed of separate elements (prims). For example, objects imported from AnyLogic, such as a car.dae model, cannot have their doors or wheels recolored individually unless they were originally modeled as distinct components—requiring external 3D editing beforehand.

Regarding physics, Omniverse theoretically supports wind, gravity, and other physical animations, though practical implementation is not always straightforward. Animating operators or people (and their movements) is also not as seamless. In some cases, defined movements in the simulation logic do not carry over correctly to the 3D scene, some examples are:

- Only the pallet moves, but not the box placed on top of it.

- Multi-joint animations, like a robotic arm, may not behave as expected or not move at all.

- Fluids will not be animated.

Finally, the idea of people moving naturally in the scene is still something we haven't been able to make it work, so if it's not impossible, it's at least hard to do.

## Conclusion

The NVIDIA Omniverse rendering option for Anylogic is for sure a good new tool! especially for demonstrations purposes and proof of concept models, enhancing the visualization level considerably. In many cases we have had requests to only render videos of models as demonstration and now we can do it significantly better. In other cases, clients have had interest on the visual level of other tools, which we can now easily reach. As we expect this tool to get even better in the future, we can only wait for what else will be possible.

*Written by Joaquin Guzman and Felipe Haro*
