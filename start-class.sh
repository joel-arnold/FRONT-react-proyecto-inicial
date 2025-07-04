#!/bin/bash

# Script de inicio rápido para la clase de React
echo "🚀 Iniciando aplicación de clase React UTN..."

# Verificar que Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js desde https://nodejs.org/"
    exit 1
fi

# Verificar que npm está disponible
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está disponible. Reinstala Node.js."
    exit 1
fi

echo "✅ Node.js $(node --version) detectado"
echo "✅ npm $(npm --version) detectado"

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

echo "🎓 Abriendo aplicación en el navegador..."
echo "📍 URL: http://localhost:5173"
echo ""
echo "🔥 Para detener el servidor, presiona Ctrl+C"
echo ""

# Iniciar servidor de desarrollo
npm run dev
