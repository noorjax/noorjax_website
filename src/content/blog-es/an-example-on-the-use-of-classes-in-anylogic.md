---
title: "Un ejemplo sobre el uso de Clases vs Agentes en AnyLogic"
slug: "an-example-on-the-use-of-classes-in-anylogic"
date: 2018-11-12
categories: ["AnyLogic Tips"]
tags: ["Class"]
excerpt: "Cuando eres un desarrollador JAVA, es común usar clases para trabajar con objetos. Pero AnyLogic proporciona Agentes, que son básicamente clases predefinidas con varias funcionalidades incorporadas para trabajar con "
---

Cuando eres un desarrollador JAVA, es común usar clases para trabajar con objetos. Pero AnyLogic proporciona Agentes, que son básicamente clases predefinidas con varias funcionalidades incorporadas para trabajar con entidades en un modelo de simulación. Un usuario principiante siempre usará agentes porque con ellos es muy fácil definir todo gráficamente. Pero a veces usar agentes puede ser excesivo, un uso excesivo de memoria, o simplemente no realmente necesario. Además, la versión PLE de AnyLogic tiene una limitación de 10 agentes máximo, y con clases, siempre puedes crear nuevos agentes en forma de clases, lo que te permite extender el modelo aún más.

Creemos un ejemplo para inspirarnos sobre cómo construir una clase y usarla.

## Un Modelo Con Un Agente

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.31.59-1030x154.png)

*Figura 1 - Modelo de Tráfico*

El modelo que vamos a usar se muestra en la figura 1. Nuestros agentes en el carSource serán definidos como se muestra en la figura 2. El hecho de que el tipo de agente car sea una Clase ya incorporada en AnyLogic con varias características gráficas y de análisis, sería inhumano reinventar la rueda si ya tenemos algo perfectamente funcional. Crear una clase no tiene sentido en este caso.

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.40.11.png)

*Figura 2 - Agente Car*

## Construyendo una Clase

Digamos que queremos que nuestra clase sea una representación del segmento que existe entre estas dos líneas de parada. Esta clase podrá devolver el número de autos presentes en el segmento y el número de autos eléctricos presentes en él también. La figura 3 muestra una variable que representa el segmento que queremos usar.

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.48.22.png)

*Figura 3 - variable de tipo RouteSegment*

El siguiente código representa la clase RouteSegment.

```java
public class RouteSegment implements Serializable {

private int numCars=0;

ArrayList <Car> cars=new ArrayList();

/**
* Default constructor
*/

public RouteSegment() {

}

@Override
public String toString() {
return super.toString();
}

public int getCars() {
return this.numCars;
}

public void incrementCars(Car car) {
this.numCars++;
cars.add(car);
}

public void decreaseCars(Car car) {
this.numCars--;
cars.remove(car);
}

}
```

Entonces, lo que esta clase hace es:

- Almacenar en un arreglo los autos que están presentes en el segmento

- Contar los autos que están presentes en el segmento

En lugar de esta clase, eventualmente podrías crear una variable y un arraylist en tu modelo y nunca usar una clase en absoluto, pero ¿no es esto mucho más elegante y claro? Yo creo que sí. También podrías usar un Agente para hacer esto. SIEMPRE puedes usar un agente en lugar de una clase, pero ¿por qué lo harías en este caso? ¿No sería más confuso?

Veamos el código que agregué en las acciones "on car passes" de las líneas de parada. Este código se usa para agregar y eliminar autos cada vez que un auto pasa por una línea de parada.

- primera línea de parada: routeSegment.incrementCars((Car)car);

- segunda línea de parada: routeSegment.decreaseCars((Car)car);

Ahora podemos imprimir fácilmente lo que necesitamos en la pantalla (número de autos y número de autos eléctricos en el segmento):

```java
String.format("there are %d cars from which %d are electric",routeSegment.getCars(),count(routeSegment.cars,c->c.isElectric))
```

![](/images/blog/an-example-on-the-use-of-classes-in-anylogic/Screen-Shot-2018-11-11-at-23.59.52-1030x165.png)

*Figura 4 - Mostrando los resultados*

## Conclusiones

Este es un ejemplo en el que me gusta el uso de una Clase, pero la respuesta sobre cuándo usar agentes o clases no es tan obvia. Es principalmente una cuestión de preferencia y estilo de desarrollo. Pero algunas de las razones por las que definitivamente deberías usar clases en mi opinión:

- Cuando estás usando AnyLogic PLE y quieres agregar más de 10 agentes

- Cuando quieres ahorrar memoria

- Cuando quieres escribir código elegante y limpio, acumulando todas las funcionalidades de un objeto particular o entidad abstracta en un solo lugar

- Cuando quieres usar un agente pero una clase es más que suficiente para cumplir tus objetivos (siempre puedes transformar la clase en un agente si cambias de opinión después)

- Cuando quieres crear una variable JAVA especial que no existe (por ejemplo, un MAP con múltiples claves)

[Descarga el modelo haciendo clic aquí!!](/images/blog/an-example-on-the-use-of-classes-in-anylogic/classModel.zip)
