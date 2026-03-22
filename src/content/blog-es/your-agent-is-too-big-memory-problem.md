---
title: "Tu agente es demasiado grande - Problema de Memoria"
slug: "your-agent-is-too-big-memory-problem"
date: 2018-10-17
categories: ["AnyLogic Tips"]
tags: ["AnyLogic", "Network"]
excerpt: "Hasta esta fecha con AnyLogic 8.3, hay un bug que no te permite generar un agente que tiene demasiados elementos. El error es causado por el mecanismo de generacion de codigo creando un constructor grande de presentacion de Main, violando la limitacion de Java sobre el tamano del metodo."
---

Hasta esta fecha con AnyLogic 8.3, hay un bug que no te permite generar un agente que tiene demasiados elementos. El error es causado por el mecanismo de generacion de codigo creando un constructor grande de presentacion de Main, violando la limitacion de Java sobre el tamano del metodo. El error lanzado por AnyLogic es "The code of method doCreate() is exceeding the 65535 bytes limit".

Si abres el agente Main con el editor de Java, veras algo como la figura 1.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.29.34-300x168.png)

*Figura 1 - metodo doCreate()*

Basicamente, puede haber cientos de variables que pueden estar incrustadas dentro de este metodo, y si la cadena de variables excede los 65535 bytes, entonces estas en problemas. Y no solo estas en problemas porque continuar construyendo el modelo es imposible, sino tambien porque hacer cambios al modelo cuando estas cerca del limite de 65535 bytes se vuelve lento y tedioso, incluso cuando tienes una gran computadora. AnyLogic no puede manejar esto adecuadamente.

## Caso de Negocio

En este caso de negocio, varias maquinas necesitan seguir algunos caminos en un orden muy preciso para hacer algun trabajo en diferentes areas. La Figura 2 muestra parte de la presentacion en main donde el numero de caminos, nodos y areas era increiblemente alto. Esto puede verse facilmente en la figura.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.36.10-300x131.png)

*Figura 2 - presentacion con varios elementos de marcado espacial*

Esto es solo una pequena parte del modelo, pero ya puedes ver una cantidad ridicula de caminos!!!! No se que otros casos de negocio puedes tener en los que termines teniendo tantas cosas en un agente. Puede ser una situacion rara, pero puede pasar.

## La Solucion

Hay dos soluciones para este problema.

La primera solucion es reducir el tamano de los nombres de tus variables (por ejemplo cambiando path1503 a p1503). Puedes ahorrar algunos bytes haciendo eso, pero guardar el proyecto, hacer cambios o mover cosas sera muy lento, y tambien puedes tener tantas variables que reducir el tamano puede no ser suficiente para ti. Sin embargo, la solucion puede ayudarte a avanzar y continuar el desarrollo del modelo.

La segunda solucion, que es mucho mas elegante y util pero mucho mas dificil, es separar tu modelo en varios agentes. Como puedes ver en la figura 2, todos los caminos pertenecen a un area que tiene un color particular, asi que lo que se necesitaba hacer era reestructurar el modelo y generar un nuevo agente conteniendo los caminos asociados con un area de un color particular.

Asi que este conjunto de agentes que caben en la version PLE de AnyLogic (figura 3)

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.46.27-298x300.png)

*Figura 3 - agentes usados en el modelo original*

se convirtio en esto, que solo puede crearse en las versiones Pro o University, ya que el PLE esta limitado a 10 agentes.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.47.16-94x300.png)

*Figura 4 - agentes usados en el modelo final*

Y el area morada llena de nodos en la figura 2 termina siendo un conjunto solitario de caminos en uno de los nuevos agentes. Aun muchos caminos, pero nada problematico.

![](/images/blog/your-agent-is-too-big-memory-problem/Screen-Shot-2018-10-17-at-14.55.07-300x156.png)

*Figura 5 - caminos, nodos y nodos rectangulares movidos a un nuevo agente*

Ahora recordemos que para que un agente se mueva de un nodo a otro, ambos nodos tienen que pertenecer a la misma red, y separar las redes en diferentes agentes, generara tantas redes como agentes. Asi que necesitamos construir una estrategia en nuestro modelo de eventos discretos o basado en agentes usando la funcion jumpTo cuando sea momento de moverse del nodo de un agente al nodo de otro agente. La funcion jumpTo tambien esta disponible en el bloque moveTo de la Process Modeling Library usando la opcion "is placed (jumps) to". Asi que la entidad en movimiento puede usar moveTo cuando es la misma red pero debe usar jumpTo cuando es una red diferente.

## Conclusion

Si te encuentras con este problema, tu caso obviamente sera completamente diferente, pero si tienes un agente con demasiados elementos y construir tu modelo se vuelve demasiado lento, siempre es mejor separar tu agente problematico en otros mas pequenos y manejables. AnyLogic planea corregir este bug en la version 8.4, pero lo haran? Veremos eso en el futuro, pero por el momento, esta es la solucion alternativa que podemos usar y probablemente tambien es la mejor practica a usar, incluso si el bug es solucionado.
