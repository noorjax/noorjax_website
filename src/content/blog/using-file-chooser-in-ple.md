---
title: "Using File Chooser in PLE"
slug: "using-file-chooser-in-ple"
date: 2018-11-19
categories: ["AnyLogic Tips"]
tags: ["AnyLogic", "Simulations"]
excerpt: "The File Chooser is only available on the professional version of AnyLogic. But its functionality is very easy to replicate with a little bit of JAVA magic.  To illustrate this, I will create this exa"
---

The File Chooser is only available on the professional version of AnyLogic. But its functionality is very easy to replicate with a little bit of JAVA magic.

To illustrate this, I will create this example using a normal button on the Simulation Graphical Editor (before running the simulation) in order to select an Excel file and make it ready to be used during the simulation.

To do this we will need a few libraries that can be added to the simulation experiment properties under Advanced Java/Imports section (they are used to choose a file, open a file, select an extension and to use a dialog):

```java
import javax.swing.JFileChooser;
import java.io.File;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.JDialog;
```

The graphical editor of the simulation experiment will be populated by a button that will open the file, a variable called fc of type JFileChooser and initial value *new JFileChooser()*, a variable called excelFile of type ExcelFile and initial value *null* and you will add an excel file object from the connectivity palette and then ignore it. You will need it only to be able to use the ExcelFile class in a customized variable.

[![](/images/blog/using-file-chooser-in-ple/Screen-Shot-2018-11-19-at-14.55.42.png)](/images/blog/using-file-chooser-in-ple/Screen-Shot-2018-11-19-at-14.55.42.png)

In the simulation experiment properties under Java Actions/Initial experiment setup we will prepare everything to be able to open a XLS file from the model directory. Obviously you can choose any other file format.

```java
fc.setCurrentDirectory(new File("."));
fc.setDialogTitle("Choose File (.xls)");
fc.setFileSelectionMode(fc.FILES_ONLY);
FileNameExtensionFilter filter = new FileNameExtensionFilter("XLS files", "xls");
fc.setFileFilter(filter);
```

And finally, in the Open File button, you will add the following code in the action that will allow AnyLogic to open the select file dialog with only the .xls files activated to be selected.

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

Your excelFile variable can later be used as a parameter in your simulation model if you want to.

[Download the model here.](/images/blog/using-file-chooser-in-ple/model.zip)
