---
title: "Biblioteca de Grua Apiladora para Sistemas Automatizados de Almacenamiento y Recuperacion (ASRS)"
slug: "pallet-crane-library"
date: 2024-07-14
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Los procesos de almacenamiento automatizado con gruas apiladoras automatizadas se usan comunmente en la gestion de almacenes y fabricas mejorando la eficiencia y precision. Estos sistemas agilizan el almacenamiento y la recuperacion"
---

Los procesos de almacenamiento automatizado con gruas apiladoras automatizadas se usan comunmente en la gestion de almacenes y fabricas mejorando la eficiencia y precision. Estos sistemas agilizan el almacenamiento y la recuperacion de bienes, reduciendo errores humanos y costos operativos. Las gruas apiladoras automatizadas maximizan la utilizacion del espacio accediendo a areas de almacenamiento altas y profundas que son dificiles para operaciones manuales.

Esta biblioteca personalizada tiene un agente de grua apiladora que puede adjuntarse al elemento de marcado Storage de la Biblioteca de Manejo de Materiales (MHL) de AnyLogic. Ademas, la biblioteca tiene un bloque de proceso incorporado que puede manejar los materiales/agentes con la grua apiladora, teniendo la posibilidad de almacenar, reposicionar y recuperar objetos dentro y fuera del almacenamiento.

Revisa este modelo en accion en la nube de AnyLogic: https://cloud.anylogic.com/model/fbb78b8f-e175-4606-8a31-1b425e38fb49
Tambien puedes ver un video demo en el siguiente enlace:
[https://youtu.be/fQwLOUNW2s4](https://youtu.be/fQwLOUNW2s4)

## Como Descargar

Puedes obtener la version gratuita con limitaciones aqui:
[https://github.com/noorjax/stacker-crane](https://github.com/noorjax/stacker-crane)

Necesitaras una licencia para obtener la funcionalidad completa. La version gratuita esta limitada a un maximo de 1 hora de tiempo de simulacion.

## Como obtener una licencia

Para obtener una licencia, sigue las instrucciones en el siguiente enlace:

[/es/blog/getting-a-license-for-a-library/](/es/blog/getting-a-license-for-a-library/)

El precio de esta biblioteca:

- Uso academico - 1 ano: €59 (la compra debe realizarse con un correo universitario)

- Uso comercial - 1 ano: €175

Nuestros precios pueden cambiar en cualquier momento sin previo aviso

## Biblioteca de Grua Apiladora

Esta biblioteca ha sido probada con AnyLogic 8.9.1. Versiones anteriores podrian no funcionar. Esta biblioteca te permite usar un sistema automatizado para almacenar, reposicionar y recuperar pallets del objeto storage en AnyLogic.

## Descripcion General

La biblioteca tiene cuatro objetos/agentes que necesitan usarse juntos para asegurar el funcionamiento adecuado. Estos son: StackerCrane, MoveByStackerCrane, SettingsSC y SpecialAgentSC.

## Como Usar

Primero descarga la biblioteca en [https://github.com/noorjax/stacker-crane](https://github.com/noorjax/stacker-crane) y guardala en un lugar seguro.

Dentro de Anylogic, agrega la biblioteca a tu paleta usando el boton + en la pestana de paleta, y encuentra el archivo .jar que descargaste... Siempre manten ese archivo .jar en la misma ubicacion, o tendras problemas.

![](/images/blog/pallet-crane-library/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

Puedes arrastrar y soltar cualquiera de los objetos disponibles para desarrollar tu modelo, excepto el Fork que no se usa.

![](/images/blog/pallet-crane-library/Monosnap-AnyLogic-Professional-2024-08-18-07.07.09.png)

La biblioteca hace uso del objeto Storage de AnyLogic MHL, por lo que es importante que estes familiarizado con eso antes de usar esta biblioteca.

En la version actual, existen algunas limitaciones para los racks de pallets que pueden usarse:

- Debe tener 1 rack.

- Numero de celdas 1 por slot.

- El tipo de colocacion del rack debe ser Stand-alone.

![](/images/blog/pallet-crane-library/Picture1racl.png)

## Grua Apiladora

El agente Stacker Crane es el objeto 3D que sera visible realizando todas las acciones, como recoger agentes, mover, almacenar y recuperarlos. La grua apiladora esta compuesta por un deslizador lineal z, que es la columna en la que la horquilla esta adjunta, y la horquilla que es la parte que recoge los objetos.

![](/images/blog/pallet-crane-library/pallet-rack.png)

Sigue los pasos para configurar el agente:

- Arrastra el agente de grua apiladora desde la biblioteca y sueltalo donde quieras usar el agente

- Asegurate de que la presentacion de la grua apiladora se muestre en el origen del agente de entorno. Si no, haz clic en Show presentation en las propiedades avanzadas de la grua apiladora.

![](/images/blog/pallet-crane-library/Picture3jjj.png)

- Arrastra y posiciona la presentacion de la grua apiladora donde quieras definir su ubicacion inicial. Ya que este objeto funciona solo con el objeto Storage de MHL, se recomienda posicionar la presentacion de la grua apiladora frente al Storage.

![](/images/blog/pallet-crane-library/Picture4ss.png)

- No es necesario rotar la presentacion de la grua apiladora, ya que la rotacion se define automaticamente segun la rotacion del almacenamiento.

- La distancia entre la ubicacion inicial de la grua apiladora y el almacenamiento se considerara como la "distancia segura" entre estos dos objetos, por lo que los movimientos de la grua apiladora consideraran esta distancia durante toda la ejecucion de la simulacion.

![](/images/blog/pallet-crane-library/Picture5m.png)

Ahora estas listo para configurar todos los parametros de la grua apiladora.

### Parametros Generales

- **Storage:** debes seleccionar el objeto storage de MHL que se usara con esta grua apiladora. El storage debe tener 1 rack y 1 numero de celdas por slot solamente para funcionar correctamente. Ademas, el tipo de colocacion del rack debe ser Stand-alone.

**Population at exit:** debe tener la poblacion de los agentes que seran movidos por esta grua apiladora. Esto es para devolver los agentes a la poblacion inicial despues de moverlos. Usa esta sintaxis: (AgentArrayList)nombreDeLaPoblacion
Manten lo que esta dentro del parentesis y solo cambia el nombreDeLaPoblacion con el nombre de la poblacion personalizada del agente. Ejemplo: si tu agente se llama Pallet, entonces la poblacion personalizada del agente puede llamarse pallets, asi que lo que debes escribir en este parametro es: (AgentArrayList)pallets
- **Initial z**: es donde la horquilla de la grua apiladora estara en el eje z al inicio de la simulacion.

- **XY max speed**: velocidad maxima alcanzable de la grua apiladora en el plano XY.

- **XY max acceleration**: aceleracion maxima de la grua apiladora en el plano XY.

- **Z max speed**: velocidad maxima alcanzable de la horquilla de la grua apiladora en el eje Z.

- **Z max acceleration**: aceleracion maxima de la horquilla de la grua apiladora en el eje Z.

- **Enter cell distance**: distancia segura entre la grua apiladora y la celda de almacenamiento al entrar a una celda.

![](/images/blog/pallet-crane-library/Picture7.png)

- **Loading time:** tiempo de carga al recoger un agente.

- **Unloading time**: tiempo de descarga al soltar un agente.

### Precision

**Position error allowed**: distancia maxima permitida entre la posicion actual de la grua apiladora y la posicion objetivo. Si se alcanza este error permitido, se puede considerar que la grua apiladora ya esta en la posicion objetivo.
*si abs(posicionObjetivo-PosicionActual)<Position error allowed*
*entonces la grua apiladora ya esta en la posicion objetivo.*
- **Speed error allowed**: en conjunto con position error allowed, esta es la velocidad maxima permitida para detener el movimiento de la grua apiladora, si la velocidad actual es mayor que esa, entonces la grua apiladora no detendria su movimiento. Esto solo aplica al movimiento PID, que se explica mas adelante.

- **Position update frequency**: el tiempo entre cada actualizacion en las variables de la grua apiladora, como animacion, posicion, velocidad, aceleracion y otras.

### Movimientos

**Movement defined by:** define como se regira el movimiento. Puede ser una de las siguientes opciones:

- **Movimiento Rectilineo Uniformemente Acelerado**: describe el movimiento de un objeto moviendose en linea recta con aceleracion constante. En este tipo de movimiento, la velocidad del objeto cambia uniformemente con el tiempo, lo que significa que acelera o desacelera a un ritmo constante. En este caso especifico, la grua apiladora hara sus movimientos acelerando segun sus parametros de aceleracion, luego alcanzara su velocidad maxima y desacelerara en un cierto punto para alcanzar la posicion objetivo con velocidad cercana a cero.

**PID (no usar a menos que tengas un gran entendimiento de controladores PID y como calibrarlos)**: es un mecanismo de control ampliamente utilizado en sistemas industriales y mecanicos para mantener una salida deseada o punto de ajuste. Ajusta las entradas de control a un sistema considerando tres componentes clave: Proporcional-Integral-Derivativo. En este caso especifico, este controlador se aplica a las aceleraciones de la grua apiladora, ajustando la aceleracion automaticamente basandose en los parametros K. Estas K son las constantes o factores que ajustan la implicacion de cada componente, teniendo Kp para proporcional, Ki para integrativo y Kd para derivativo.

- **Ki side to side**: constante integrativa para la aceleracion de la grua apiladora en el movimiento paralelo con respecto al almacenamiento.

- **Kp side to side**: constante proporcional para la aceleracion de la grua apiladora en el movimiento paralelo con respecto al almacenamiento.

- **Kd side to side:** constante derivativa para la aceleracion de la grua apiladora en el movimiento paralelo con respecto al almacenamiento.

- **Ki entering cell**: constante integrativa para la aceleracion de la grua apiladora al entrar y salir de una celda.

- **Kp entering cell**: constante proporcional para la aceleracion de la grua apiladora al entrar y salir de una celda.

- **Kd entering cell:** constante derivativa para la aceleracion de la grua apiladora al entrar y salir de una celda.

- **Ki z axis:** constante integrativa para la aceleracion de la horquilla de la grua apiladora cuando se mueve hacia arriba y abajo.

- **Kp z axis**: constante proporcional para la aceleracion de la horquilla de la grua apiladora cuando se mueve hacia arriba y abajo.

- **Kd z axis:** constante derivativa para la aceleracion de la horquilla de la grua apiladora cuando se mueve hacia arriba y abajo.

### Apariencia

- Z linear slide height: altura del deslizador lineal z.

- Z linear slide radius: radio del deslizador lineal z.

- Z linear slide color: color del deslizador lineal z.

![](/images/blog/pallet-crane-library/Picture8.png)

![](/images/blog/pallet-crane-library/Picture9.png)

### Special Agent SC

Este es el tipo de agente que sera almacenado en los storages con la grua apiladora. Para poder usar la biblioteca, es necesario usar la opcion "Extends other agent" en la configuracion avanzada de tu agente de material item que usaras en tu modelo. Por ejemplo, si quieres almacenar un pallet en el storage, tendras un tipo de agente Pallet que debe ser una extension de SpecialAgent de esta biblioteca.

![](/images/blog/pallet-crane-library/Monosnap-AnyLogic-Professional-2024-08-18-07.43.52.png)

### MoveByStackerCrane

Este es el bloque de diagrama de flujo que puede usarse para controlar los movimientos del agente de grua apiladora. Este bloque puede usarse para almacenar, reposicionar y recuperar agentes dentro y fuera del objeto storage.

Cuando un agente entra al bloque moveByStackerCrane, estara esperando en una cola FIFO hasta que sea su turno de ser movido. Si es necesario, para remover el agente de la cola del bloque, el usuario puede usar la funcion moveByStackerCrane.remove(agent); (considera que esta funcion funcionara correctamente solo si el agente no esta siendo movido por la grua apiladora).

#### Como configurar:

- Arrastra y suelta el agente desde la biblioteca de Stacker Crane donde tienes tu modelo logico.

- El agente que se movera a traves de este bloque debe ser una extension del agente SpecialAgent de la biblioteca de grua apiladora.

Ahora configura los parametros del bloque

- Stacker crane ASRS: selecciona el agente de grua apiladora que quieres usar con este bloque.

Action ASRS: selecciona la accion automatizada que quieres usar con los agentes. Hay tres opciones:

Store: puede usarse para almacenar agentes en el storage. Funciona teniendo el agente en algun lugar cerca del storage y la grua apiladora ira a recogerlo y lo movera a una celda de almacenamiento.

- X origin: posicion x del agente para la recogida.

- Y origin: posicion y del agente para la recogida.

- Z origin: posicion z del agente para la recogida.

Reposition: mueve el agente de la celda actual a una nueva en el mismo storage.

Slotting policy: la celda objetivo del agente.

- Random available: una celda aleatoria disponible en el storage. Si no hay celdas disponibles, se activara un error.

Specific slot: celda objetivo especifica.

- Storage shelf: indice de nivel del storage para la posicion objetivo.

- Storage bay: indice de bahia del storage para la posicion objetivo.

Retrieve: debe usarse para recuperar un agente de una celda y sacarlo del storage.

- X destination: posicion x de la posicion objetivo.

- Y destination: posicion y de la posicion objetivo.

- Z destination: posicion z de la posicion objetivo.

- **Task priority**: La prioridad de la tarea para el agente entrante (cuanto mayor, mas alta). Ayuda a priorizar agentes que estan esperando ser movidos por la grua apiladora.

-

**Acciones**

Pueden usarse con el agente para usarlo dinamicamente.

- **On enter queue**: accion activada cuando el agente entra al bloque.

- **On exit queue**: accion activada cuando el agente sale de la cola, ya sea antes de iniciar el proceso de almacenamiento o por el uso de la funcion remove(agent);.

- **On start storing process**: accion activada cuando la grua apiladora comienza a moverse hacia el agente que va a ser recogido.

- **On end storing process**: accion activada cuando la grua apiladora deja al agente en su ubicacion objetivo.

## Settings SC

**Token:** Necesitaras esto para poder usar esta biblioteca en su capacidad completa. Las licencias solo pueden usarse en 1 computadora.
**Check New Version:** Si marcas esta casilla, el objeto de configuracion se conectara al servidor para verificar si hay una nueva version de esta biblioteca. Si la hay, se imprimira en la consola.

## Preguntas Frecuentes

### Puedo usar multiples gruas apiladoras para un storage?

No. La relacion entre storage y grua apiladora es 1:1, un storage puede tener una grua apiladora y una grua apiladora puede adjuntarse a solo un storage.

### PID no funciona

El controlador PID solo puede usarse con unidades de tiempo del modelo en segundos. Si tu modelo usa otras unidades de tiempo, el PID no funcionara. Podriamos cambiar esto en el futuro.

## Mi modelo exportado no funciona

Cuando exportas un modelo, no requiere licencia, siempre y cuando lo hayas exportado con una licencia (tanto para la nube como para exportacion java). Para poder exportarlo, deberias haber ejecutado el modelo de simulacion al menos una vez en AnyLogic con internet encendido, lo que generara un archivo licenseKey.txt valido (si compraste una licencia). Este archivo debe integrarse en cualquier version exportada, y para hacer eso necesitas ir a las propiedades de resources/data/licenseKey.txt y activar "Resource is referrenced from user code". Esto permitira que el modelo exporte el archivo licenseKey.txt, como ves en la siguiente imagen:
![](/images/blog/pallet-crane-library/usercodereference.png)
