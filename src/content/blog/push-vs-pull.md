---
title: "Push vs Pull Protocols"
slug: "push-vs-pull"
date: 2019-02-27
categories: ["AnyLogic Tips"]
tags: []
excerpt: "You are developing your discrete events model, and you see your agents moving from one block to the next. Simple right? But have you stopped for a moment to ask yourself why they are even moving? What"
---

You are developing your discrete events model, and you see your agents moving from one block to the next. Simple right? But have you stopped for a moment to ask yourself why they are even moving? What is that thing that makes them move?

If you ask a beginner, the answer will come from pure intuition: "Well, if the agent is in a delay block and the delay time is over, the agent will just know that it has to move to the next block". But that answer is in fact wrong. The agent does nothing. The agent is in fact just an unanimated stone that is pushed and pulled around the process flow by the blocks themselves.

How does this happen? Well, first let's acknowledge the fact that the blocks that you find in the Process Modeling Library are nothing but agents in disguise. You have a delay agent, a queue agent, etc. And as agents do, the blocks communicate with each other. When you connect two blocks in a discrete events model, you are basically generating a communication gateway for these blocks.

There are two types of protocols. Push and Pull. In the default AnyLogic world, all the blocks use the pull protocol, with the exception of the blocks that are able to generate agents (for instance the source and enter blocks), which use the push protocol. The protocol applies to the block that is attempting to send the agent to the next block.

**Pull Protocol**: the block will notify the receiving block that there's an agent ready to exit. If the receiving block is able to receive that agent, then the agent is sent. If not, then the agent stays where it is and the receiving block will try to get it again in the future when it's able to receive something.

**Push Protocol**: the block will be pushed to the receiving block without any request. This produces errors. And these are the errors that we first discover when we start using AnyLogic for instance when there's no available space in a queue that exists after a source block. Yeah, because the source block uses push protocol as a default.

[![](/images/blog/push-vs-pull/Edit-Post-%E2%80%B9-Noorjax-Consulting-%E2%80%94-WordPress-2019-02-27-13-45-37-1030x231.png)](/images/blog/push-vs-pull/Edit-Post-%E2%80%B9-Noorjax-Consulting-%E2%80%94-WordPress-2019-02-27-13-45-37.png)

But not all the blocks are able to use the Push protocol. To find out which ones can and which ones can't, you will find a "Forced Push" option in the advanced section of the block properties.

[![](/images/blog/push-vs-pull/AnyLogic-Personal-Learning-Edition-PERSONAL-LEARNING-USE-ONLY-2019-02-27-12-53-30.png)](/images/blog/push-vs-pull/AnyLogic-Personal-Learning-Edition-PERSONAL-LEARNING-USE-ONLY-2019-02-27-12-53-30.png)

So the question now is... when to use pull or push? And there's no strict answer for that. Since the push protocol gives an error, you may use it to make it evident when there's a bottleneck somewhere in your process. Or maybe you want to use a pull protocol in the source block to destroy agents that cannot be received in a queue. In general you will not need to change the defaults, but it's always good to know why things are happening, right?
