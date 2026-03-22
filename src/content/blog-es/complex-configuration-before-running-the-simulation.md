---
title: "Configuración compleja antes de ejecutar la simulación"
slug: "complex-configuration-before-running-the-simulation"
date: 2018-10-18
categories: ["AnyLogic Tips"]
tags: []
excerpt: "¿Alguna vez has estado en una situación en la que quieres generar un escenario complejo en el experimento de simulación pero no tienes idea de cómo hacerlo?  Hay características en AnyLogic que requieren que el model"
---

¿Alguna vez has estado en una situación en la que quieres generar un escenario complejo en el experimento de simulación pero no tienes idea de cómo hacerlo?

Hay características en AnyLogic que requieren que el modelo de simulación esté en modo de ejecución para funcionar y no estarán disponibles en la pantalla de configuración del experimento de simulación, ni en ningún otro experimento. Por ejemplo, es posible que quieras generar puntos GIS en el mapa antes de ejecutar la simulación, o puede que necesites generar y modificar agentes antes de que la simulación comience. ¿Cómo lo haces entonces sin definir todo en un Software externo o intentar escribir todo en una base de datos o Excel?

Hay dos soluciones posibles, y aunque no me gusta ninguna de ellas, hay una mejor que la otra.

## El Caso de Negocio

Hagamos un caso de negocio obvio. Imagina que el usuario de la simulación (tu cliente, jefe o profesor) quiere que definas las geolocalizaciones de un centro de distribución como parámetros del modelo. Si quieres definirlos antes de que la simulación comience, tu mejor opción es usar un archivo shape, o definir latitud y longitud en una base de datos.

Pero el usuario puede no estar seguro de dónde se ubicarán estos centros de distribución, y puede querer un sistema flexible donde pueda hacer clic en el mapa y definir la posición de los centros de distribución allí, y luego guardar lo que se hizo en una base de datos para uso posterior. Desafortunadamente, ni siquiera puedes poner el mapa en el experimento de simulación (figura 1). Entonces, ¿qué hacer ahora?

![](/images/blog/complex-configuration-before-running-the-simulation/Screen-Shot-2018-10-18-at-16.16.42-300x163.png)

*Figura 1 - Mapa GIS no permitido en el experimento de simulación*

Está claro que tu única opción es generar el mapa en Main. Tu primer pensamiento podría ser entonces pausar la simulación inmediatamente después de ejecutarla. Al hacer esto, permites que el usuario comience a agregar centros de distribución en el tiempo cero. El usuario luego hará clic en algún botón nuevo para ejecutar la simulación de verdad después de que termine de configurar todo. En este punto estás casi obligado a crear tus agentes (lo más probable es que un centro de distribución se defina como un agente) inmediatamente cuando el usuario hace clic en el mapa (figura 2).

![](/images/blog/complex-configuration-before-running-the-simulation/Screen-Shot-2018-10-18-at-16.42.13-300x159.png)

Figura 2 - Dos centros de distribución agregados al mapa haciendo clic en él.

¡Pero espera! Si permites que el usuario agregue centros de distribución, desde una perspectiva de usabilidad, también necesitarás incluir la función para eliminarlos. Pero si la simulación está pausada y el centro de distribución está definido como un agente, AnyLogic no eliminará los agentes cuando el usuario haga clic en el botón "detener simulación", así que si el usuario quiere volver a la página de configuración del experimento de simulación, aparecerá el error de la figura 3.

![](/images/blog/complex-configuration-before-running-the-simulation/Screen-Shot-2018-10-18-at-16.43.11-300x89.png)

*Figura 3 - Error al destruir agentes*

Y eso no es todo. El mapa no se actualizará cuando la simulación esté pausada, así que si quieres moverte a otras ubicaciones del mapa para agregar nuevos centros de distribución, será como si no tuvieras internet disponible.

## Solución

Ahora hemos descubierto que pausar la simulación para hacer que el agente Main funcione como la página de configuración no es ideal en la mayoría de los casos. Desearía poder simplemente pausar la simulación, pero siempre termino necesitando borrar un agente, así que en lugar de pausar la simulación la hago correr extremadamente lento. Tan lento que está casi pausada. El siguiente código hace el trabajo:

```java
getEngine().setRealTimeMode(true);
getEngine().setRealTimeScale(0.000001);
```

Ahora el problema está mayormente resuelto. Pero como la simulación está corriendo, solo tienes que considerar si este milisegundo que pasará mientras el usuario configura el modelo afectará tu modelo o no. Estoy bastante seguro de que en el 99.99% de los casos no lo hará y si lo hace, puedes reducir la escala de tiempo a algo aún más pequeño (no sé cuál es el límite más pequeño de escala de tiempo).

El paso final es agregar un botón para ejecutar la simulación cuando la configuración esté completa. Necesitarás cambiar la escala de tiempo a 1

```java
getEngine().setRealTimeScale(1);
```

o tal vez ejecutarla en tiempo virtual

```java
getEngine().setRealTimeMode(false);
```

Depende de tus necesidades. Es una buena idea en este punto guardar inmediatamente la configuración de los centros de distribución en una base de datos para replicar la misma simulación en el futuro.

## Conclusión

He estado en esta situación innumerables veces. Mis clientes siempre quieren un modelo muy flexible con opciones de configuración que a veces son muy específicas. AnyLogic como framework tiene limitaciones (o bugs a veces) con las que necesitamos lidiar. Ocasionalmente, el usuario quiere construir caminos, generar formas, diseñar layouts y configurar varias otras cosas que la configuración del experimento de simulación no te permite hacer, y muchas veces es necesario hacerlo en tiempo de ejecución porque la mayoría de las funcionalidades de AnyLogic funcionan allí.
