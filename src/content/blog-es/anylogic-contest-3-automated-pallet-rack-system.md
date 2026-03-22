---
title: "Concurso AnyLogic #3 - Sistema Automatizado de Estanterías para Pallets"
slug: "anylogic-contest-3-automated-pallet-rack-system"
date: 2023-02-01
categories: ["Competitions"]
tags: []
excerpt: "El concurso ha terminado y los ganadores son [Guilherme Heinen](https://www.linkedin.com/in/gheinen/) con [este modelo](https://cloud.anylogic.com/model/3026169e-edf2-495c-b99a-4bce0c2917d5?mode=SETTINGS) "
---

El concurso ha terminado y los ganadores son [Guilherme Heinen](https://www.linkedin.com/in/gheinen/) con [este modelo](https://cloud.anylogic.com/model/3026169e-edf2-495c-b99a-4bce0c2917d5?mode=SETTINGS) y [Maximilian Selmair](https://www.linkedin.com/in/maximilian-selmair-58751363/) con [este modelo](https://cloud.anylogic.com/model/cbe77740-8bae-4845-99be-c5f526446964?mode=SETTINGS), quienes alcanzaron el Nivel 4.

## Introducción

Las estanterías para pallets en la industria a menudo utilizan sistemas automatizados para mover pallets. Pero AnyLogic no tiene ninguna funcionalidad incorporada para agregar estas complejidades a un proceso y los modeladores necesitan depender de las características básicas de estanterías para pallets para simplificar o construir la funcionalidad ellos mismos usando su propia creatividad y habilidades. De esto se trata este concurso.

## Lo que necesitas modelar

El proceso detallado es el siguiente, en el cual tienes una estantería para pallets que contiene 5 celdas, 1 posición de profundidad y 8 niveles. Pero idealmente debería ser lo suficientemente flexible para cambiar las celdas y niveles.

La estantería para pallets comienza con algunos pallets en posiciones arbitrarias como se muestra en la figura 1:

![](/images/blog/anylogic-contest-3-automated-pallet-rack-system/competition-3-Word-2023-02-01-15.12.18.png)

Figura 1: Estantería para Pallets

La idea es simple, y puedes construir este sistema de la manera que quieras siempre y cuando los pasos se sigan correctamente:

- Paso 1: Se seleccionan aleatoriamente un pallet y una posición vacía. Tanto el pallet seleccionado como la posición seleccionada deben estar claramente resaltados de la manera que quieras.

- Paso 2: Un sistema automatizado se moverá hacia la posición del pallet seleccionado a lo largo del plano X,Z

- Paso 3: El sistema automatizado se moverá dentro de la posición de la estantería a lo largo del eje Y para tomar el pallet.

- Paso 4: Hay un retraso que definirá el tiempo que toma tomar el pallet.

- Paso 5: El sistema automatizado se moverá fuera de la estantería a lo largo del eje Y con el pallet tomado.

- Paso 6: El sistema automatizado se moverá a lo largo del plano X,Z para alcanzar la posición vacía seleccionada.

- Paso 7: El sistema automatizado se moverá a lo largo del eje Y para depositar el pallet en esa posición.

- Paso 8: Habrá un retraso que definirá el tiempo que toma depositar el pallet.

- Paso 9: El sistema automatizado se moverá fuera de la estantería a lo largo del eje Y sin el pallet, que ahora descansa en su nueva posición

- Paso 10: Volver al Paso 1

Notas Adicionales:

- Idealmente, debería ser posible que la estantería para pallets sea rotada en cualquier ángulo. La Figura 2 (a y b) muestra 2 ejemplos de cómo podría verse la vista superior en 2D.

a) ![](/images/blog/anylogic-contest-3-automated-pallet-rack-system/Picture2.png) b) ![](/images/blog/anylogic-contest-3-automated-pallet-rack-system/Picture3.png)

Figura 2: La estantería para pallets puede ser rotada y tu modelo de simulación debería seguir funcionando.

Eso es todo. Aquí hay algunos ejemplos para inspirarte en tu diseño:

https://www.youtube.com/watch?v=3oQAvnLpIJc

## Reglas Generales y Limitaciones

- El modelo debe funcionar usando la PLE

- No se permite usar bibliotecas externas de pago o privadas. Cualquier cosa que uses además de AnyLogic debe ser gratuita y estar disponible públicamente.

- Debes proporcionar el proyecto completo de AnyLogic, y será probado usando la PLE, por lo que no se permite usar ninguna función que no esté presente en AnyLogic PLE.

## Recompensas

Primero, ten en cuenta que en nuestro concurso anterior, disponible aquí: [/es/blog/anylogic-contest-2/](/es/blog/anylogic-contest-2/) solo hubo 6 participantes que enviaron algo, así que si haces algo tienes una oportunidad.

La recompensa se basa en cuántas pruebas pasa el modelo, lo que significa que si desarrollas un modelo que no hace todo correctamente, aún ganas, si nadie más lo hace mejor.
Los premios son:

- **Nivel 1**: Si tu modelo hace lo básico, moviendo un pallet de una posición a la siguiente sin ningún sistema automatizado visible: **$50**

- **Nivel 2**: Si tu modelo sigue parte de los 10 pasos pero falla en hacer todo perfectamente: **$100** (pasa algunas de las pruebas avanzadas)

- **Nivel 3**: Si tu modelo sigue todos los 10 pasos correctamente sin colisiones o movimientos no naturales: **$200** (pasa todas las pruebas)

- **Nivel 4**: Si tu modelo tiene aceleración incluida de alguna manera. Si envías este nivel, incluye una breve explicación de cómo implementaste la aceleración: **$250**

- **Nivel 5**: Si tu modelo tiene aceleración incluida para todos los movimientos del sistema automatizado y tienes una aceleración máxima y una velocidad máxima configurable para cada uno de estos movimientos. Si envías este nivel, incluye una breve explicación de cómo implementaste la aceleración **($300). Consejo agregado el 4 de febrero: Piensa también en la desaceleración.**

- **Nivel 6**: Todos los niveles anteriores, más todo está empaquetado de una manera que es fácil de reutilizar **($400)**

Cuando termines un nivel, puedes enviarlo inmediatamente. Luego puedes mejorar el modelo y enviarlo de nuevo con un nuevo nivel. Un envío más rápido es uno de los factores para elegir entre empates. Sin embargo, no puedes enviar el mismo nivel dos veces, y solo se considerará el primer envío.

Los premios se pagan a través de PayPal o Payoneer. Si solo puedes recibir el pago a través de una cuenta bancaria, se deducirán las comisiones bancarias del premio.

Teóricamente habrá solo un ganador, pero si hay un empate objetivo entre diferentes modelos, los mejores 2 serán seleccionados a través de la decisión subjetiva y votación de algunos de los miembros de Noorjax y el premio se dividirá en 2 para ambos ganadores. Para esta votación habrá un criterio semi-objetivo, que es el nivel de experiencia de vida del ganador. Por ejemplo, un estudiante escolar vencerá a un estudiante de Máster, y un estudiante de Máster vencerá a alguien que trabaja profesionalmente. Además, alguien que envió más rápido tendrá una ligera ventaja sobre alguien que envió más tarde.

## Fecha Límite

La fecha límite es el 27 de febrero de 2023 a las 00:00, hora del Reino Unido. Envía tu modelo y cualquier archivo adicional a [competition@noorjax.com](mailto:competition@noorjax.com) con el asunto "competition level N", donde N es el nivel que estás enviando. También envía tu cuenta de Payoneer/PayPal, tu perfil de LinkedIn y agrega cualquier cosa que quieras agregar sobre ti. No subas el modelo a la nube hasta el final de la competencia.
