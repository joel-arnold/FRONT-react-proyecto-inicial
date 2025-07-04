import { useState } from 'react';

function IntroduccionReact() {
  const [mostrarComparacion, setMostrarComparacion] = useState(false);

  const caracteristicasReact = [
    {
      titulo: "Basado en Componentes",
      descripcion: "Divide la UI en piezas reutilizables",
      icono: "🧩"
    },
    {
      titulo: "DOM Virtual",
      descripcion: "Optimiza las actualizaciones del DOM real",
      icono: "⚡"
    },
    {
      titulo: "Declarativo",
      descripcion: "Describes QUÉ quieres, no CÓMO hacerlo",
      icono: "📝"
    },
    {
      titulo: "Flujo Unidireccional",
      descripcion: "Los datos fluyen de padre a hijo",
      icono: "🔄"
    }
  ];

  return (
    <div className="seccion">
      <h2>🚀 Introducción a React</h2>
      
      <div className="ejemplo-container">
        <h3>¿Qué es React?</h3>
        <p>
          <strong>React</strong> es una biblioteca de JavaScript para construir interfaces de usuario, 
          especialmente para aplicaciones web. Fue creada por Facebook (ahora Meta) en 2011 y se hizo 
          open source en 2013.
        </p>
        
        <div className="componente-props">
          <h4>🎯 Objetivo Principal</h4>
          <p>Hacer que el desarrollo de interfaces interactivas sea más simple y eficiente.</p>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>SPA vs MPA</h3>
        <button 
          className="btn-primary" 
          onClick={() => setMostrarComparacion(!mostrarComparacion)}
        >
          {mostrarComparacion ? 'Ocultar' : 'Mostrar'} Comparación
        </button>
        
        {mostrarComparacion && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
            <div className="componente-card">
              <h4>🔄 SPA (Single Page Application)</h4>
              <ul>
                <li>Una sola página HTML</li>
                <li>Contenido cambia dinámicamente</li>
                <li>Navegación más rápida</li>
                <li>Mejor experiencia de usuario</li>
                <li><strong>Ejemplo:</strong> Gmail, Facebook</li>
              </ul>
            </div>
            <div className="componente-card">
              <h4>📄 MPA (Multi Page Application)</h4>
              <ul>
                <li>Múltiples páginas HTML</li>
                <li>Recarga completa en navegación</li>
                <li>Más simple de desarrollar</li>
                <li>Mejor para SEO básico</li>
                <li><strong>Ejemplo:</strong> Wikipedia, blogs tradicionales</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="ejemplo-container">
        <h3>Características Principales de React</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {caracteristicasReact.map((caracteristica, index) => (
            <div key={index} className="componente-card">
              <div style={{ fontSize: '2rem', textAlign: 'center' }}>
                {caracteristica.icono}
              </div>
              <h4>{caracteristica.titulo}</h4>
              <p>{caracteristica.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>💭 Analogía: React como una Fábrica de Legos</h3>
        <div className="componente-props">
          <p>
            <strong>Piensa en React como una fábrica de Legos:</strong>
          </p>
          <ul>
            <li><strong>Componentes = Piezas de Lego:</strong> Cada pieza tiene una función específica</li>
            <li><strong>Props = Instrucciones:</strong> Cómo ensamblar las piezas</li>
            <li><strong>Estado = Cambios:</strong> Las piezas pueden cambiar de posición</li>
            <li><strong>DOM Virtual = Planos:</strong> Antes de construir, revisamos los planos</li>
          </ul>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>🎨 Enfoque Declarativo vs Imperativo</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>❌ Imperativo (cómo hacer las cosas)</h4>
            <div className="codigo-ejemplo">
{`// JavaScript vanilla - CÓMO
const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', function() {
  const counter = document.getElementById('counter');
  counter.textContent = parseInt(counter.textContent) + 1;
});
document.body.appendChild(button);`}
            </div>
          </div>
          
          <div>
            <h4>✅ Declarativo (qué quieres)</h4>
            <div className="codigo-ejemplo">
{`// React - QUÉ quieres
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}`}
            </div>
          </div>
        </div>
      </div>

      <div className="demo-interactivo">
        <h4>🔍 Demo Interactivo: ¿Por qué React?</h4>
        <p>Imagina que tienes que mostrar una lista de estudiantes que puede cambiar...</p>
        <EstudiantesDemo />
      </div>
    </div>
  );
}

// Componente demo para mostrar ventajas de React
function EstudiantesDemo() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: "Ana García", carrera: "Sistemas" },
    { id: 2, nombre: "Carlos López", carrera: "Industrial" }
  ]);

  const agregarEstudiante = () => {
    const nuevosNombres = ["María Rodríguez", "Juan Pérez", "Laura Martín", "Diego Fernández"];
    const carreras = ["Sistemas", "Industrial", "Civil", "Electrónica"];
    
    const nuevoEstudiante = {
      id: estudiantes.length + 1,
      nombre: nuevosNombres[Math.floor(Math.random() * nuevosNombres.length)],
      carrera: carreras[Math.floor(Math.random() * carreras.length)]
    };
    
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  return (
    <div>
      <button className="btn-primary" onClick={agregarEstudiante}>
        ➕ Agregar Estudiante
      </button>
      <div className="lista-usuarios">
        {estudiantes.map(estudiante => (
          <div key={estudiante.id} className="usuario-card">
            <strong>{estudiante.nombre}</strong> - {estudiante.carrera}
          </div>
        ))}
      </div>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6c757d' }}>
        ⚡ React actualiza automáticamente solo lo que cambió en el DOM
      </p>
    </div>
  );
}

export default IntroduccionReact;
