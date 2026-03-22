---
title: "Biblioteca de Transportadores de Clasificacion"
slug: "sorting-conveyors-library"
date: 2024-06-28
categories: ["Noorjax Libraries"]
tags: []
excerpt: "Esta herramienta permite al usuario de AnyLogic construir un conjunto de redes de transportadores de clasificacion automaticamente usando puntos de datos definidos en un archivo de configuracion Excel. Este enfoque ofrece flexibilidad, permitiendo "
---

Esta herramienta permite al usuario de AnyLogic construir un conjunto de redes de transportadores de clasificacion automaticamente usando puntos de datos definidos en un archivo de configuracion Excel. Este enfoque ofrece flexibilidad, permitiendo modificaciones y adiciones sin esfuerzo de varios componentes como transportadores de circuito, mesas de transferencia, ramales y mas. Adicionalmente, esta herramienta te permite conectarte a traves de un protocolo TCP/IP con cualquier herramienta externa para leer los datos asociados a la posicion actual de los agentes en la red de transportadores, y enviar informacion de vuelta a esta herramienta para re-enrutamiento y re-definicion de prioridades.

Revisa esta biblioteca en accion en el siguiente enlace: https://cloud.anylogic.com/model/34810d29-661b-4d2c-95dd-46ecd95c221b
Tambien puedes ver el video demo aqui:
https://youtu.be/fQwLOUNW2s4

## Como Descargar

Puedes obtener la version gratuita con limitaciones aqui, junto con todos los archivos importantes que necesitaras:

[https://github.com/noorjax/sorting_conveyors](https://github.com/noorjax/sorting_conveyors)

Necesitaras una licencia para obtener la funcionalidad completa. La version gratuita esta limitada a un maximo de 1 hora de tiempo de simulacion.

## Como obtener una licencia

Para obtener una licencia, sigue las instrucciones en el siguiente enlace:

[/es/blog/getting-a-license-for-a-library/](/es/blog/getting-a-license-for-a-library/)

El precio de esta biblioteca:

- Uso comercial - 1 ano: €3,000

- Soporte para implementacion: €1,000

Nuestros precios pueden cambiar en cualquier momento sin previo aviso

## Documentacion

Esta biblioteca ha sido probada con AnyLogic 8.9.1. Versiones anteriores no funcionaran.

Lo primero que querras hacer con esta biblioteca es construir tus redes de transportadores y para eso, definiras la ubicacion fisica de transportadores, ramales y mesas de transferencia en Excel.

## Archivo de Configuracion Excel

El archivo de configuracion Excel contiene muchas pestanas. Discutiremos lo que hace cada una de estas pestanas.

### License

En esta pestana escribiras el token que recibiras cuando obtengas la version paga de esta herramienta. Si no tienes un token, no te preocupes, aun puedes usar la biblioteca en su version limitada.

### General

- **length unit**: puede ser en Meter o Feet. Esta sera la unidad de longitud para todos los parametros que tienen el sufijo "in length units". Esto regira todas las distancias, velocidades y aceleraciones.

- **python path (optional)**: Aqui agregaras la ruta de ubicacion de tu programa Python en tu computadora, que se usara para mostrar una vista previa de la red de transportadores. Si tienes esto habilitado correctamente, podras hacer clic en el boton "show 3D plot" en la pestana Conveyors config para ver una vista previa de la red que estas construyendo en Excel antes de usarla en AnyLogic. Si eres nuevo con Python, te recomendamos descargar Anaconda Navigator (puedes encontrarlo en linea) y usar la ruta de Python de Anaconda.

#### Archivo Python de pre-visualizacion para la red de transportadores (Boton Show 3D)

Para saber como se ve la red de transportadores antes de ejecutarla en AnyLogic, puedes presionar el boton "show 3D plot" en la hoja Conveyors config en el archivo de configuracion Excel. Pero antes de presionar el boton debes configurar algunas cosas:

- El preVisualizationScript.py esta en la misma carpeta que el archivo de configuracion Excel.

- Para ejecutar exitosamente el "preVisualizationScript.py", es crucial instalar las bibliotecas de Python necesarias. Estas bibliotecas habilitan varias funcionalidades como manipulacion de datos, graficacion, visualizacion 3D, expresiones regulares, operaciones numericas e integracion con Excel. A continuacion una lista de bibliotecas requeridas:

- Pandas

- Matplotlib

- mplot3d

- re (Regular Expressions)

- numpy

- xlwings

Para instalar todas las bibliotecas requeridas, puedes usar los siguientes comandos pip:

*pip install pandas matplotlib numpy xlwings*

El modulo re es parte de la biblioteca estandar de Python, asi que no se requiere instalacion adicional.

### Conveyors config:

En esta hoja se definen los parametros del objeto transportador. Adicionalmente tienes un boton llamado "show 3D plot" que usa Python si lo tienes correctamente configurado para mostrarte una vista previa de como lucen las redes de transportadores a medida que progresas agregandolos.

- **A: id**: identificador unico del transportador.

- **B: Network id:** es el identificador unico de la red a la que pertenece este transportador.

**C: Points in length units (ver imagen abajo)**: todos los puntos del transportador, donde el primero es el origen, y el ultimo es el final del transportador. Las coordenadas pueden ser en metros o pies, como se definio en la hoja General.
Usa esta sintaxis: {{x0,y0,z0},{x1,y1,z1},{x2,y2,z2},...,{xn,yn,zn}}

- Ten en cuenta que el orden en que se escriben los puntos definira la direccion de movimiento del transportador y que esta direccion no puede modificarse durante el tiempo de ejecucion.

- Si los puntos definen un transportador de circuito, asegurate de usar los mismos puntos de inicio y final.

- **D: Type**: tres opciones posibles: Cell, Belt & Roller.

- **E: Gap in length units (ver imagen abajo)**: tamano del espacio si se elige el tipo "Cell". Las unidades de longitud se definen en la hoja General.

- **F: Cell size in length units (ver imagen abajo):** tamano de la celda donde estara el agente si se elige el tipo "Cell". Las unidades de longitud se definen en la hoja General. Si estas usando un circuito con celdas, asegurate de que el circuito y el tamano de las celdas y espacios entre celdas (columnas E y F) tengan sentido, es decir que encajen con la longitud del transportador. Si no lo hacen, nuestro algoritmo calculara el tamano del espacio redondeando al valor mas cercano de la columna E en el que los tamanos encajen correctamente. Cuando ejecutes el modelo, recibiras una notificacion en la consola con el tamano del espacio usado.

- **G: Width in length units (ver imagen abajo)**: ancho del transportador. Las unidades de longitud se definen en la hoja General.

- **H: initial speed in length units per sec**: velocidad inicial del transportador en metros/segundo o pies/segundo.

- **I: max speed in length units per sec**: velocidad maxima del transportador en metros/segundo o pies/segundo.

- **J: acceleration in length units per sec2**: aceleracion del transportador en metros/segundo^2 o pies/segundo^2.

- **K: Color:** color del transportador. Ayuda con la verificacion y validacion del modelo.

### ![](/images/blog/sorting-conveyors-library/Slide2.png)Spurs config

Esta hoja define la conexion que existe entre diferentes transportadores usando ramales.

- **A: Id**: identificador unico del ramal.

- **B. Network id**: es el identificador unico de la red a la que pertenece este ramal.

- **C. branch conveyor (ver imagen abajo)**: el id del transportador que esta directamente conectado a este ramal. El id del transportador es el presente en la columna A de la hoja conveyors config.

- **D****. main conveyor (ver imagen abajo)**: el id del transportador donde el ramal esta adjunto. El id del transportador es el presente en la columna A de la hoja conveyors config.

- **E. Color:** el color del ramal, ayuda en la verificacion y validacion del modelo.

![](/images/blog/sorting-conveyors-library/Slide3.png)

### TransferTables config

- **A. Id:** identificador unico de la mesa de transferencia.

- **B. Network id**: es el identificador unico de la red a la que pertenece esta mesa de transferencia.

- **C. Paths**: un mapa donde se define la conexion de los transportadores. Se necesitan al menos dos transportadores y se puede definir un maximo de cuatro. Las claves del mapa son los id de los transportadores, y el valor es el tipo de punto donde estos transportadores estan conectados a la mesa de transferencia. Ejemplo:{conveyor1:end,conveyor2:end,conveyor3:begin}, este ejemplo define una mesa de transferencia que tiene 3 transportadores conectados, que comienza al final del conveyor1 y conveyor2, y esta conectada al inicio del conveyor3 (ver imagen abajo)"

- **D****. switching delay sec:** El tiempo requerido para cambiar a otro transportador (en segundos).

- **E. fill color:** color de relleno de la forma.

- **F. line color:** color de linea de la forma.

- **G. line width pt**: ancho de linea del cuadrado (esto esta en pixeles).

![](/images/blog/sorting-conveyors-library/Picture1-1.png) ![](/images/blog/sorting-conveyors-library/kkk.png)

### Sensors Config

El objetivo de esta hoja es definir posiciones en transportadores que se usaran como sensores en intersecciones, para crear la secuencia de liberacion de los agentes basada en su prioridad. Los sensores se usan en clasificadores para re-enrutar y priorizar articulos y este es el lugar donde se definen los sensores. (Para mas detalles sobre sensores y como se usan en el modelo de simulacion, consulta el parrafo "Transportadores Convergentes")

- **a. Id**: identificador unico del sensor.

- **b. Network id**: es el identificador unico de la red a la que pertenece este sensor

- **c. Conveyor**: el transportador donde se ubicara la posicion.

- **d. offset in length units**: Esta distancia es desde el primer punto del transportador.

- **e. Type of position**: solo dos opciones posibles: enter y exit. Esto define si el sensor se usa a la salida de un transportador o a la entrada. Solo una entrada y varias salidas pueden usarse para una interseccion.

- **f. Intersection id**: identificador unico de la interseccion.

**g. Type of union:** tres opciones posibles aqui:

- **i. gap**: si el tipo de posicion es exit, entonces esto significa que hay un espacio entre el transportador de este sensor y el transportador de entrada.

- **ii. spur**: si el tipo de posicion es exit, entonces esto significa que el transportador de este sensor esta conectado al transportador de entrada con un ramal. Por lo tanto, se debe crear un ramal en la hoja Spurs config.

- **iii. none**: si el tipo de posicion es "enter", entonces esta es la unica opcion viable.

![](/images/blog/sorting-conveyors-library/Slide9.png)

### Routes

Las rutas son todas las secuencias esperadas de transportadores que los materiales (agentes) pueden seguir

- **a. Id**: identificador unico de la secuencia.

- **b. Sequence:** lista de transportadores por los que el agente puede pasar. Usa esta sintaxis: {c1,c3,c5} especificando los ids de los transportadores y asegurate de no agregar ningun espacio entre los ids de los transportadores o junto a los parentesis ya que esto causara un error.

Nota: Para todos los ids descritos anteriormente que necesitan indicarse en la hoja de Excel, los nombres no pueden contener ningun caracter especial aparte del guion bajo "_". Este es el unico caracter aceptable que puede usarse como parte de los nombres de id.

## SpecialConveyorItem

Para usar todas las funciones de esta biblioteca, necesitaras crear tu propio agente que se movera a traves de los transportadores, pero tu agente tendra que ser una extension del SpecialConveyorItem de esta biblioteca, que es un tipo Material Item. Para esto necesitas ir a la seccion avanzada de las propiedades de tu tipo de agente y hacerlo alli como se muestra en la siguiente imagen:

![](/images/blog/sorting-conveyors-library/Picture3-1.png)

Al extender de este tipo de agente especial, el agente tiene acceso a lo siguiente:

**set_id(String id)**: define el identificador unico del agente en caso de que quieras usar las funciones HTTP (siguiente seccion).

**priority**: es una variable double que representa la prioridad actual del agente, cuanto mayor el numero mayor la prioridad.

**setLength(double lengthInUnits, LengthUnits units)**: por defecto el agente tiene 1 metro de largo, cuando creas el agente puedes establecer una nueva longitud para el agente.

**setWidth(double lengthInUnits, LengthUnits units)**: por defecto el agente tiene 1 metro de ancho, cuando creas el agente puedes establecer un nuevo ancho para el agente.

**setHeight(double lengthInUnits, LengthUnits units)**: por defecto el agente tiene 1 metro de alto, cuando creas el agente puedes establecer una nueva altura para el agente.

Por supuesto debes crear tu propia animacion del agente, de lo contrario no veras nada cuando ejecutes la simulacion.

## ConveyorNetworkSettings

Este agente almacena informacion sobre la configuracion de las redes de transportadores. Ayuda a conectar el modelo con servidores en caso de necesitar usar conexiones HTTP (siguiente seccion).

Los parametros de este agente son los siguientes:

- **Use http connection:** define si se usara la conexion http o no.

- **Host:** Este es el nombre de dominio o direccion IP del servidor donde reside el recurso. Identifica el servidor especifico que manejara la solicitud HTTP. Por ejemplo, en la URL http://www.example.com:8080/index.html, www.example.com es el host.

- **Port**: Este es el numero que especifica el punto final de comunicacion en el host. El puerto determina como se transmiten los datos al servidor. Por ejemplo, en la URL http://www.example.com:8080/index.html, 8080 es el puerto.

- **Print connection status**: marca como true si quieres ver el estado de la conexion en la consola.

## Conexion HTTP & JSON

Hay tres funciones que funcionan como clientes en una relacion cliente-servidor: httpRequestAll, httpRequestCurrentSeq, httpRequestPriorities & httpRequestInject. Estas funciones envian un archivo JSON con las posiciones de los agentes almacenadas en la Coleccion materialPositions y luego el retorno esperado depende de cada funcion especifica.

**httpRequestCurrentSeq()**:

Retorna informacion con la nueva secuencia de los agentes y cambia el transportador objetivo actual. Por ejemplo: {"Id": "0", "RouteId": "5", "Priority": 10}, donde Id significa el identificador unico del agente, RouteId es la siguiente ruta para el agente y Priority es la nueva prioridad del agente.

**httpRequestPriorities()**:

- Retorna las nuevas prioridades para los agentes seleccionados. Por lo tanto, la funcion cambia la prioridad de los agentes dinamicamente. Por ejemplo: {"Id": "100", "Priority": 25}, establece la nueva prioridad de 25 para el agente con id "100".

**httpRequestInject(ConveyorNetworkLogic cnLogic, Object classInstance, String addPopulationMethodString, Object... agentArgs)****:**

- Retorna informacion relacionada con la creacion o inyeccion de nuevos agentes en la logica de red de transportadores definida. Por ejemplo, un mensaje JSON del servidor {"Id": 2, "RouteId": "2", "Priority": 20}, donde Id es el identificador unico del nuevo agente a agregar a la red de transportadores, RouteId es la ruta que este nuevo agente seguira, y priority es la prioridad inicial del agente.

- Los agentes se crearan basandose en el argumento addPopulationMethodString que es el metodo que crea nuevos agentes en una poblacion. Por ejemplo, si tienes una poblacion llamada "pallets" debido a un tipo de agente Pallet, entonces el metodo string sera "add_pallets". Considera que el agente Pallet debe ser una extension del agente SpecialConveyorItem.

- Si el addPopulationMethodString requiere algunos argumentos iniciales, puedes definirlos en el argumento agentArgs con todos los parametros requeridos del agente que estas inicializando con el addPopulationMethodString. Considera que si no se requieren argumentos, entonces los argumentos relacionados con agentArgs de la funcion pueden omitirse. Siguiendo el ultimo ejemplo, si el agente Pallet tiene 2 parametros; SKU y Material, entonces debes agregar estos valores para esos parametros delimitados por comas (deben estar en el mismo orden que si estuvieras usando la funcion add_pallets()).

- classInstance es el agente donde existe el metodo add population, o en otras palabras, donde esta la poblacion de los agentes. Por ejemplo, si tu poblacion de pallets esta en main, y estas ejecutando la funcion http directamente desde main, deberias poner **this** como classInstance.

Por ejemplo y usando los ultimos ejemplos, si la Conveyor Network Logic donde los agentes seran inyectados se llama conveyorNetworkLogic, la funcion se veria algo asi:
*httpRequestInject(conveyorNetworkLogic, **this**, "add_pallets", 123, "wood");*
Si el agente no tiene parametros o el nuevo agente debe inicializarse con los valores de parametros predeterminados, entonces se veria asi:
*httpRequestInject(conveyorNetworkLogic, **this**, "add_pallets");*
- Si addPopulationMethodString o classInstance es null, entonces el agente inyectado sera de tipo SpecialConveyorItem.

**conveyorNetworkAnimation.httpRequestAll(ConveyorNetworkLogic cnLogic, Object classInstance, String addPopulationMethodString, Object... agentArgs): **

Retorna informacion de las tres funciones mencionadas anteriormente. Por lo tanto, la respuesta del servidor sera un mapa con las nuevas secuencias de ciertos agentes, nuevas prioridades y la inyeccion de otros en el sistema. La respuesta es una lista que contiene tres listas de mapas: newSeq, priority e inject. Los argumentos cnLogic, classInstance, addPopulationMethodString y agentArgs se usan si se requiere una nueva inyeccion (lee la funcion httpRequestInject para entender esto).

### Pasos para hacer que esto funcione

Para hacer que esto funcione, estos son los pasos necesarios:

- Asegurate de que la variable "id" de los agentes este inicializada. Si no, inicializa los id de los agentes usando id=String id en el agente. Esto es necesario para enviar los id de los agentes al servidor.

- Ejecuta una de las funciones dependiendo de lo que quieras hacer:

- conveyorNetworkAnimation. httpRequestCurrentSeq

- conveyorNetworkAnimation.httpRequestInject

- conveyorNetworkAnimation.httpRequestPriorities

- conveyorNetworkAnimation.httpRequestAll

Notas:

Cuando uses httpRequestCurrentSeq, asegurate de que la nueva secuencia proporcionada sea factible de realizar considerando el transportador actual donde el agente se encuentra actualmente. Si no lo es, tendras un error como este:
*lang.RuntimeException: root.conveyorNetworkAgent.convey:*
*Path not found*

## Servidor Http

Para usar las funciones http que estan incorporadas en la biblioteca, necesitaras configurar un servidor usando protocolo http. La biblioteca tiene el cliente integrado, asi que es labor del usuario crear su propio servidor.

Cuando uses las funciones http de esta biblioteca, estaras enviando datos al servidor, y es responsabilidad del servidor decidir que hacer con esos datos y retornar un archivo JSON a AnyLogic (cliente).

Revisa el archivo de ejemplo en Python incluido en la biblioteca que funciona como servidor. (archivo Python main v4.py en la carpeta helper)

Los siguientes puntos describiran la segunda funcion del servidor, que esta relacionada con la funcion httpRequestCurrentSeq en AnyLogic:

@app.route("/update-current-conveyor", methods=["POST"])
Esta linea define una ruta en una aplicacion Flask. Desglosemosla:

- @app.route(...): Este es un decorador Flask usado para asociar una URL especifica con una funcion Python. En este caso, la URL es "/update-current-conveyor".

- methods=["POST"]: Esto especifica que esta ruta solo aceptara solicitudes HTTP POST. Las solicitudes POST generalmente se usan para enviar datos al servidor.

- def update_currentConveyor(): Esta linea define una funcion llamada update_currentConveyor. Esta funcion se ejecutara cuando se haga una solicitud POST a la ruta "/update-current-conveyor".

data = request.get_json()

- request: Este es un objeto Flask que contiene todos los datos de la solicitud HTTP hecha al servidor.

- get_json(): Este metodo se usa para obtener los datos JSON enviados en la solicitud POST. En este contexto, data contendra los datos que el cliente ha enviado al servidor en formato JSON.

Comentarios en el codigo:

- # create a random route: comentario indicando que un id de ruta debe definirse aqui para retornarlo despues. Sugiere que esta parte de la funcionalidad aun debe ser implementada por el usuario.

response = [ ... ]
Aqui, se define una lista de diccionarios, representando la respuesta que se enviara de vuelta al cliente. Cada diccionario en la lista contiene:

- "Id": Un string representando el identificador unico del agente.

- "RouteId": Un string representando el identificador de una ruta.

- "Priority": Un entero indicando la prioridad de la ruta.

return jsonify(response), 201

- jsonify(response): jsonify es una funcion Flask que convierte la lista response en una respuesta HTTP en formato JSON.

- 201: Este es el codigo de estado HTTP indicando que el recurso fue creado exitosamente. El codigo de estado 201 se usa comunmente para respuestas a solicitudes POST que resultan en la creacion de un recurso.

Entendiendo esto, la unica parte que debe tener el mismo formato como se describe es el "response". Ya que este es el JSON que AnyLogic decodificara para hacer los cambios solicitados.

Ten en cuenta que el servidor puede codificarse en cualquier lenguaje de programacion, pero la respuesta debe enviarse como un JSON.

## Transportador Circular

Hay algunas reglas para crear un transportador circular o cerrado:

- Es importante que el primer y ultimo punto del transportador sean los mismos. Ejemplo: {**{10, 10, 1}**, {10, 15, 1}, {46, 15, 1}, {46, 10, 1}, **{10, 10, 1}**}.

- Para los casos cuando tienes un transportador circular con 2 transportadores rectos ramificandose de el tales que estos 2 transportadores rectos tienen direcciones opuestas, es necesario que el vertice del transportador circular (el punto de inicio y final) se elija a lo largo de la parte del transportador circular que esta entre los 2 transportadores rectos ramificados. Ejemplo: el circulo rojo de conveyorLoop: begin & end.

![](/images/blog/sorting-conveyors-library/Slide10.png)

De esta forma puedes simplemente definir una secuencia como esta: {conveyor1,conveyor2} y el agente ira a traves del conveyor1, luego hara medio circuito en el transportador circular (conveyorLoop) y tomara el ramal azul para terminar la secuencia en el conveyor2. Esto es posible solo porque el punto de inicio y final del transportador de circuito no esta en la ruta del agente, de lo contrario, si el punto esta en la ruta, necesitaras definir el circuito como parte de la secuencia.
Si quieres que el agente haga un circuito completo en el circuito, solo necesitas definir la secuencia asi: {conveyor1,conveyorLoop,conveyor2}. El resultado seria conveyor1, luego un circuito completo mas medio circuito y luego conveyor2.
Nota: si el ultimo transportador de una secuencia en una ruta es un transportador de circuito, entonces el agente estara en el circuito para siempre, a menos que se ejecute la funcion httpRequestCurrentConv, cambiando la secuencia del agente.

## Transportador Convergente

Si dos o mas transportadores se fusionan en un solo transportador, sera necesario el uso de las prioridades de los agentes para definir el orden o secuencia de los agentes. Para eso, el uso de la hoja Sensors config sera obligatorio.
Las posiciones en el transportador son los sensores que ayudaran a definir la secuencia de los agentes. Aqui hay un ejemplo rapido de como configurar un punto convergente de transportadores:

![](/images/blog/sorting-conveyors-library/Picture4-1.png)![](/images/blog/sorting-conveyors-library/Slide11.png)

- En la hoja Sensors config, se definen los sensores de los transportadores, hay dos transportadores fusionandose en uno. El intersection id es para definir que sensores estan relacionados.

- Los dos transportadores que se unen en el punto son conveyor1 y conveyor2, por eso ambos tienen exit como tipo de posicion.

- Para usar las prioridades es necesario dividir el transportador principal (en este caso conveyor 2 y conveyor3) en dos partes, ya que esta es la forma de usar los sensores.

- conveyor2 tiene gap como tipo de union ya que hay un espacio entre conveyor2 y conveyor3. En realidad, este espacio no existe, de hecho esto es solo un transportador recto unico. Sin embargo, en la configuracion y en consecuencia el modelo, es necesario dividir el transportador en 2 partes en la interseccion para que podamos agregar los sensores adecuadamente. Al dividir el transportador recto en 2 transportadores, las coordenadas del final del primer transportador deben ser las mismas que las coordenadas del inicio del segundo transportador. De esta forma los 2 transportadores funcionaran como si fueran uno.

- En contraste, conveyor1 tiene una conexion directa al conveyor3 con un ramal (azul).

- En la imagen de ejemplo, ahora que el agente morado con prioridad 6 paso por el sensor "conveyor1 exit" del conveyor1, los dos agentes rojos en conveyor2 deben esperar al final del transportador, ya que el primer agente de este transportador tiene menor prioridad (5). Despues de que el primer agente con prioridad 6 pase por el sensor "conveyor3 enter" en conveyor3, se enviara una senal para permitir que los agentes en el conveyor2 comiencen a moverse, pero ten en cuenta que los agentes rojos solo se moveran hacia adelante si el segundo agente morado con prioridad 6 no ha alcanzado el sensor "conveyor1 exit" en conveyor1 aun.

Ten en cuenta que los offsets de los sensores deben ser consistentes con el diseno, aqui hay algunas cosas a considerar:

- Un sensor de entrada no puede tener un offset igual a cero, ya que no habra espacio para detectar los nuevos agentes entrantes, y las prioridades en la interseccion no funcionaran.

- Un sensor de entrada no puede estar en la misma linea del ramal que proporciona agentes desde el transportador ramal. El sensor debe estar despues de la forma del ramal (ver la siguiente imagen)

![](/images/blog/sorting-conveyors-library/Picture5-1.png)

- El offset de los sensores no puede ser mayor que la longitud total del transportador.

## Como usar el modelo

- Primero descarga la biblioteca (ver la parte superior de esta documentacion) junto con la carpeta lib y guardala en un lugar seguro.

- Dentro de Anylogic, agrega la biblioteca Sorting Conveyors a tu paleta usando el boton + en la pestana de paleta, y encuentra el archivo sortingConveyors.jar que descargaste... Siempre manten ese archivo .jar en la misma ubicacion, o tendras problemas.

![](/images/blog/sorting-conveyors-library/Monosnap-Instructions-Word-2023-11-16-08.43.08.png)

Ahora cuando crees un modelo o si quieres usar un modelo existente con esta biblioteca:

- De la carpeta helper, coloca el archivo Excel configMacroV en la carpeta de tu modelo (NO cambies el nombre ya que este es el nombre usado en la biblioteca. Tampoco cambies la estructura del Excel, o las pestanas o el nombre de las pestanas)

- Si tienes Python instalado, agrega preVisualizationScript.py de la carpeta helper a la carpeta de tu modelo. Esto sera usado por el archivo Excel como macro para mostrar un grafico 3D del sistema de transportadores.

- Arrastra y suelta el ConveyorNetworkSettings en tu modelo. Configura los parametros segun necesites.

- Arrastra y suelta el ConveyorNetworkAnimation en tu modelo. Selecciona el agente conveyorNetworkSettings.

![](/images/blog/sorting-conveyors-library/Picture3.png)

Arrastra y suelta el ConveyorNetworkLogic en tu modelo y conectalo a otros bloques logicos. Pueden haber multiples bloques de este tipo en el modelo.
![](/images/blog/sorting-conveyors-library/Picture4.png)
- Configura los parametros del agente conveyorNetworkLogic, seleccionando la animacion de red de transportadores.

Recuerda dos cosas importantes:

- El agente que usa la logica de red de transportadores DEBE extender de SpecialConveyorItem como se explico previamente.

Antes de que el agente entre al bloque, esta funcion debe usarse: conveyorNetworkAnimation.updateCurrentSequence(SpecialConveyorItem agent, String sequenceId, double priority);
Esto es para inicializar los parametros esenciales del agente para ser enrutado en la red de transportadores. Por ejemplo si un source esta conectado al bloque de logica de red de transportadores, puedes ejecutar ese codigo en la accion "on at exit".

- Ejecuta el modelo y disfruta.

### Notas/recomendaciones

- Recuerda usar puntos para numeros decimales, las comas no estan permitidas para estos numeros.

- Para uniones, como ramales o mesas de transferencia, es necesario dejar espacio entre los transportadores involucrados. Esto es para proporcionar el espacio fisico necesario para crear las lineas que representan los ramales y mesas de transferencia. En la siguiente imagen tres transportadores estan conectados a una mesa de transferencia, y los puntos de conexion no estan posicionados en las mismas coordenadas ya que el espacio entre ellos es necesario, ya que de esta forma se puede crear la forma del transportador.

![](/images/blog/sorting-conveyors-library/Picture7-1.png)

- Adicionalmente, para los ramales, el punto de conexion del transportador ramal debe tener suficiente espacio con respecto al transportador principal, considerando el ancho del transportador principal para esto. Recomendamos posicionar el punto de conexion del transportador ramal al menos a la mitad del ancho del transportador principal de distancia del transportador principal. Revisa la siguiente imagen.

![](/images/blog/sorting-conveyors-library/Picture8-1.png)

- Para los ramales, el punto de conexion del transportador ramal debe apuntar a cualquier segmento del transportador principal que este entre el primer y ultimo punto del transportador principal pero no puede apuntar directamente al primer o ultimo punto ya que el ramal necesita espacio fisico para crear la forma, por lo tanto no esta permitido posicionar un ramal al inicio o final de un transportador principal.

## Preguntas Frecuentes

## Veo las cajas superponiendose en lugares donde tengo sensores

A veces puede suceder, en un tipo de union gap donde se usan los sensores, que un agente ha pasado al siguiente transportador pero no puede avanzar mas debido a una gran cola de agentes en este transportador, y el agente que esta detras va al final del primer transportador. Con eso sucediendo, parece que ambos agentes estan uno encima del otro. Esto es solo algo visual que casi no tiene implicacion operativa. Mejoraremos esto en el futuro.

![](/images/blog/sorting-conveyors-library/Picture1-2.png)

## Mi modelo exportado no funciona

Cuando exportas un modelo, no requiere licencia, siempre y cuando lo hayas exportado con una licencia (tanto para la nube como para exportacion java). Para poder exportarlo, deberias haber ejecutado el modelo de simulacion al menos una vez en AnyLogic con internet encendido, lo que generara un archivo licenseKey.txt valido (si compraste una licencia). Este archivo debe integrarse en cualquier version exportada, y para hacer eso necesitas ir a las propiedades de resources/data/licenseKey.txt y activar "Resource is referrenced from user code". Esto permitira que el modelo exporte el archivo licenseKey.txt, como ves en la siguiente imagen:
![](/images/blog/sorting-conveyors-library/usercodereference.png)
