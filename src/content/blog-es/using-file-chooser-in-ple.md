---
title: "Usando File Chooser en PLE"
slug: "using-file-chooser-in-ple"
date: 2018-11-19
categories: ["AnyLogic Tips"]
tags: ["AnyLogic", "Simulations"]
excerpt: "El File Chooser solo esta disponible en la version profesional de AnyLogic. Pero su funcionalidad es muy facil de replicar con un poco de magia de JAVA. Para ilustrar esto, creare este ejem"
---

El File Chooser solo esta disponible en la version profesional de AnyLogic. Pero su funcionalidad es muy facil de replicar con un poco de magia de JAVA.

Para ilustrar esto, creare este ejemplo usando un boton normal en el Editor Grafico de Simulacion (antes de ejecutar la simulacion) para seleccionar un archivo Excel y dejarlo listo para ser usado durante la simulacion.

Para hacer esto necesitaremos algunas bibliotecas que pueden agregarse a las propiedades del experimento de simulacion bajo la seccion Advanced Java/Imports (se usan para elegir un archivo, abrir un archivo, seleccionar una extension y para usar un dialogo):

```java
import javax.swing.JFileChooser;
import java.io.File;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.JDialog;
```

El editor grafico del experimento de simulacion sera poblado por un boton que abrira el archivo, una variable llamada fc de tipo JFileChooser y valor inicial *new JFileChooser()*, una variable llamada excelFile de tipo ExcelFile y valor inicial *null* y agregaras un objeto de archivo Excel desde la paleta de conectividad y luego lo ignoraras. Lo necesitaras solo para poder usar la clase ExcelFile en una variable personalizada.

[![](/images/blog/using-file-chooser-in-ple/Screen-Shot-2018-11-19-at-14.55.42.png)](/images/blog/using-file-chooser-in-ple/Screen-Shot-2018-11-19-at-14.55.42.png)

En las propiedades del experimento de simulacion bajo Java Actions/Initial experiment setup prepararemos todo para poder abrir un archivo XLS desde el directorio del modelo. Obviamente puedes elegir cualquier otro formato de archivo.

```java
fc.setCurrentDirectory(new File("."));
fc.setDialogTitle("Choose File (.xls)");
fc.setFileSelectionMode(fc.FILES_ONLY);
FileNameExtensionFilter filter = new FileNameExtensionFilter("XLS files", "xls");
fc.setFileFilter(filter);
```

Y finalmente, en el boton Open File, agregaras el siguiente codigo en la accion que permitira a AnyLogic abrir el dialogo de seleccion de archivo con solo los archivos .xls activados para ser seleccionados.

```java
JDialog dialog = new JDialog();
dialog.setAlwaysOnTop(true);
if( fc.showOpenDialog(dialog.getComponent(0))==fc.APPROVE_OPTION){
    if(fc.getSelectedFile()!=null){
         excelFile=new ExcelFile( this, "/", fc.getSelectedFile().getPath(), false );
         excelFile.readFile();
    }
}
```

Tu variable excelFile puede ser usada luego como parametro en tu modelo de simulacion si lo deseas.

[Descarga el modelo aqui.](/images/blog/using-file-chooser-in-ple/model.zip)
