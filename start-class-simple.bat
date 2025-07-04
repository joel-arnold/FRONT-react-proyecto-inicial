@echo off
title Clase React UTN - Inicio Rápido
nvm use 22
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║               🎓 CLASE REACT UTN                         ║
echo ║              Inicio Rápido del Proyecto                 ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

:: Intentar activar nvm si está disponible
echo 🔍 Verificando entorno de desarrollo...

:: Verificar Node.js
echo 📋 Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ Node.js no está disponible en el PATH.
    echo.
    echo 💡 Si usas nvm, por favor ejecuta antes:
    echo    nvm use [tu-version-de-node]
    echo.
    echo 💡 Si no tienes Node.js instalado:
    echo    - Descarga desde https://nodejs.org/
    echo    - O instala nvm-windows desde https://github.com/coreybutler/nvm-windows
    echo.
    pause
    exit /b 1
)

:: Mostrar versiones
for /f "tokens=*" %%i in ('node --version 2^>nul') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version 2^>nul') do set NPM_VERSION=%%i

echo ✅ Node.js %NODE_VERSION% detectado
echo ✅ npm %NPM_VERSION% detectado
echo.

:: Instalar dependencias si es necesario
if not exist "node_modules" (
    echo 📦 Instalando dependencias del proyecto...
    echo    Esto puede tomar unos minutos la primera vez...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Error al instalar dependencias
        pause
        exit /b 1
    )
    echo ✅ Dependencias instaladas correctamente
    echo.
) else (
    echo ✅ Dependencias ya instaladas
    echo.
)

:: Información previa al inicio
echo ╔══════════════════════════════════════════════════════════╗
echo ║                    🚀 INICIANDO SERVIDOR                 ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo 📍 URL del proyecto: http://localhost:5173
echo 🔥 Para detener el servidor: Ctrl+C
echo 🎯 Navegación: Usa los botones superiores para cambiar secciones
echo.
echo Presiona cualquier tecla para continuar...
pause >nul

:: Limpiar pantalla y mostrar info final
cls
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║            🎓 SERVIDOR REACT INICIÁNDOSE...              ║
echo ║                                                          ║
echo ║  📍 URL: http://localhost:5173                           ║
echo ║  🔥 Ctrl+C para detener                                  ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

:: Iniciar el servidor de desarrollo
npm run dev

echo.
echo 👋 Servidor detenido. ¡Gracias por usar la clase de React!
pause
