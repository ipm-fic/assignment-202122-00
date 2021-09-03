---
layout: generic
title: "Setup para la práctica 1"
banner:
  src: "/img/pexels-christina-morillo-1181671.jpg"
  copy_url: "https://www.pexels.com/es-es/foto/libro-de-python-1181671/"
  copy: "Christina Morillo"
---

Tu tarea en la primera semana de prácticas es instalar las
herramientas, lenguajes y librerías necesarios para realizar la
primera práctica. También tendrás que seguir los tutoriales y
documentación necesarios para aquellos elementos con los que no estes
familiarizado.


## Control de versiones

El desarrollo de las prácticas se basa en el uso de un control de
versiones. Su uso es una norma común en la industria del software. En
la asignatura no consideraremos ningún trabajo que no este bajo un
control de versiones.

El control de versiones establecido para todas las prácticas es
[git](https://git-scm.com/).

En teoría ya conoces el funcionamiento básico de un control de
versiones: confirmar una versión, ver el historial de versiones,
cambiar a una versión concreta, replicar un repositorio, ...  Además
del funcionamiento básico, para que puedas sacarle todo el rendimiento
y que te ayude en la realización de las prácticas en equipo, también
tienes que conocer: manejo de etiquetas, trabajo con repositorios
remotos, y manejo de ramas (_branches_).

Existen multitud de recursos online para aprender el uso de las
funcionalidades de _git_ que acabamos de enumerar. Si no sabes por
donde empezar, prueba con este libro: [Git
Succinctly](https://www.syncfusion.com/ebooks/confirmation/git)


## Repositorios

Si has hecho caso a la sección anterior, ya sabrás que una
características muy interesante de _git_ es que usa un modelo de
repositorios distribuidos. Durante la realización de los assignments
no tienes ninguna restricción sobre el número de repositorios que vas
a usar, ni la localización de los mismos.

Sin embargo, el seguimiento y la valoración de tu trabajo se tiene que
realizar sobre un único repositorio. Este repositorio no lo eliges tú,
está especificado en la descripción de cada práctica. Salvo que se
indique lo contrario será un repositorio accesible online a traves de
un servicio de gestión de repositorios como, por ejemplo, _GitHub_.

Este repositorio es el _repositorio de referencia_ para las prácticas de
la asignatura, tienes acceso tanto tú como el profesor que valora tu
trabajo. Repetimos: El profesor valorará **única y exclusivamente** el
contenido de dicho repositorio.

> Recuerda que un trabajo continuo se refleja en _commits_ y _push_
> continuos.

> Recuerda que lo que no está en el repositorio de referencia, no
> existe para el profesor. El profesor sólo evaluará los ficheros que
> están en tu repositorio de referencia. Es más seguro que tú también
> autoevalues tu trabajo sobre un _clone_ de ese repositorio.


## Recursos

Para realizar la primera práctica necesitaras `python` y varias
librerías. Una de las librerías `at-spi` y el servicio asociado sólo
está disponible en linux. Por este motivo, la primera práctica hay que
realizarla en una plataforma linux (en principio la distribución no es
relevante). No hay ningún impedimento para usar una máquina virtual.

> N.B.: A priori podría parecer posible ejecutar at-spi en macosx o en
> windows + wsl2. Sin embargo, esas opciones están descartadas porque
> no podemos asegurarnos de que realmente funcione.

Como lenguaje de programación, necesitas una instalación de
[`python`](https://www.python.org/). Normalmente tu S.O. o
distribución ya tendrá una versión de python instalada por defecto.
Simplemente asegurate de usar una versión reciente. Ahora mismo la
última versión par es la `3.8`, y la impar la `3.9`.

> La siguiente versión `3.10` está en _release candidate_ 1 desde el 3
> de agosto de 2021. No esperes que llegue una versión oficial antes
> de acabar la práctica.

La librería gráfica que tienes que usar para la interface es [Gtk+
3](https://www.gtk.org/). Lo normal es encontrarla empaquetada en casi
cualquier distribución de linux, así que no deberías tener ningún
problema para instalarla. Algunos escritorios como Gnome, Mate, LXDE,
Xfce, ... están basados en Gtk+. Si estás usando alguno de esos
escritorios, ya tendrás instaladas las librerías de Gtk+.

> La última versión mayor de Gtk+ es la 4. Sin embargo, muchas
> distribuciones todavía no lo empaquetan, por eso hemos decidido
> postponer su uso durante este curso.

> BTW, si estás buscando la documentación del api de Gtk+ en python,
> la tienes
> [aquí](https://lazka.github.io/pgi-docs/Gtk-3.0/index.html)


A continuación necesitaras los
[_bindings_](https://en.wikipedia.org/wiki/Language_binding)
correspondientes para poder usar la librería Gtk+ desde tu código
python. Lo más sencillo es usar el [mecanismo
oficial](https://www.gtk.org/docs/language-bindings/): _GObject
Introspection_ (_GI_). Para ellos necesitas el módulo de Gtk+ para GI
y la libería GI para python. De nuevo, lo habitual es que estén
empaquetados en tu distribución de linux. Por ejemplo en debian:

```
$ sudo apt install gir1.2-gtk-3.0 python3-gi
```

También necesitas tener funcionando el [servicio
_AT-SPI_](https://www.freedesktop.org/wiki/Accessibility/AT-SPI2/) en
tu S.O. La manera de conseguirlo dependerá de tu distribución. Por
ejemplo, si estás usando _Gnome_, ya debería estar funcionando. Sino,
por ejemplo en debian tendrías que instalar el paquete
correspondiente:

```
$ sudo apt install at-spi2-core
```

También necesitarás usar el api de AT-SPI directamente desde
python. Al igual que ocurre con _Gtk+_, lo más sencillo es usar
_GObject Introspection_ (_GI_). Para ellos necesitas el módulo de
AT-SPI para GI y la libería GI para python. Por ejemplo en debian:

```
$ sudo apt install gir1.2-atspi-2.0 python3-gi
```

Puedes consultar la documentación del api de AT-SPI
[aquí](https://lazka.github.io/pgi-docs/Atspi-2.0/index.html).

Si no quieres usar directamente el api "desnudo" de AT-SPI, puedes
usar una librería que proporcione una api de más alto nivel como:

  - [pyatpsi2](https://github.com/GNOME/pyatspi2). 
    Empaquetado en debian como `python3-pyatspi`
        
  - [ldtp](https://ldtp.freedesktop.org/wiki/)

  - [dogtail](https://gitlab.com/dogtail/dogtail). 
    Empaquetado en debian como `python3-dogtail`

  - La librería que usamos en clase: [ipm_e2e](https://github.com/cabrero/ipm_e2e). 
    Disponible en [PyPI](https://pypi.org/project/ipm-e2e/0.0.1/).
        
	> Si vas a instalar librerías desde PyPI, asegúrate primero de
    > concocer el [proceso y las distintas
    > opciones](https://packaging.python.org/tutorials/installing-packages/):
    > global, user, virtual env
  

## Hola mundo y algo más

Aunque existen multitud de tutoriales, aquí tienes uno en el que
podrás ir desde el mítico _¡Hola mundo!_ y más alla en el uso de la
librería GTK+ con python: [The Python GTK+3
Tutorial](https://python-gtk-3-tutorial.readthedocs.io/en/latest/).


## Trabajo en equipo

El trabajo en equipo es una habilidad clave para un/a graduado/a en
ingeniería informática. Todos los assignments se debe realizar en
grupos de tres personas. No intentes escaquearte y hacer el trabajo
por tu cuenta.

> N.B.: Las herramientas de IT de las que disponemos nos permiten
> trabajar online con las/os compañera/o. El dominio de
> esas herramientas y esa forma de trabajo también es una habilidad
> muy valiosa, y una de las competencias del título.

Aprovecha este primera semana para formar tu equipo de trabajo antes
de comenzar la primer práctica.
