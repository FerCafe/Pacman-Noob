Pandora-Bots
================
Este es el formato de los bots para clanes del servidor Pandora Showdown

Este bot esta basado en [Pokemon-Showdown-Node-Bot](https://github.com/Ecuacion/Pokemon-Showdown-Node-Bot), la version del bot de Ecuacion. Con este bot se pretende brindar a los clanes una serie de herramientas que facilitan el trabajo en el mismo, ya sea para moderacion, batallas o solo sea por diversion. Este bot esta en constante desarrollo, por lo cual algunas funciones se mejoran,se quitan o simplemente se dejan como esta.

Caracteristicas del Bot:
--------------------
Este bot incluye tanto moderacion como juegos, sistema de batallas, tournaments,etc. A continuacion se nombras las caracteristicas basicas del Bot.

 - **Base:** Comandos básicos para obtener información básica, gestionar permisos de comando, lenguajes y comandos dinámicos. La mayoria de estos comandos se usan para Administrar o Configurar el Bot. 
 - **Chat-Plugins:** Esta incluye una base de datos personalizable de bromas y citas, los comandos informativos de pokemons, comandos relacionados com smogon y otros como RegDate o traducir (para traducir en diferentes idiomas).
 - **Moderacion:** Ya sea warn por alagar,caps,flood,etc. Este tambien tiene una lista negra y unas "Frase de entrada" o "Joinphrase".
 - **Batallas:** Sistema de batallas de cualquier tier (obvio se le deben poner Equipòs), tambien creacion de tournament o administracion del mismo.
 - **Juegos:** Un par de juegos como Hangman,Ambush, etc. Que brindan la diversion necesaria para cada clan.
 - **Reconocimiento de links de Youtube:** Si se activa esta función en una sala, cuando un usuario envía un enlace de un video de youtube, el bot envía un mensaje con el título del vídeo.

Instalacion rapida:
--------------------

```bash
$ git clone https://github.com/Error-902/Pandora-Bots.git
$ npm install
$ node index.js
```

--------------------

**Solo los Usuarios autorizados pueden manejar estos bots en el servidor Pandora Showdown**