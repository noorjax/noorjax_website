---
title: "Usar en diagrama de flujo como... que?"
slug: "use-in-flowchart-as-what"
date: 2019-03-09
categories: ["AnyLogic Tips"]
tags: []
excerpt: "Hay algo que los usuarios principiantes de AnyLogic dan por sentado cuando construyen un modelo. Por ejemplo, cuando usan la Process Modeling Library, usan el Agent Type. Por otro lado, cuando construyen "
---

Hay algo que los usuarios principiantes de AnyLogic dan por sentado cuando construyen un modelo. Por ejemplo, cuando usan la Process Modeling Library, usan el Agent Type. Por otro lado, cuando construyen un modelo usando la Pedestrian Library, usan un tipo pedestrian. Por que? Porque esta ahi, naturalmente como parte de toda la biblioteca. Pero cuando construyes modelos multi-metodo y estas mezclando las diferentes bibliotecas juntas... que deberias usar? La respuesta puede parecer obvia, en la mayoria de los casos, pero en otros, generas tu tipo de agente creando una poblacion. Y la unica forma en que puedes crear una poblacion es a traves del elemento agent presente en la paleta de agentes. Y aqui es donde las cosas pueden complicarse. La siguiente figura muestra la creacion de una poblacion de personas con el tipo de agente Person.

[![](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.21.25.png)](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.21.25.png)

Puedes ver ahi abajo la opcion "Agent will be used in flowcharts as"? Esta es tu oportunidad de definir lo que vas a usar. Y por que es esto importante? Porque diferentes bibliotecas tienen diferentes formas de manejar agentes que fluyen a traves de ellas. Y tambien diferentes tipos tienen diferentes funciones. Por ejemplo un tipo Pedestrian tendra el metodo setComfortableSpeed, mientras que un agente normal usa la funcion setSpeed. Esto generara problemas porque si no eliges pedestrian en el momento apropiado y eliges el setSpeed en un diagrama de flujo de peatones, la velocidad no cambiara, o creara un comportamiento erratico e inesperado.
Si perdiste tu oportunidad de elegir la opcion cuando se creo la poblacion, aun puedes hacerlo en las propiedades del agente:

[![](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.22.23.png)](/images/blog/use-in-flowchart-as-what/Screen-Shot-2019-03-09-at-12.22.23.png)

## Conclusion

No hay mucho que concluir realmente, pero necesitamos entender que es posible elegir diferentes formas en las que tus agentes fluyen en un diagrama de flujo y esto cambia las propiedades mismas del agente que esta fluyendo. Saber esto puede evitar horas de depuracion y mucha frustracion.
