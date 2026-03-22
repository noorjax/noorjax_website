---
title: "Cámara Dentro de un Agente - Posibles Problemas"
slug: "blog-camera-on-agent"
date: 2022-01-25
categories: ["AnyLogic Tips"]
tags: ["System Dynamics"]
excerpt: "# Colocar una Cámara en un Agente  ## La Importancia de las Animaciones 3D  Todos sabemos qué es una animación 3D, pero poco se dice sobre lo útil que es para el modelador y las partes interesadas. Una animación puede a"
---

## Colocar una Cámara en un Agente

### La Importancia de las Animaciones 3D

Todos sabemos qué es una animación 3D, pero poco se dice sobre lo útil que es para el modelador y las partes interesadas. Una animación puede actuar como una herramienta para que el modelador corrija errores durante la fase de desarrollo, dando acceso a cosas que no están disponibles solo usando la lógica del proceso. De la misma manera, las partes involucradas también se benefician de esta animación, ya que pueden validar que lo que se está haciendo es correcto o incorrecto, permitiéndoles mejorar las especificaciones del proceso en el software o incluso identificar oportunidades de mejora.

En este artículo hablaremos sobre cómo resolver algunos errores comunes al colocar la cámara en un agente para tener una buena visualización de nuestro modelo.

### Rol de la cámara en una animación 3D

En AnyLogic, una vez que los objetos 3D están integrados en nuestro modelo, debemos poder mostrar la animación que creamos. Esto se puede hacer usando los objetos "3D Window", ya que nos permiten mostrar escenas o fotogramas de nuestra animación. Ahora, para mostrar secciones específicas de nuestro modelo desde una perspectiva particular, es esencial usar el objeto "Camera", que nos permite definir un fotograma específico de nuestro modelo que queremos observar desde cierto ángulo y coordenadas.

Es bien sabido, gracias a la documentación de AnyLogic, cómo una cámara puede vincularse a un objeto 3D Window. Esto puede seleccionarse de forma fija en las propiedades del 3D Window donde dice "camera:" conectado con el nombre de la cámara creada, o también puede seleccionarse como "Not Specified", lo que permite al usuario programar en Java la cámara que se usará para ese fotograma 3D según cualquier criterio necesario.

### Seguir un objetivo durante la simulación, cómo hacerlo y posibles inconvenientes

Entre las posibilidades, es posible que queramos seguir un objeto que se mueve durante nuestra simulación, que podría ser una caja moviéndose por cintas transportadoras en un centro de distribución o quizás una persona caminando dentro de un edificio construido o simplemente un auto siendo conducido por las calles de una zona concurrida. Sea cual sea el caso, debemos poder identificar la instancia del agente específico que queremos rastrear y, en consecuencia, el tipo de agente.

Pensemos en el caso de autos conduciendo hacia un piso de estacionamiento y luego regresando a su punto de partida. En este caso el agente sería de tipo "Car" y las instancias de este agente podrían ser múltiples, las cuales pueden identificarse en la población "cars". Para colocar una cámara que grabe cualquier auto dentro de nuestra población de autos, simplemente vamos a la ventana de nuestro tipo de agente "Car" y configuramos una cámara que pueda grabar nuestro vehículo como se muestra en la figura 1.

[![](/images/blog/blog-camera-on-agent/Picture1.png)](/images/blog/blog-camera-on-agent/Picture1.png)

*Figura 1 - Cámara detrás de un auto*

Por defecto, nuestra animación estará en las coordenadas (0,0,0) en nuestra ventana "Car", así que podemos colocar la cámara en (-60, 0, 15) para que esté 6 metros detrás de nuestro auto y 1.5 metros por encima de la altura a la que está el auto (calculado según la escala de distancia).

Ahora necesitamos llamar esa cámara en nuestra ventana Main, y para ello, podemos crear un botón o un evento en el agente en el que vive la población de autos (por ejemplo Main), que fije la vista de la cámara en nuestro 3D Window. Para ello debemos escribir el siguiente código:

*window3d.setCamera(cars.random().camera, **true**);*

De esta manera, nuestro "window3d" tendrá como vista la "camera" de un auto aleatorio de nuestra población de autos creada y seguirá su trayectoria ya que la opción de seguir el objeto está configurada en **true**.

En este punto es posible que queramos ver la ventana 3D con el modelo ejecutándose, pero hay dos posibles inconvenientes:

- Que no tengamos ningún auto en nuestra simulación cuando ejecutamos la acción, lo que causará un error

- Que la cámara no esté mostrando lo que debería estar mostrando, y este error no es necesariamente debido a la posición de la cámara en nuestra ventana Car (aunque puede ser una razón).

Para resolver el primer error, puedes usar try/catch de la siguiente manera:

```java
try{
    window3d.setCamera(cars.random().camera, true);
}catch(Exception e){
    //hacer algo para decirle al usuario que no hay auto disponible
}
```

Y para resolver el segundo error, debemos asegurarnos de que tengamos una presentación en el agente padre. Luego, la presentación de nuestro agente debe estar en las coordenadas de origen (0,0,0) del agente padre, de lo contrario la cámara tendrá un desplazamiento desagradable que dependerá de qué tan lejos esté el objeto de animación del auto y la escala del agente padre. El objeto auto debe colocarse en el origen (0,0,0) como se muestra en la figura 2:

[![](/images/blog/blog-camera-on-agent/Picture2.png)](/images/blog/blog-camera-on-agent/Picture2.png)

*Figura 2 - Posición del agente en el agente padre*

*Escrito por Joaquín Guzmán.*
