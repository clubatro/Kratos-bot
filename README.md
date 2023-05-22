<p align="center"> 
<img src="https://i.imgur.com/AwlL9kc.jpeg" alt="kratro-ofc" width="500"/>
</p>
<p align="center">
<a href="https://github.com/clubatro/Kratos-bot"><img title="kratro-ofc" src="https://img.shields.io/badge/🌸 ESTÁ ES UNA VERSIÓN SIMPLIFICADA DE KratosBot 🇦🇱 -red?colorA=%233CCED8&colorB=%233CCED8&style=for-the-badge"></a>
</p>

<div align="center">
<a href="mailto:clubatroofc@gmail.com">
<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
</a>
<a href="https://facebook.com/groups/872989990425789/">
<img src=""" alt="Facebook">
</a>
<a href="https://www.youtube.com/@">
<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
</a>
<a href="https://instagram.com/clubatroofc">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
</a>
<a href="https://paypal.me/">
<img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white">
</a>
<a href="https://chat.whatsapp.com/DJIar8PchzyCnjzGXTg3Bn">
<img src="https://img.shields.io/badge/KratosBot Update Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">
</a>
</a>
<a href="">
<img src="">
</a>
</div>

#### DISPONIBLE EN:
> - [x] TERMUX, REPLIT, WINDOWS, HEROKU, ZIPPONODES, BOXMINE-HOST


[`♻️ App Termux`](https://f-droid.org/es/packages/com.termux/)
### 🌸 INSTALACIÓN AUTOMÁTICA - TERMUX 🌸
<a href="https://youtu.be/tzM0f_N8BII">
<img src="https://img.shields.io/badge/Tutorial-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Tutorial"> </a>

```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget && wget -O - https://raw.githubusercontent.com/clubatro/Kratos-bot/master/kratro-ofc.sh | bash
```
#### EN CASO QUE QUIERA USAR ESTE MÉTODO DEBE DE EDITAR (Previo a una Bifurcación)
- [`Repositorio`](https://github.com/clubatro/Kratos-bot)
- [`Nombre del bot`](https://github.com/clubatro/Kratos-bot))
- Actualizar: `https://raw.githubusercontent.com/clubatro/Kratos-bot/master/kratro-ofc.sh`
### 🌼 INSTALACIÓN MANUAL - TERMUX 🌼
```bash
termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone https://github.com/clubatro/Kratos-bot 
cd kratro-ofc
yarn install
npm install
npm start
```

### 🍁 TERMUX 24/7 🍁 
> Comandos para realizar una ejecución 24/7
- INICIAR
> Use estos comandos dentro de la carpeta kratro-ofc
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
```
- DETENER PM2
> Detener todos los procesos del bot
```bash
pm2 stop all && pm2 unstartup
```
- REANUDAR 
> Reanudar los procesos, usar dentro de la carpeta kratro-ofc 
```bash
pm2 start index.js 
```
- VISUALIZAR EL PROCESO
> Usar dentro de la carpeta kratro-ofc para ver en tiempo real
```bash
pm2 logs 
```
- ELIMINAR PROCESOS PM2
> Eliminar todos los procesos del bot. Para volver a usar PM2 debe volver a usar los comandos de INICIAR
```bash
pm2 delete all
```
> **Note** Demanda consumo de RAM y CPU, el resultado mejora mientras las especificaciones del dispositivo sean moderadas

### 🌹 INSTALACIÓN EN REPLIT 🌹
<a target="_blank" href="https://github.com/clubatro/Kratos-bot"><img alt="Run on Replit" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg"></a>

### 🪷 INSTALACIÓN EN HEROKU 🪷
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/GataNina-Li/GataBotLite-MD-Heroku) 
> 👇 Añada lo siguente al Buildpack: 
```bash
heroku/nodejs
```
```bash
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
```
```bash
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
## 🌻 INSTALACIÓN PARA WINDOWS/VPS/RDP 🌻

* Descargar e instala Git [`Aquí`](https://git-scm.com/downloads)
* Descargar e instala NodeJS [`Aquí`](https://nodejs.org/en/download)
* Descargar e instala FFmpeg [`Aquí`](https://ffmpeg.org/download.html) (**No olvide agregar FFmpeg a la variable de entorno PATH**)
* Descargar e instala ImageMagick [`Aquí`](https://imagemagick.org/script/download.php)
* Descargar e instala Yarn [`Aquí`](https://classic.yarnpkg.com/en/docs/install#windows-stable)
```bash
git clone https://github.com/clubatro/Kratos-bot && cd kratro-ofc && yarn install && npm install && npm update && node .
```
haciendo clic en [FFmpeg](https://www.gyan.dev/ffmpeg/builds/).
* Extraer archivos a `C:\` path.
* Cambie el nombre de la carpeta extraída a `ffmpeg`.
* Ejecute el símbolo del sistema como administrador.
* Ejecute el siguiente comando:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Si tiene éxito, le dará un mensaje como: `SUCCESS: specified value was saved`.
* Ahora que tiene FFmpeg instalado, verifique que funcionó ejecutando este comando para ver la versión:
```cmd
> ffmpeg -version
```
### 💠 [`IDIOMAS DISPONIBLES PARA GATABOTLITE`](https://github.com/GataNina-Li/GataBotLite-MD/blob/f406e0f1bba1ca7cd6ee4ef3208e156135a24dce/config.js#L31) 
#### ✨ Español  [`Editar Idioma`](https://github.com/GataNina-Li/GataBotLite-MD/blob/master/lib/idiomas/espanol.js)
#### ✨ Inglés (English) [`Edit Language`](https://github.com/GataNina-Li/GataBotLite-MD/blob/master/lib/idiomas/ingles.js)
#### ✨ Árabe (عرب) [`عدل اللغة`](https://github.com/GataNina-Li/GataBotLite-MD/blob/master/lib/idiomas/arabe.js)
----

### 🌟 CREADOR 
[![kratro-ofc](https://github.com/clubatro/Kratos-bot)
