---
title: "Concurso AnyLogic #2 - Transporte con Montacargas"
slug: "anylogic-contest-2"
date: 2022-04-22
categories: ["Competitions"]
tags: []
excerpt: "La competencia ha terminado con el ganador** [Maximilian Selmair](https://www.linkedin.com/in/maximilian-selmair-58751363/) c**omo el ganador, ganando $200 con el mejor modelo en el nivel 2.  **Gracias a todos "
---

La competencia ha terminado con **[Maximilian Selmair](https://www.linkedin.com/in/maximilian-selmair-58751363/)** como el ganador, ganando $200 con el mejor modelo en el nivel 2.

**Gracias a todos los demás participantes**

**Nivel 2**
[Elie Abboud](https://www.linkedin.com/in/ACoAADPgibABSneiS3WNcGsyrHsvpBhv6NlJweU)
[Patrick Wöhe](https://www.linkedin.com/in/ACoAACh74QgBM9VlFVEawfE0kK8aTDALV-c1i0g)
[Aqeel Tariq](https://www.linkedin.com/in/ACoAADU1jfEBK82s0tPMXgniPDxgfoUQ3iBvYqc)

**Nivel 1**
[Ankit Sahay](https://www.linkedin.com/in/ACoAABfMJ-sB-656smroL3P3Iw2Zm4q2iDDK-pw)
[Gonzalo Vladimir Contreras Martinez](https://www.linkedin.com/in/ACoAAAb-wx4BNcwB0Cs9F6T-wosvlPjDQcZBg0w)

https://www.youtube.com/watch?v=DlLDtWu0vBo

Introducción
Uno de los procesos más comunes en cualquier almacén es el movimiento de objetos usando montacargas, y estos montacargas son operados por operadores. En este tipo de proceso, los operadores están capacitados para manejar diferentes tipos de montacargas, los cuales, a su vez, están diseñados para transportar ciertos tipos de objetos.

A pesar de ser un problema relativamente frecuente, los bloques de AnyLogic no ofrecen una solución obvia para esto, por lo que necesitarás ser creativo para resolver el rompecabezas.

## Lo que necesitas modelar

El proceso detallado es el siguiente, en el cual hay 4 áreas de interés: la ubicación de llegada de productos, la ubicación base de los operadores, la ubicación base de los montacargas y la ubicación de destino.

- Diferentes tipos de productos llegan a la ubicación de llegada de productos con una tasa de llegada definida.

- Cuando llega un producto, un operador disponible debe encontrar un montacargas para transportar este producto, caminar hacia el montacargas y conducir el montacargas hacia el producto, recogerlo y transportarlo a la ubicación de destino.

- El operador elegido debe ser capaz de operar este tipo de montacargas. Hay muchos tipos de operadores, y cada uno de ellos está capacitado para operar un subconjunto de estos tipos de montacargas.

- El montacargas elegido debe ser capaz de transportar este tipo de producto. Hay muchos tipos de montacargas, y cada uno de ellos está construido para transportar un subconjunto de estos tipos de productos.

Al llegar al destino, el producto debe ser dejado (y puede ser descartado) y algo natural debería suceder de acuerdo a lo que esperaríamos que suceda en la vida real, por ejemplo:

Si no hay más pallets que puedan ser transportados con el montacargas actual en la ubicación de llegada, el operador conducirá el montacargas hacia la ubicación base de los montacargas, donde debe evaluar si hay otro tipo de carga que pueda transportar usando un tipo diferente de montacargas:

- Si lo hay, el operador tomará el montacargas específico y transportará el producto hacia la ubicación de destino

- Si no lo hay, el operador caminará de vuelta a la ubicación base de los operadores.

- Si hay más pallets en la ubicación de llegada que pueden ser transportados con el mismo montacargas, el operador debe permanecer en el montacargas actual e ir a la ubicación de llegada para transportar el producto a la ubicación de destino.

Los ejemplos 5.a y 5.b son solo dos situaciones posibles, y hay muchas otras que pueden ocurrir, y es el trabajo del modelador de simulación poder identificar todos esos casos y evaluar cuál es la cosa más natural que un operador haría si algo extraño sucediera. La suposición es que todos los operadores tienen información perfecta y comunicación perfecta entre ellos.

Por ejemplo, si no hay producto, y un operador está conduciendo el montacargas de vuelta a la ubicación base de los montacargas, y llega un nuevo producto que puede ser transportado con ese mismo montacargas, ¿qué haría el operador?

- Una opción es cambiar de opinión, y dejar de moverse hacia la ubicación del montacargas, y en su lugar comenzar a moverse hacia el producto para transportarlo.

- Otra opción es que un operador diferente camine hacia un montacargas disponible para transportar ese producto.

- Las opciones 1 y 2 son completamente naturales, pero una mala solución sería que el operador regrese a la ubicación base de los montacargas y se mueva a un montacargas diferente en lugar de quedarse en el mismo montacargas, si ese montacargas puede transportar ese tipo de producto.

## Estructura del Modelo

Estamos proporcionando una estructura de modelo para que comiences, pero tienes absolutamente permitido cambiar todo siempre y cuando sigas los requisitos previamente discutidos. No habrá explicación para ese modelo, así que si quieres usarlo, deberías poder entenderlo por ti mismo.

El modelo de ayuda tiene la siguiente estructura de base de datos, pero si quieres empezar desde cero, puedes cambiar esa estructura siempre y cuando contenga la misma información.

### Tipos de Productos

Cada tipo de producto debe tener un ID, un nombre para el tipo de producto y una tasa de llegada. Probaremos el modelo agregando/eliminando cualquier cantidad de tipos de productos.

id
product type
arrival rate (per hour)

1
small
10

2
medium
20

3
big
30

### Tipos de Montacargas

Cada tipo de montacargas debe tener un id, un nombre, el número de montacargas disponibles para el tipo y una colección que contenga todos los tipos de productos que el montacargas puede transportar. Probaremos el modelo agregando/eliminando cualquier cantidad de tipos de montacargas. En el siguiente ejemplo, solo hay 1 montacargas eléctrico disponible, y este montacargas eléctrico puede tomar productos 1 y 2 (small y medium).

Forklift Id
Forklift type
available
products Ids that it can take

1
electric
1
{1,2}

2
manual
2
{1}

3
heavy
1
{2,3}

### Tipos de Operadores

Cada tipo de operador debe tener un id, un nombre, el número de operadores disponibles para el tipo particular, y una colección de todos los montacargas que ese tipo de operador puede operar. Probaremos el modelo agregando/eliminando cualquier cantidad de tipos de operadores. En el siguiente ejemplo, hay dos operadores senior disponibles, y los operadores senior pueden usar montacargas 1 y 3 (electric y heavy).

id
operator type
available
possible forklifts

1
senior
2
{1,3}

2
junior
2
{2}

3
external
2
{3}

## Reglas Generales y Limitaciones

- El modelo debe funcionar usando la PLE

- No se permite usar bibliotecas externas de pago o privadas. Cualquier cosa que uses además de AnyLogic debe ser gratuita y estar disponible públicamente.

- Debes proporcionar el proyecto completo de AnyLogic, y será probado usando la PLE, por lo que no se permite usar ninguna función que no esté presente en AnyLogic PLE.

- Se permite usar recursos, transportadores, o cualquier otra cosa

## Recompensas

Primero, ten en cuenta que en nuestro concurso anterior, disponible aquí: [/es/blog/anylogic-contest-1/](/es/blog/anylogic-contest-1/) solo hubo 5 participantes y hubo 2 ganadores con modelos que podían mejorarse significativamente, así que hay una oportunidad si compites.

La recompensa se basa en cuántas pruebas pasa el modelo, lo que significa que si desarrollas un modelo que no hace todo correctamente, aún ganas, si nadie más lo hace mejor.

Los premios son:

- Nivel 1: Si tu modelo hace lo básico, moviendo productos usando el operador correcto y el montacargas correcto: **$100** (pasa las pruebas básicas)

- Nivel 2: Si tu modelo hace la mayoría de las cosas bien, pero algunas cosas no tan bien: **$200** (pasa algunas de las pruebas avanzadas)

- Nivel 3: Si tu modelo hace todo excelente, con decisiones inteligentes y naturales de los operadores: **$300** (pasa todas las pruebas)

- Nivel 4: Si tu modelo hace todo excelente y pasa todas las pruebas, pero también muestra muy claramente los diferentes tipos de productos/operadores/montacargas con una leyenda que facilite tener una buena experiencia visual del modelo y cuidas la interfaz de usuario y tal vez incluso muestras algunos gráficos: **$400**

- Nivel 5: Si todos los puntos anteriores se cumplen, pero vas más allá mostrando un trabajo profesional que es flexible y puede expandirse para usar múltiples ubicaciones de llegada, múltiples ubicaciones base y/o múltiples ubicaciones de destino: **$500**

Cuando termines un nivel, puedes enviarlo inmediatamente. Luego puedes mejorar el modelo y enviarlo de nuevo con un nuevo nivel. Un envío más rápido es uno de los factores para elegir entre empates. Sin embargo, no puedes enviar el mismo nivel dos veces, y solo se considerará el primer envío.

El pago se realizará SOLO usando PayPal o Payoneer. Si no tienes estos, puedes seleccionar un conjunto de cursos disponibles de Noorjax y obtenerlos gratis.

Si puedes alcanzar el nivel 4, y quieres hacer una pasantía pagada en Noorjax, serás elegible para hacerlo.

Teóricamente habrá solo un ganador, pero si hay un empate objetivo entre diferentes modelos, los mejores 2 serán seleccionados a través de la decisión subjetiva y votación de algunos de los miembros de Noorjax y el premio se dividirá en 2 para ambos ganadores. Para esta votación habrá un criterio semi-objetivo, que es el nivel de experiencia de vida del ganador. Por ejemplo, un estudiante escolar vencerá a un estudiante de Máster, y un estudiante de Máster vencerá a alguien que trabaja profesionalmente. Además, alguien que envió más rápido tendrá una ligera ventaja sobre alguien que envió más tarde.

## Fecha Límite

La fecha límite es el 21 de mayo de 2022, 23:59, hora del Reino Unido. Envía tu modelo y cualquier archivo adicional a [competition@noorjax.com](mailto:competition@noorjax.com) con el asunto "competition level N", donde N es el nivel que estás enviando. También envía tu cuenta de Payoneer/PayPal, tu perfil de LinkedIn y agrega cualquier cosa que quieras agregar sobre ti. No subas el modelo a la nube hasta el final de la competencia.

DESCARGA EL ESQUELETO DEL MODELO AQUÍ

[Forklift Contest - Official](/images/blog/anylogic-contest-2/Forklift-Contest-Official.zip)
