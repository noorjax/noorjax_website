---
title: "Your agent is too big - Memory Issue"
slug: "your-agent-is-too-big-memory-problem"
date: 2018-10-17
categories: ["AnyLogic Tips"]
tags: ["AnyLogic", "Network"]
excerpt: "Up to this date with AnyLogic 8.3, there is a bug that doesn't let you generate an agent that has too many elements. The error is caused by the code generation mechanism creating a large constructor o"
---

Up to this date with AnyLogic 8.3, there is a bug that doesn't let you generate an agent that has too many elements. The error is caused by the code generation mechanism creating a large constructor of presentation of Main, violating the Java limitation on the method size. The error thrown by AnyLogic is "The code of method doCreate() is exceeding the 65535 bytes limit".

If you open the Main agent with the java editor, you will see something like figure 1.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.29.34-300x168.png)

*Figure 1 - doCreate() method*

Basically, there can be hundreds of variables that can be embedded inside this method, and if the string of variables exceeds 65535 bytes, then you are in trouble. And you are not only in trouble because continuing building the model is impossible, but also because making changes to the model when you are close to the 65535 bytes limit becomes slow and tedious, even when you have a great computer. AnyLogic can't handle this properly.

# Business Case

In this business case, several machines need to follow some paths in a very precise order to do some work in different areas. Figure 2 shows part of the presentation in main where the number of paths, nodes and areas was crazy high. This can easily be seen in the figure.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.36.10-300x131.png)

*Figure 2 - presentation with several spacial markup elements*

This is just a small piece of the model, but you can already see a ridiculous amount of paths!!!! I don't know what other business cases you can have in which you end up having so many things in an agent. It may be a rare situation, but it can happen.

# The Solution

There are two solutions for this problem.

The first solution is to reduce the size of your variables names (for instance changing path1503 to p1503). You can save a few bytes doing that, but saving the project, making changes or moving things around will be very slow, and also you may have so many variables that reducing the size may not be enough for you. Nevertheless the solution may help you move forward and continuing the development of the model.

The second solution, which is much more elegant and useful but much more difficult, is to separate your model into several agents. As you can see in figure 2, all the paths belong to an area that has a particular color, so what needed to be done was to restructure the model and generate a new agent containing the paths associated with an area of a particular color.

So this set of agents that fit into the PLE version of AnyLogic (figure 3)

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.46.27-298x300.png)

*Figure 3 - agents used in original model*

turned into this, which can only be created in the Pro or University versions, since the PLE is limited to 10 agents.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.47.16-94x300.png)

*Figure 4 - agents used in final model*

And the purple area full of nodes in figure 2 ends up being a solitaire set of paths in one of the new agents. Still a lot of paths, but nothing problematic.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.55.07-300x156.png)

*Figure 5 - paths, nodes and rectangular nodes moved to a new agent*

Now let's remember that for an agent to move from one node to the other, both nodes have to belong to the same network, and separating the networks in different agents, will generate as many networks as agents. So we need to build a strategy in our discrete event or agent-based model using the jumpTo function when it's time to move from the node of one agent to the node of another agent. The jumpTo function is also available in the moveTo block of the Process Modeling Library by using the "is placed (jumps) to" option. So the moving entity can moveTo when it's the same network but must jumpTo when it's a different network.

# Conclusion

If you run into this problem, your case will obviously be completely different, but if you have an agent with too many elements and building your model becomes too slow, it's always better to separate your problematic agent into smaller more manageable ones. AnyLogic plans to fix this bug in version 8.4, but will they? We will see that in the future, but for the moment, this is the workaround we can use and it's also probably the best practice to use, even if the bug is solved.
