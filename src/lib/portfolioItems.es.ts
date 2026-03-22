export const portfolioItemsEs = [
  {
    title: 'Optimización de Ubicaciones de Sensores para Detectar Desbordamientos de Alcantarillado',
    slug: 'optimization-for-sensor-locations-to-detect-sewer-overflows',
    categories: ['Agent-Based', 'Optimization', 'Parameter Variation'],
    content: `## Desafío

El propósito del proyecto fue validar una técnica para seleccionar ubicaciones y tiempos de monitoreo que mejor reduzcan la probabilidad y las consecuencias de desbordamientos de aguas residuales.

En términos físicos, el problema representa el movimiento de monitores de nivel ultrasónico a través de ubicaciones discretas en una red de alcantarillado. Los monitores se mueven tanto en distancia como en dirección de acuerdo con reglas establecidas por un algoritmo de búsqueda.

A medida que los monitores se mueven, cambian su estado, definido por un "Número de Prioridad de Riesgo" (RPN). Los monitores actúan individualmente, pero es su RPN colectivo el que necesita ser optimizado. El objetivo es que los monitores busquen "puntos calientes" en el entorno donde el RPN sea más alto. Se sabe que los RPN se agrupan dentro del entorno como se ilustra a continuación. Los códigos de color púrpura más profundo indican las mayores agrupaciones de RPN. Los segmentos de línea roja son una indicación redundante de RPN alto.

![Agrupaciones de puntos calientes en la red de alcantarillado](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows/hotspot-clusters.png)

El objetivo principal fue generar una herramienta usando AnyLogic para parametrizar el problema y tener un método fácil y limpio para desarrollar el mejor algoritmo de optimización.

## Solución

Los datos fueron importados desde archivos GIS y limpiados usando R. Los datos limpios fueron exportados a un archivo Excel para ser usados directamente por AnyLogic. Usar R en este caso fue más fácil y rápido que procesar los datos usando ShapeFile y JAVA directamente en AnyLogic. Generalmente es una buena idea procesar los datos antes de usarlos en AnyLogic.

Los monitores pueden moverse de diferentes maneras dependiendo del algoritmo de optimización elegido. La idea fue mejorar el algoritmo de recocido simulado y compararlo con otros tres:

- La versión básica del algoritmo de recocido simulado
- El algoritmo voraz
- La búsqueda secuencial

![Visualización del modelo de simulación](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows/visualization.png)

El mapa muestra las bocas de alcantarilla con las diferentes características de los parámetros de búsqueda (monitores, puntos calientes, bocas de alcantarilla y alcance de búsqueda) y gráficos sobre la evolución de la función objetivo de iteración en iteración. El mapa fue generado usando coordenadas euclidianas ya que el shapefile proporcionado por el cliente no tenía la geolocalización de las bocas de alcantarilla, sino que tenía una transformación al espacio euclidiano.

En este proyecto, el cliente fue muy participativo e interesado en realizar la mayor parte del análisis por sí mismo, por lo que el enfoque se orientó principalmente al desarrollo de herramientas dentro del modelo de simulación para ayudar al cliente a realizar esos análisis. El cliente aprendió a usar el modelo de simulación a fondo. Luego trabajamos juntos para mejorar el algoritmo mejorado de recocido simulado.

## Resultados

El modelo fue muy útil para que el cliente entendiera diferentes características del sistema y el uso de diversos parámetros necesarios para generar puntos calientes e inicializar la posición de los monitores en el mundo real. También fue muy revelador para el cliente encontrar una manera de mejorar el algoritmo probando una serie de combinaciones de parámetros y pequeños ajustes para mejorar el algoritmo de recocido simulado. Trabajamos paso a paso haciendo pequeños cambios progresivamente hasta encontrar una buena solución que cumpliera con las necesidades iniciales.

## Características del Proyecto

- **Industria:** Aguas Residuales
- **Modelo:** Basado en Agentes
- **Duración:** 11 meses`,
  },
  {
    title: 'Optimización de Red y Simulación de Drones de Apoyo a Misiones Contra Incendios',
    slug: 'network-optimization-and-simulation-of-drones-supporting-fire-missions',
    categories: ['Agent-Based', 'Optimization'],
    content: `## Desafío

Varios incendios afectan a Inglaterra durante todo el año, algunos de ellos destruyendo vastas áreas de terreno. Si bien los bomberos hacen su trabajo de manera increíble, es posible mejorar la calidad de las actividades de lucha contra incendios enviando drones a la ubicación del incendio para recopilar información antes y durante la misión.

El propósito de este proyecto fue elegir el diseño correcto del dron (autonomía y velocidad), el número adecuado de drones a usar en el país y la geolocalización de los centros donde estos drones deben ubicarse para cubrir la mayor cantidad de terreno posible manteniendo costos bajos.

## Solución

El modelo de simulación fue construido en AnyLogic usando un enfoque Basado en Agentes, con tres agentes interactuando entre sí: el dron, la estación de bomberos (donde se ubican los centros) y el incendio.

El modelo tiene una interfaz de usuario inicial donde se pueden controlar cuatro parámetros diferentes: la velocidad del dron, la autonomía del dron, la semilla del centro y el número total de drones en el sistema. La semilla del centro define, basándose en el número total de drones, qué estaciones de bomberos se usarán como centros y cuántos drones estarán disponibles en cada centro.

![Interfaz de usuario de la simulación de drones](/images/portfolio/cases/network-optimization-and-simulation-of-drones-supporting-fire-missions/drone-ui.png)

Los incendios generados en el modelo de simulación fueron todos los incendios que ocurrieron entre 2014 y 2018. El propósito no fue predecir cómo atacarían los incendios en el futuro, sino encontrar una solución pseudo-óptima para el diseño y distribución de drones asumiendo que los incendios mantendrían el mismo comportamiento. El modelo también consideró datos de viento, que afectaban el movimiento de los drones y la altitud a la que volarían para reducir su efecto.

### Enfoque de Optimización

Se desarrolló un experimento de optimización con las siguientes restricciones:

- Al menos el 75% de los incendios deben ser cubiertos. Un incendio está cubierto si el centro más cercano puede enviar un dron con suficiente autonomía para permanecer al menos 7.5 horas en la misión (bajo condiciones de viento neutro).
- La llegada antes que los camiones de bomberos debe ocurrir al menos el 90% de las veces.

AnyLogic usa OptQuest, un motor de optimización de última generación que utiliza métodos heurísticos para encontrar soluciones pseudo-óptimas de problemas altamente no lineales.

La característica más poderosa de los métodos heurísticos es que usan parámetros aleatorios y buscan en los alrededores del espacio de la función objetivo si se encuentra una buena solución. Sin embargo, el tamaño de este problema es demasiado grande y demasiado complejo para manejarlo adecuadamente. Con casi 1.400 estaciones de bomberos, el algoritmo de optimización necesitaría tener una variable (número de drones) para cada estación de bomberos, y esto requeriría un poder computacional enorme.

Para simplificar esto, se usó una semilla de generador aleatorio (llamada semilla del centro). El algoritmo de optimización genera una solución basada en la semilla del centro y el número de drones, lo que define una red de centros distribuidos aleatoriamente con un número aleatorio de drones en cada centro. Este método relaja la optimización miles de veces y aún debería producir buenos resultados, particularmente porque las estaciones de bomberos ya están distribuidas según los requisitos de distribución de incendios en el país.

## Resultados

Como es habitual en nuestros proyectos, el cliente estuvo muy involucrado y usó la herramienta proporcionada para hacer sus propios análisis usando el modelo y las exportaciones a Excel generadas por la simulación con datos brutos. El estudio ahora continúa del lado del cliente usando la simulación como parte del estudio completo.

## Características del Proyecto

- **Industria:** Drones
- **Modelo:** Basado en Agentes
- **Duración:** 4 meses`,
  },
  {
    title: 'Intersección de Tráfico',
    slug: 'traffic-intersection',
    categories: ['Discrete Events', 'Optimization', 'Parameter Variation', 'Road Traffic Library'],
    content: `## Desafío

El objetivo de esta simulación fue comparar el flujo de tráfico y los tiempos de espera usando tiempos optimizados de semáforos fijos contra semáforos inteligentes que usan cámaras para procesar la posición y velocidad de los autos presentes en cada lado de la intersección. Cada lado de la intersección tiene cinco carriles: dos que permiten a los autos girar a la izquierda y tres que permiten a los autos ir recto. Estos cinco carriles están controlados por semáforos, con un carril independiente sin semáforo que permite a los autos girar a la derecha.

## Solución

Este modelo fue implementado en AnyLogic usando la biblioteca de tráfico vial.

### Estructura del Camino Este

![Estructura del camino este para la simulación](/images/portfolio/cases/traffic-intersection/road-structure.png)

Hay cinco carriles que van hacia la intersección y un carril que permite a los autos girar a la derecha. También hay tres carriles que se alejan de la intersección viniendo del oeste o del norte y un carril adicional para autos que vienen del sur. Cada lado de la intersección funciona exactamente de la misma manera. Además, hay un área de carril frontal que define los autos que están en la primera fila cuando la luz está en rojo, una línea de 50 metros que define qué tan lejos puede ver la cámara y una línea de 100 metros usada para analizar la acumulación de autos.

### Escenario Base

Para comparar con precisión los semáforos fijos con los semáforos inteligentes usando cámaras, fue importante optimizar las duraciones de los semáforos. Se realizó un experimento de optimización en AnyLogic. Las duraciones de las cuatro luces verdes se definieron como parámetros a cambiar con una función objetivo igual al número de autos procesados. Las duraciones óptimas después de la optimización con un total de 7.164 autos procesados en una hora fueron:

- **Norte:** 15 segundos
- **Oeste:** 10 segundos
- **Sur:** 16 segundos
- **Este:** 16 segundos

### Escenario CCTV -- Algoritmo Inteligente

El desafío fue encontrar un algoritmo para mejorar el flujo de tráfico usando cámaras de manera efectiva. Se probaron varias ideas, como:

- Usar bucles virtuales para contar cuánto tiempo pasa en cada línea entre un auto y otro
- Si no hay autos en el área del carril frontal, el semáforo no se pondrá en verde

![Diagrama de flujo del algoritmo de tráfico inteligente](/images/portfolio/cases/traffic-intersection/flow-rates.png)

Este algoritmo tiene dos parámetros que necesitan ser optimizados: el número máximo de autos esperando después de la marca de 50 metros para cambiar la luz de verde a rojo, y el número mínimo de autos esperando para cambiar la luz de rojo a verde. A través de la optimización, los mejores valores fueron 13 y 17 segundos respectivamente.

## Resultados

Este estudio mostró que en esta intersección, con un alto flujo de autos y tráfico intenso, es posible usar cámaras con solo 50 metros de alcance para mejorar no solo el flujo de autos sino también para disminuir los tiempos de espera. El algoritmo utilizado es muy simple y usa información básica para tomar decisiones. La mejora es solo del 1.7% del flujo de tráfico, por lo que la implicación económica de tener esta tecnología en funcionamiento debe considerarse en comparación con el beneficio.

## Características del Proyecto

- **Industria:** Tráfico
- **Modelo:** Eventos Discretos, Biblioteca de Tráfico Vial
- **Duración:** 1 mes`,
  },
  {
    title: 'Crecimiento de la Población Carcelaria del Reino Unido',
    slug: 'optimization-for-sensor-locations-to-detect-sewer-overflows-2-2',
    categories: ['Agent-Based', 'Discrete Events', 'System Dynamics'],
    content: `## Desafío

La población carcelaria del Reino Unido ha aumentado más del 400% en el último siglo y alrededor del 90% desde 1990 hasta 2016. Estos números parecen alarmantes y generan un incentivo para gastar recursos en entender la proyección en los próximos 20 años bajo un escenario donde las cárceles ya están sobrepobladas.

![Población carcelaria en Inglaterra y Gales](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/prison-population.png)

Sin embargo, estos números son quizás engañosos, considerando que desde que la población carcelaria alcanzó su máximo en noviembre de 2011, desde entonces se ha estancado. Entonces, ¿ha alcanzado el Reino Unido una meseta? ¿Continuará la población aumentando sin control?

![Población carcelaria al final del mes](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/prison-month-end.png)

Es necesario considerar también que el número de delitos ha disminuido, lo que por sentido común debería llevar a una disminución de la población carcelaria a largo plazo.

![Estadísticas resumidas de delincuencia](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/crime-summary.png)

La población carcelaria y la delincuencia están negativamente correlacionadas, y en el peor de los casos, si la delincuencia ha sido constante, aún no tendrá efecto en la población, por lo que otras políticas deben estar asociadas con el aumento. El objetivo fue analizar este problema usando datos públicos del gobierno y estimar cómo evolucionará la población en las cárceles en los próximos 10 años.

## Solución

La simulación fue construida con una mentalidad multi-modelo, siendo agnóstica a cualquier paradigma de simulación particular: eventos discretos, basado en agentes y dinámica de sistemas.

![Proceso de justicia penal](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/criminal-justice-process.png)

### Modelo de Dinámica de Sistemas

El modelo de Dinámica de Sistemas representa la vista macro abstracta del sistema. Muestra la visión de alto nivel de la dinámica poblacional, donde nueva población llega a una tasa anual y es encarcelada con una cierta tasa. Esta sección almacena a los delincuentes rehabilitados y liberados para una visión general sobre la evolución de la población.

![Modelo de Dinámica de Sistemas](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/system-dynamics.png)

### Modelo de Eventos Discretos

El modelo de Eventos Discretos representa el proceso de justicia penal para personas que cometen acciones criminales y son llevadas a juicio. Nuevos casos penales provienen de 3 fuentes diferentes: nunca encarcelados, rehabilitados y delincuentes liberados. Estos individuos son llevados a juicio y pueden ser liberados, puestos en libertad bajo fianza o en prisión preventiva, y posteriormente sentenciados.

![Modelo de Eventos Discretos](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/discrete-events.png)

### Modelo Basado en Agentes

La sección Basada en Agentes fue generada para entender las principales transiciones de un estado a otro para un potencial prisionero individual, prisionero real o individuo en libertad condicional.

![Modelo Basado en Agentes](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/agent-based.png)

## Resultados

Hay información engañosa respecto a cómo está evolucionando la población carcelaria en el Reino Unido. Algunas fuentes plantean la hipótesis de que la presión de los medios y los cambios en la duración de las sentencias son los factores clave que llevan a un aumento severo en la población y la sobrepoblación. Pero las políticas siempre cambian hacia las tendencias actuales. Las cárceles sobrepobladas pueden llevar a una reducción en las sentencias y a más personas siendo liberadas en libertad condicional.

Los resultados muestran que la sobrepoblación lleva a poner más prisioneros de categoría A en instalaciones de categoría B, lo que puede disminuir la percepción de seguridad de los ciudadanos del Reino Unido. La simulación muestra este problema pero también que el problema se estabiliza a largo plazo.

Este estudio mostró cómo el aumento de la población carcelaria puede no ocurrir, lo cual es consistente con análisis estadísticos que muestran que aunque se proyecta un pequeño aumento, el intervalo de confianza es bastante amplio y una disminución es perfectamente plausible.

## Características del Proyecto

- **Industria:** Gobierno y Cárceles
- **Modelo:** Eventos Discretos, Dinámica de Sistemas, Basado en Agentes
- **Duración:** 1 mes`,
  },
  {
    title: 'Flujo de Personas en una Oficina',
    slug: 'people-in-an-office',
    categories: ['Discrete Events', 'Pedestrian'],
    content: `## Desafío

El desafío fue crear rápidamente una prueba de concepto de simulación de personas trabajando e interactuando en una oficina. El objetivo fue entender qué áreas de la oficina generan más tráfico y cuáles son menos visitadas. Las actividades a capturar incluyeron:

- Trabajar en escritorios, biblioteca, área de descanso, espacio de reunión y balcón
- Usar los baños
- Asistir a reuniones
- Almorzar
- Usar el área de café y la cocina

## Solución

Para construir este modelo, se utilizó la biblioteca de peatones de AnyLogic en combinación con la biblioteca de modelado de procesos. Este modelo fue creado en menos de un día, demostrando que una prueba de concepto simple puede construirse extremadamente rápido con supuestos claramente comunicados. Dado que esta oficina no existía y no había datos disponibles, se generaron supuestos conservadores de forma independiente. El cliente también necesitaba una solución rápida, por lo que simplificar el modelo para evitar perder tiempo buscando datos inexistentes fue la decisión correcta.

![Mapa de densidad en la oficina](/images/portfolio/cases/people-in-an-office/density-map.png)

## Resultados

El cliente necesitaba esta prueba de concepto como parte de una propuesta para diseñar la distribución de una oficina. El resultado fue un video donde la población de la oficina podía verse fácilmente para distribución a diferentes partes interesadas que podrían tener dificultades usando AnyLogic o ejecutando aplicaciones independientes. El video fue presentado como parte de la propuesta completa. Aunque la simulación no fue la protagonista esta vez, se utilizó como un punto de datos adicional para apoyar el diseño de la distribución de la oficina.

## Características del Proyecto

- **Industria:** Oficina
- **Modelo:** Eventos Discretos, Peatones
- **Duración:** 1 día`,
  },
  {
    title: 'Prueba de Concepto de Fabricación de Pintura',
    slug: 'propan-raya',
    categories: ['Agent-Based', 'Discrete Events', 'Fluid Library'],
    content: `## Desafío

Este cliente quería construir rápidamente una prueba de concepto de su proceso actual de fabricación de pintura, mezclando diferentes líquidos, aditivos y polvos para crear el producto final y ponerlo en latas usando tanques móviles y estáticos. El objetivo fue entender si AnyLogic era la herramienta correcta para ellos en comparación con Arena. Con un resultado exitoso, el cliente estaba interesado en diseñar nuevas plantas de fabricación usando AnyLogic.

## Solución

El primer paso fue trabajar en la definición de los procesos con el cliente para entender el proceso de fabricación. Esta es una actividad clave: es mucho más barato y rápido desarrollar y actualizar primero un mapa de procesos porque puede validarse antes de siquiera comenzar a generar una simulación. Con el mapa de procesos validado, el desarrollo del modelo de simulación es muy directo.

![Mapa del proceso de fabricación de pintura](/images/portfolio/cases/propan-raya/process-flow.png)

El modelo fue desarrollado usando AnyLogic con la biblioteca de fluidos, eventos discretos y diagramas de estado basados en agentes. Todos los procesos de mezcla de aditivos, polvos y líquidos fueron simulados. El modelo también muestra el transporte de productos mezclados con tanques móviles hacia la ubicación del transportador donde las latas fueron llenadas y cerradas. No se realizó ningún análisis particular ya que el cliente solo quería desarrollar una prueba de concepto.

## Resultados

El cliente quedó satisfecho con el resultado desarrollado en solo unos pocos días. Esto demuestra que procesos muy complejos pueden construirse en muy poco tiempo. El cliente estaba interesado en formar un equipo de modeladores en la empresa, por lo que usando este modelo como punto de partida, se realizó un curso en la empresa para acelerar la curva de aprendizaje de AnyLogic para los empleados.

## Características del Proyecto

- **Industria:** Fabricación de Pintura
- **Modelo:** Biblioteca de Fluidos, Eventos Discretos, Basado en Agentes
- **Duración:** 1 semana`,
  },
  {
    title: 'Vehículos en Pelotón',
    slug: 'platoon',
    categories: ['Agent-Based', 'Discrete Events'],
    content: `## Desafío

Este cliente quería probar la hipótesis de que usar un auto automatizado de alta calidad como líder de un pelotón de otros autos automatizados en una autopista es mejor en términos de seguridad y velocidad en comparación con usar un camión o autobús manual conducido por un humano como líder.

## Solución

En AnyLogic, la Biblioteca de Tráfico Vial se usa generalmente para modelar vehículos en una carretera, pero no es posible usar pelotones ya que no tenemos control sobre la IA de los autos. Tuvimos que usar la Biblioteca de Modelado de Procesos / híbrido Basado en Agentes para crear esto. Se creó un camino de 2 millas con varios obstáculos en el medio (lluvia, baches, accidentes, peligros y entidades en movimiento cruzando el camino), y según las características del líder (sensores, sonares, pasajeros, etc.) el pelotón resolvería los obstáculos de diferentes maneras reduciendo la velocidad, detectando el obstáculo a larga distancia o haciendo una parada completa.

![Cámaras superior y frontal del pelotón](/images/portfolio/cases/platoon/platoon-cameras.png)

## Resultados

La conclusión fue que el auto automatizado fue mejor en términos de seguridad (parada más rápida, mejor comprensión de los obstáculos del camino) y velocidad (completó las 2 millas más rápido) que el autobús o camión conducido por un humano, confirmando la hipótesis del cliente.

## Características del Proyecto

- **Industria:** Tráfico, Pelotón
- **Modelo:** Eventos Discretos, Basado en Agentes
- **Duración:** 1 semana`,
  },
  {
    title: 'Almacén con Contenedores',
    slug: 'warehouse-with-bins',
    categories: ['Discrete Events'],
    content: `## Desafío

Este cliente quería optimizar el tiempo que tarda un conjunto de operadores en hacer el proceso de recolección basado en una lista de 15 artículos. La estrategia fue ubicar los productos con más demanda en mejores posiciones y comparar el tiempo resultante con el tiempo actualmente necesario.

## Solución

La solución fue desarrollada en AnyLogic usando exclusivamente la biblioteca de modelado de procesos. La ubicación de cada producto fue definida en una base de datos Excel y la lista de recolección fue definida aleatoriamente basada en las estadísticas de listas de recolección reales.

![Simulación 2D del almacén](/images/portfolio/cases/warehouse-with-bins/warehouse-2d.png)

En estos casos, el procedimiento normal es generar un experimento comparativo. Sin embargo, dado que la suposición era que un producto siempre estaba disponible, la simulación fue creada como una carrera entre el grupo buscando productos en los contenedores antiguos y el grupo en los contenedores nuevos. Esto permitió una visualización clara de cómo y por qué las diferencias en el tiempo eran tan significativas.

## Resultados

La conclusión fue que las nuevas posiciones ahorraron alrededor de un minuto de tiempo en promedio para cada recolección usando 2 trabajadores. Sin embargo, al llegar a 4 trabajadores, las nuevas posiciones no hicieron ninguna diferencia y fueron incluso peores con 5 trabajadores. Optimizar las posiciones del almacén para minimizar el tiempo es un problema matemático muy complicado, por lo que visualizar claramente en qué casos el nuevo posicionamiento era mejor resultó muy útil.

## Características del Proyecto

- **Industria:** Almacén
- **Modelo:** Eventos Discretos
- **Duración:** 2 semanas`,
  },
  {
    title: 'Una Cadena de Suministro y Red de Distribución B2C y B2B',
    slug: 'a-supply-chain-and-distribution-network-b2c-b2b',
    categories: ['Agent-Based', 'Discrete Events'],
    content: `## Desafío

El negocio del cliente puede resumirse como el transporte y gestión de alimentos frescos desde Centros de Distribución (CD) a Centros de Cumplimiento (CC) como configuración B2B, y desde el Centro de Cumplimiento a clientes finales como configuración B2C, con el objetivo de proporcionar alimentos frescos a los clientes en menos de una hora garantizada.

Había requisitos de expansión considerables debido a la creciente demanda, lo que requería que el cliente seleccionara nuevos Centros de Distribución y Centros de Cumplimiento en una ciudad particular para cubrir esa demanda manteniendo la garantía de entrega de una hora. Esto también significaba una potencial expansión a nuevas ciudades y países.

El cliente quería un espacio de pruebas muy flexible para definir las posiciones de los diferentes CC y CD, la ubicación de clientes potenciales, estrategias de distribución, distribuciones de demanda, regiones de demanda, etc., y usar esa información para analizar consecuencias en términos de servicio al cliente, costos de distribución y utilización de recursos.

## Solución

Para problemas de cadena de suministro y distribución, AnyLogic es una de las mejores herramientas disponibles con un potente conjunto de características como enrutamiento GIS, configuración fácil para modelos de simulación flexibles, fácil guardado/carga de escenarios complejos en tiempo de ejecución y un amplio conjunto de herramientas de análisis.

![Interfaz de usuario de la simulación en tiempo de ejecución](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/simulation-ui.png)

Se desarrolló un modelo de simulación que toma en cuenta todos los requisitos del cliente con la posibilidad de gestionar Centros de Cumplimiento, Centros de Distribución y áreas de demanda antes de la simulación o durante la ejecución. El cliente podía cambiar la estructura de la red en cualquier momento dado para ver el impacto de agregar, editar o eliminar una entidad.

### Análisis de KPI

Se agregaron todas las herramientas de análisis necesarias para permitir al cliente entender las implicaciones de los cambios en los indicadores clave de rendimiento (KPIs). Estos KPIs fueron visualizados en bloques de 4 horas, 1 día y 1 semana para entender las consecuencias a corto, mediano y largo plazo de las decisiones estratégicas.

![Análisis de KPI de 4 horas vs 1 semana](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/kpi-analysis.png)

![Indicadores de nivel de servicio](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/service-level.png)

### Estrategias de Gestión de Pedidos

Algunas decisiones estratégicas cambiarían la dinámica de cómo se llega al cliente final. Se utilizaron algoritmos de sistema experto, que cambiarían manual o automáticamente dependiendo de la decisión del usuario.

![Estrategias de gestión de pedidos para el algoritmo de sistema experto](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/order-management.png)

## Resultados

El resultado es un software completamente funcional que permite la toma de decisiones flexible en un entorno de simulación, teniendo una caja de herramientas de estrategias, definiciones de parámetros, definiciones de algoritmos, automatización y otras características flexibles. El usuario puede visualizar fácilmente una paleta completa de datos gráficos y textuales que muestran todas las dimensiones del negocio con información clara sobre las implicaciones en los KPI. El software fue usado para definir decisiones de expansión reales junto con el mejor plan de acción para la configuración de expansión (arrendamiento de nuevas ubicaciones, modificación de vehículos de entrega, segmentación de zonas de entrega, mejora de procesos del centro de cumplimiento, etc.).

## Características del Proyecto

- **Industria:** Cadena de Suministro
- **Modelo:** Basado en Agentes + Eventos Discretos
- **Duración:** 2 meses`,
  },
  {
    title: 'Análisis de Tráfico Escolar',
    slug: 'school-traffic-analysis',
    categories: ['Road Traffic Library'],
    content: `## Desafío

El cliente, una escuela en Harare, Zimbabue, estaba buscando una nueva ubicación para los edificios escolares. En una ubicación particular, la preocupación era que dejar niños en auto por la mañana causaría caos en las calles circundantes y problemas con el vecindario. El objetivo fue verificar mediante una simulación cuál sería realmente la situación y si era posible encontrar una manera de dejar a los niños sin causar problemas de tráfico.

## Solución

Para resolver este problema, se utilizó la biblioteca de tráfico vial de AnyLogic para construir la red de caminos asociada con la escuela.

![Simulación de tráfico vial del área escolar](/images/portfolio/cases/school-traffic-analysis/traffic-simulation.png)

Había tres puntos de llegada a la escuela, y se desconocía de dónde vendrían los autos, por lo que se construyeron varios escenarios con diferentes distribuciones de llegada de autos. Para entender el tráfico circundante, una persona contó los autos en cada punto de interés de 6:30am a 8am. Estos datos fueron alimentados al modelo, haciendo posible la experimentación.

## Resultados

Los resultados mostraron claramente el caos que ocurriría con el tráfico si se permitiera a los estudiantes venir en auto, y las sospechas iniciales de la junta escolar fueron confirmadas. Aunque la idea de construir la simulación era intentar probar que dejar estudiantes en auto era factible, la conclusión fue que no lo era. Una simulación no miente -- a veces no es posible torcer la verdad para hacer que las cosas funcionen como queremos.

## Características del Proyecto

- **Industria:** Tráfico
- **Modelo:** Biblioteca de Tráfico Vial
- **Duración:** 2 semanas`,
  },
  {
    title: 'Análisis de Terrorismo sobre las Políticas de Inmigración de Trump',
    slug: '1118',
    categories: ['System Dynamics'],
    content: `## Desafío

Después de la elección de Trump en Estados Unidos en 2016, se condujo una prohibición de inmigración sobre diferentes países musulmanes. Se predijo que esta prohibición tendría varias implicaciones sociales, particularmente en el terrorismo. El propósito de este proyecto fue entender el impacto de la política de Trump prohibiendo 6 países del Medio Oriente y África en las acciones terroristas ejecutadas en EE.UU.

La idea fue generar un modelo que representara desde una perspectiva macro el impacto de una política que, mientras reduce el número de terroristas potenciales al reducir la población y endurecer las políticas de inmigración, también genera odio -- uno de los principales impulsores de las acciones terroristas.

Este es un tema social muy complicado, pero muy bien documentado. El desafío fue usar la información disponible para entender las causalidades y medir al menos cualitativamente si los ataques terroristas aumentarían, disminuirían o permanecerían iguales.

## Solución

Basándose en la documentación existente, el primer paso fue entender las principales causalidades que llevan a un aumento del terrorismo. Se creó un Diagrama de Bucle Causal (DBC) que muestra los principales impulsores y bucles de retroalimentación asociados con el terrorismo.

![Diagrama de Bucle Causal de ataques terroristas](/images/portfolio/cases/1118/terrorism-cld.png)

Este DBC es una simplificación de la complejidad relacionada con este tema pero toma en consideración los factores más importantes. Por ejemplo, las ideologías extremistas, la represión, los actores externos y los líderes carismáticos están todos resumidos en la variable "odio hacia EE.UU."

### Validación del Modelo

La variable a medir es el número de ataques por año en EE.UU. El modelo tenía que replicar aproximadamente los datos para ser validado. Los datos de ataques anuales fueron tomados de la Base de Datos Global de Terrorismo (GTD).

![Ataques anuales en EE.UU. del GTD](/images/portfolio/cases/1118/yearly-attacks.png)

El modelo muestra que los ataques tienden a estabilizarse alrededor de 37 ataques por año, que es aproximadamente el mismo dato del GTD en 2015.

![Ataques esperados mostrados por el modelo](/images/portfolio/cases/1118/attacks-outcome.png)

## Resultados

Los resultados mostraron una reducción del 2% al 4% de intentos de ataque en EE.UU. con la política de Trump en vigor. De los datos del GTD, desde 2003 el porcentaje de ataques exitosos es del 80%. Así que el número de ataques que serían detenidos por la política de Trump en los próximos 5 años sería de alrededor de seis como máximo, y estos no necesariamente tienen víctimas fatales. ¿Vale esto la pena a cambio de todo el estrés social, político y económico?

## Características del Proyecto

- **Industria:** Gobierno
- **Modelo:** Dinámica de Sistemas
- **Duración:** 1 mes`,
  },
  {
    title: 'Segmentación de Precios para Plataforma de Viajes Compartidos',
    slug: 'pricing-segmentation-for-ride-sharing-platform',
    categories: ['Discrete Events', 'GIS'],
    content: `## Desafío

El desafío fue simular una plataforma de viajes compartidos para propietarios de autos privados, que solo tiene una función mediadora como lugar para "encontrarse" -- los propietarios de autos que ofrecen viajes compartidos son privados, al igual que las personas que buscan un viaje.

Se debían probar tres escenarios diferentes para entender la satisfacción del cliente, el crecimiento de usuarios y la posibilidad de que los usuarios se mudaran a una plataforma competidora:

1. Una situación inicial (sin tarifa)
2. Una situación donde la plataforma cobra una tarifa fija en un momento fijo
3. Una situación donde la tarifa se introduce secuencialmente para diferentes segmentos regionales

Investigaciones empíricas previas mostraron que la segmentación de precios era la mejor solución a largo plazo para que la plataforma tuviera éxito en Alemania, y la simulación fue una herramienta para confirmarlo.

## Solución

Se construyó una simulación usando un modelo de Eventos Discretos en AnyLogic, aprovechando la integración GIS para mejorar la visibilidad. Las segmentaciones se hicieron por región.

![Áreas de segmentación regional en Alemania](/images/portfolio/cases/pricing-segmentation-for-ride-sharing-platform/segmentation-map.png)

Se probaron tres escenarios y los resultados necesitaban mostrar una comparación entre la plataforma y la plataforma competidora, mostrando también los usuarios que usan ambas. Los escenarios de precio fijo y precio segmentado fueron simulados y comparados.

## Resultados

La hipótesis de que el precio segmentado llevaría a una mejor satisfacción del cliente y un crecimiento de usuarios más significativo con el tiempo fue confirmada por la simulación. Este es un ejemplo donde las simulaciones pueden usarse como una segunda herramienta de medición para probar un punto con argumentos adicionales.

## Características del Proyecto

- **Industria:** Aplicaciones
- **Modelo:** Eventos Discretos y GIS
- **Duración:** 1 mes`,
  },
  {
    title: 'Minería de Carbón',
    slug: 'coal-mining',
    categories: ['Agent-Based'],
    content: `## Desafío

Seriti es una empresa minera en Sudáfrica que usa mineros continuos para extraer carbón de minas subterráneas usando una configuración particular para el proceso minero. La estrategia minera requiere definir tamaños de caminos muy particulares para extraer carbón de manera efectiva. Mientras los mineros continuos extraen el carbón, un número de carros lanzadera lo recolectan y transfieren a un alimentador-triturador posicionado estratégicamente. Dado que hay más de 2 lanzaderas, se define un punto de intercambio para esperar a que otras lanzaderas se posicionen en lugares seguros para evitar colisiones.

![Configuración de la mina de carbón](/images/portfolio/cases/coal-mining/mine-configuration.png)

La estrategia minera ha sido la misma durante mucho tiempo y nunca se ha probado para verificar su eficiencia. Los expertos han tenido el monopolio del conocimiento para decidir dónde ubicar los puntos de intercambio, el orden de extracción y la posición del alimentador-triturador. Dado que este proceso toma varias semanas, es virtualmente imposible probar nuevas estrategias en producción -- aquí es donde las simulaciones juegan un papel significativo, permitiendo millones de pruebas para definir una estrategia optimizada sin costo. Ahorrar días de trabajo tiene un efecto tremendo en los costos y las tasas de extracción.

## Solución

Se construyó un modelo Basado en Agentes que era completamente flexible en la configuración de caminos, posicionamiento de diferentes actores y podía exportar todos los datos brutos a Excel. El modelo consistió en cuatro niveles diferentes:

- Configuración del sistema
- Simulación del proceso minero usando agentes
- Motor para calcular la planificación óptima de rutas para evitar colisiones
- Salida de datos y KPIs

El modelo también incluyó definición de turnos, mantenimiento, averías, tiempos de inactividad y recursos.

## Resultados

El modelo permitió a la empresa determinar una estrategia pseudo-óptima para minar carbón con el fin de reducir costos, movimientos y utilización de recursos mientras se maximiza la tasa de extracción.

![Visualización 2D de la simulación de minería de carbón](/images/portfolio/cases/coal-mining/mining-simulation.png)

La singularidad de este proyecto fue la utilización de AnyLogic para configurar patrones de visualización muy complejos y generar movimientos libres de colisiones usando algoritmos de última generación. Este enfoque le da a la empresa minera libertad para generar nuevas configuraciones no probadas sin el costo de probar en producción. También ayuda en la planificación del proyecto ya que el modelo predice la cantidad de tiempo que tomará el proyecto.

## Características del Proyecto

- **Industria:** Minería
- **Modelo:** Basado en Agentes
- **Duración:** 2.5 meses`,
  },
  {
    title: 'Depósito de Autobuses - Diésel vs Eléctrico',
    slug: 'bus-depot-diesel-vs-electric',
    categories: ['Discrete Events'],
    content: `## Desafío

La tarea fue simular la operación interna de un Depósito de Autobuses planificado bajo dos escenarios diferentes, cada uno con diferentes matices en su funcionamiento (número de autobuses, distribuciones de tráfico, cantidad de combustible). El primer escenario fue desarrollar la situación actual con autobuses diésel llegando al depósito, llenando sus tanques, lavándose y estacionándose. El segundo escenario fue evaluar cómo los autobuses eléctricos afectan el sistema.

Las preguntas principales a responder fueron:

- ¿Cuánto dura el tanque de diésel del depósito?
- ¿Son las instalaciones capaces de manejar 490 autobuses sin demasiado tiempo de espera?
- ¿Cuál es el impacto en el tanque de diésel cuando se agregan autobuses eléctricos?
- ¿Cuál es el impacto financiero de agregar autobuses eléctricos?

## Solución

Se construyó un modelo en AnyLogic usando eventos discretos. Se desarrolló un modelo 3D y para simplificar el problema mientras se permitía una visualización clara del combustible, la información se mostró como rectángulos amarillos sobre el autobús y un gran rectángulo amarillo al lado de las bombas para visualizar claramente la evolución del tanque de diésel en el tiempo.

![Simulación 3D del Depósito de Autobuses](/images/portfolio/cases/bus-depot-diesel-vs-electric/bus-depot-3d.png)

## Resultados

El proyecto fue útil para optimizar el número de autobuses (eléctricos y diésel) para los mejores resultados financieros y para evitar colas masivas. También se descubrió que el tanque de diésel era suficiente para cubrir todos los autobuses que llegaban. El modelo fue usado para apoyar la compra de 50 nuevos autobuses eléctricos para la ciudad de Abu Dabi en los Emiratos Árabes Unidos.

## Características del Proyecto

- **Industria:** Tráfico
- **Modelo:** Eventos Discretos
- **Duración:** 2 semanas`,
  },
  {
    title: 'Inversión en Gestión',
    slug: 'management-investment',
    categories: ['Agent-Based'],
    content: `## Desafío

El problema fue generar un marco para inversión en diferentes oportunidades relacionadas con empresas basándose en su beneficio, emisión de carbono, pago de multas por carbono y otros factores. Los inversores se mueven de oportunidad en oportunidad usando heurísticas personales, y el objetivo fue ver dónde terminan invirtiendo los inversores basándose en todos los factores asociados. El objetivo académico secundario fue comparar AnyLogic, MESA y NetLogo.

## Solución

Se generó una solución en AnyLogic usando modelado Basado en Agentes. La visualización fue importante para ver cómo los inversores se movían a través del espacio de inversión.

![Inversores eligiendo una opción de inversión en gestión](/images/portfolio/cases/management-investment/investors-visualization.png)

La figura muestra 25 oportunidades de inversión con cientos de inversores tomando decisiones. Las oportunidades de inversión evolucionan con el tiempo con nuevos valores que pueden hacer que un inversor se mueva hacia esa oportunidad.

## Resultados

Este proyecto fue un ejercicio académico para probar y entender teorías de inversión relacionadas con el carbono y apoyar investigación teórica. La investigación también comparó tres metodologías de simulación con las siguientes conclusiones:

- AnyLogic y NetLogo son igualmente fáciles de usar para proyectos de escala moderada en el área de sostenibilidad
- Repast es un poco más difícil
- AnyLogic se ve mucho mejor con complejidad aumentada

## Características del Proyecto

- **Industria:** Inversión
- **Modelo:** Basado en Agentes
- **Duración:** 2 semanas`,
  },
  {
    title: 'Construcción de Puente - Preparación del Terreno',
    slug: 'bridge-construction-field-preparation',
    categories: ['Agent-Based', 'Discrete Events', 'Optimization', 'Parameter Variation', 'System Dynamics'],
    content: `## Desafío

La pregunta a responder fue cómo modelar, analizar y mantener el flujo de trabajo y la productividad de un sistema de construcción bajo restricciones dinámicas y entidades de toma de decisiones jerárquicas. El enfoque fue analizar el impacto de los parámetros de simulación en la efectividad del sistema, tomando en cuenta situaciones en tiempo real y dando información al equipo de gestión del proyecto sobre el mejor enfoque de control.

Los objetivos fueron:
- Generar y optimizar un cronograma de construcción
- Revisar y re-optimizar el cronograma durante interrupciones
- Ofrecer una plataforma de toma de decisiones para el equipo del proyecto

El problema requería considerar las interacciones y flujos de trabajo de varios miembros trabajadores (gerente de proyecto, gerente de construcción, operadores, etc.), influencias externas (lluvia, accidentes viales), técnicas de gestión y optimización de maquinaria.

## Solución

Se desarrolló un modelo de simulación multi-método en AnyLogic:

- **Modelado Basado en Agentes** capturó las interacciones entre individuos para el inicio del proyecto -- reuniones, investigación, construcción de propuestas, búsqueda de recursos internos o externos, etc.
- **Eventos Discretos** simularon las actividades de campo para limpiar, excavar, rellenar y preparar el terreno para la construcción del puente
- **Dinámica de Sistemas** simuló la influencia externa de la lluvia y el mal clima en el campo

El proyecto también requirió la construcción de un modelo de proceso de negocio completo, con capacitación y soporte.

## Resultados

Bajo condiciones normales, se definieron 2 bulldozers y 2 excavadoras por área. Pero ¿qué pasa si el gerente dice que uno es suficiente? Se desarrolló un experimento Monte Carlo para entender el riesgo de no cumplir el plazo bajo diferentes configuraciones de maquinaria. El clima fue la influencia más crítica que afectó los resultados del proyecto.

### Hallazgos Clave

- Con solo 1 equipo de máquinas por área: ~680 días para terminar
- Con 17 equipos de 2 bulldozers y 2 excavadoras cada uno: solo 300 días
- El objetivo óptimo de terminar dentro de 500 días llevó a esta configuración:
  - **Número de bulldozers:** 2
  - **Número de excavadoras:** 2
  - **Áreas por clúster:** 11 (equivalente a 3 equipos)

La simulación sirve como una herramienta utilizable en diferentes terrenos con diferentes influencias externas como herramienta de gestión de proyectos para definir el uso correcto de recursos y estrategia de trabajo.

## Características del Proyecto

- **Industria:** Construcción
- **Modelo:** Eventos Discretos, Basado en Agentes, Dinámica de Sistemas
- **Duración:** 1 año`,
  },
  {
    title: 'Cita Rápida',
    slug: 'speed-date',
    categories: ['Agent-Based', 'Discrete Events'],
    content: `## Desafío

El objetivo fue construir un panel de control que controlara una simulación que muestre visualmente el proceso de citas rápidas en una instalación con una cierta cantidad de mesas y un cierto flujo de entrada de personas. La idea fue entender el comportamiento del sistema con una disposición particular de mesas y estrategias de citas 1 a 1 para mejorar la experiencia de los clientes.

## Solución

La solución fue construida como una simulación en AnyLogic usando un híbrido con Eventos Discretos y Basado en Agentes. El objetivo del cliente fue recolectar datos, con la visualización como una vista aérea con estilo lemmings.

![Escenario de citas rápidas con disposición de mesas](/images/portfolio/cases/speed-date/speed-date-scenario.png)

La simulación se basó en las mesas donde se realizan citas 1 a 1 con diferentes estrategias para rotar participantes.

## Resultados

El resultado fue un software fácil de usar para probar diferentes escenarios, guardar escenarios, cargar escenarios, etc., con el fin de recolectar datos sobre esta sala de citas. El resto del análisis fue realizado por el cliente usando exportaciones a Excel para investigación adicional.

## Características del Proyecto

- **Industria:** Entretenimiento
- **Modelo:** Eventos Discretos, Basado en Agentes
- **Duración:** 2 semanas`,
  },
  {
    title: 'Autos y Tuberías - Efecto de Problemas de Agua en el Tráfico Vial',
    slug: 'cars-and-pipes-effect-of-water-problems-on-road-traffic',
    categories: ['Agent-Based', 'Fluid Library', 'Road Traffic Library'],
    content: `## Desafío

En algunas ciudades, el agua consumida en los hogares es transportada a través de tuberías desde reservorios y almacenada en diferentes tanques para redistribuir a los vecindarios. Estas tuberías están presentes debajo de las calles donde fluye el tráfico vehicular. Si un camino tiene problemas y requiere reparación, afecta las tuberías debajo, requiriendo redistribución del agua a través de diferentes tuberías. Por el contrario, un problema de tubería o tanque puede afectar severamente el tráfico vial, generando congestiones y desvíos.

El objetivo del proyecto fue analizar dónde ocurren la mayoría de las averías, si las averías ocurren en múltiples ubicaciones al mismo tiempo, y las implicaciones en el tráfico y el suministro de agua.

## Solución

Se construyó un modelo en AnyLogic usando la biblioteca de fluidos y la biblioteca de tráfico vial junto con Basado en Agentes. Este modelo híbrido permitió la visualización del estado de la red en el tiempo con información de congestión, información de averías y tiempos de reparación.

![Visualización del estado de la red mostrando congestión y averías](/images/portfolio/cases/cars-and-pipes-effect-of-water-problems-on-road-traffic/network-state.png)

## Resultados

El resultado fue un software listo para usar que permite al usuario experimentar con el modelo para entender elementos estadísticos con diferentes entradas como fallas, tráfico, demanda y suministro de agua, rutas alternativas, etc. El modelo fue usado como una iniciativa inicial para comenzar a trabajar en estrategias para reducir las brechas de suministro de agua y las congestiones de tráfico a través de una mejor comunicación, llegada más rápida a las áreas problemáticas y reparación más rápida de problemas.

## Características del Proyecto

- **Industria:** Tráfico Vial
- **Modelo:** Eventos Discretos, Basado en Agentes
- **Duración:** 1 mes`,
  },
  {
    title: 'Empleados Entrando a una Oficina',
    slug: 'employees-entering-an-office',
    categories: ['Discrete Events'],
    content: `## Desafío

El desafío fue construir un modelo muy flexible donde diferentes distribuciones de oficina pudieran diseñarse y agregarse para probar el comportamiento de personas entrando al espacio común de la oficina y sentándose en un escritorio compartido, mesa compartida o asiento casual.

La dificultad fue construir un modelo único que pudiera adaptarse a cualquier distribución de oficina.

## Solución

La solución fue construida usando AnyLogic con eventos discretos para el movimiento de empleados. El usuario podía elegir en una pantalla inicial qué distribución de oficina usar y ejecutar la simulación con ella. También era posible, siguiendo un conjunto de instrucciones, construir una nueva distribución de oficina en un área flexible para una cantidad ilimitada de reorganizaciones.

![Múltiples opciones de distribución de oficina](/images/portfolio/cases/employees-entering-an-office/office-layouts.png)

## Resultados

El proyecto fue un espacio de pruebas para vender diferentes ideas de oficina a empresas, probando la mejor distribución de posiciones de oficina para optimizar la ocupación en el concepto de oficina abierta. Esto puede usarse para oficinas existentes, espacios de coworking o cualquier tipo de estructura de oficina abierta.

## Características del Proyecto

- **Industria:** Oficina
- **Modelo:** Eventos Discretos
- **Duración:** 1 mes`,
  },
  {
    title: 'Producción de Periódicos',
    slug: 'newspaper-production',
    categories: ['Discrete Events'],
    content: `## Desafío

Cuando un proyecto es claro, puede hacerse extremadamente rápido. El conocimiento de la instalación de producción era tan bueno que fue cuestión de implementar sin demoras. El proyecto apuntó a construir una simulación de una instalación de fabricación de periódicos. Los periódicos eran producidos en 1 a 4 máquinas operando a todas horas, transportados por montacargas y cargados a camiones para envío. La idea fue entender el estado actual y definir elementos estratégicos para minimizar el tiempo de espera de camiones para las entregas.

## Solución

La solución fue un modelo de eventos discretos construido en AnyLogic con salidas estadísticas, exportaciones a Excel e información del estado de producción.

![Simulación de producción de periódicos](/images/portfolio/cases/newspaper-production/newspaper-simulation.png)

El objetivo fue ilustrar el cronograma de tiempo desde la recolección de productos manufacturados de una máquina hasta la carga para entrega. Las siguientes preguntas fueron aclaradas:

- ¿Cuántos productos deben almacenarse cuando una corrida de producción pasa por primera vez antes de ser transferidos a un área de almacenamiento intermedio?
- ¿Cómo cambia la carga si se usan múltiples montacargas?
- ¿Cuál es el tiempo de espera de los vehículos antes de la carga, y cuánto toma la carga?

## Resultados

Este proyecto fue presentado a la alta dirección como una demostración para buscar proyectos adicionales. No fue necesaria ninguna mejora de procesos y no se solicitaron nuevas estrategias.

## Características del Proyecto

- **Industria:** Manufactura
- **Modelo:** Eventos Discretos
- **Duración:** 2 semanas`,
  },
  {
    title: 'Complejo de Almacenes para Productos de Alimentos Enlatados',
    slug: 'warehouses-complex-for-canned-food-products',
    categories: ['Discrete Events'],
    content: `## Desafío

El modelo consiste en un complejo de almacenes para diversos productos de alimentos enlatados vendidos a diferentes cadenas minoristas. Una vez que se realiza un pedido, un operador de montacargas o recolector camina por el almacén y recolecta los productos. El complejo incluye cuatro almacenes sin estanterías.

La empresa quería optimizar el tiempo de recolección para montacargas y recolectores manteniendo la misma cantidad de recursos -- sin gastos adicionales.

## Solución

El problema es una situación clásica donde los productos no están organizados apropiadamente, lo que significa que los productos de alta frecuencia no están colocados cerca de los recolectores y montacargas. La solución fue desarrollar un modelo de simulación para probar diferentes arreglos de productos y encontrar el óptimo que lleve a un tiempo de recolección reducido.

![Distribución del almacén y arreglo de productos](/images/portfolio/cases/warehouses-complex-for-canned-food-products/warehouse-layout.png)

![Simulación del almacén en operación](/images/portfolio/cases/warehouses-complex-for-canned-food-products/warehouse-simulation.png)

## Resultados

La simulación resultó en tiempos de recolección más rápidos en general, llevando a una redistribución de las paletas alrededor del almacén.

## Características del Proyecto

- **Industria:** Alimentos
- **Modelo:** Eventos Discretos
- **Duración:** 2 semanas`,
  },
  {
    title: 'Movimiento de Efectivo IOT',
    slug: 'cash-iot',
    categories: ['Discrete Events'],
    content: `## Desafío

Los transportistas blindados son empleados por empresas para transportar de manera segura artículos valiosos como efectivo. En este proyecto, la transferencia ocurre entre minoristas y sus bancos. El objetivo fue entender el comportamiento operacional del proveedor de servicios de transporte blindado y comparar entre el estado actual y un estado futuro que emplea tecnología como etiquetas RFID en bolsas de efectivo y un robot para clasificación.

## Solución

Se construyó un modelo de simulación de eventos discretos en AnyLogic cubriendo varios procesos:

- **Procesos del minorista:** recolección o entrega de bolsas de efectivo, escaneo de código de barras, papeleo, transferencia de custodia
- **Procesos del banco:** recolección o entrega de bolsas de efectivo, retiro de efectivo de cajeros automáticos y recarga, papeleo, transferencia de custodia
- **Llegada a la sucursal del transportista:** almacenamiento de efectivo de llegada, inspección de bolsas, etiquetado, clasificación y preparación para la recolección del día siguiente
- **Operaciones matutinas de la sucursal del transportista:** inspección de bolsas, verificación de manifiesto, transferencia de custodia, carga al camión
- **Movimiento del camión:** entre minoristas, bancos y sucursal del transportista

![Simulación del proceso de movimiento de efectivo](/images/portfolio/cases/cash-iot/cash-process.png)

También se incorporó un estado futuro con mejoras propuestas por el cliente para comparación entre el estado actual y futuro.

## Resultados

El modelo proporcionó un desglose detallado de todas las duraciones de tiempo necesarias y las utilizaciones de recursos en ambos estados. Esto permitió un análisis completo del rendimiento del sistema y ayudó al cliente a probar suposiciones iniciales de requisitos de personal reducidos, eficiencia mejorada, costo reducido a largo plazo y mayor capacidad en el estado futuro.

## Características del Proyecto

- **Industria:** Transporte Blindado e IOT
- **Modelo:** Eventos Discretos
- **Duración:** 1 mes`,
  },
  {
    title: 'Ecosistema de Nunavik',
    slug: 'nunavik-ecosystem',
    categories: ['Agent-Based'],
    content: `## Desafío

Nunavik es un área remota en Canadá que enfrenta desafíos únicos de seguridad alimentaria. Los residentes dependen en gran medida de la pesca para sus necesidades alimentarias diarias. Como fuente de crecimiento económico, Nunavik está desarrollando pesquerías comerciales. Se piensa que la pesca industrial afecta el ecosistema al cambiar la biomasa de las especies. El objetivo fue entender los impactos de estas pesquerías en las comunidades locales dependientes de la pesca para alimentarse.

## Solución

Se construyó un modelo de simulación en AnyLogic usando un enfoque basado en agentes para imitar las actividades de subsistencia diarias de los residentes de Nunavik.

![Modelo del ecosistema de Nunavik](/images/portfolio/cases/nunavik-ecosystem/ecosystem-model.png)

La comunidad está dividida en hogares, y cada hogar necesita mantener el alimento necesario para sus miembros a través de varios medios:

- Pesca (en hogares que tienen una persona que puede pescar)
- Compra en el mercado
- Pedir alimentos a familiares
- Obtener alimentos de un congelador comunitario

![Modelo de seguridad alimentaria del hogar](/images/portfolio/cases/nunavik-ecosystem/household-model.png)

Se toma en consideración el ingreso de cada hogar. El efecto de las pesquerías industriales en la biomasa de peces se toma de otro software llamado Ecosim y se aplica en el modelo. De esta manera, la simulación muestra cómo los cambios en la biomasa afectan directamente las capacidades de los hogares para asegurar las necesidades alimentarias diarias.

## Resultados

A través de proporcionar al usuario la capacidad de cambiar todos los parámetros de entrada mediante una hoja Excel, se investigaron muchos escenarios. El modelo mostró el porcentaje de hogares que eran inseguros alimentariamente al final de un año cuando se toma en consideración el cambio de biomasa debido a las pesquerías comerciales.

Estos resultados ayudaron a establecer directrices para los esfuerzos que deben ser realizados por las autoridades y la comunidad para reducir los efectos negativos en la seguridad alimentaria.

## Características del Proyecto

- **Industria:** Pesca
- **Modelo:** Basado en Agentes
- **Duración:** 1 semana`,
  },
  {
    title: 'Compras de Supermercado en Línea',
    slug: 'online-grocery-shopping',
    categories: ['Discrete Events', 'Optimization'],
    content: `## Desafío

En una aplicación de compras de supermercado en línea, las personas piden productos en línea y los recolectores van al centro comercial para recoger los artículos solicitados y llevarlos a la casa del cliente. El proyecto se enfocó solo en las operaciones dentro del centro comercial. El objetivo principal fue optimizar los métodos de enrutamiento y recolección de artículos.

## Solución

Se construyó un modelo de simulación en AnyLogic usando eventos discretos. Se usaron datos reales de pedidos pasados y la distribución de la tienda para validar el modelo, con validación de resultados hecha usando Python. La optimización usó el concepto de algoritmos genéticos.

![Enrutamiento generado por el algoritmo genético](/images/portfolio/cases/online-grocery-shopping/routing-algorithm.png)

### Conceptos de Optimización Probados

Además de la optimización de pedido único, se probaron otros dos conceptos:

- **Optimización por lotes:** Los lotes de pedidos se recolectan antes de la recolección, de modo que el recolector recoge varios pedidos al mismo tiempo en una visita a la tienda
- **Optimización por zonas:** La distribución de la tienda se divide en zonas, con artículos recolectados por zona. La optimización se hace en 2 niveles: optimizar el orden de recolección de artículos dentro de una zona y optimizar el orden de las zonas

Finalmente, se probó una combinación de ambos conceptos.

Parte del trabajo también involucró limpieza de datos, análisis y calibración de entradas, ya que los datos reales tenían muchos problemas. Todo el análisis de optimización fue conducido usando Python.

## Resultados

El análisis mostró que el método mixto entre lotes y zonificación lleva al tiempo medio mínimo de recolección por artículo. El modelo en sí también puede usarse como herramienta de prueba para optimizar pedidos futuros y encontrar la mejor ruta de recolección.

## Características del Proyecto

- **Industria:** Comercial
- **Modelo:** Eventos Discretos
- **Duración:** 2 semanas`,
  },
  {
    title: 'Educación en Epidemias - Pensamiento Sistémico',
    slug: 'epidemics',
    categories: ['Agent-Based'],
    content: `## Desafío

Este proyecto fue parte de un estudio de investigación realizado en la Universidad de Tecnología y Ciencias Aplicadas en Mascate y la Universidad de Sídney. Estudios previos encontraron que los estudiantes de medicina enfrentan dificultades para comprender ciertos conceptos de epidemiología. El objetivo fue construir modelos basados en agentes para ayudar a los estudiantes de pregrado a entender conceptos de sistemas y explorar la naturaleza y el comportamiento de diversas enfermedades.

## Solución

Se prepararon seis modelos basados en agentes para que los estudiantes exploraran:

### Modelo SEIRS

Un modelo típico usado en epidemiología para entender cómo se propaga una nueva enfermedad desconocida y cuánto tiempo tardaría en terminar. Las letras significan susceptible, expuesto, infectado, recuperado y susceptible nuevamente.

![Modelo epidemiológico SEIRS](/images/portfolio/cases/epidemics/seirs-model.png)

### Modelo de Incendio Forestal

Muestra cómo se propaga un incendio a través de un bosque con árboles.

![Modelo de incendio forestal](/images/portfolio/cases/epidemics/forest-fire.png)

### Modelo de Malaria

Muestra el comportamiento de una enfermedad conocida con factores como hospitalización y políticas de prevención (repelentes de mosquitos y mosquiteros).

![Modelo de malaria](/images/portfolio/cases/epidemics/malaria-model.png)

### Modelo de Marketing

Estudia el efecto de campañas de marketing como anuncios en las ventas de productos.

![Modelo de marketing](/images/portfolio/cases/epidemics/marketing-model.png)

### Modelo de Covid-19

Ayuda a estudiar la propagación del covid con factores de sociabilidad y políticas de prevención como mascarillas, cuarentena y vacunación.

![Modelo de Covid-19](/images/portfolio/cases/epidemics/covid-model.png)

### Modelo Depredador-Presa

Estudia la dinámica entre especies que interactúan en un ecosistema -- lobos y ovejas en este caso.

![Modelo depredador-presa](/images/portfolio/cases/epidemics/predator-prey.png)

### Conceptos de Sistemas Transmitidos

Cada par de modelos fue diseñado para transmitir conceptos dinámicos específicos:

- **SEIRS e incendio:** Emergencia
- **Malaria y marketing:** Punto de inflexión y Resiliencia
- **Covid y depredador-presa:** Equilibrio dinámico

## Resultados

Estos modelos fueron usados en un experimento con estudiantes para ayudar a aprender ideas complejas de sistemas relevantes para entender epidemias. El estudio demostró que este enfoque instruccional podría ayudar a los estudiantes a lograr una comprensión más profunda y un mayor rendimiento en conocimiento declarativo y explicativo sobre enfermedades epidémicas, así como la transferencia de dicho conocimiento a problemas nuevos, previamente no expuestos.

## Características del Proyecto

- **Industria:** Educación y Epidemias
- **Modelo:** Basado en Agentes
- **Duración:** 1 mes`,
  },
  {
    title: 'Flujo de Materiales - La Seguridad Primero',
    slug: 'material_flow_safety',
    categories: ['Discrete Events', 'Material Handling Library'],
    content: `## Desafío

Este proyecto está relacionado con las operaciones en un conjunto de almacenes. El enfoque fue en el movimiento de personas y equipos: montacargas, transpaletas y AGVs responsables de mover materiales, más camiones que transportan materiales al almacén. Además del flujo normal de personas, hay líneas de producción donde las operaciones están concentradas. El cliente estaba preocupado por la seguridad del personal, por lo que el objetivo principal fue definir las áreas más críticas de intersección entre personas y equipos, y entender las ubicaciones de cuellos de botella donde podría ocurrir congestión.

## Solución

Se construyó un modelo de simulación en AnyLogic usando eventos discretos. Se usaron planos arquitectónicos para preparar la distribución usando elementos de pared y nodos para representar salas y áreas de trabajo. Se utilizaron tanto la biblioteca de manejo de materiales como la biblioteca de peatones.

![Distribución del almacén con zonas de seguridad](/images/portfolio/cases/material_flow_safety/warehouse-layout.png)

### Desafíos Técnicos Clave

Un desafío fue que el movimiento de equipos tenía que ser libre (sin caminos específicos) pero ciertas ubicaciones necesitaban ser evitadas por cada tipo de equipo. Esto se resolvió usando movimiento en espacio libre con paredes adicionales y nodos restringidos para guiar a los transportadores sin usar movimiento guiado por caminos.

### Análisis de Zonas de Seguridad

Para especificar zonas de preocupación de seguridad, el área del almacén fue dividida en pequeñas zonas (mallas) y se exportó información bruta sobre el paso de personas y equipos a través de áreas de interés. El cliente también solicitó la capacidad de definir estas áreas dinámicamente a través de una hoja Excel en lugar de definirlas como nodos en el modelo.

## Resultados

El cliente pudo identificar áreas críticas de seguridad y proponer modificaciones a las distribuciones del almacén para reducir tanto los problemas de seguridad como de congestión.

## Características del Proyecto

- **Industria:** Manufactura, Seguridad
- **Modelo:** Eventos Discretos
- **Duración:** 3 meses`,
  },
  {
    title: 'Logística de Entrada de Almacén',
    slug: 'warehouse-inbound-logistics',
    categories: ['Discrete Events'],
    content: `## Desafío

Para este proyecto, colaboramos con una empresa global de logística especializada en gestión de cadena de suministro, transporte de carga y soluciones de almacenamiento a través de aire, tierra y mar. Buscaban desarrollar un modelo de simulación en AnyLogic para analizar la eficiencia de los recursos humanos en sus operaciones de almacén de entrada.

## Solución

El modelo de simulación sirvió dos propósitos principales: primero, como una herramienta de comunicación para visualizar la utilización de recursos a través de datos, y segundo, como una plataforma de experimentación para evaluar el impacto de los cambios en las entradas del sistema en los KPIs operacionales clave.

El modelo representó las operaciones del almacén de entrada desde la llegada de camiones con paletas hasta el almacenamiento de paletas en ubicaciones designadas. Las operaciones incluyeron:

- Trabajo administrativo de entrada
- Descarga usando montacargas
- Clasificación
- Inspección del primer artículo
- Planificación de requerimientos de materiales

![Modelo de simulación del almacén de entrada](/images/portfolio/cases/warehouse-inbound-logistics/inbound-simulation.png)

### Tipos de Paletas

Dentro de este proceso, existen tres tipos de paletas, cada una siguiendo un subproceso distinto:

- Mono-Paletas GS1
- Mono-Paletas no-GS1
- Paletas Mixtas

## Resultados

Todos los parámetros operacionales (tiempo de etiquetado, tiempo de desconsolidación, etc.) eran configurables en un archivo Excel representando un escenario específico. El modelo de simulación presentó tres vistas:

- **Animación:** Operaciones en 2D y 3D
- **Lógica Interna:** La lógica de procesamiento del modelo
- **Estadísticas:** Utilización, horas de trabajo, información de almacenamiento y costos

Se prestó especial atención a optimizar la velocidad de simulación usando herramientas ligeras de AnyLogic, asegurando compatibilidad con potenciales experimentos de optimización futuros.

## Características del Proyecto

- **Industria:** Almacén, Logística
- **Modelo:** Eventos Discretos
- **Duración:** 1 mes`,
  },
  {
    title: 'Operaciones Mineras Inteligentes -- Robótica de Enjambre Impulsada por IA',
    slug: 'swarm-mining-robots',
    categories: ['Discrete Events', 'Fluid Library', 'Material Handling Library'],
    content: `## Desafío

Este proyecto representó operaciones mineras realizadas por sistemas robóticos de enjambre impulsados por IA con tres tipos de robots:

- **Excavadores:** Robots con dos brazos (configuraciones de cincel o sierra). Un excavador con cincel y sierra puede operar independientemente; otras configuraciones requieren trabajo en equipo.
- **Recolectores:** Dos configuraciones -- o llevan el mineral ellos mismos (actuando como recolectores y transportadores), o trabajan en equipo con un transportador separado.
- **Topógrafos:** Usados para propósitos de mapeo, con decisiones operacionales basadas en la distancia a otros robots y la frecuencia de escaneo.

El desafío fue estudiar el comportamiento operacional de estos robots para una distribución dada y entender cómo diferentes configuraciones impactan las métricas de rendimiento. La configuración del diseño de la mina también juega un papel importante en la estrategia de coordinación.

Además, se usa equipo convencional (cargadores y transportadores) para transportar material desde las reservas subterráneas hasta un circuito de procesamiento.

## Solución

Se construyó un modelo en AnyLogic usando la biblioteca de manejo de materiales, la biblioteca de fluidos y casi 30 agentes diferentes para la arquitectura completa del modelo.

### Generación Automática de Distribución

Una de las características más importantes fue construir la distribución de la mina automáticamente, ya que la estrategia de enjambre cambiaría dependiendo de la configuración de cámaras, corredores y espacio de movimiento. La distribución fue construida completamente en un archivo Excel que AnyLogic lee para construir la configuración de la mina antes del inicio de la simulación.

### Sistema Experto para Coordinación de Robots

Como este fue el primer paso hacia un comportamiento de enjambre más inteligente con IA, se construyó un sistema experto con reglas de comportamiento para la estrategia de trabajo en equipo. Esto fue integrado con la evitación de obstáculos de la biblioteca de manejo de materiales de AnyLogic, logrando resultados de rendimiento similares a lo que se esperaría con IA.

![Configuraciones de robots: excavador cincel+sierra con recolector-transportador (izquierda) vs equipo de dos excavadores con recolector y transportador separados (derecha)](/images/portfolio/cases/swarm-mining-robots/robot-config-1.png)

![Simulación de minería de enjambre en acción](/images/portfolio/cases/swarm-mining-robots/robot-config-2.png)

## Resultados

La simulación fue usada para entender el rendimiento de diferentes combinaciones de robots para diferentes distribuciones, lo cual fue muy relevante ya que los resultados operacionales eran desconocidos e incognoscibles sin simulación. Como algunos robots ni siquiera existían aún, también se usó para determinar qué robots construir primero, ya que algunas combinaciones demostraron funcionar mejor con ciertos tipos de robots.

## Características del Proyecto

- **Industria:** Minería, Robótica
- **Modelo:** Eventos Discretos
- **Duración:** 1 mes`,
  },
  {
    title: 'Rendimiento de Organismos Biológicos',
    slug: 'biological-organisms-throughput',
    categories: ['Agent-Based', 'System Dynamics'],
    content: `## Desafío

Esta empresa cultiva organismos biológicos en una serie de estanques interconectados. A medida que los organismos crecen, requieren más espacio, necesitando la transferencia a estanques más grandes con mayor capacidad de agua. La transferencia puede facilitarse de dos maneras:

- **Naturalmente:** Permitiendo que el agua y los organismos fluyan por gravedad
- **Mecánicamente:** Usando bombas (más rápido pero resulta en alguna pérdida de organismos)

Dado que los organismos crecen durante un período prolongado, transitan a través de una secuencia de estanques progresivamente más grandes.

![Vista general del sistema de estanques](/images/portfolio/cases/biological-organisms-throughput/pond-system.png)

Además, los estanques requieren limpieza frecuente y algunos pueden quedar inutilizables debido a fallas, requiriendo que la secuencia de transferencia sea ajustada. El desafío es entender qué secuencia y tecnología usar para maximizar el rendimiento.

## Solución

Como este proyecto requiere opciones de configuración considerables, desarrollamos un modelo en AnyLogic con un archivo de entrada Excel para generar escenarios. Cada escenario requiere conceptos dinámicos para cada estanque que son muy diferentes y están sujetos a ecuaciones físicas basadas en gravedad o capacidades de bombeo.

### Enfoque de Modelado Híbrido

Desarrollamos un modelo híbrido usando una combinación de basado en agentes y dinámica de sistemas.

![Modelo de dinámica de sistemas para interacciones de estanques](/images/portfolio/cases/biological-organisms-throughput/system-dynamics.png)

Para propósitos de validación, desarrollamos versiones 3D y 2D de los estanques conectados a través de la información de dinámica de sistemas. Lo siguiente muestra cómo la densidad cambia en cada estanque, donde el color rojo significa una densidad de organismos alcanzando un umbral crítico (que generalmente debe evitarse ya que bloquea o ralentiza el crecimiento de los organismos).

![Visualización de la densidad del estanque con umbrales críticos](/images/portfolio/cases/biological-organisms-throughput/pond-density.png)

## Resultados

Como este proyecto no puede divulgarse en detalle, es relevante mencionar que la información bruta del proceso fue exportada desde AnyLogic, y desarrollamos un panel de control completo usando PowerBI para mostrar comparaciones entre diferentes escenarios.

![Panel de control de PowerBI comparando escenarios](/images/portfolio/cases/biological-organisms-throughput/powerbi-dashboard.png)

Cada escenario muestra resultados que son fácilmente comparables para propósitos operacionales y estratégicos, pero también para comunicar decisiones a las partes interesadas.

## Características del Proyecto

- **Industria:** Biología
- **Modelo:** Basado en Agentes, Dinámica de Sistemas`,
  },
  {
    title: 'Optimización de Distribución de Gimnasio Militar',
    slug: 'military-gym-layout-optimization',
    categories: ['Optimization', 'Pedestrian'],
    content: `## Desafío

Este proyecto se enfocó en analizar el flujo de personas dentro de una instalación de gimnasio para comparar dos distribuciones diferentes e identificar cuellos de botella que impactan la eficiencia del movimiento y los retrasos de transición entre áreas. La instalación acomoda grupos de 150 a 200 personas que transitan por cuatro zonas de entrenamiento para completar una rutina antes de salir.

Entender cómo las diferentes distribuciones influyen en la eficiencia del flujo fue crítico para determinar el mejor diseño para minimizar retrasos. El desafío clave fue identificar puntos de congestión y evaluar el rendimiento basado en patrones de movimiento.

## Solución

Se construyó un modelo de simulación en AnyLogic para representar la instalación del gimnasio en 2D. La Biblioteca de Peatones capturó la dinámica de movimiento individual e interacciones con obstáculos y otras personas.

![Simulación de distribución del gimnasio - Distribución A](/images/portfolio/cases/military-gym-layout-optimization/gym-layout-1.jpg)

![Simulación de distribución del gimnasio - Distribución B](/images/portfolio/cases/military-gym-layout-optimization/gym-layout-2.jpg)

El modelo fue construido de manera flexible para que el usuario pueda controlar los parámetros de entrada (número de personas, tiempo en cada estación, velocidad de movimiento, selección de distribución) desde una hoja Excel, con suficiente flexibilidad para incorporar distribuciones adicionales para pruebas.

### Análisis de Rendimiento

Para obtener el rendimiento, medimos cuánto tiempo toma a cada individuo moverse desde su posición inicial en una zona hasta la posición final en la siguiente zona. La información fue exportada a nivel individual para análisis poblacional.

![Resultados del análisis de rendimiento](/images/portfolio/cases/military-gym-layout-optimization/throughput-analysis.png)

### Análisis de Cuellos de Botella

Para encontrar cuellos de botella, generamos un conjunto de cuadrados uniformemente distribuidos en la distribución. En cada paso de tiempo, calculamos la densidad en los cuadrados y el tiempo que los individuos pasan en cada cuadrado. Un cuadrado con alta densidad o tiempo prolongado es un potencial cuello de botella.

![Análisis de densidad de cuellos de botella](/images/portfolio/cases/military-gym-layout-optimization/bottleneck-analysis.png)

## Resultados

Los datos brutos exportados del modelo fueron usados para generar diferentes paneles de control en Power BI.

![Panel de control de Power BI - vista general](/images/portfolio/cases/military-gym-layout-optimization/dashboard-1.png)

![Panel de control de Power BI - análisis detallado](/images/portfolio/cases/military-gym-layout-optimization/dashboard-2.png)

El cliente pudo probar variaciones de distribución y tomar decisiones respaldadas por datos antes de implementar cambios físicos, llevando a un entorno más eficiente y fácil de usar.

## Características del Proyecto

- **Industria:** Militar, Fitness
- **Modelo:** Peatones, Optimización`,
  },
  {
    title: 'Sistema Ferroviario de Transporte de Material a Granel',
    slug: 'bulk-material-transport-rail-system',
    categories: ['Discrete Events'],
    content: `## Desafío

El proyecto involucró el análisis de operaciones de transporte de un corredor ferroviario de vía única usado para transporte de material a granel. El ferrocarril opera con un sistema de control centralizado e incluye múltiples bucles de paso para trenes que viajan en direcciones opuestas.

Cada tren consiste en un número determinado de vagones que transportan miles de toneladas de material. El corredor manejaba varios trenes cargados por día, con un tiempo de ciclo completo de más de dos días. El objetivo fue evaluar la capacidad del ferrocarril para acomodar trenes adicionales mientras se garantizan operaciones fluidas y se evitan colisiones.

El desafío principal fue aumentar el rendimiento manteniendo movimientos de trenes seguros y eficientes en un sistema de vía única con demoras en los bucles de paso y datos limitados sobre mecanismos de control existentes.

## Solución

Se desarrolló un modelo de simulación usando la Biblioteca de Ferrocarriles y la Biblioteca de Modelado de Procesos de AnyLogic.

### Distribución Ferroviaria e Infraestructura de Vías

La información disponible respecto a la distribución ferroviaria era solo geolocalizaciones de puntos a lo largo del riel y los bucles. Se usaron puntos GPS para preparar un archivo shape usando Python, que luego fue importado a AnyLogic y convertido en un patio ferroviario.

![Distribución ferroviaria en AnyLogic](/images/portfolio/cases/bulk-material-transport-rail-system/rail-layout.png)

### Movimiento de Trenes y Evitación de Colisiones

La biblioteca de ferrocarriles en AnyLogic detecta colisiones, pero es responsabilidad del modelador construir el proceso de evitación. Los bucles de paso permiten que los trenes esperen a trenes que vienen en dirección opuesta. Creamos un algoritmo simplificado que se comporta como una solución pseudo-óptima.

Se consideraron varios factores: longitud del tren, velocidad promedio por dirección, tiempos de carga/descarga, capacidad máxima en los extremos del riel e incidentes de falla basados en distribuciones personalizadas de datos reales.

### Visualización

Dado que el riel es muy largo y difícil de visualizar a la escala apropiada durante la ejecución del modelo, ideamos un esquema de visualización para identificar fácilmente el movimiento de los trenes a lo largo del riel, esencial para la validación del modelo.

![Esquema de visualización de trenes](/images/portfolio/cases/bulk-material-transport-rail-system/visualization-scheme.png)

## Resultados

La simulación proporcionó información clave sobre las compensaciones entre tiempo de ciclo, congestión y rendimiento.

### Número Óptimo de Trenes

El sistema podría soportar números significativamente mayores de trenes por día sin colisiones. El tiempo medio de ciclo aumenta a medida que se usan más trenes, con un colapso en un cierto umbral mostrando un aumento brusco en la pendiente.

![Tiempo medio de ciclo vs número de trenes](/images/portfolio/cases/bulk-material-transport-rail-system/cycle-time.png)

El número total de trenes cargados que entraron al sistema (rendimiento) durante la simulación muestra la misma tendencia -- más allá de un cierto número, agregar más trenes no vale la pena.

![Análisis de rendimiento](/images/portfolio/cases/bulk-material-transport-rail-system/throughput.png)

### Identificación de Cuellos de Botella

El principal factor limitante fue el espacio disponible para la descarga. En el número umbral de trenes, el lado de descarga alcanza su límite, indicando un cuello de botella.

![Cuello de botella en el lado de descarga](/images/portfolio/cases/bulk-material-transport-rail-system/bottleneck.png)

El operador ferroviario obtuvo recomendaciones valiosas basadas en datos para mejorar la planificación de infraestructura y la optimización del rendimiento.

## Características del Proyecto

- **Industria:** Ferrocarril, Minería
- **Modelo:** Eventos Discretos
- **Duración:** 2 meses`,
  },
  {
    title: 'Reciclaje de Aceite de Cocina Usado',
    slug: 'used-cooking-oil-recycling',
    categories: ['Fluid Library'],
    content: `## Desafío

Este proyecto involucró las operaciones de una instalación especializada en reciclaje de aceite de cocina usado (ACU). La instalación procesa ACU recolectado de establecimientos de servicio de alimentos y lo refina en aceite vegetal reciclado mientras gestiona subproductos como grasas, sólidos y agua residual.

El objetivo fue desarrollar un modelo de prueba de concepto para probar el cronograma actual de camiones que llegan a descargar ACU crudo, camiones que transportan agua sedimentada a plantas de tratamiento de aguas residuales y tráileres cisterna que transportan aceite procesado a los clientes.

Las operaciones de la instalación incluyen múltiples etapas de procesamiento: filtración de sólidos, sedimentación de aceite y agua, calentamiento y separación de grasas, y centrifugación para la purificación final. Cada etapa tiene diferentes tiempos de procesamiento, capacidades de tanques y restricciones operacionales.

## Solución

Se construyó un modelo de simulación en AnyLogic para replicar todo el proceso de reciclaje de ACU de la instalación usando la biblioteca de fluidos. La biblioteca de modelado de procesos simuló la llegada, carga y descarga de camiones.

![Simulación del proceso de la instalación de reciclaje de ACU](/images/portfolio/cases/used-cooking-oil-recycling/facility-process.png)

El modelo consideró elementos operacionales clave:

- **Llegada y descarga de camiones cisterna:** Estudio de tiempos de espera en estaciones de descarga
- **Filtración y sedimentación:** Flujo a través de tanques de filtración y sedimentación para tasas de procesamiento óptimas
- **Calentamiento de grasas y centrifugación:** Separación de aceite, agua y sólidos con análisis de tiempo de procesamiento
- **Carga de tráileres cisterna:** Estudio de tiempos de espera en estaciones de carga y capacidades de almacenamiento de tanques

![Detalle del modelo de simulación](/images/portfolio/cases/used-cooking-oil-recycling/simulation-model.png)

Los parámetros operacionales fueron configurados dinámicamente usando un sistema de entrada basado en Excel para experimentación rápida.

## Resultados

Para cada escenario, el usuario podía exportar información relacionada con tanques y camiones:

**Datos de camiones:**
- Hora de llegada
- Tipo de camión
- Utilización de carga
- Hora de salida

**Datos de tanques (exportados al momento de la salida del camión):**
- Cantidad de fluido en el tanque
- Marca de tiempo

Este proyecto es un pequeño ejemplo de algo que puede hacerse rápidamente para ganar visibilidad, confianza o financiamiento para un proyecto más grande.

## Características del Proyecto

- **Industria:** Reciclaje, Procesamiento de Aceite
- **Modelo:** Biblioteca de Fluidos
- **Duración:** 2 semanas`,
  },
  {
    title: 'Planificación de Instalación de Producción',
    slug: 'production-facility-planning',
    categories: ['Discrete Events'],
    content: `## Desafío

Este proyecto involucró una instalación de producción aún en fase de planificación y en construcción. El enfoque fue desarrollar un gemelo digital para analizar la producción, logística y operaciones de almacén a lo largo de un horizonte de planificación a largo plazo. El objetivo fue evaluar los cronogramas de puesta en marcha de máquinas, el flujo de materiales y el rendimiento de producción mientras se asegura una logística interna eficiente y la utilización de recursos.

Un desafío clave fue determinar el momento óptimo para el despliegue de maquinaria -- ya sea antes, después o según lo planificado originalmente -- para equilibrar capacidad, demanda y eficiencia operacional.

Las materias primas llegan y se almacenan en áreas de almacenamiento. Las ventas se estiman con una proyección de alrededor de 20 años distribuidas mensualmente según ratios de estacionalidad. Varias líneas de producción están programadas para ser puestas en marcha en fechas específicas. La producción siempre se hace en tamaños de lote, con las materias primas movidas usando vehículos de transporte específicos.

## Solución

Se desarrolló un modelo de simulación usando la Biblioteca de Modelado de Procesos de AnyLogic con una distribución 2D que representa la distribución real de la instalación.

![Distribución 2D de la instalación de producción](/images/portfolio/cases/production-facility-planning/facility-layout.png)

### Configuración Integral de Entradas

Toda la información era configurable desde una hoja Excel incluyendo:

- Ventas estimadas por año para cada tipo de producto con ratios de estacionalidad por mes
- Tamaños de lote de producción para cada tipo de producto
- Capacidad de contenedores para cada tipo de producto
- Fechas de puesta en marcha de máquinas y porcentaje de utilización por averías
- Composición de materias primas para cada tipo de producto
- Pasos del proceso de producción con tiempos de ciclo en cada paso
- Tiempos de configuración entre diferentes tipos de producción
- Detalles de vehículos de transporte (cantidad, velocidad, duraciones de carga/descarga)

### Recetas de Proceso Flexibles

Para mayor flexibilidad, los pasos de producción se leyeron de la hoja Excel y se convirtieron en una receta en el modelo para cada tipo de producto.

### Exportación de Datos

Los datos brutos exportados del modelo incluyeron:
- Información de movimiento de vehículos (ubicación inicial, destino, tiempo, número de materiales transportados)
- Pasos de procesamiento de productos (nombre, tiempos de inicio y fin)
- Información de almacenamiento (ubicación, tiempos de llegada y salida)
- Órdenes de producción (ID de orden, tiempos de espera para líneas de producción disponibles)

## Resultados

Al aprovechar la tecnología de gemelo digital, la empresa obtuvo una herramienta poderosa para la planificación estratégica a largo plazo, específicamente para:

- **Programación de producción:** Simulación del impacto de diferentes fechas de puesta en marcha de máquinas en la producción y eficiencia
- **Análisis de flujo de materiales:** Seguimiento de entregas entrantes, requisitos de almacenamiento y movimiento entre etapas de procesamiento

## Características del Proyecto

- **Industria:** Manufactura
- **Modelo:** Eventos Discretos
- **Duración:** 3 meses`,
  },
  {
    title: 'Optimización de Entregas',
    slug: 'delivery-optimization',
    categories: ['Agent-Based', 'Discrete Events', 'GIS', 'Optimization'],
    content: `## Desafío

Este proyecto está relacionado con la operación de vehículos de entrega dentro de un área geográfica. Vehículos con características específicas (capacidad, velocidad) están estacionados en varias estaciones base y transportan materiales desde tiendas minoristas hasta las ubicaciones de los clientes. Los pedidos que vienen desde arriba necesitan ser agrupados y asignados a un vehículo, con restricciones como tiempo máximo de tránsito y temperatura de almacenamiento.

El propósito principal de la simulación fue desarrollar y recolectar información para ser enviada a un algoritmo externo responsable de optimizar la asignación de pedidos a vehículos.

## Solución

Se construyó un modelo de simulación usando AnyLogic con mapas GIS para localizar estaciones, tiendas y rutas. La biblioteca de Modelado de Procesos combinada con diagramas de estado manejó la generación de pedidos y el movimiento de vehículos.

### Configuración de Entradas

Los parámetros definidos vía Excel incluyeron:
- Geolocalizaciones de estaciones, tiendas y clientes
- Capacidad del vehículo, velocidad y tipos de material transportable
- Tasas de llegada de pedidos en diferentes momentos del día
- Tipos de pedidos incluyendo tamaño y detalles de criticidad

### Integración con Algoritmo Externo

Al inicio del modelo, todos los vehículos comienzan en las estaciones base. Los pedidos se generan basándose en tasas especificadas. Si no se especifica una ubicación de recogida, se elige la instalación más cercana basándose en las rutas accesibles y el tipo de pedido.

Todas las características del pedido, ubicaciones, propiedades y estados de los vehículos se envían al algoritmo externo vía HTTP:

1. Configurar un cliente HTTP
2. Convertir datos a JSON
3. Crear y enviar una solicitud POST
4. Recibir la respuesta de asignación optimizada

Cada vez que se generan nuevos pedidos, se envía una nueva solicitud con posiciones de vehículos actualizadas e información de pedidos para re-optimización. Los pedidos ya entregados se excluyen de las nuevas soluciones.

### Exportación de Datos

Los datos exportados incluyeron:
- Todas las características del pedido, vehículos asignados y estados
- Tiempos de solicitud y respuesta para cada ronda del servidor
- Información de actividad del vehículo (tiempos de recogida y entrega)

## Resultados

Además de proporcionar información al algoritmo externo para optimización, la simulación proporcionó datos de análisis valiosos sobre duraciones de entrega, utilización de vehículos y el porcentaje de pedidos rechazados debido a indisponibilidad o violaciones de restricciones.

## Características del Proyecto

- **Industria:** Logística, Entregas
- **Modelo:** Basado en Agentes, Eventos Discretos, GIS, Optimización
- **Duración:** 2 meses`,
  },
  {
    title: 'Secuencias de Trenes en Patio Ferroviario',
    slug: 'train-sequences-in-railyard',
    categories: ['Railyard Library'],
    content: `## Desafío

Un patio ferroviario juega un papel crítico como centro neurálgico donde los trenes son ensamblados, mantenidos y dirigidos a varios destinos. La operación eficiente es esencial para mantener el flujo, asegurar entregas puntuales y evitar cuellos de botella.

En un patio ferroviario típico, puede haber numerosas vías paralelas (hasta 20) que se interconectan en varios puntos. Cada tren puede seguir una secuencia diferente, creando desafíos complejos de enrutamiento. La simulación debe ser flexible y estandarizada, permitiendo que cualquier ruta se defina dinámicamente.

Las métricas clave de rendimiento incluyen:
- Tiempo total de ruta para cada tren
- Tiempo que un tren pasa bloqueado por otro
- Retrasos causados por cambios de turno
- Tiempo dedicado a procesos de mantenimiento (lavado de locomotoras, conservación)

## Solución

La simulación evalúa los beneficios potenciales de agregar vías paralelas para aliviar la congestión, minimizar el riesgo de bloqueo mutuo y mejorar el flujo. En lugar de modelar cada vía individual, las rutas de los trenes se definen en un formato de "receta" tipo Excel para modificaciones fáciles.

![Vista general de la simulación del patio ferroviario](/images/portfolio/cases/train-sequences-in-railyard/railyard-overview.png)

La simulación está construida usando las capacidades de eventos discretos de AnyLogic con las Bibliotecas de Modelado de Procesos y Ferrocarriles.

### Arquitectura del Modelo

El modelo presenta cuatro agentes clave:

- **Distribución:** Representa los bloques lógicos del patio ferroviario y maneja la animación 2D
- **Locomotora:** Representa locomotoras individuales
- **Vagón:** Los vagones que cada locomotora puede transportar
- **Tren:** Un compuesto de una locomotora y sus vagones adjuntos

![Vista detallada del patio ferroviario](/images/portfolio/cases/train-sequences-in-railyard/railyard-detail.png)

Esta estructura asegura que el modelo sea tanto escalable como adaptable, capaz de simular varias configuraciones de trenes y escenarios operacionales.

## Resultados

Se identificaron cuellos de botella y bloqueos de trenes en segmentos específicos, proporcionando información valiosa sobre restricciones operacionales. Sin embargo, el análisis detallado reveló que aunque ocurrieron situaciones críticas, fueron incidentes aislados en lugar de ineficiencias sistémicas. La evaluación de costo-beneficio indicó que las interrupciones no eran lo suficientemente significativas como para justificar la inversión en vías paralelas adicionales.

![Resultados y análisis del patio ferroviario](/images/portfolio/cases/train-sequences-in-railyard/railyard-results.png)

Los resultados fueron desplegados en una hoja de cálculo mostrando el ID del tren, vía de origen y destino, tiempos de inicio y fin, y si el tren fue interrumpido o bloqueado.

## Características del Proyecto

- **Industria:** Ferrocarril
- **Modelo:** Biblioteca de Patio Ferroviario
- **Duración:** 2 meses`,
  },
  {
    title: 'Navegación Multi-Robot con Detección de Colisiones',
    slug: 'multi-robot-navigation',
    categories: ['Agent-Based'],
    content: `## Desafío

Este proyecto presenta un entorno de simulación flexible y dinámico diseñado como un Gemelo Digital de un sistema de navegación multi-robot del mundo real. Construido usando AnyLogic, el modelo permite interacción en tiempo real con clientes y servidores externos, soporta configuración dinámica de mapas y propiedades de robots vía archivos JSON, y simula comportamientos realistas como detección de obstáculos, ejecución de tareas y coordinación de robots.

En sistemas que involucran múltiples robots autónomos navegando entornos compartidos, las colisiones pueden llevar a interrupciones operacionales significativas. Los clientes requieren una plataforma de pruebas para validar algoritmos de navegación y asignación de tareas sin el costo o riesgo de experimentación en vivo.

## Solución

Usando AnyLogic como cliente y servidor, la simulación imita el comportamiento en tiempo real de una flota de robots dentro de un mapa configurable. Cada robot es un agente que actúa como servidor local (recibiendo tareas) y como cliente (enviando actualizaciones de estado) a través de servidores HTTP de Java.

### Capacidades Principales

- Mapa y configuración de robots completamente dinámicos usando archivos JSON, permitiendo pruebas en múltiples mapas sin cambiar AnyLogic
- Comunicación en tiempo real con APIs externas para recibir planes de movimiento y devolver estados de robots
- Evitación de obstáculos usando Zonas de Seguridad y lógica de cuadrantes espaciales
- Representación visual y lógica de nodos, enlaces, robots y áreas restringidas
- Validación de ejecución de tareas a través de colisiones simuladas, detección de obstáculos y seguimiento de batería

![Mapa de navegación de robots con nodos y enlaces](/images/portfolio/cases/multi-robot-navigation/robot-map.png)

### Arquitectura de la Simulación

- **Paradigma Basado en Agentes:** El mapa, los robots y los obstáculos estáticos son modelados como agentes
- **Generación del mapa:** Construido dinámicamente desde entrada JSON describiendo nodos, enlaces, obstáculos y zonas especiales
- **Perfiles de robots:** Archivo JSON separado con dimensiones, puerto del servidor, nivel de batería, velocidad, velocidad de rotación y zonas de seguridad configurables

### Interacción Cliente-Servidor

- **Robot como Servidor:** Cada robot abre un servidor local para recibir instrucciones de tareas de una API externa
- **Robot como Cliente:** Cada robot reporta su posición y nivel de batería al servidor externo de toma de decisiones

### Manejo de Colisiones

- **Sistema de Cuadrantes:** El entorno se divide en cuadrantes espaciales para reducir la carga computacional -- solo se verifican cuadrantes adyacentes durante el movimiento
- **Zonas de Seguridad:** Múltiples zonas configurables que se extienden desde el cuerpo de cada robot. Si un obstáculo entra en una zona de seguridad, el robot reduce la velocidad. Al contacto con el cuerpo, el robot se detiene y marca la tarea como fallida

![Visualización de zonas de seguridad para validación](/images/portfolio/cases/multi-robot-navigation/safety-zones.jpg)

## Resultados

Esta simulación opera en tiempo real y se usa para:

- Verificar visualmente el comportamiento del robot cuando se le dan planes de movimiento
- Identificar colisiones potenciales y evaluar la viabilidad del plan
- Servir como banco de pruebas para algoritmos externos, permitiendo depuración e iteración sin riesgo

### Beneficios Clave

- **Mitigación de riesgos:** Probar comportamientos en un entorno virtual seguro antes de desplegar robots físicos
- **Flexibilidad:** Mapas, tipos de robots y reglas de simulación completamente personalizables
- **Retroalimentación en tiempo real:** Comunicación continua con sistemas externos permite pruebas dinámicas
- **Escalabilidad:** Agregar más robots u obstáculos solo requiere actualizar archivos de configuración

## Características del Proyecto

- **Industria:** Robótica
- **Modelo:** Basado en Agentes
- **Duración:** 3 meses`,
  },
];
