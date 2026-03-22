---
title: "Protocolos Push vs Pull"
slug: "push-vs-pull"
date: 2019-02-27
categories: ["AnyLogic Tips"]
tags: []
excerpt: "Estas desarrollando tu modelo de eventos discretos, y ves a tus agentes moviendose de un bloque al siguiente. Simple verdad? Pero te has detenido un momento a preguntarte por que se estan moviendo? Que"
---

Estas desarrollando tu modelo de eventos discretos, y ves a tus agentes moviendose de un bloque al siguiente. Simple verdad? Pero te has detenido un momento a preguntarte por que se estan moviendo? Que es eso que los hace moverse?

Si le preguntas a un principiante, la respuesta vendra de pura intuicion: "Bueno, si el agente esta en un bloque delay y el tiempo de espera termino, el agente simplemente sabra que tiene que moverse al siguiente bloque". Pero esa respuesta es de hecho incorrecta. El agente no hace nada. El agente es en realidad solo una piedra inanimada que es empujada y jalada a traves del flujo de proceso por los bloques mismos.

Como sucede esto? Bueno, primero reconozcamos el hecho de que los bloques que encuentras en la Process Modeling Library no son mas que agentes disfrazados. Tienes un agente delay, un agente queue, etc. Y como hacen los agentes, los bloques se comunican entre si. Cuando conectas dos bloques en un modelo de eventos discretos, basicamente estas generando un canal de comunicacion para estos bloques.

Hay dos tipos de protocolos. Push y Pull. En el mundo predeterminado de AnyLogic, todos los bloques usan el protocolo pull, con la excepcion de los bloques que son capaces de generar agentes (por ejemplo los bloques source y enter), que usan el protocolo push. El protocolo aplica al bloque que esta intentando enviar el agente al siguiente bloque.

**Protocolo Pull**: el bloque notificara al bloque receptor que hay un agente listo para salir. Si el bloque receptor es capaz de recibir ese agente, entonces el agente es enviado. Si no, entonces el agente se queda donde esta y el bloque receptor intentara obtenerlo nuevamente en el futuro cuando sea capaz de recibir algo.

**Protocolo Push**: el bloque sera empujado al bloque receptor sin ninguna solicitud. Esto produce errores. Y estos son los errores que descubrimos primero cuando empezamos a usar AnyLogic, por ejemplo cuando no hay espacio disponible en una queue que existe despues de un bloque source. Si, porque el bloque source usa protocolo push como predeterminado.

[![](/images/blog/push-vs-pull/Edit-Post-%E2%80%B9-Noorjax-Consulting-%E2%80%94-WordPress-2019-02-27-13-45-37-1030x231.png)](/images/blog/push-vs-pull/Edit-Post-%E2%80%B9-Noorjax-Consulting-%E2%80%94-WordPress-2019-02-27-13-45-37.png)

Pero no todos los bloques son capaces de usar el protocolo Push. Para descubrir cuales pueden y cuales no, encontraras una opcion "Forced Push" en la seccion avanzada de las propiedades del bloque.

[![](/images/blog/push-vs-pull/AnyLogic-Personal-Learning-Edition-PERSONAL-LEARNING-USE-ONLY-2019-02-27-12-53-30.png)](/images/blog/push-vs-pull/AnyLogic-Personal-Learning-Edition-PERSONAL-LEARNING-USE-ONLY-2019-02-27-12-53-30.png)

Entonces la pregunta ahora es... cuando usar pull o push? Y no hay una respuesta estricta para eso. Ya que el protocolo push da un error, puedes usarlo para hacer evidente cuando hay un cuello de botella en algun lugar de tu proceso. O tal vez quieres usar un protocolo pull en el bloque source para destruir agentes que no pueden ser recibidos en una queue. En general no necesitaras cambiar los valores predeterminados, pero siempre es bueno saber por que las cosas estan sucediendo, verdad?
