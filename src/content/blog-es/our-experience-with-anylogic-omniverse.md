---
title: "Nuestra Experiencia con AnyLogic Omniverse"
slug: "our-experience-with-anylogic-omniverse"
date: 2025-06-07
categories: ["AnyLogic Tips"]
tags: []
excerpt: "## Por que este articulo?  Una de las principales razones tecnicas por las que el uso de AnyLogic ha sido rechazado por clientes en los ultimos anos han sido las visualizaciones 3D, superadas por otro Software de simulacion como FlexS"
---

## Por que este articulo?

Una de las principales razones tecnicas por las que el uso de AnyLogic ha sido rechazado por clientes en los ultimos anos han sido las visualizaciones 3D, superadas por otro Software de simulacion como FlexSim o Visual Components. Esto era cierto no para grandes proyectos en los que se queria una verdadera herramienta de toma de decisiones, sino cuando se necesitaba una demo 3D para impresionar personas u observar equipos detallados en accion.

Queriamos escribir nuestra propia experiencia usando Omniverse y compararla con FlexSim... pero FlexSim tambien tiene una conexion con Omniverse, asi que la comparacion ya no es justa.

Finalmente, como no fue tan facil configurar el Omniverse con la informacion proporcionada en la documentacion de ayuda, hicimos la nuestra propia, que puedes descargar aqui:
**[como configurar](/images/blog/our-experience-with-anylogic-omniverse/how-to-configure-1.pdf)**

***IMPORTANTE* los pasos de configuracion no son validos ya que el Omniverse Launcher sera descontinuado. Usa la documentacion si ya descargaste el Launcher, en el futuro actualizaremos esto con los nuevos pasos****

## Introduccion - Las animaciones 3D impresionantes ya no son un problema

La funcionalidad NVIDIA Omniverse ha sido recientemente agregada a la caja de herramientas de Anylogic, para mejorar la visualizacion 3D de modelos de simulacion creados previamente en Anylogic. Esta integracion permite renderizado en tiempo real y visuales altamente realistas. Esta conexion abre posibilidades poderosas:

- **Renderizado con un clic** – Puedes exportar un modelo ya construido en Anylogic a Omniverse con minimo esfuerzo, llevandolo instantaneamente a un entorno 3D de alta fidelidad.

- **Personalizacion 3D completa** – Cada objeto renderizado, ya sea estatico o dinamico (ej., agentes moviles), puede modificarse en Omniverse con alto realismo, incluyendo materiales, texturas, iluminacion y animaciones.

- **Reproduccion de simulacion en tiempo real con visuales ultra-realistas** – Ejecuta tu modelo en Anylogic mientras lo visualizas en Omniverse, aprovechando graficos de nivel cinematografico e incluso soporte de realidad virtual

## Nuestra experiencia personal

Esta experiencia comenzo negativamente, con un muy potente ThinkPad X1 Carbon Gen 10 con una tarjeta grafica Intel Iris Xe Graphics, que fue comprado como una de las mejores computadoras para trabajar con AnyLogic, hace 2 anos cuando la GPU no importaba. Pero con esta tarjeta grafica no es posible usar Omniverse, haciendo que esta computadora que solia ser de primera linea, no sea una opcion para esta nueva funcionalidad. Continuamos intentando con una computadora diferente con mejor GPU: una maquina con un Intel Core i7-1360P de 13a generacion y una GPU NVIDIA RTX A500 Laptop (4 GB).

La curva de aprendizaje para Omniverse es pronunciada si quieres usar todo su potencial. Requiere una revision mas exhaustiva de la documentacion y hardware mas potente (minimo 6 GB de GPU, con 10 GB recomendados), lo que puede presentar una barrera para ciertos usuarios o proyectos. La velocidad de simulacion tambien depende en gran medida de la GPU y CPU del sistema. En una prueba usando el modelo Roundabout de AnyLogic Cloud, experimentamos una caida en la velocidad de simulacion a aproximadamente el 33% cuando se ejecutaba en vivo en USD Composer comparado con ejecutarlo solo en AnyLogic. En contraste, una prueba similar usando un Intel Core Ultra 7 155H y una GPU NVIDIA RTX 1000 Ada Generation Laptop (6 GB) mostro un impacto minimo en el rendimiento, lo que sugiere que la arquitectura de la GPU juega un papel clave cuando otros componentes del sistema son similares.

Omniverse, como motor de renderizado para simulaciones construidas en AnyLogic, ofrece un potencial visual significativo, especialmente en terminos de realismo y detalle de objetos 3D, mejorando bastante la linea base 3D de Anylogic. Con acceso a miles de objetos y materiales, permite a los usuarios reemplazar facilmente los activos predeterminados de AnyLogic y lograr un nivel mucho mayor de fidelidad visual. Esta capacidad, combinada con un renderizado extremadamente realista (ej. pasto que aparece detallado a nivel granular), hace de Omniverse una opcion solida para presentaciones visualmente atractivas o escenarios donde la estetica y la inmersion son importantes.

Sin embargo, la integracion tambien tiene limitaciones. Por ejemplo, los cambios en los colores de objetos durante la ejecucion no se reflejan en Omniverse, lo que puede ser restrictivo cuando se intenta representar datos dinamicos visualmente o para validar. Adicionalmente, no soporta vistas GIS ni graficos de KPI, y cualquier cambio en el modelo de simulacion requiere un nuevo renderizado, ralentizando el flujo de trabajo iterativo.

Adicionalmente, Omniverse solo permite la personalizacion de partes individuales si el modelo 3D esta compuesto de elementos separados (prims). Por ejemplo, objetos importados desde AnyLogic, como un modelo car.dae, no pueden tener sus puertas o ruedas recoloreadas individualmente a menos que fueran originalmente modelados como componentes distintos, lo que requiere edicion 3D externa previa.

Respecto a la fisica, Omniverse teoricamente soporta viento, gravedad y otras animaciones fisicas, aunque la implementacion practica no siempre es directa. Animar operadores o personas (y sus movimientos) tampoco es tan fluido. En algunos casos, los movimientos definidos en la logica de simulacion no se trasladan correctamente a la escena 3D, algunos ejemplos son:

- Solo el pallet se mueve, pero no la caja colocada encima.

- Las animaciones multi-articulacion, como un brazo robotico, pueden no comportarse como se espera o no moverse en absoluto.

- Los fluidos no seran animados.

Finalmente, la idea de personas moviendose naturalmente en la escena es algo que aun no hemos podido hacer funcionar, asi que si no es imposible, al menos es dificil de lograr.

## Conclusion

La opcion de renderizado NVIDIA Omniverse para Anylogic es sin duda una buena herramienta nueva, especialmente para propositos de demostracion y modelos de prueba de concepto, mejorando el nivel de visualizacion considerablemente. En muchos casos hemos tenido solicitudes para solo renderizar videos de modelos como demostracion y ahora podemos hacerlo significativamente mejor. En otros casos, los clientes han tenido interes en el nivel visual de otras herramientas, que ahora podemos alcanzar facilmente. Como esperamos que esta herramienta mejore aun mas en el futuro, solo podemos esperar para ver que mas sera posible.

*Escrito por Joaquin Guzman y Felipe Haro*
