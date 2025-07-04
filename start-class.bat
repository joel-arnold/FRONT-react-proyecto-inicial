@echo off
:: Script de inicio rápido para la clase de React (Windows)
echo 🚀 Iniciando aplicación de clase React UTN...

:: Inicializar nvm si está disponible
call :init_nvm

:: Verificar que Node.js está instalado
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no está disponible en el PATH.
    echo 💡 Si usas nvm, ejecuta: nvm use [version]
    echo 💡 Si no tienes Node.js, instálalo desde https://nodejs.org/
    pause
    exit /b 1
)

:: Verificar que npm está disponible
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm no está disponible en el PATH.
    echo 💡 Reinstala Node.js o verifica tu configuración de nvm.
    pause
    exit /b 1
)

:: Obtener versiones
for /f "tokens=*" %%i in ('node --version 2^>nul') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version 2^>nul') do set NPM_VERSION=%%i

echo ✅ Node.js %NODE_VERSION% detectado
echo ✅ npm %NPM_VERSION% detectado

:: Instalar dependencias si no existen
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    npm install
)

echo 🎓 Abriendo aplicación en el navegador...
echo 📍 URL: http://localhost:5173
echo.
echo 🔥 Para detener el servidor, presiona Ctrl+C
echo.

:: Iniciar servidor de desarrollo
npm run dev

pause

:: Función para inicializar nvm
:init_nvm
:: Intentar cargar nvm si existe
if exist "%NVM_HOME%\nvm.cmd" (
    echo 🔍 nvm detectado, inicializando...
    call "%NVM_HOME%\nvm.cmd" current >nul 2>&1
)
if exist "%USERPROFILE%\AppData\Roaming\nvm\nvm.cmd" (
    echo 🔍 nvm detectado en AppData, inicializando...
    call "%USERPROFILE%\AppData\Roaming\nvm\nvm.cmd" current >nul 2>&1
)
:: Intentar con la ruta típica de nvm-windows
if exist "C:\Program Files\nodejs\nvm.cmd" (
    echo 🔍 nvm detectado en Program Files, inicializando...
    call "C:\Program Files\nodejs\nvm.cmd" current >nul 2>&1
)
exit /b 0
