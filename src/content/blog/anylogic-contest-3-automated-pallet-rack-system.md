---
title: "AnyLogic Contest #3 - Automated Pallet Rack System"
slug: "anylogic-contest-3-automated-pallet-rack-system"
date: 2023-02-01
categories: ["Competitions"]
tags: []
excerpt: "The contest is over and the winners are [Guilherme Heinen](https://www.linkedin.com/in/gheinen/) with [this model](https://cloud.anylogic.com/model/3026169e-edf2-495c-b99a-4bce0c2917d5?mode=SETTINGS) "
---

The contest is over and the winners are [Guilherme Heinen](https://www.linkedin.com/in/gheinen/) with [this model](https://cloud.anylogic.com/model/3026169e-edf2-495c-b99a-4bce0c2917d5?mode=SETTINGS) and [Maximilian Selmair](https://www.linkedin.com/in/maximilian-selmair-58751363/) with [this model](https://cloud.anylogic.com/model/cbe77740-8bae-4845-99be-c5f526446964?mode=SETTINGS), who acheived Level 4.

## Introduction

Pallet Racks in the industry often use automated systems to move pallets around. But AnyLogic doesn't have any built-in functionality to add these complexities to a process and modelers need to rely on the basic pallet rack features to simplify or build the functionality themselves using their own creativity and skills. This is what this contest is about.

## What you need to model

The detailed process is as follows, in which you have one pallet rack that contains 5 cells, 1 deep position and 8 levels. But ideally it should be flexible enough to change the cells and levels.

The pallet rack starts with a few pallets in arbitrary positions as shown in figure 1:

[![](/images/blog/anylogic-contest-3-automated-pallet-rack-system/competition-3-Word-2023-02-01-15.12.18-1030x580.png)](/images/blog/anylogic-contest-3-automated-pallet-rack-system/competition-3-Word-2023-02-01-15.12.18.png)

*Figure 1: Pallet Rack*

The idea is simple, and you can build this system in any way you want as long as the steps are followed correctly:

- Step 1: A pallet and an empty position are selected randomly. Both the pallet selected and the position selected need to be clearly highlighted in any way you want.
- Step 2: An automated system will move towards the selected pallet position along the X,Z plane
- Step 3: The automated system will move inside the pallet rack position along the Y axis to grab the pallet.
- Step 4: There's a delay which will define the time it takes to grab the pallet.
- Step 5: The automated system will move outside the pallet rack along the Y axis with the pallet grabbed.
- Step 6: The automated system will move along the X,Z plane to reach the empty position selected.
- Step 7: The automated system will move along the Y axis to deposit the pallet in that position.
- Step 8: There will be a delay which will define the time it takes to deposit the pallet.
- Step 9: The automated system will move outside the pallet rack along the Y axis without the pallet, which now rests in its new position
- Step 10: Go back to Step 1

Additional Notes:

- Ideally, it should be possible for the pallet rack to be rotated in any angle. Figure 2 (a and b) shows 2 examples on how the top 2D view could look like.

a) [![](/images/blog/anylogic-contest-3-automated-pallet-rack-system/Picture2.png)](/images/blog/anylogic-contest-3-automated-pallet-rack-system/Picture2.png) b) [![](/images/blog/anylogic-contest-3-automated-pallet-rack-system/Picture3.png)](/images/blog/anylogic-contest-3-automated-pallet-rack-system/Picture3.png)

*Figure 2: The pallet rack can be rotated and your simulation model should still work.*

That is all. Here are some examples to get you inspired in your design:

[Watch an example of an automated pallet rack system on YouTube](https://www.youtube.com/watch?v=3oQAvnLpIJc)

## General Rules and Limitations

- The model must work using the PLE
- You are not allowed to use any paid or private external libraries. Anything you use besides AnyLogic must be free and publicly available.
- You must provide the complete AnyLogic project, and it will be tested using the PLE, so you are not allowed to use any feature that is not present in AnyLogic PLE.

## Rewards

First know that on our previous contest, available here: [/en/blog/anylogic-contest-2/](/en/blog/anylogic-contest-2/) there were only 6 participants who submitted something, so if you do something you have a chance.

The reward is based on how many tests the model passes, which means that if you develop a model that doesn't do everything right, you still win, if nobody else does better.
The prizes are:

- **Level 1**: If your model does the basics, moving a pallet from one position to the next without any visible automated system: **$50**
- **Level 2**: If your model follows part of the 10 steps but fails to do everything perfectly: **$100** (passes some of the advanced tests)
- **Level 3**: If your model follows all 10 steps correctly without collisions or any unnatural movements: **$200** (passes all the tests)
- **Level 4**: If your model has acceleration included in some way. If you submit this level, include a brief explanation on how you implemented the acceleration: **$250**
- **Level 5**: If your model has acceleration included for all movements of the automated system and you have a maximum acceleration and a maximum speed configurable for each of these movements. If you submit this level, include a brief explanation on how you implemented the acceleration **($300). Tip added on Feb 4th: Think about deceleration aswell.**
- **Level 6**: All the previous levels, plus everything is packaged in a way that is easy to reutilize **($400)**

When you finish a level, you can submit it immediately. Then you can improve the model and submit it again with a new level. Faster submission is one of the factors to choose between ties. You can't submit the same level twice though, and only the first submission will be considered.

The prizes are paid through paypal or Payoneer. If you can only receive the payment through a bank account, you will have the bank fees deducted from the prize.

There will be theoretically only one winner, but If there is an objective tie between different models, the best 2 will be selected through the subjective decision and voting of some of the members of Noorjax and the prize will be split in 2 for both winners. For this voting there will be a semi-objective criteria, which is the level of life-experience of the winner. For instance, a school student will defeat a Master student, and a Master student will defeat someone who works professionally. Also, someone who submitted faster, will have a slight edge over someone who submitted later.

## Deadline

The deadline is on February 27th, 2023 at 00:00, UK time. Send your model and any additional files to [competition@noorjax.com](mailto:competition@noorjax.com) with the subject "competition level N", where N is the level you are submitting. Also send your Payoneer/paypal account, your linkedin profile and add anything you may want to add about yourself. Do not upload the model to the cloud until the end of the competition.
