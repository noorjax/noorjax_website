---
title: "استخدام منتقي الملفات في PLE"
slug: "using-file-chooser-in-ple"
date: 2018-11-19
categories: ["AnyLogic Tips"]
tags: ["AnyLogic", "Simulations"]
excerpt: "منتقي الملفات متاح فقط في النسخة الاحترافية من AnyLogic. لكن وظيفته سهلة جدًا للتكرار مع القليل من سحر JAVA. لتوضيح ذلك، سأنشئ هذا المثال"
---

منتقي الملفات متاح فقط في النسخة الاحترافية من AnyLogic. لكن وظيفته سهلة جدًا للتكرار مع القليل من سحر JAVA.

لتوضيح ذلك، سأنشئ هذا المثال باستخدام زر عادي في المحرر الرسومي للمحاكاة (قبل تشغيل المحاكاة) من أجل اختيار ملف Excel وجعله جاهزًا للاستخدام أثناء المحاكاة.

للقيام بذلك سنحتاج إلى بعض المكتبات التي يمكن إضافتها في خصائص تجربة المحاكاة تحت قسم Advanced Java/Imports (تُستخدم لاختيار ملف، وفتح ملف، واختيار امتداد واستخدام مربع حوار):

```java
import javax.swing.JFileChooser;
import java.io.File;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.JDialog;
```

سيتم ملء المحرر الرسومي لتجربة المحاكاة بزر سيفتح الملف، ومتغير يُسمى fc من نوع JFileChooser وقيمة أولية *new JFileChooser()*، ومتغير يُسمى excelFile من نوع ExcelFile وقيمة أولية *null* وستضيف كائن ملف Excel من لوحة أدوات الاتصال ثم تتجاهله. ستحتاجه فقط لتتمكن من استخدام فئة ExcelFile في متغير مخصص.

[![](/images/blog/using-file-chooser-in-ple/Screen-Shot-2018-11-19-at-14.55.42.png)](/images/blog/using-file-chooser-in-ple/Screen-Shot-2018-11-19-at-14.55.42.png)
في خصائص تجربة المحاكاة تحت Java Actions/Initial experiment setup سنجهز كل شيء لتتمكن من فتح ملف XLS من مجلد النموذج. بالطبع يمكنك اختيار أي تنسيق ملف آخر.

```java
fc.setCurrentDirectory(new File("."));
fc.setDialogTitle("Choose File (.xls)");
fc.setFileSelectionMode(fc.FILES_ONLY);
FileNameExtensionFilter filter = new FileNameExtensionFilter("XLS files", "xls");
fc.setFileFilter(filter);
```

وأخيرًا، في زر Open File، ستضيف الكود التالي في الإجراء الذي سيسمح لـ AnyLogic بفتح مربع حوار اختيار الملف مع تفعيل ملفات .xls فقط للاختيار.

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

يمكن استخدام متغير excelFile الخاص بك لاحقًا كمعلمة في نموذج المحاكاة إذا أردت.

[حمّل النموذج هنا.](/images/blog/using-file-chooser-in-ple/model.zip)
