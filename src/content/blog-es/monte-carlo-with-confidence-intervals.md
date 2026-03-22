---
title: "Monte Carlo con Intervalos de Confianza"
slug: "monte-carlo-with-confidence-intervals"
date: 2024-07-14
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Los modelos de simulacion son estocasticos por naturaleza, lo que significa que cada vez que ejecutas un modelo de simulacion obtendras resultados diferentes, si usas diferentes semillas. Para comunicar estos resultados variados a"
---

Los modelos de simulacion son estocasticos por naturaleza, lo que significa que cada vez que ejecutas un modelo de simulacion obtendras resultados diferentes, si usas diferentes semillas. Para comunicar estos resultados variados a las partes interesadas, necesitas usar una herramienta estadistica llamada intervalos de confianza. En terminos simples, esta herramienta te dira que tan seguro puedes estar de que tus resultados se encuentran en un intervalo particular. Para hacer esto necesitas ejecutar simulaciones Montecarlo, que consiste simplemente en ejecutar la simulacion tantas veces como sea necesario para que tu intervalo de confianza tenga el menor error que estes dispuesto a permitir o aceptar.

Basado en la descripcion anterior, esta herramienta de Noorjax te permite realizar simulaciones Montecarlo y te proporciona el intervalo de confianza basado en un nivel de confianza elegido.

Puedes ver esta biblioteca en accion en el siguiente enlace:
https://cloud.anylogic.com/model/6cbfd17d-3e39-4293-b881-8c4476f37291

## Como Descargar

Puedes descargar la biblioteca en el siguiente enlace:

[https://github.com/noorjax/optimizationWithMontecarlo](https://github.com/noorjax/optimizationWithMontecarlo)

Esta biblioteca es parte del paquete de optimizacion. Libre para usar.

## Biblioteca de Simulaciones Montecarlo

Esta biblioteca ha sido probada con AnyLogic 8.9.1. Versiones anteriores podrian no funcionar.

### Como Instalar y Usar la Biblioteca

Descarga la biblioteca y guardala en un lugar seguro.

Dentro de Anylogic, agrega la biblioteca a tu paleta usando el boton + en la pestana de paleta, y encuentra el archivo .jar que descargaste. Siempre manten ese archivo .jar en la misma ubicacion, o tendras problemas.

[![](/images/blog/monte-carlo-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)](/images/blog/monte-carlo-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

### Documentacion

Arrastra y suelta el Experimento Monte Carlo y configura los parametros como se describe a continuacion:

#### Agente Logico:

Agent type: el tipo de agente de nivel superior. Este es generalmente el agente que incluye la logica principal en el modelo asi como los elementos o variables necesarios para especificar la expresion (descrita mas adelante). Escribe el nombre del tipo de agente seguido de ".class". Ejemplo: MyAgent.class

#### Tiempo del Modelo:

- *Unidades de tiempo del modelo*: unidades de tiempo del modelo

*Stop*: la condicion de parada para el modelo. Elige la opcion necesaria de la lista desplegable. Puede ser un tiempo en unidades de tiempo del modelo (Stop at specified time) o una fecha (Stop at specified date). La tercera opcion es Never. Usa esta opcion cuando ya tienes una condicion de parada agregada en la logica de tu modelo, como un evento que termina la simulacion, por ejemplo.

Nota: Cuando agregas una condicion de parada en la logica de tu modelo, usa finishSimulation() en lugar de stopSimulation().

- *Start time*: El tiempo inicial en unidades de tiempo del modelo para el horizonte de tiempo de la simulacion.

- *Start date*: La fecha inicial del calendario para el horizonte de tiempo de la simulacion.

- *Stop time*: habilitado solo cuando se elige la opcion "Stop at specified time" para el parametro *Stop* y es el tiempo para detener la ejecucion del modelo en unidades de tiempo del modelo.

- *Stop date*: habilitado solo cuando se elige la opcion "Stop at specified date" para el parametro *Stop* y es la fecha del calendario para detener la ejecucion del modelo.

Los parametros de tiempo anteriores se aplicaran a todas las ejecuciones de replicacion.

#### Replicaciones:

- *Replicaciones minimas:* el numero minimo de ejecuciones de simulacion que se realizaran en el experimento.

- *Replicaciones maximas:* el numero maximo de ejecuciones de simulacion que se realizaran en el experimento. El experimento seguira replicando ejecuciones hasta que los resultados converjan. Si no convergen, este es el numero maximo de ejecuciones que se realizaran. Si se alcanza este numero de ejecuciones cuando ejecutas el experimento, es una buena idea aumentar este numero y ejecutar el experimento nuevamente.

- *Nivel de confianza:* puedes elegir de las opciones especificadas el nivel de confianza que el experimento debe asegurar al encontrar el intervalo de confianza.

- Porcentaje de error: porcentaje de variacion alrededor de la media de la expresion necesaria. Debe ser un valor entre 0 y 1.

- *Expresion:* este es el valor que buscas del modelo. Al definir esta expresion, para alcanzar el agente de nivel superior que especificaste en el *Agent type*, necesitas usar root pero tambien convertirlo a ese tipo de agente. Ejemplo: ((MyAgent)root).variable.

#### Exportacion de Resultados:

- *Mostrar boton de exportacion:* si se elige esta opcion, aparecera un boton al final del experimento que te permite exportar los resultados.

Cuando todos tus parametros esten correctamente configurados, ejecuta el modelo y presiona START para iniciar el experimento.

### Como Usar la Biblioteca

Aunque esta biblioteca puede usarse de muchas maneras, te aconsejamos usar la siguiente configuracion para el experimento en tu modelo como mejor practica. Supongamos que tu agente de nivel superior se llama Main (que es lo que la mayoria de los modelos usan)

- Agrega un nuevo tipo de agente en tu modelo, llamalo como quieras, por ejemplo, MyMonteCarlo.

- Crea un nuevo experimento de simulacion que tenga MyMonteCarlo como agente de nivel superior.

- Arrastra y suelta el objeto "Monte Carlo Experiment" disponible desde la paleta de la biblioteca en el agente MyMonteCarlo y configura los parametros como se describe en la seccion anterior.

- En el objeto MonteCarloExperiment, el parametro Agent Type sera Main.class

Ten en cuenta que la configuracion descrita anteriormente es preferida pero no obligatoria. Puedes usar el "Monte Carlo Experiment" en cualquier agente, sin embargo, asegurate de que el agente de nivel superior del experimento de simulacion que ejecutes sea el agente que contiene el objeto "Monte Carlo Experiment" o que sea un agente que contiene al agente que contiene el objeto.

Cuando ejecutes tu experimento de simulacion, veras un boton START que puedes hacer clic para iniciar el experimento Montecarlo.

### Resultados

Cuando ejecutes el experimento, veras 2 graficos que progresan con las ejecuciones de simulacion o replicaciones realizadas. El primer grafico muestra como el porcentaje de error varia con el numero de ejecuciones. El segundo grafico muestra como los tres valores que representan el intervalo de confianza varian con el numero de ejecuciones. Estos tres valores son: la media de la expresion, el limite inferior de la expresion y el limite superior de la expresion. Cuando el experimento se detiene, significa que el porcentaje de error necesario con el nivel de confianza especificado ha sido alcanzado. Entonces, puedes leer los valores finales para el limite inferior, limite superior y la media en la ultima replicacion o ejecucion de simulacion. Ademas, cuando el experimento se detiene, aparecera un boton que te permite exportar los resultados de los graficos a un archivo csv. Cuando presiones el boton, aparecera una nueva carpeta llamada "exports" en la carpeta de tu modelo, y dentro de esa carpeta encontraras las hojas de resultados exportados. La primera hoja llamada "error percent" muestra los resultados relevantes al grafico de porcentaje de error con la primera columna mostrando el numero de replicacion y la segunda columna mostrando el porcentaje de error. La segunda hoja llamada "ranges" muestra los resultados relevantes al grafico del intervalo de confianza. La primera columna muestra el numero de replicacion y luego podemos ver el limite inferior, la media y el limite superior del intervalo de confianza.

### Preguntas Frecuentes

#### **Obtendre los mismos resultados cada vez que ejecute el experimento?**

Depende de la semilla elegida para tu experimento de simulacion. Si eliges una semilla fija, obtendras los mismos resultados cada vez que ejecutes el experimento. Si eliges una semilla aleatoria, los resultados seran diferentes cada vez que ejecutes el experimento. Sin embargo, ten en cuenta que los resultados no variaran significativamente, lo que significa que el rango final deberia ser cercano en todas las ejecuciones del experimento.

#### **Por que no puedo simplemente usar el experimento Monte-Carlo de AnyLogic que viene con AnyLogic?**

Ese experimento, aunque muestra una opcion para elegir un intervalo de confianza y margen de error para ejecutar tantas simulaciones como sea necesario para alcanzar ese intervalo de confianza, no funciona. Este problema (que esta confirmado como un bug) fue reportado en 2020 al soporte de AnyLogic y nuevamente en 2023, y hasta septiembre de 2024, no ha sido corregido. Todo lo demas en ese experimento funciona bien, asi que si no necesitas usar intervalos de confianza o quieres calcularlos tu mismo, entonces no necesitas esto.
PERO, si estas usando el PLE, bueno, no tienes acceso al experimento monte-carlo. Ahora lo tendras ya que esto funciona con la version PLE de AnyLogic.

#### **Funciona la exportacion en la nube?**

Actualmente no funciona.

#### **Que son los intervalos de confianza?**

Para mas informacion sobre los fundamentos teoricos de los intervalos de confianza y las definiciones de los terminos tecnicos usados en la biblioteca, por favor consulta estos videos:

[https://youtu.be/tWGnQxMgu8A?si=HbPHDZ4YbmrlPE1a.](https://youtu.be/tWGnQxMgu8A?si=HbPHDZ4YbmrlPE1a.)

[https://youtu.be/5UcKw-dZG7c?si=9HUuseB2H11DxiQp.](https://youtu.be/5UcKw-dZG7c?si=9HUuseB2H11DxiQp.)
