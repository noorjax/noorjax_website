---
title: "Biblioteca de Grupo de Ascensores"
slug: "elevator-group-library"
date: 2024-06-23
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "AnyLogic tiene un objeto de ascensor nativo que funciona para peatones, pero solo para peatones. Dado que es frecuente que en los modelos tengas agentes normales y recursos que también necesitan usar ascensores, el pe"
---

AnyLogic tiene un objeto de ascensor nativo que funciona para peatones, pero solo para peatones. Dado que es frecuente que en los modelos tengas agentes normales y recursos que también necesitan usar ascensores, el ascensor para peatones no era suficiente. Además, es frecuente que los ascensores funcionen en grupos mientras se mueven para recoger solicitudes de diferentes pisos. Esta biblioteca cubre esta brecha, pero también funciona con peatones.

Mira este modelo en acción en el siguiente enlace: https://cloud.anylogic.com/model/35315a4b-59b7-4849-a7c6-4a88d466651b

También puedes ver el video de demostración en el siguiente enlace:
[https://youtu.be/FKvWgCZJ2r0](https://youtu.be/FKvWgCZJ2r0)

## Cómo Descargar

Puedes obtener la versión gratuita con limitaciones aquí:
[Noorjax Elevator Library en Github](https://github.com/noorjax/elevator)

Necesitarás una licencia para obtener la funcionalidad completa. La versión gratuita está limitada a un máximo de 1 hora de tiempo de simulación.

## Cómo obtener una licencia

Para obtener una licencia, sigue las instrucciones en el siguiente enlace:

[/es/blog/getting-a-license-for-a-library/](/es/blog/getting-a-license-for-a-library/)

El precio de esta biblioteca:

- Uso académico - 1 año: €59 (la compra debe realizarse con un correo universitario)

- Uso comercial - 1 año: €200

Nuestros precios pueden cambiar en cualquier momento sin previo aviso

## Documentación del Grupo de Ascensores

Esta biblioteca ha sido probada con AnyLogic 8.9.1. Versiones anteriores podrían no funcionar.

## Descripción general

Este objeto Elevator amplía lo que AnyLogic ofrece para el ascensor de Peatones, permitiéndote usarlo con peatones, agentes normales y agentes de tipo recurso que se usan en la Biblioteca de Modelado de Procesos.

La biblioteca contiene los siguientes objetos:

- **ElevatorSpecialAgent**: Este es el Agente del cual cualquier agente que use este ascensor debe heredar.

- **ElevatorSettings**: Contiene la información del edificio en el cual se usarán los ascensores.

- **ElevatorGroup**: Este objeto representa un conjunto de n ascensores que se usarán juntos.

- **TakeElevator**: Este es el bloque de proceso que usarás en tu flujo para la biblioteca de modelado de procesos (cuando uses recursos y/o agentes normales).

- **TakeElevatorByPed**: Este es el bloque de proceso que usarás en tu flujo para peatones.

- **ElevatorObject**: Este no debe usarse ya que es usado internamente por el objeto ElevatorGroup.

## Cómo Instalar y Usar La Biblioteca

Primero descarga la biblioteca en [Noorjax Elevator Library en Github](https://github.com/noorjax/elevator) y guárdala en un lugar seguro.

Dentro de AnyLogic, agrega la biblioteca a tu paleta usando el botón + en la pestaña de paleta, y busca el archivo .jar que descargaste... Siempre mantén ese archivo .jar en la misma ubicación, o tendrás problemas.

![](/images/blog/elevator-group-library/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

Puedes arrastrar y soltar cualquiera de los objetos disponibles para desarrollar tu modelo, excepto el ElevatorObject que no se usa, y el ElevatorSpecialAgent que tiene condiciones especiales como se explica en la siguiente sección.

La biblioteca hace uso de la funcionalidad de niveles de AnyLogic, por lo que es importante que estés familiarizado con eso antes de trabajar con esta biblioteca.

## Elevator Special Agent

Para usar los objetos proporcionados por esta biblioteca, un agente debe heredar de este tipo. Para esto necesitas ir a la sección avanzada de las propiedades de tu tipo de agente y hacerlo allí como se muestra en la siguiente imagen:

[![](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-13.42.21.png)](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-13.42.21.png)

Al heredar de este tipo de agente especial, el agente tiene acceso a algunas funciones necesarias.

**getDestinationLevel()**: devuelve el nivel al que el agente quiere ir.

**setDestinationLevel(Level x)**: define el nivel al que el agente quiere ir.

Cuando se crea un agente que tomará el ascensor, puedes definir los siguientes parámetros:

**weigth**: este es un parámetro opcional que puedes usar en caso de que los ascensores tengan un peso máximo permitido. Si no quieres usar esto, puedes definir cualquier valor o dejar el predeterminado.

## Elevator Settings

### Configuración

**Token:** Necesitarás esto para poder usar esta biblioteca en su capacidad completa. Las licencias solo pueden usarse en 1 computador.

### Animación

**Door Animation Update Frequency**: La animación de la puerta del ascensor se actualiza de forma discreta. Un tiempo menor lleva a una animación más suave.

**Check New Version:** Si marcas esta casilla, el objeto de configuración se conectará al servidor para verificar si hay una nueva versión de esta biblioteca. Si la hay, se imprimirá en la consola.

## Elevator Group

### Configuración

**Elevator Settings**: Necesitas la configuración del ascensor definida para propósitos de licenciamiento

**Waiting Nodes**: Dado que la Biblioteca de Modelado de Procesos requiere que los agentes integren una red mientras se mueven, necesitamos definir aquí cuáles son los nodos en cada nivel. Los agentes esperarán en estos nodos a que llegue el ascensor. Definirás aquí todos los nodos. No necesitas ordenarlos de ninguna manera particular, pero asegúrate de que el número de nodos de espera coincida con el número de niveles usados por este grupo de ascensores. Un nodo de espera DEBE estar en el nivel al que pertenece. El valor de la coordenada Z debe ser 0 para todos los nodos de espera. Todos los nodos de espera deben ser rectángulos.

**Number of Elevators**: Aquí defines cuántos ascensores hay en este grupo. Puedes definir solo 1 si no quieres un grupo.

### Dimensiones y Movimiento

El objeto que ves en el Canvas de AnyLogic es el siguiente, en el cual el centro del primer ascensor corresponde al centro del ascensor izquierdo, y todo se coloca hacia la derecha dependiendo de las dimensiones y la separación entre ascensores:

[![](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-14.38.17.png)](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-14.38.17.png)

**Space Between Elevators:** aquí defines el espacio entre ascensores

**Width, Depth and Height**: Estas dimensiones se definen como se muestra en la imagen

[![](/images/blog/elevator-group-library/Monosnap-Elevator0.0.1-_-Simulation-AnyLogic-Pro.png)](/images/blog/elevator-group-library/Monosnap-Elevator0.0.1-_-Simulation-AnyLogic-Pro.png)

**Color:** este será el color del ascensor y las puertas del ascensor. Sugerimos usar transparencia para ver los agentes dentro.

**Vertical Speed**: Esta es la velocidad del ascensor mientras se mueve hacia arriba o abajo. No hay aceleración.

### Operaciones

**Door Time Delay**: Esta es la cantidad de tiempo que toma para que las puertas del ascensor se abran. La misma cantidad de tiempo se usa para el tiempo que toma para que las puertas del ascensor se cierren.

**Use Agent Number Limit**: Puedes elegir que los ascensores limiten la cantidad de agentes que pueden estar dentro.

**Agents Allowed Inside (visible si use agent number limit está activado)**: Si eliges usar límite de número de agentes, este será el número máximo de agentes que pueden estar dentro del ascensor.

**Use Weight Limit:** Puedes decidir usar un peso máximo que un ascensor puede soportar.

**Maximum Weight (visible si use weight limit está activado):** Si usas límite de peso, este será el límite de peso que el ascensor puede soportar.

**Doors:** Puedes elegir si los ascensores abrirán solo la puerta frontal o ambas puertas frontal y trasera. Sin importar qué, solo puedes elegir 1 nodo de espera en cada piso.

**Use same levels for all elevators**: si marcas esto, obtendrás solo una lista de niveles que se aplicará a todos los ascensores.

**Levels**: Aquí puedes elegir a qué niveles puede ir cada ascensor del grupo. Asegúrate de agregar en esta lista tantos como ascensores haya (a menos que estés usando los mismos niveles para todos los ascensores). En la siguiente imagen, vemos un caso en el que hay 4 ascensores. El primer ascensor, que tiene índice 0 y está posicionado a la izquierda del grupo, podrá ir a level y level1, el segundo ascensor a level, level1 y level2, y así sucesivamente. Hay 4 listas, lo que significa que el parámetro "number of elevators" DEBE ser 4. Ten en cuenta que no importa en qué orden agregues los niveles. En este caso también hay 3 niveles posibles: level, level1 y level2, lo que significa que DEBES tener 3 nodos de espera.

[![](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-14.27.22.png)](/images/blog/elevator-group-library/Monosnap-AnyLogic-Professional-2024-06-23-14.27.22.png)

## Take Elevator

### Configuración

**Elevator Group**: Esto define qué grupo de ascensores será elegido para que el agente se mueva entre niveles.

**Population at Exit**: Es obligatorio que el agente que toma el ascensor pertenezca a una población definida, y a la salida del ascensor, el agente necesita moverse de vuelta a esa misma población o a una diferente. Debes convertir esta población en un agent array list de la siguiente manera: *(AgentArrayList)population*

**Resource Population at Exit**: Si el agente ha sido capturado por un recurso, el recurso debe heredar del SpecialElevatorAgent también y debes colocar aquí la población a la que pertenecerá el recurso cuando salga del ascensor.

### Operaciones

**Use Timeout**: Aquí determinas si los agentes esperarán para siempre por el ascensor o esperarán una cantidad de tiempo.

**Waiting Timeout (visible si use timeout está activado):** Esta es la cantidad de tiempo que un agente está dispuesto a esperar.

**Destination Level:** Este es el nivel al que el agente quiere ir. Si el nivel de destino es el mismo que el nivel actual, el agente irá al nodo de espera y saldrá del bloque Take Elevator. Puedes usar la función getDestinationLevel() del agente si has definido un nivel de destino para el agente previamente.

### Acciones

**On Start Waiting**: Esta acción se activa cuando el agente llega al nodo de espera.

**On Enter Elevator**: Esta acción se activa cuando el agente entra al ascensor. Tienes disponible el índice del ascensor asignado. Los índices van de 0 a n-1, donde n es el número de ascensores en el grupo.

**On Exit Elevator**: Esta acción se activa cuando el agente llega al nodo de espera.

## Take Elevator By Ped

Este bloque tiene las mismas opciones que Take Elevator pero no tiene la opción de usar recursos (por lo que la opción de definir resource population at exit no existe). Además, debes definir los aspectos de peatones.

### Aspectos de Peatones

**Reach Tolerance**: esto se usa para definir cuándo el peatón llega al destino del nodo de espera.

**Comfortable Speed at Exit**: esta será la velocidad cómoda del peatón cuando comience a salir del ascensor.

**Initial Speed at Exit**: esta será la velocidad inicial del peatón al salir del ascensor.

**Diameter at Exit:** este será el diámetro del peatón al salir del ascensor.

## Preguntas Frecuentes

### ¿Cómo funciona el algoritmo?

Cuando un agente llega al nodo de espera, se envía una solicitud al grupo de ascensores, y las cosas sucederán con la siguiente prioridad:

- Si un ascensor ya está en ese nivel y puede llegar al destino, el agente se asigna a ese ascensor

- El ascensor más cercano que pueda llegar al nivel en el que está el agente y pueda llegar al destino del agente será elegido y movido hacia el nivel del agente

- Si un ascensor se detiene en el nivel actual del agente y el ascensor puede ser abordado, el agente usará ese ascensor, incluso si otro ascensor fue enviado a ese agente antes

Un ascensor seguirá moviéndose en la misma dirección y recogiendo agentes en todos los niveles mientras pueda hacerlo y mientras haya agentes dentro.

### No veo los ascensores correctamente en 3D

Dependiendo de la transparencia usada para el color del ascensor, los ascensores pueden volverse invisibles dependiendo de otros objetos 3D en la escena y el ángulo de la cámara. Puedes ajustar la transparencia para resolver esto. Siempre verás los ascensores sin transparencia.

### Obtengo un error diciendo que el agente debería estar ubicado en la misma red

Esto puede suceder si defines destinos incorrectamente. Por ejemplo, si envías un recurso al level3 cuando el nodo base está en el level2, no es posible que el agente encuentre una ruta del level3 al level2 al salir del ascensor. Debes tener cuidado de enviar agentes a los niveles correctos.

### ¿Funciona con transportadores?

AnyLogic acaba de lanzar la funcionalidad que necesitamos para que los transportadores se usen con su versión 8.9.1, así que ahora podemos agregarlos, pero los incluiremos en la próxima versión si hay interés.

### ¿Puedo definir dónde comienzan los ascensores?

No, actualmente los ascensores comienzan generalmente en el nivel más bajo permitido en general, pero diferentes configuraciones de tu nivel podrían llevar a diferentes posiciones de inicio. Esto podría mejorarse en el futuro.

### Obtengo un error con getLevel()

El nodo de espera del ascensor, cuando se usa la biblioteca de modelado de procesos, debe colocarse en una red. La biblioteca del ascensor usa la función interna getLevel(), y esta función es confiable solo si el nodo usado está en una red. Asegúrate de que el nodo de espera pertenezca a una.

### Mi modelo exportado no funciona

Cuando exportas un modelo, no requiere una licencia, siempre y cuando lo hayas exportado con una licencia (tanto para la nube como para la exportación Java). Para poder exportarlo, deberías haber ejecutado el modelo de simulación al menos una vez en AnyLogic con internet activado, lo que generará un archivo licenseKey.txt válido (si compraste una licencia). Este archivo debe integrarse en cualquier versión exportada, y para hacer eso necesitas ir a las propiedades de resources/data/licenseKey.txt y activar "Resource is referrenced from user code". Esto permitirá que el modelo exporte el archivo licenseKey.txt, como puedes ver en la siguiente imagen:

[![](/images/blog/elevator-group-library/usercodereference-1030x260.png)](/images/blog/elevator-group-library/usercodereference.png)
