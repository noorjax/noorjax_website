---
title: "Dynamic batches"
slug: "dynamic-batches"
date: 2019-07-02
categories: ["AnyLogic Tips"]
tags: []
excerpt: "Here's a little trick I use to generate dynamic batches, which are batches that are of dynamic size and where products that need to be batched come in a disorganized fashion.  Let's say for instance t"
---

Here's a little trick I use to generate dynamic batches, which are batches that are of dynamic size and where products that need to be batched come in a disorganized fashion.

Let's say for instance that we have to batch products in boxes, and each product has a label with the client and each box can contain products only for that client. Also the products arrive randomly and it's not possible to know to which client the next product has assigned. How can we solve this in AnyLogic?

One way is using the following structure:

[![](/images/blog/dynamic-batches/AnyLogic-Professional-2019-07-02-15-40-17.png)](/images/blog/dynamic-batches/AnyLogic-Professional-2019-07-02-15-40-17.png)

And each time a product enters the wait block, using the following code:

```java
List<Product> products = findAll(wait, p -> p.client.equals(agent.client)); // create a list of products that belong the same client as the agent that arrived

if (products.size() == agent.batchSize) { //check if the batch size is reached
    batch.set_batchSize(agent.batchSize);
    for (Product p : products) {
        wait.free(p);
    }
}
```

If you have a client agent and a fixed size for the batch, instead of using that structure, it's also possible to send the arriving agent to appropriate client through an exit block using something like to take the agent to the enter block in the right client

```java
agent.client.enter.take(agent);
```
