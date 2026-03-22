---
title: "Biblioteca de Brazo Robotico"
slug: "robotic-arm-library"
date: 2023-11-21
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Esta biblioteca SOLO funciona con AnyLogic 8.9.4 en adelante.  Puedes descargar la biblioteca aqui:   [DESCARGAR](https://github.com/noorjax/robotic-arm)  Si esta biblioteca te fue util, considera donar para que"
---

Esta biblioteca SOLO funciona con AnyLogic 8.9.4 en adelante.

Puedes descargar la biblioteca aqui:

[DESCARGAR](https://github.com/noorjax/robotic-arm)

Si esta biblioteca te fue util, considera donar para que podamos seguir desarrollando esta y mas en el futuro, haz clic en el siguiente enlace para donar.

[https://www.paypal.com/donate/?hosted_button_id=GW77FD5WVVAR8](https://www.paypal.com/donate/?hosted_button_id=GW77FD5WVVAR8)

## Documentacion de Ayuda del Brazo Robotico

Puedes encontrar una version en video de esta documentacion, para la version 1.0.0 en el siguiente video:

### Aviso Importante

**Este brazo robotico puede ser usado libremente por cualquier persona siempre que sea util para su caso. Sin embargo, NO ofrecemos soporte gratuito para correccion de errores o implementacion de nuevas funciones. Este brazo robotico fue desarrollado para nuestros propios propositos y si te funciona genial, de lo contrario no nos hacemos repentinamente responsables de tu proyecto. Tampoco ofrecemos soporte al cliente gratuito sobre como usarlo, pero si tienes una duda que no esta explicada en este documento, la agregaremos tan pronto como podamos.**

**Si quieres nuevas funciones, podemos desarrollarlas por un costo. Contactanos para esto.**

**Si quieres entrenamiento personalizado en AnyLogic y ayuda personalizada implementando esto para tu aplicacion, esto tambien tendra un costo. Contactanos para esto, pero esta documentacion deberia ser suficiente.**

## Descripcion general

La biblioteca de Brazo Robotico ofrece herramientas para modelar y simular la dinamica y funcionalidades de brazos roboticos usados en la industria manufacturera.

Consiste en dos agentes, mas un agente de ayuda, que es solo un boton que te llevara a esta pagina:

**Robot**: representa la animacion 3D del robot. El brazo robotico consiste en

- Una base que rota en el eje Z

- Un brazo superior que rota con respecto a la base

- Un antebrazo que rota con respecto al brazo superior.

- Un conector que rota el agente recogido para posicionarlo correctamente en el destino.

![](/es/wp-content/uploads/2023/11/Monosnap-Robotic-Arm-v1.0-_-Simulation-AnyLogic-.png)

- **Move By Robot**: Es el bloque de diagrama de flujo que se usa en conjunto con el agente Robot. Permite definir los movimientos logicos y tareas que el robot realizara para el agente procesado.

Otros objetos que veras en la biblioteca no deben usarse.

[![](/es/wp-content/uploads/2023/11/Monosnap-AnyLogic-Professional-2023-11-16-08.54.35.png)](/es/wp-content/uploads/2023/11/Monosnap-AnyLogic-Professional-2023-11-16-08.54.35.png)

## Como Instalar la Biblioteca

Primero descarga la biblioteca (ver encabezado de esta documentacion) y guardala en un lugar seguro:

Dentro de Anylogic, agrega la biblioteca a tu paleta usando el boton + en la pestana de paleta, y encuentra el archivo .jar que descargaste... Siempre manten ese archivo .jar en la misma ubicacion, o tendras problemas.

![](/es/wp-content/uploads/2023/11/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

## Como Usar la Biblioteca Una Vez Instalada

- Para usar el objeto robot, arrastra y suelta el objeto "Robot" a tu espacio de trabajo (main o cualquier otro agente en el que vivira tu brazo robotico).

- Para usar el objeto "Move By Robot", tambien puedes arrastrarlo y soltarlo, y conectar este bloque con tu logica de proceso.

## El Objeto Robot

Definimos el icono del robot, como el agente que representa el robot fisico:

[![](/es/wp-content/uploads/2023/11/Monosnap-AnyLogic-Professional-2023-11-16-09.17.46.png)](/es/wp-content/uploads/2023/11/Monosnap-AnyLogic-Professional-2023-11-16-09.17.46.png)

Definimos la presentacion del robot, como la presentacion fisica del robot

[![](/es/wp-content/uploads/2023/11/Monosnap-AnyLogic-Professional-2023-11-16-09.18.33.png)](/es/wp-content/uploads/2023/11/Monosnap-AnyLogic-Professional-2023-11-16-09.18.33.png)

El tamano de la presentacion del robot se calcula por defecto automaticamente basado en la escala del agente en el que se encuentra la presentacion del robot. Las siguientes son las medidas originales, pero pueden cambiarse como se explica mas adelante.

- longitud de la base: 3.3 metros, correspondiente a la distancia del suelo al punto de rotacion del brazo superior.

- longitud del brazo superior: 3.9 metros, correspondiente a la distancia entre ambos puntos de rotacion

- longitud del antebrazo: 3.8 metros, correspondiente a la distancia entre el punto de rotacion y el conector.

### El Icono del Robot

Para definir las caracteristicas del robot, haz clic en el icono "Robot" en tu espacio de trabajo y configura los parametros segun la visualizacion deseada del robot (asegurate de que la presentacion del robot se muestre, si no, haz clic en "show the presentation" en la seccion avanzada de las propiedades del icono del robot). Ademas, este agente siempre debe usarse como un agente individual y no como una poblacion de agentes (AnyLogic no nos permite remover esta opcion).

#### Angulos Iniciales

- Angulo inicial de la base (grados). Es el angulo inicial de la base en el eje Z

- Angulo inicial del brazo superior (grados). Angulo inicial del brazo superior. Cero significa sin flexion de la articulacion.

- Angulo inicial del antebrazo (grados). Esta rotacion es relativa al brazo superior. Cero grados significa sin flexion de la articulacion.

Angulos iniciales recomendados para las articulaciones (asegurate de trabajar dentro de estos limites para evitar que el brazo robotico se mueva erraticamente como moverse contra si mismo... no tenemos deteccion de colisiones):

- Angulo de la base: cualquier angulo entre -180 a 180 grados.

- Brazo superior: cualquier angulo entre 0 a 90 grados.

- Antebrazo: cualquier angulo entre 0 a 90 grados.

#### Estadisticas

- Time step (segundos): esto define con que frecuencia se actualizan las posiciones de la animacion. Un time step alto hace que la simulacion corra mas rapido, a costa de hacer que la animacion se vea extrana.

#### Velocidad

- Velocidad de rotacion de la base (grados/segundo): velocidad de rotacion de la base en el eje z.

- Velocidad de rotacion del antebrazo (grados/segundo): velocidad de rotacion del antebrazo relativa al brazo superior

- Velocidad de rotacion del brazo superior (grados/segundo): autoexplicativo

#### Escala

Additional Scale: esto puede usarse si quieres cambiar las dimensiones del robot. Desafortunadamente, AnyLogic hace esto un poco complicado de calcular, pero aqui esta la explicacion. El tamano original del antebrazo es 3.8 metros, llamemos esto "FOS". Que pasa si quieres que el antebrazo sea solo de 1.5 metros?

- Primero verifica la escala del agente en el que se encuentra el icono del robot. Queremos saber cuantos pixeles son equivalentes a 1 metro. Llamemos a este numero "P".

- Segundo define que longitud quieres que tenga tu antebrazo en metros, llamemos esto "FNS"

- Para calcular la escala adicional "AS", necesitas usar la siguiente formula: AS=FNS*3.8*10/P. El 3.8 corresponde a la longitud del antebrazo, y el 10 corresponde a la escala del robot (que no es visible para ti, solo usa 10 siempre).

- Entonces si quieres que tu antebrazo sea de 1.5 metros y tu agente en el que se encuentra el robot tiene una escala de 1metro=20 pixeles, entonces AS=1.5*38/20 = 2.85.

Necesitaras cambiar la formula predeterminada

[![](/es/wp-content/uploads/2023/11/default.png)](/es/wp-content/uploads/2023/11/default.png)

Con el numero de escala adicional

[![](/es/wp-content/uploads/2023/11/new.png)](/es/wp-content/uploads/2023/11/new.png)

Tambien necesitas cambiar los valores en la presentacion del robot. Para esto, haz clic en la presentacion del robot, selecciona "scale is defined explicitly" en la seccion "position and size" de las propiedades y usa la misma escala que usaste en el valor de escala adicional del icono del robot para las 3 escalas: scale X, scale Y y scale Z.

[![](/es/wp-content/uploads/2023/11/rototscale.png)](/es/wp-content/uploads/2023/11/rototscale.png)

### Bloque de Proceso Move By Robot

Este es el bloque que usas para hacer que el brazo robotico sea operacional. Puedes conectarlo a cualquier flujo de proceso para mover agentes normales o material items si estas usando la biblioteca de manejo de materiales.

#### Altura del Agente

Aqui puedes definir la altura del agente para que el conector del brazo robotico se posicione exactamente en la parte superior del agente. Por supuesto, la altura de tu agente debe ser igual a la altura de tu animacion, de lo contrario esto no mostrara una animacion 3D correcta. Este valor puede ser fijo para todos los agentes, o puede ser dinamico usando los parametros de altura de tu agente si has creado uno.

Si tienes por ejemplo un agente de tipo Box que tiene un parametro o variable llamado height, necesitarias hacer lo siguiente:
((Box)agent).height

Desde la perspectiva del bloque move by robot, todos los agentes son de tipo "Agent" asi que necesitas hacer la transformacion de agent a box para poder usar las propiedades del agente.

#### Capacidad de la Cola

Este bloque tiene una cola incorporada. Funciona igual que cualquier otro bloque como un seize, un service, etc. Esta cola se usa para determinar que agentes pueden ser recogidos y tomados en consideracion para prioridades.

#### Tiene Tiempo de Carga/Descarga

Puedes definir si quieres que el brazo robotico pase algun tiempo cargando y descargando un objeto. Esto esta asociado a algunas acciones como "on loading started" y "on loading finished" que se muestran si quieres usar tiempo de carga.

#### Agente Robot

Aqui defines el objeto robot que se usara como recurso para mover agentes con este bloque de proceso. Solo puedes elegir 1 robot.

#### Prioridad de Tarea

Esto define desde la perspectiva del robot, la prioridad del bloque de proceso con respecto a otros. Si tienes 1 robot y 3 bloques move by robot, el robot elegira mover primero los objetos en el bloque move by robot con la mayor prioridad. Si todas las prioridades son iguales, usara FIFO. Ten en cuenta que no puedes elegir la prioridad de los agentes, las prioridades estan relacionadas solo con los bloques de proceso.

#### Destino

El destino debe definirse por coordenadas x,y,z (en pixeles), y esta es la unica forma en que puedes definir un destino para cualquier objeto.

#### Acciones - Al Entrar

Puedes usar esto como cualquier otro bloque de proceso, con la diferencia de que tienes que especificar tu tipo de agente, por ejemplo si tienes un agente box moviendose a traves de este bloque, en lugar de agent.counter++; harias:
((Box)agent).counter++;

#### Liberacion

En esta seccion puedes definir si el robot se queda donde esta, o si vuelve a los angulos iniciales.

## Preguntas Frecuentes

### No entiendo los angulos de rotacion iniciales?

Para todos los angulos de rotacion iniciales, cero significa sin flexion de la articulacion. Entonces, si todas las articulaciones se establecen en cero, el brazo robotico apuntara al cielo. Solo pruebalos y descubre por ti mismo como funciona esto.

### Estoy obteniendo movimientos extranos con el robot

Asegurate de que estas usando los rangos recomendados de angulos iniciales (ver arriba). Tambien considera cambiar el time step al aumentar la velocidad de rotacion de las articulaciones para tener la precision requerida.

### Necesito ayuda, no puedo descifrar como usar esto.

Lee la documentacion cuidadosamente. Si quieres ayuda, te cobraremos la tarifa por hora que puedes ver en [/es/](/es/) cuando te desplazas hacia abajo, con un minimo de 1 hora pagada por adelantado. Envianos un mensaje si quieres ayuda, pero no pidas ayuda gratuita.

### Puedo usar esto comercialmente?

Si. Si ganas millones usando este brazo robotico, y te sientes mal al respecto, envianos un mensaje y puedes pagarnos lo que sientas que es justo o simplemente usa este enlace [https://www.paypal.com/donate/?hosted_button_id=GW77FD5WVVAR8.](https://www.paypal.com/donate/?hosted_button_id=GW77FD5WVVAR8) Contactanos antes del pago si necesitas una factura. Si no quieres pagar, entonces no pagues. Pero asegurate de ayudar a otras personas necesitadas en el futuro.

### Puedo usar esto academicamente?

Asegurate de poner en algun lugar de tu estudio que obtuviste nuestra ayuda (los agradecimientos son agradables). Envianos tu investigacion final y la publicaremos en algun lugar. Si quieres, puedes donar simplemente haciendolo por PayPal usando este enlace: [https://www.paypal.com/donate/?hosted_button_id=GW77FD5WVVAR8](https://www.paypal.com/donate/?hosted_button_id=GW77FD5WVVAR8).

### El robot esta chocando con los objetos a su alrededor. Como puedo resolverlo?

El robot no tiene deteccion de colisiones asi que no puedes.

### Necesito una nueva funcion

Contactanos para una cotizacion.

### Quiero quitar el logo de Noorjax del brazo robotico

Esto no puede hacerse gratis. Contactanos para una cotizacion.

### La calidad 3D podria ser mejor

En realidad podemos darte una version con graficos de muy alta calidad, pero esto tiene un costo. AnyLogic toma tiempo para renderizar el objeto 3D, asi que la version publica tiene un poco menos de calidad para evitar que la gente se queje de eso. Creemos que es menos probable que la gente se queje de calidad no perfecta que del tiempo de renderizado.

### Cuando arrastro y suelto el objeto robot, las imagenes del robot no se muestran, en su lugar veo formas extranas

Tienes que usar AnyLogic 8.9.4 o versiones posteriores para que esta biblioteca funcione. Si esto sucede, significa que estas usando una version mas antigua de AnyLogic.

### No me gusta tu brazo robotico

Hazte uno tu mismo entonces... no es tan dificil :)
