---
title: "Optimizacion con Intervalos de Confianza"
slug: "optimization-with-confidence-intervals"
date: 2024-09-10
categories: ["Noorjax Libraries"]
tags: ["Simulations"]
excerpt: "Los modelos de simulacion son estocasticos por naturaleza, lo que significa que cada vez que ejecutas un modelo de simulacion obtendras resultados diferentes, si usas diferentes semillas. Para comunicar estos resultados variados a"
---

Los modelos de simulacion son estocasticos por naturaleza, lo que significa que cada vez que ejecutas un modelo de simulacion obtendras resultados diferentes, si usas diferentes semillas. Para comunicar estos resultados variados a las partes interesadas, necesitas usar una herramienta estadistica llamada intervalos de confianza. En terminos simples, esta herramienta te dira que tan seguro puedes estar de que tus resultados se encuentran en un intervalo particular. Para hacer esto necesitas ejecutar simulaciones Montecarlo, que consiste simplemente en ejecutar la simulacion tantas veces como sea necesario para que tu intervalo de confianza tenga el menor error que estes dispuesto a permitir o aceptar.

Por favor agenda una reunion con nosotros o contactanos para solicitar una demostracion y ver si esta biblioteca funciona para tus necesidades.

## Como Descargar

Puedes descargar la biblioteca en el siguiente enlace, junto con los archivos auxiliares:

[https://github.com/noorjax/optimizationWithMontecarlo](https://github.com/noorjax/optimizationWithMontecarlo)

Necesitaras una licencia para usarla.

## Como obtener una licencia

Para obtener una licencia, sigue las instrucciones en el siguiente enlace:

[/es/blog/getting-a-license-for-a-library/](/es/blog/getting-a-license-for-a-library/)

El precio de esta biblioteca:

- Uso academico – 3 meses: €200 (la compra debe realizarse con un correo universitario, y no puedes usarla con AnyLogic Pro)

- Uso comercial – 1 ano: €1500

Nuestros precios pueden cambiar en cualquier momento sin previo aviso

## Experimento de Optimizacion

Esta biblioteca ha sido probada con AnyLogic 8.9.1. Versiones anteriores podrian no funcionar.

## Introduccion

Al realizar un experimento de optimizacion, cada conjunto de valores de parametros elegidos se llama una solucion. Cuando una solucion se usa para ejecutar el modelo, no es suficiente ejecutar el modelo solo una vez con esta solucion. Es importante replicarlo hasta que se alcance el nivel de confianza. Basandose en este concepto, esta biblioteca de optimizacion asegura confianza en el resultado de cada solucion al realizar un experimento Montecarlo para cada solucion.

## Instrucciones de Instalacion

Descarga la biblioteca (enlace al inicio de este documento) y guardala en un lugar seguro.

Dentro de Anylogic, agrega la biblioteca a tu paleta usando el boton + en la pestana de paleta, y encuentra el archivo .jar que descargaste. Siempre manten ese archivo .jar en la misma ubicacion, o tendras problemas.
[![](/images/blog/optimization-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)](/images/blog/optimization-with-confidence-intervals/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

En la carpeta del proyecto donde pretendes usar la biblioteca, debes agregar el archivo Excel llamado "input" que recibiras como parte del paquete de la biblioteca cuando la compres. No cambies el nombre del archivo ni los nombres de ninguna de las hojas o obtendras errores.

## Como Usar la Biblioteca

Primero necesitas agregar inputOptimization.xlsx que encuentras cuando descargas la biblioteca en la carpeta de archivos adicionales en la carpeta de tu proyecto AnyLogic ya que la biblioteca usara la informacion alli contenida para ejecutar la optimizacion.

Puedes arrastrar y soltar el objeto "Optimization Experiment" disponible en la paleta de la biblioteca en cualquier agente de tu modelo.

La siguiente configuracion para el experimento es obligatoria en tu modelo: Agrega un nuevo tipo de agente en tu modelo, llamalo como quieras, por ejemplo, MyOptimization. Luego crea un nuevo experimento de simulacion que tenga MyOptimization como agente de nivel superior. Arrastra y suelta el objeto "Optimization Experiment" disponible y el objeto "settingsOpt" desde la paleta de la biblioteca en el agente MyOptimization y configura los parametros para estos objetos como se describe aqui en la siguiente seccion.

Ten en cuenta que la configuracion descrita anteriormente es preferida pero no obligatoria. Puedes usar el "Optimization Experiment" en cualquier agente, sin embargo, asegurate de que el agente de nivel superior del experimento de simulacion que ejecutes sea el agente que contiene el objeto "Optimization Experiment" o que sea un agente que contiene al agente que contiene el objeto.

## Configuracion de Objetos

Arrastra y suelta SettingsOpt y configura los parametros como se describe a continuacion:

### Licencia:

- *Token*: escribe el token que recibiras cuando compres esta herramienta.

- *Check New Version*: marca esta casilla si quieres verificar si hay nuevas versiones de esta biblioteca con nuevas funciones. Si hay una nueva version, la informacion se imprimira en la consola una vez que ejecutes un modelo.

Arrastra y suelta el Optimization Experiment y configura los parametros como se describe a continuacion:

### Licencia:

- *Settings*: elige el objeto settingsOpt que tiene el token.

### Agente Logico:

- *Agent type*: el tipo de agente de nivel superior. Escribe el nombre del tipo de agente seguido de ".class". Ejemplo: MyAgent.class.

### Tiempo del Modelo:

- *Unidades de tiempo del modelo*: unidades de tiempo del modelo

- *Stop*: la condicion de parada para el modelo. Elige la opcion necesaria de la lista desplegable. Puede ser un tiempo en unidades de tiempo del modelo (Stop at specified time) o una fecha (Stop at specified date). La tercera opcion es Never. Usa esta opcion cuando ya tienes una condicion de parada agregada en la logica de tu modelo, como un evento que termina la simulacion, por ejemplo.

Nota: Cuando agregas una condicion de parada en la logica de tu modelo, usa finishSimulation() en lugar de stopSimulation().

- *Start time*: El tiempo inicial en unidades de tiempo del modelo para el horizonte de tiempo de la simulacion.

- *Start date*: La fecha inicial del calendario para el horizonte de tiempo de la simulacion.

- *Stop time*: habilitado solo cuando se elige la opcion "Stop at specified time" para el parametro *Stop* y es el tiempo para detener la ejecucion del modelo en unidades de tiempo del modelo.

- *Stop date*: habilitado solo cuando se elige la opcion "Stop at specified date" para el parametro *Stop* y es la fecha del calendario para detener la ejecucion del modelo.

Los parametros de tiempo anteriores se aplicaran a todas las ejecuciones de replicacion.

### Optimizacion:

- *Objetivo:* elige si el objetivo de la optimizacion es maximizar o minimizar la funcion objetivo.

- *Expresion*: la funcion objetivo que necesita ser optimizada. Al definir esta expresion, para alcanzar el agente de nivel superior que especificaste en el *Agent type*, necesitas usar root pero tambien convertirlo a ese tipo de agente. Ejemplo: ((MyAgent)root).variable

- *Numero de iteraciones*: el numero de iteraciones que se realizaran, cada iteracion constituye un conjunto de posibles soluciones.

- *Parada automatica*: Si se selecciona, la optimizacion se detendra si el valor de la funcion objetivo deja de mejorar significativamente, incluso si no se ha alcanzado el numero de iteraciones especificado.

Para hacer esto, se calculara la diferencia (en porcentaje) entre el promedio de los resultados de todas las soluciones en una iteracion y la enesima iteracion despues de esa. Si esta diferencia es menor que una cierta proporcion x, el experimento se detendra. Necesitas especificar n y x (ver abajo) segun consideres apropiado.

- *Numero de iteraciones consecutivas*: habilitado solo cuando se elige *Parada automatica* y es el numero de iteraciones n como se describio anteriormente.

- *Porcentaje de cambio*: habilitado solo cuando se elige *Parada automatica* y es la proporcion x como se describio anteriormente. Debe ser un valor entre 0 y 1.

### Replicaciones:

- *Replicaciones minimas:* el numero minimo de ejecuciones de simulacion que se realizaran en el experimento Montecarlo.

- *Replicaciones maximas:* el numero maximo de ejecuciones de simulacion que se realizaran en el experimento Montecarlo. El experimento seguira replicando ejecuciones hasta que los resultados converjan. Si no convergen, este es el numero maximo de ejecuciones que se realizaran.

- *Nivel de confianza:* puedes elegir de las opciones especificadas el nivel de confianza que el experimento Montecarlo debe asegurar al encontrar el intervalo de confianza.

- *Porcentaje de error:* porcentaje de variacion alrededor de la media de la *expresion* necesaria. Debe ser un valor entre 0 y 1.

### Acciones Java:

- *Configuracion inicial:* El codigo que agregues aqui se ejecutara en la configuracion del experimento.

- *Antes de la ejecucion de simulacion*: El codigo que agregues aqui se ejecutara antes de cada ejecucion de simulacion (solucion). En este momento el agente de nivel superior del modelo ya esta creado, pero el modelo aun no ha iniciado. Puedes realizar aqui algunas acciones con elementos del agente de nivel superior, usando ((MyAgent)root).

- *Despues de la ejecucion de simulacion*: El codigo que agregues aqui se ejecutara despues de cada ejecucion de simulacion (solucion). Puedes realizar aqui algunas acciones con elementos del agente de nivel superior.

- *Antes de la replicacion: *El codigo que agregues aqui se ejecutara antes de cada ejecucion de replicacion (del Montecarlo) de una solucion. Puedes realizar aqui algunas acciones con elementos del agente de nivel superior.

- *Despues de la replicacion: *El codigo que agregues aqui se ejecutara despues de cada ejecucion de replicacion (del Montecarlo) de una solucion. Puedes realizar aqui algunas acciones con elementos del agente de nivel superior.

- *Despues del experimento: *El codigo que agregues aqui se ejecutara despues de que el experimento termine.

Ten en cuenta que puedes dejar estos vacios si no se necesita ninguna accion.

### Exportacion de Resultados:

- *Mostrar boton de exportacion: *si se elige esta opcion, aparecera un boton al final del experimento que te permite exportar los resultados.

## Instrucciones de Uso

Cuando todos los elementos arrastrados esten correctamente configurados, ejecuta tu experimento de simulacion (en este punto el archivo inputOptimization.xlsx debe estar cerrado). Ve a la carpeta de tu modelo y abre el archivo inputOptimization.xlsx. En la hoja llamada "params_ranges", notaras que ahora puedes ver los nombres de todos los parametros que se encuentran en el agente que definiste como tu agente de nivel superior listados en la columna llamada "parameter". Para cada parametro, define las caracteristicas de la siguiente manera:

- *is an array:* a veces tus parametros pueden ser arreglos. Si el parametro es un arreglo, esto debe ser TRUE, si no debe ser FALSE.

- *Array size:* si el parametro es un arreglo, necesitas especificar el tamano del arreglo aqui. Si el parametro no es un arreglo, simplemente escribe 0.

- *type: *el tipo puede ser una de cuatro opciones (CONTINUOUS, DISCRETE, FIXED, BOOLEAN). Elige el tipo apropiado de la lista desplegable. No escribas nada diferente a los valores indicados en la lista desplegable porque esto causara un error cuando ejecutes el experimento.

- *ranges: *para parametros CONTINUOUS, define el minimo y el maximo. Para parametros DISCRETE, define el minimo, maximo y paso. Para parametros FIXED, define el valor fijo. Para parametros BOOLEAN, no hay necesidad de definir nada. Para todas las celdas que no se necesitan, puedes escribir cualquier valor (cero por ejemplo) pero no las dejes vacias. Por ejemplo, para parametros CONTINUOUS, puedes escribir 0 para el paso ya que no se usara. Para el caso de arreglos que no son FIXED, los rangos indicados se aplicaran a todos los componentes del arreglo. No es posible definir diferentes rangos para cada componente de un arreglo. De nuevo, para arreglos BOOLEAN, no hay necesidad de definir nada. Finalmente, para el caso de arreglos FIXED, en la columna de valor fijo, necesitas definir los valores de los componentes del arreglo usando este formato: si el tamano del arreglo es 3 por ejemplo. Este es el unico formato aceptable, cualquier otro formato dara un error.

Como ejemplo, consulta la imagen a continuacion:

[![](/images/blog/optimization-with-confidence-intervals/new-config-optimization.png)](/images/blog/optimization-with-confidence-intervals/new-config-optimization.png)

Cuando termines de llenar los rangos de parametros, guarda el archivo y vuelve a tu modelo que aun esta ejecutandose y presiona el boton "START" para iniciar el experimento. Si has cerrado la ejecucion del modelo, no te preocupes, puedes ejecutar el experimento de simulacion nuevamente y ahora puedes presionar "START" inmediatamente.
Si agregas/eliminas parametros en cualquier momento durante el desarrollo de tu simulacion, si ejecutas el modelo, el archivo Excel se actualizara automaticamente con los parametros que existen ahora. Solo asegurate de agregar un numero al min, max, step y fixed value antes de presionar start para evitar errores.

## Resultados

Cuando ejecutes el experimento, veras un grafico que progresa con las ejecuciones de simulacion realizadas. El grafico muestra los mejores resultados (de la expresion o funcion objetivo) con cada iteracion. Una linea muestra la mejor media de la solucion (del Montecarlo), la segunda linea muestra el mejor limite inferior de la solucion, y la tercera linea muestra el mejor limite superior de la solucion. Estas 2 ultimas lineas representan el intervalo de confianza de la mejor solucion en cada iteracion. Ademas, a medida que el experimento progresa, el mejor resultado tambien se muestra junto al grafico. Cuando el experimento termina, veras los valores de los parametros que constituyen la mejor solucion.

Adicionalmente, cuando el experimento termina, aparecera un boton que te permite exportar estos valores de parametros a un archivo csv. Cuando presiones el boton, aparecera una nueva carpeta llamada "exports" en la carpeta de tu modelo, y dentro de esa carpeta encontraras la hoja de resultados exportados. La hoja que se llama "parameters values" muestra los nombres de los parametros en la primera columna y los valores para cada parametro en la segunda columna.

## Opciones Adicionales

*Restricciones*: las restricciones son limitaciones o condiciones relacionadas con los valores de los parametros. Una restriccion es una expresion aritmetica bien formada que describe una relacion entre los parametros de optimizacion. Siempre define una limitacion especificando un limite inferior o superior, por ejemplo, p1+p2>10. Las restricciones se evaluan antes de la ejecucion del modelo y la instanciacion del agente de nivel superior, por lo que no pueden involucrar ninguno de los contenidos del agente de nivel superior. Para definir restricciones para tu experimento de optimizacion, necesitas usar la hoja "constraints_db" en el archivo inputOptimization.xlsx. Cada fila constituira una restriccion. En la primera columna, escribe cualquier numero como un id unico para la restriccion. Luego define si quieres habilitar la restriccion cuando ejecutes el experimento especificando TRUE para habilitada y FALSE para deshabilitada. Si la restriccion esta deshabilitada, no se tomara en consideracion en el experimento. Esta opcion se agrega en caso de que quieras probar diferentes combinaciones de las restricciones. Describiremos la columna "on array" en el siguiente parrafo. A continuacion, necesitas definir la expresion que debe estar compuesta por nombre/nombres de parametros y los simbolos matematicos para definir la relacion aritmetica. Despues de eso, necesitas definir el tipo de limitacion. Los simbolos permitidos aqui son: =, >=, <=. Usar cualquier otro simbolo causara un error. Finalmente, defines el limite que es cualquier numero.

Para arreglos, las restricciones son un caso especial. No es posible usar restricciones en mas de un arreglo en una expresion, o en un arreglo y un parametro normal en una expresion. **Solo** se permite usar restricciones en arreglos sobre los componentes del arreglo mismo. En la columna "on array", si la restriccion que vas a agregar en esta fila esta relacionada con un arreglo, este valor debe ser TRUE, de lo contrario debe ser FALSE. El formato de la expresion seria el siguiente por ejemplo: 2*p1+p1/4, donde p1 y p1 representan componentes del arreglo en las posiciones relevantes basadas en los numeros indicados entre los corchetes. Por ejemplo, si este es el arreglo p1: , p1 seria 5.3, y p1 seria 9.5. Cualquier expresion de restriccion que contenga el nombre de mas de un arreglo o que contenga una mezcla del nombre de un arreglo y el nombre de un parametro normal dara un error durante la ejecucion.

*Requisitos*: los requisitos son restricciones adicionales impuestas a los resultados encontrados por el motor de optimizacion. Estas restricciones se prueban despues de una ejecucion de simulacion y pueden involucrar cualquiera de las variables de nivel superior. Para definir requisitos para tu experimento de optimizacion, necesitas usar la hoja "requirements_db" en el archivo inputOptimization.xlsx. Sigue las mismas reglas que las restricciones, sin embargo, en la expresion aqui usa variables en lugar de parametros.

## Preguntas Frecuentes

## No funciona aunque tengo una licencia

Esta biblioteca funciona solo con conexion a internet. Asegurate de que tu conectividad a internet este funcionando.

## Es esto mejor que optQuest?

Primero, puedes exportar este experimento a un archivo ejecutable, lo cual no es posible con OptQuest a menos que compres una licencia especial costosa para eso.
Segundo, es significativamente mas facil trabajar con miles de variables. El experimento nativo optQuest en AnyLogic es muy dificil de usar si tienes tantas variables.

Finalmente, agregamos un documento de comparacion que puedes encontrar en los archivos adicionales cuando descargues esta biblioteca. Usamos 3 modelos tipicos que puedes encontrar en los ejemplos de AnyLogic y concluimos que nuestro algoritmo de optimizacion es bastante similar y da, si no mejores resultados, muy similares a los nativos de AnyLogic.

## Que son los intervalos de confianza?

Para mas informacion sobre los fundamentos teoricos de los intervalos de confianza y las definiciones de los terminos tecnicos usados en la biblioteca, por favor consulta estos videos:

[https://youtu.be/tWGnQxMgu8A?si=HbPHDZ4YbmrlPE1a.](https://youtu.be/tWGnQxMgu8A?si=HbPHDZ4YbmrlPE1a.)

[https://youtu.be/5UcKw-dZG7c?si=9HUuseB2H11DxiQp.](https://youtu.be/5UcKw-dZG7c?si=9HUuseB2H11DxiQp.)

## Mi computadora esta usando 100% de CPU durante la optimizacion, por que?

Esto depende probablemente del tipo de computadora que tienes, el numero de nucleos que tiene tu computadora y otras caracteristicas. Ejecutar una optimizacion es computacionalmente costoso y estamos tratando de usar todos tus nucleos. Podriamos cambiar esto en el futuro si causa problemas.

## Funciona la exportacion en la nube?

Actualmente no funciona.
