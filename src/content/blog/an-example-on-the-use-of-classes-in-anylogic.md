---
title: "An example on the use of Classes vs Agents in AnyLogic"
slug: "an-example-on-the-use-of-classes-in-anylogic"
date: 2018-11-12
categories: ["AnyLogic Tips"]
tags: ["Class"]
excerpt: "When you are a JAVA developer, it is common to use classes to work with objects. But AnyLogic provides Agents, that are basically predefined classes with several built-in functionalities to work with "
---

When you are a JAVA developer, it is common to use classes to work with objects. But AnyLogic provides Agents, that are basically predefined classes with several built-in functionalities to work with entities in a simulation model. A beginner user will always use agents because with them it is very easy to define everything graphically. But sometimes using agents can be an overkill, an excessive use of memory, or just not really necessary. Also, the PLE version of AnyLogic has a limitation of 10 agents max, and with classes, you can always create new agents in the form of classes, which allows you to extend the model even further.

Let's create an example to get an inspiration on how to build a class and use it.

## A Model With An Agent

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.31.59-1030x154.png)

*Figure 1 - Traffic Model*

The model we are going to use is shown in figure 1. Our agents in the carSource will be defined as shown in figure 2. The fact that the car type agent is an already built-in Class in AnyLogic with several graphical and analysis features, it would be inhumane to rebuild the wheel if we already have something perfectly functional. Creating a class doesn't make any sense in this case.

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.40.11.png)

*Figure 2 - Car Agent*

## Building a Class

Let's say we want our class to be a representation of the segment that exists between these two stop lines. This class will be able to return the number of cars that are present in the segment and the number of electric cars present in it also. Figure 3 shows a variable that represents the segment that we want to use.

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.48.22.png)

*Figure 3 - variable of type RouteSegment*

The following code represents the RouteSegment class.

```java
public class RouteSegment implements Serializable {

    private int numCars = 0;

    ArrayList<Car> cars = new ArrayList();

    /**
     * Default constructor
     */
    public RouteSegment() {
    }

    @Override
    public String toString() {
        return super.toString();
    }

    public int getCars() {
        return this.numCars;
    }

    public void incrementCars(Car car) {
        this.numCars++;
        cars.add(car);
    }

    public void decreaseCars(Car car) {
        this.numCars--;
        cars.remove(car);
    }

}
```

So what this class does is:

- Storing in an array the cars that are present in the segment
- Counting the cars that are present in the segment

Instead of this class, you could eventually create a variable and an arraylist in your model and never use a class at all, but isn't this much more elegant and clear? I think it is. You could also use an Agent to do this. You can ALWAYS use an agent instead of a class, but why would you in this case? Wouldn't it be more confusing?

Let's see the code I added in the stoplines "on car passes" actions. This code is used to add and remove cars every time a car passes through a stop line.

- first stop line: `routeSegment.incrementCars((Car)car);`
- second stop line: `routeSegment.decreaseCars((Car)car);`

Now we can easily print what we need in the screen (number of cars and number of electric cars in the segment):

```java
String.format("there are %d cars from which %d are electric",routeSegment.getCars(),count(routeSegment.cars,c->c.isElectric))
```

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.59.52-1030x165.png)

*Figure 4 - Showing the results*

## Conclusions

This is an example in which I like the use of a Class, but the answer on when to use agents or classes is not so obvious. It's mostly about preference and developing style. But some of the reasons why you should definitely use classes in my opinion:

- When you are using the AnyLogic PLE and you want to add more than 10 agents
- When you want to save memory
- When you want to write elegant and clean code, accumulating all the functionalities of a particular object or abstract entity in one place
- When you want to use an agent but a class is more than enough to fulfill your goals (you can always transform the class into an agent if you change your mind later)
- When you want to create a special JAVA variable that doesn't exist (for instance a MAP with multiple keys)

[Download the model clicking here!!](/images/blog/an-example-on-the-use-of-classes-in-anylogic/classModel.zip)
