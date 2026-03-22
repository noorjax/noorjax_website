---
title: "Lotes dinámicos"
slug: "dynamic-batches"
date: 2019-07-02
categories: ["AnyLogic Tips"]
tags: []
excerpt: "Aquí hay un pequeño truco que uso para generar lotes dinámicos, que son lotes de tamaño dinámico y donde los productos que necesitan ser agrupados llegan de manera desordenada."
---

Aquí hay un pequeño truco que uso para generar lotes dinámicos, que son lotes de tamaño dinámico y donde los productos que necesitan ser agrupados llegan de manera desordenada.

Digamos, por ejemplo, que tenemos que agrupar productos en cajas, y cada producto tiene una etiqueta con el cliente y cada caja solo puede contener productos para ese cliente. Además, los productos llegan aleatoriamente y no es posible saber a qué cliente tiene asignado el siguiente producto. ¿Cómo podemos resolver esto en AnyLogic?

Una forma es usando la siguiente estructura:

[![](/images/blog/dynamic-batches/AnyLogic-Professional-2019-07-02-15-40-17.png)](/images/blog/dynamic-batches/AnyLogic-Professional-2019-07-02-15-40-17.png)

Y cada vez que un producto entra en el bloque wait, usando el siguiente código:

```java
List <Product> products=findAll(wait,p->p.client.equals(agent.client)); // crear una lista de productos que pertenecen al mismo cliente que el agente que llegó

if(products.size()==agent.batchSize){ //verificar si se alcanzó el tamaño del lote
    batch.set_batchSize(agent.batchSize);
    for(Product p :products){
        wait.free(p);
    }
}
```

Si tienes un agente cliente y un tamaño fijo para el lote, en lugar de usar esa estructura, también es posible enviar el agente que llega al cliente apropiado a través de un bloque exit usando algo como esto para llevar al agente al bloque enter en el cliente correcto

```java
agent.client.enter.take(agent);
```
