---
title: "Basado en Agentes, Eventos Discretos y Dinamica de Sistemas"
slug: "simulationparadigms"
date: 2018-09-20
categories: ["Simulation Concepts"]
tags: ["Agent-Based", "Discrete-Events", "Multi-Methods", "Simulations", "System Dynamics"]
excerpt: "Antes de empezar, no esperes que explique todas estas metodologias en detalle ya que existe mucho material en la web que puede ayudarte. Wikipedia es un buen punto de partida con los siguientes "
---

Antes de empezar, no esperes que explique todas estas metodologias en detalle ya que existe mucho material en la web que puede ayudarte. Wikipedia es un buen punto de partida con los siguientes enlaces si te interesan los detalles tecnicos:

- [System Dynamics](https://en.wikipedia.org/wiki/System_dynamics)

- [Discrete Events](https://en.wikipedia.org/wiki/Discrete_event_simulation)

- [Agent-Based](https://en.wikipedia.org/wiki/Agent-based_model)

En entornos de negocios, industriales y socioeconomicos, Dinamica de Sistemas, Eventos Discretos y Basado en Agentes son los tres paradigmas de simulacion mas comunmente utilizados. Y todavia hay personas que estudian estos metodos por separado y desarrollan sus modelos usando solo uno de ellos sin importar el problema en cuestion. Y esto es relativamente posible. De hecho puedes construir cualquier modelo matematico que represente la realidad con cualquiera de estas tecnicas, y si haces la eleccion incorrecta, la consecuencia es un modelo que carece de detalles, toma demasiado tiempo de desarrollo, se ejecuta demasiado lento, o es simplemente demasiado detallado y dificil de analizar. Entonces cuales son mis pensamientos sobre esto?

## Simulaciones

Cuando hablo de simulaciones, que quiero decir realmente? La pregunta que me hacen el 99% de las veces es: "que tipo de simulaciones?", que es una pregunta muy obvia de hacer considerando la ambiguedad de la palabra misma, pero desafortunadamente muy dificil de responder. Hablemos entonces de simulaciones que no estan cubiertas por estas tres metodologias, o en otras palabras, no cubiertas por AnyLogic, que es el Software que uso.

- **Electronica**: nadie construye una nueva placa electronica sin simular las interacciones entre los diferentes componentes electronicos. Para esto necesitas un Software especifico de la industria como [Micro-Cap](http://www.spectrum-soft.com/index.shtm).

- **Ingenieria**: que hay de simular un nuevo producto y someterlo a diferentes escenarios de estres, o una estructura de edificio para simular un terremoto, o analizar la interaccion entre particulas cuanticas. Si estas haciendo un proyecto de ingenieria, probablemente querrias usar [Ansys](https://www.ansys.com/).

- **Simulaciones Digitales Realistas**: Por ejemplo, simular computacionalmente el agua fluyendo de manera realista en una cascada. En este caso podrias necesitar [Real Flow. ](http://www.nextlimit.com/realflow/)

- **Videojuegos**: la industria de videojuegos no es mas que simulaciones con inteligencia artificial. Pero si quieres desarrollar un juego sofisticado, podrias probar [Unity](https://unity3d.com/).

- **Simulaciones tecnicas**: antes de implementar un algoritmo complejo en robots o maquinas industriales podrias querer usar [Matlab](https://www.mathworks.com/products/matlab.html) para probar su rendimiento.

- **Simulaciones de Capacitacion**: Usando Software como [Lectora](https://www.trivantis.com/), puedes simular escenarios simplistas que describen una cierta historia o proceso que quieres que un estudiante siga para aprender un tema particular.

- Otros tipos de simulaciones que probablemente ni siquiera se que existen o simplemente olvide.

Entonces que quiero decir con simulaciones?
No hay una respuesta directa a esta pregunta ya que he estado involucrado en proyectos que estan al limite de lo relevante. Pero algunos ejemplos que pueden resonar contigo son:

- Logistica (Aeropuertos, Centros de Distribucion, Almacenes, etc.)

- Cadena de Suministro (redes de distribucion, entregas, optimizacion de rutas, etc.)

- Manufactura

- Procesos de Negocio (si un proceso existe, una simulacion de ese proceso puede ser creada)

- Entidades interactuando entre si (personas, animales, maquinas, etc.)

- Transporte (autos, trenes, barcos, aviones etc.)

- Mineria

- Dinamica de fluidos (agua, otros fluidos o material a granel)

- Desarrollo estrategico de un negocio (marketing, satisfaccion del cliente, valor agregado, felicidad)

- Dinamicas de mercado (comportamiento del mercado, venta, compra)

- Simulaciones Monte-Carlo (Analisis de Riesgo, Analisis de Varianza)

- Socioeconomia (Impacto de politicas de pais, efectividad de estrategias sociales locales)

- Optimizacion

- Y muchas otras cosas...

Entonces como puedes saber si deberias usar simulaciones o no para tu aplicacion? Bueno... Si no estas en ninguna de estas listas, solo tienes que preguntarle a un consultor. A veces requiere algo de tiempo evaluar la herramienta correcta a usar para un problema particular, y a veces las simulaciones no son la mejor forma de proceder.

Si quieres un Freelancer o una empresa de consultoria para desarrollar tu proyecto, puedes dejar de leer aqui. En los siguientes parrafos quiero hablar un poco sobre como aprendi este oficio, como manejo conceptualmente mis modelos y que necesitas para convertirte en un gran modelador de simulaciones.

## Un poco sobre Dinamica de Sistemas

Aunque ya estaba haciendo simulaciones en el mundo de los videojuegos, electronica y tecnologia desde principios de los 2000, descubri la Dinamica de Sistemas usando Software como [IThink](https://www.iseesystems.com/) y [Vensim](http://vensim.com/) durante mi Maestria en 2011. Y se sentia como que podias hacer cualquier cosa con ella usando solo stocks, flujos y variables. Un metodo tan simple y elegante parecia ser suficiente para resolver los problemas estrategicos mas complejos del mundo, y era impresionante pero tambien dificil de aceptar como concepto independiente. Pase un ano y medio sin hacer mas que modelos de Dinamica de Sistemas, y aunque los conceptos de Basado en Agentes y Eventos Discretos fueron tocados en un grado muy pequeno, en esta comunidad habia un gran sesgo hacia desarrollar todo con nada mas que Dinamica de Sistemas. En la industria actual, la Dinamica de Sistemas rara vez se usa fuera del mundo academico, aunque es un metodo bastante poderoso. Durante un proyecto con PwC en 2013, tuve la oportunidad de usar AnyLogic y fui expuesto por primera vez a la magia de los Eventos Discretos y Basado en Agentes. Me enamore de AnyLogic en ese momento y nunca deje de usarlo hasta hoy.

## Un poco sobre Simulaciones de Eventos Discretos

Despues de casi dos anos desarrollando exclusivamente modelos de Dinamica de Sistemas, comence a trabajar como consultor de cadena de suministro y desarrolle modelos exclusivamente usando eventos discretos. Este fue un gran cambio conceptual, pero tambien descubri que hacer simulaciones de eventos discretos era mucho mas facil conceptualmente y mucho mas comodo para la mayoria de las aplicaciones industriales, en particular en la industria de cadena de suministro. Este es el momento en que comence a aprender cada pequeno detalle de la Process Modeling Library (PML) de AnyLogic, leyendo la documentacion de ayuda completamente, y escribiendo lo que llamo el arbol del conocimiento que constituye el orden en el que tienes que aprender todo para poder desarrollar exitosamente un entendimiento de la metodologia: por ejemplo un prerrequisito para incluso empezar a desarrollar simulaciones usando la PML, es entender las distribuciones poisson y exponencial. Actualmente uso este arbol del conocimiento para ensenar a otros.

## Un poco de Modelado Basado en Agentes

Solia tener miedo de usar simulaciones basadas en agentes. Siempre decia que sabia como hacerlas, pero nunca realmente lo practique, asi que decidi que sin importar que proyecto de eventos discretos hiciera, siempre iba a hacer el mismo modelo usando basado en agentes, aprendiendo por mi cuenta. Y eso es lo que hice. Cada proyecto me tomaba el doble de tiempo, pero estaba aprendiendo toneladas, tenia 2 versiones de cada modelo, y esto me ayudaba a validarlos facilmente. Y un dia, ya no estaba sesgado hacia elegir ningun metodo. El Modelado Basado en Agentes es bastante diferente y requiere toneladas de programacion, y buenas habilidades de depuracion. Es un metodo que requiere un cuidado profundo de los detalles.

## Modelado Multi-Metodo

Entonces que hacer cuando estas familiarizado y eres competente con estos tres metodos? Entonces es momento de olvidarse de ellos y empezar a construir todo basado en las necesidades particulares del proyecto sin estar sesgado hacia la metodologia misma. De cierta forma, AnyLogic proporciona varias herramientas que puedes usar libremente, y dejas de pensar en usar uno de estos tres metodos, y en su lugar usas las herramientas disponibles. No podemos olvidar que el numero de formas en las que puedes construir un modelo es practicamente infinito, y no dos modeladores de simulacion crearan exactamente el mismo modelo para un problema particular, pero no importa, los resultados son los mismos si todo se hace con buenas practicas.

## Es esto todo?

No. Estos tres metodos son solo una base general para desarrollar simulaciones multi-metodo. Pero necesitas muchas otras habilidades que solo vienen con anos de practica: disenar experimentos efectivos, estadistica, recoleccion de datos, limpieza de datos, bases de datos, las diferentes herramientas asociadas con fluidos, peatones, trenes, autos y manejo de materiales, presentacion e interfaz de usuario, modelado 2D y 3D, Autocad, arte, influir en otros, comunicacion, transformar un concepto abstracto de negocio en un documento tecnico, hacer las preguntas correctas y mucho mas. Los requisitos para ser un buen modelador de simulaciones son a veces abrumadores y es mi trabajo hacer todo esto lo mejor que pueda, pedir ayuda si algo esta fuera de mi dominio, y ensenar a otros como hacerlo tambien.
