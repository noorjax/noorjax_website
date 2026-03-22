---
title: "Use in Flowchart as... what?"
slug: "use-in-flowchart-as-what"
date: 2019-03-09
categories: ["AnyLogic Tips"]
tags: []
excerpt: "There is something beginner AnyLogic users take for granted when they build a model. For instance, when using the Process Modeling Library, they use the Agent Type. On the other hand, when they build "
---

There is something beginner AnyLogic users take for granted when they build a model. For instance, when using the Process Modeling Library, they use the Agent Type. On the other hand, when they build a model using the Pedestrian Library, they use a pedestrian type. Why? Because it's there, naturally as part of the whole library. But when you build multi-method models and you are mixing the different libraries together... what should you use? The answer may seem obvious, in most cases, but in others, you generate your agent type by creating a population. And the only way you can create a population is through the agent element present in the agent palette. And here is where things can get messed up. The following figure shows the creation of a population of people with the agent type Person.

[![](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.21.25.png)](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.21.25.png)

Can you see down there the option "Agent will be used in flowcharts as"? This is your opportunity to define what you are going to use. And why is this important? Because different libraries have different ways of dealing with agents flowing through them. And also different types have different functions. For instance a Pedestrian type will have the method setComfortableSpeed, while a normal agent uses the function setSpeed. This will generate problems because if you don't choose pedestrian in the appropriate time and choose the setSpeed in a pedestrian flowchart, the speed will not change, or it will create erratic and unexpected behavior.
If you missed your chance to choose the option when the population is created, you can still do it in the agent properties:

[![](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.22.23.png)](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.22.23.png)

# Conclusion

Not much to conclude really, but we need to understand that it is possible to choose different ways in which your agents flow on a flowchart and this changes the very properties of the agent that is flowing. Knowing this can avoid hours of debugging and a lot of frustration.
