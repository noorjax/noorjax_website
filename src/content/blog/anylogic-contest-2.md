---
title: "AnyLogic Contest #2 - Forklift Transportation"
slug: "anylogic-contest-2"
date: 2022-04-22
categories: ["Competitions"]
tags: []
excerpt: "The competition is over with the winner** [Maximilian Selmair](https://www.linkedin.com/in/maximilian-selmair-58751363/) a**s the winner, winning $200 with the best model at level 2.  **Thanks to all "
---

The competition is over with the winner [Maximilian Selmair](https://www.linkedin.com/in/maximilian-selmair-58751363/) as the winner, winning $200 with the best model at level 2.

**Thanks to all the other participants**

**Level 2**
[Elie Abboud](https://www.linkedin.com/in/ACoAADPgibABSneiS3WNcGsyrHsvpBhv6NlJweU)
[Patrick Wöhe](https://www.linkedin.com/in/ACoAACh74QgBM9VlFVEawfE0kK8aTDALV-c1i0g)
[Aqeel Tariq](https://www.linkedin.com/in/ACoAADU1jfEBK82s0tPMXgniPDxgfoUQ3iBvYqc)

**Level 1**
[Ankit Sahay](https://www.linkedin.com/in/ACoAABfMJ-sB-656smroL3P3Iw2Zm4q2iDDK-pw)
[Gonzalo Vladimir Contreras Martinez](https://www.linkedin.com/in/ACoAAAb-wx4BNcwB0Cs9F6T-wosvlPjDQcZBg0w)

[Watch the contest video on YouTube](https://www.youtube.com/watch?v=DlLDtWu0vBo)

## Introduction

One of the most common processes in any warehouse is the movement of objects using forklifts, and these forklifts are operated by operators. In this type of process, operators are trained to handle different types of forklifts, which, in turn, are designed to transport certain types of objects.

Despite being a relatively frequent problem, AnyLogic blocks do not offer an obvious solution for this, so you will need to be creative to solve the puzzle.

## What you need to model

The detailed process is as follows, in which there are 4 areas of interest: the product arrival location, the operators home location, the forklifts home location and the destination location.

- Different types of products arrive at the product arrival location with a defined arrival rate.

- When a product arrives, an idle operator must find a forklift to transport this product, walk towards the forklift, and drive the forklift towards the product, pick it up and transport it to the destination location.

- The chosen operator must be capable of operating this type of forklift. There are many operator types, and each one of them is trained to operate a subset of these forklift types.

- The chosen forklift must be capable of transporting this type of product. There are many forklift types, and each one of them is built to transport a subset of these product types.

Upon arrival at the destination, the product should be dropped off (and it can be discarded) and something natural should happen according to what we would expect to happen in real life, for example:

If there are no more pallets that can be transported with the current forklift at the arrival location, the operator will drive the forklift towards the forklifts home location, where he must evaluate if there is another type of load that he can transport using a different type of forklift:

- If there is, the operator will grab the specific forklift and transport the product towards the destination location

- If there is not, the operator will walk back to the operator's home location.

- If there are more pallets at the arrival location that can be transported with the same forklift, the operator must remain on the current forklift and go to the arrival location to transport the product to the destination location.

The examples 5.a and 5.b are just two possible situations, and there are many others that can occur, and it is the job of the simulation modeler to be able to identify all those cases and evaluate what is the most natural thing an operator would do if something strange happened. The assumption is that all operators have perfect information and perfect communication with each other.

For instance, if there's no product, and one operator is driving back the forklift to the forklift's home location, and a new product arrives that can be transported with that same forklift, what would the operator do?

- One option is to change his mind, and stop moving back to the forklift location, and instead start moving towards the product to transport it.

- Another option is for a different operator to walk towards an available forklift to transport that product.

- Options 1 and 2 are completely natural, but a bad solution would be for the operator to get back to the forklift's home location and move to a different forklift instead of staying in the same forklift, if that forklift can transport that product type.

## Model Structure

We are providing a model structure to get you started, but you are absolutely allowed to change everything as long as you follow the previously discussed requirements. There will be no explanation for that model so if you want to use it, you should be able to understand it by yourself.

The helper model has the following database structure, but if you want to start from scratch, you can change that structure as long as it contains the same information.

### Product Types

Each product type must have an ID, a name for the product type and an arrival rate. We will test the model by adding/removing any amount of product types.

| id | product type | arrival rate (per hour) |
|----|-------------|------------------------|
| 1  | small       | 10                     |
| 2  | medium      | 20                     |
| 3  | big         | 30                     |

### Forklift Types

Each forklift type must have an id, a name, the number of available forklifts for the type and a collection that contains all the product types that the forklift can transport. We will test the model by adding/removing any amount of forklift types. On the following example, there is only 1 electric forklift available, and this electric forklift can take products 1 and 2 (small and medium).

| Forklift Id | Forklift type | available | products Ids that it can take |
|-------------|--------------|-----------|-------------------------------|
| 1           | electric     | 1         | {1,2}                         |
| 2           | manual       | 2         | {1}                           |
| 3           | heavy        | 1         | {2,3}                         |

### Operator types

Each operator type must have an id, a name, the number of available operators for the particular type, and a collection of all the forklifts that operator type can operate. We will test the model by adding/removing any amount of operator types. On the following example, there are two senior operators available, and senior operators can use forklifts 1 and 3 (electric and heavy).

| id | operator type | available | possible forklifts |
|----|--------------|-----------|-------------------|
| 1  | senior       | 2         | {1,3}             |
| 2  | junior       | 2         | {2}               |
| 3  | external     | 2         | {3}               |

## General Rules and limitations

- The model must work using the PLE

- You are not allowed to use any paid or private external libraries. Anything you use besides AnyLogic must be free and publicly available.

- You must provide the complete AnyLogic project, and it will be tested using the PLE, so you are not allowed to use any feature that is not present in AnyLogic PLE.

- You are allowed to use resources, transporters, or anything else

## Rewards

First know that on our previous contest, available here: [/en/blog/anylogic-contest-1/](/en/blog/anylogic-contest-1/) there were only 5 participants and there were 2 winners with models that could be significantly improved, so there's a chance if you compete.

The reward is based on how many tests the model passes, which means that if you develop a model that doesn't do everything right, you still win, if nobody else does better.

The prices are:

- Level 1: If your model does the basics, moving products around using the correct operator and correct forklift: **$100** (passes basic tests)

- Level 2: If your model does most of things great, but some things not so well: **$200** (passes some of the advanced tests)

- Level 3: If your model does everything great, with smart and natural operator's decisions: **$300** (passes all the tests)

- Level 4: If your model does everything great and passes all the tests, but also shows very clearly the different types of products/operators/forklifts with a legend making it easy to have a good visual experience of the model and you take care of the user interface and maybe even show some graphs: **$400**

- Level 5: If all the previous points are met, but you go above and beyond by showing a professional work that is flexible and can be expanded to use multiple arrival locations, multiple home locations and/or multiple destination locations: **$500**

When you finish a level, you can submit it immediately. Then you can improve the model and submit it again with a new level. Faster submission is one of the factors to choose between ties. You can't submit the same level twice though, and only the first submission will be considered.

The payment will be done ONLY using either Paypal or Payoneer. If you don't have these, you can select a set of Noorjax available courses and get them for free.

If you are able to reach level 4, and you want to do a paid internship at Noorjax, you will be eligible to do so.

There will be theoretically only one winner, but If there is an objective tie between different models, the best 2 will be selected through the subjective decision and voting of some of the members of Noorjax and the prize will be split in 2 for both winners. For this voting there will be a semi-objective criteria, which is the level of life-experience of the winner. For instance, a school student will defeat a Master student, and a Master student will defeat someone who works professionally. Also, someone who submitted faster, will have a slight edge over someone who submitted later.

## Deadline

The deadline is on May 21st 2022, 23:59, UK time. Send your model and any additional files to [competition@noorjax.com](mailto:competition@noorjax.com) with the subject "competition level N", where N is the level you are submitting. Also send your Payoneer/paypal account, your linkedin profile and add anything you may want to add about yourself. Do not upload the model to the cloud until the end of the competition.

DOWNLOAD THE MODEL SKELETON HERE

[Forklift Contest - Official](/images/blog/anylogic-contest-2/Forklift-Contest-Official.zip)
