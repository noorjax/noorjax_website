---
title: "Agent-Based, Discrete-Events and System Dynamics"
slug: "simulationparadigms"
date: 2018-09-20
categories: ["Simulation Concepts"]
tags: ["Agent-Based", "Discrete-Events", "Multi-Methods", "Simulations", "System Dynamics"]
excerpt: "Before I start, don't expect me to explain all these methodologies in detail since there is already a lot of material on the web that can help you. Wikipedia is good starting point with the following "
---

Before I start, don't expect me to explain all these methodologies in detail since there is already a lot of material on the web that can help you. Wikipedia is good starting point with the following links if you are interested in the technical details:

- [System Dynamics](https://en.wikipedia.org/wiki/System_dynamics)

- [Discrete Events](https://en.wikipedia.org/wiki/Discrete_event_simulation)

- [Agent-Based](https://en.wikipedia.org/wiki/Agent-based_model)

In business, industrial and socio-economic settings, System Dynamics, Discrete-Events and Agent-Based are the three simulation paradigms that are most commonly used. And there are still people who study these methods separately and develop their models using only one of them no matter the problem at hand. And this is relatively possible. In fact you can build any mathematical model that represents reality with any of these techniques, and if you make the wrong choice, the consequence is a model that lacks on details, takes too much time to develop, runs too slowly, or is just too detailed and difficult to analyze. So what are my thoughts on this?

# Simulations

When I talk about simulations, what do I really mean? The question I get asked 99% of the time is: "what kind of simulations?", which is a very obvious question to ask considering the ambiguity of the word itself, but unfortunately a very difficult one to answer. Let's talk then about simulations that are not covered by these three methodologies, or in other words, not covered by AnyLogic, which is the Software I use.

- **Electronics**: nobody builds a new electronic board without simulating the interactions between the different electronic components. For this you need an industry-specific Software such as [Micro-Cap](http://www.spectrum-soft.com/index.shtm).

- **Engineering**: what about simulating a new product and submit it to different stress scenarios, or a building structure to simulate an earthquake, or analyze the interaction between quantum particles. If you are doing an engineering project, you would probably want to use [Ansys](https://www.ansys.com/).

- **Realistic Digital Simulations**: For instance, simulating computationally the water flowing realistically on a waterfall. In this case you might need [Real Flow.](http://www.nextlimit.com/realflow/)

- **Gaming**: the game industry is nothing but simulations with artificial intelligence. But if you want to develop a sophisticated game, you might want to try [Unity](https://unity3d.com/).

- **Tech simulations**: before implementing a complex algorithm in robots or industrial machines you may want to use [Matlab](https://www.mathworks.com/products/matlab.html) to test its performance.

- **Training Simulations**: Using Software such as [Lectora](https://www.trivantis.com/), you can simulate simplistic scenarios that describe a certain story or process that you want a student to follow to learn a particular topic.

- Other type of simulations that I probably don't even know exist or I just forgot.

So what do I mean by simulations then?
There is no straight forward answer to this question since I have been involved in projects that are borderline off-topic. But a few examples that can resonate with you are:

- Logistics (Airports, Distribution Centers, Warehouses, etc)

- Supply Chain (distribution networks, deliveries, route optimization, etc)

- Manufacturing

- Business Processes (if a process exists, a simulation of that process can be created)

- Entities interacting with each other (people, animals, machines, etc)

- Transportation (cars, trains, boats, planes etc)

- Mining

- Fluid dynamics (water, other fluids or bulk material)

- Strategic development of a business (marketing, customer satisfaction, added value, happiness)

- Market dynamics (market behavior, selling, buying)

- Monte-Carlo Simulations (Risk Analysis, Variance Analysis)

- Socio-Economics (Impact of country policies, effectiveness of local social strategies)

- Optimization

- And many other things...

So how can you know if you should use simulations or not for your application? Well... If you are not in any of these lists, you just have to ask a consultant. Sometimes it requires some time to evaluate the right tool to use for a particular problem, and sometimes simulations are not the best way to go.

If you want a Freelancer or a consulting company to develop your project, you can stop reading here. In the next paragraphs I want to talk a bit about how I learned this craft, how I conceptually handle my models and what you need to become a great simulation modeler.

# A bit on System Dynamics

Even though I was already doing simulations in the gaming, electronics and tech world since the early 2000s, I discovered System Dynamics using Software as [IThink](https://www.iseesystems.com/) and [Vensim](http://vensim.com/) during my Masters degree in 2011. And it felt as you could do anything with it using only stocks, flows and variables. Such a simple and elegant method seemed to be enough to solve the most complex strategic problems of the world, and it was mind blowing but also hard to buy as a stand-alone concept. I spent a year and a half doing nothing but System Dynamic models, and even though the concepts of Agent Based and Discrete Events were touched in a very small degree, in this community there was a huge bias into developing everything with nothing but System Dynamics. In today's industry, System Dynamics is rarely used beyond the academic world, even though it is quite a powerful method. During a project with PwC in 2013, I had the chance to use AnyLogic and was exposed for the first time to the magic of Discrete Events and Agent Based. I felt in love with AnyLogic at that point and never stopped using it till today.

# A bit on Discrete Events Simulations

After almost two years developing exclusively System Dynamic models, I started working as a supply chain consultant and I developed models exclusively using discrete events. This was a big conceptual change, but I also discovered that doing discrete-events simulations was so much easier conceptually and much more comfortable for most industrial applications, in particular in the supply chain industry. This is the moment when I started learning every little detail of the Process Modeling Library (PML) of AnyLogic, reading the help documentation entirely, and writing down what I call the tree of knowledge that constitutes the order in which you have to learn everything to be able to successfully develop an understanding of the methodology: for instance a pre-requisite to even start developing simulations using the PML, is to understand the poisson and exponential distributions. I currently use this tree of knowledge to teach others.

# A bit of Agent-Based Modeling

I used to be scared about using agent-based simulations. I always said I knew how to do them, but I never really practiced it, so I decided that no matter what discrete-events project I would do, I was always going to do the same model using agent-based, learning on my own. And that's what I did. Every project took me twice as much time, but I was learning tons, had 2 versions of every model, and this helped me validate them easily. And one day, I was not biased into choosing any method anymore. Agent-Based modeling is quite different and requires tons of programming, and good debugging abilities. It's a method that requires a deep care of details.

# Multi-Method Modeling

So what to do when you are familiar and proficient with these three methods? Then it's time to forget about them and start building everything based on the particular needs of the project without being biased into the methodology itself. In a way, AnyLogic provides several tools that you can use freely, and you stop thinking about using one of these three methods, but instead you use the tools available. We can't forget that the number of ways in which you can build a model is practically infinite, and no two simulation modelers will create the exact same model for one particular problem, but it doesn't matter, the results are the same if everything is done with good practices.

# Is this all?

No. These three methods are only a general base to develop multi-method simulations. But you need many other abilities that only come with years of practice: designing effective experiments, statistics, data collection, data cleaning, databases, the different tools associated with fluids, pedestrians, trains, cars and material handling, presentation and user interface, 2D and 3D modeling, Autocad, art, influencing others, communication, transforming an abstract business concept into a technical document, asking the right questions and much more. The requirements to be a good simulation modeler are sometimes overwhelming and it's my job to do all this to the best of my abilities, ask for help if something is out of my domain, and teach others how to do it too.
