# 🎓 Clase de React - UTN Frontend

## 📋 Estructura de la Clase (2:30 horas)

Esta aplicación contiene ejemplos prácticos y material didáctico para una clase inicial de React, organizada según la metodología pedagógica recomendada.

### 🚀 1. Introducción a React (30 min)
- **¿Qué es React?** - Conceptos fundamentales
- **SPA vs MPA** - Comparación con ejemplos visuales
- **Características principales** - Componentes, DOM Virtual, Declarativo
- **Demo interactivo** - Lista de estudiantes que demuestra las ventajas de React

### 🧩 2. Componentes y JSX (40 min)
- **Concepto de componente** - Analogías del mundo real
- **JSX explicado** - Diferencias con HTML, transformación a JS
- **Props en acción** - Demo interactivo con props dinámicas
- **Ejercicio práctico** - Crear componentes de productos

### 🎛️ 3. Estado y Hooks (50 min)
- **¿Qué es el estado?** - Analogía del panel de control de un auto
- **useState** - Contador interactivo, diferentes tipos de estado
- **useEffect** - Ciclo de vida, llamadas a API, reloj en tiempo real
- **Ejercicio** - Temporizador con controles

### 📝 4. Formularios en React (30 min)
- **Controlados vs No Controlados** - Comparación lado a lado
- **Formulario completo** - Ejemplo con validación en tiempo real
- **Formularios dinámicos** - Agregar/quitar campos
- **Mejores prácticas** - Do's y Don'ts

## 🚀 Cómo usar esta aplicación

### Instalación y ejecución

#### Opción 1: Script automatizado (Windows)
```bash
# Script mejorado (recomendado para nvm)
./start-class-simple.bat

# Script alternativo
./start-class.bat
```

#### Opción 2: Script Unix/Linux/Mac
```bash
# Dar permisos de ejecución
chmod +x start-class.sh
./start-class.sh
```

#### Opción 3: Comandos manuales
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173
```

### Notas importantes
- **Para usuarios de nvm**: Si usas nvm para manejar versiones de Node.js, asegúrate de activar una versión antes de ejecutar los scripts:
  ```bash
  nvm use 18  # o tu versión preferida
  ```
- **Primer inicio**: La primera vez tardará más tiempo porque debe instalar las dependencias
- **Hot reload**: Los cambios en el código se reflejan automáticamente en el navegador

### Navegación
- Usa los botones de navegación para cambiar entre secciones
- Cada sección incluye ejemplos interactivos
- Los estudiantes pueden modificar el código en vivo y ver los cambios

## 🎯 Metodología Pedagógica

### ✅ Enfoque Práctico
- Cada concepto teórico va seguido de un ejemplo práctico
- Los estudiantes pueden interactuar con los demos inmediatamente
- Código visible y modificable en tiempo real

### 🔄 Progresión Gradual
- Los ejemplos van de simples a complejos
- Cada concepto se basa en los anteriores
- Refuerzo constante de conceptos previos

### 🎨 Elementos Visuales
- Analogías del mundo real para conceptos abstractos
- Diagramas y comparaciones lado a lado
- Código destacado con sintaxis colorizada

### 🚨 Errores Comunes
- Cada sección incluye errores típicos y cómo evitarlos
- Comparaciones de código incorrecto vs correcto
- Explicaciones claras de por qué algo no funciona

## 📚 Recursos Adicionales

### Para el Profesor
- Cada componente está bien documentado
- Código modular y fácil de modificar
- Ejemplos listos para copy/paste en otros proyectos

### Para los Estudiantes
- Enlaces a documentación oficial de React
- Ejercicios progresivos para practicar después de clase
- Código base para proyectos futuros

## 🛠️ Personalización

### Agregar nuevos ejemplos
1. Crea un nuevo componente en la carpeta correspondiente
2. Impórtalo en el componente de sección
3. Agrega la funcionalidad al demo existente

### Modificar estilos
- `src/App.css` contiene todos los estilos principales
- Clases CSS específicas para cada tipo de componente
- Responsive design incluido

### Extender funcionalidad
- Agregar nuevas secciones modificando `App.jsx`
- Incluir bibliotecas adicionales según necesidades
- Integrar con herramientas como CodeSandbox para ejercicios

## 🎓 Objetivos de Aprendizaje

Al finalizar la clase, los estudiantes serán capaces de:

1. **Comprender** qué es React y por qué se usa
2. **Crear** componentes básicos con JSX
3. **Manejar** estado con useState
4. **Implementar** efectos con useEffect
5. **Desarrollar** formularios controlados
6. **Aplicar** mejores prácticas básicas

## 📞 Soporte

Para dudas o sugerencias sobre el material didáctico:
- Revisar la documentación oficial de React
- Consultar ejemplos en la carpeta `src/components`
- Experimentar con los demos interactivos

---

**Desarrollado para UTN Frontend - React desde cero**
