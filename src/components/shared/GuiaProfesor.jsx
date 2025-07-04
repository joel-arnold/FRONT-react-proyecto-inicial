import { useState } from 'react';

function GuiaProfesor() {
  const [seccionActiva, setSeccionActiva] = useState('overview');

  const secciones = [
    { id: 'overview', titulo: 'Resumen General' },
    { id: 'timing', titulo: 'Timing de Clase' },
    { id: 'tips', titulo: 'Tips Pedagógicos' },
    { id: 'ejercicios', titulo: 'Ejercicios Extra' }
  ];

  return (
    <div className="guia-profesor">
      <h2>👩‍🏫 Guía para el Profesor</h2>
      
      <nav style={{ marginBottom: '20px' }}>
        {secciones.map(seccion => (
          <button 
            key={seccion.id}
            className={`btn-secondary ${seccionActiva === seccion.id ? 'active' : ''}`}
            onClick={() => setSeccionActiva(seccion.id)}
            style={{ marginRight: '10px' }}
          >
            {seccion.titulo}
          </button>
        ))}
      </nav>

      {seccionActiva === 'overview' && <ResumenGeneral />}
      {seccionActiva === 'timing' && <TimingClase />}
      {seccionActiva === 'tips' && <TipsPedagogicos />}
      {seccionActiva === 'ejercicios' && <EjerciciosExtra />}
    </div>
  );
}

function ResumenGeneral() {
  return (
    <div className="seccion">
      <h3>📊 Resumen de la Clase</h3>
      
      <div className="componente-props">
        <h4>🎯 Objetivos de Aprendizaje</h4>
        <ul>
          <li>Comprender qué es React y sus ventajas</li>
          <li>Diferenciar entre SPA y MPA</li>
          <li>Crear componentes básicos con JSX</li>
          <li>Manejar estado con useState</li>
          <li>Implementar efectos con useEffect</li>
          <li>Desarrollar formularios controlados</li>
        </ul>
      </div>

      <div className="componente-card">
        <h4>📋 Prerrequisitos</h4>
        <ul>
          <li>HTML sólido (elementos, atributos, semántica)</li>
          <li>CSS intermedio (selectores, flexbox, grid básico)</li>
          <li>JavaScript ES6+ (funciones, arrow functions, destructuring)</li>
          <li>Promesas y async/await básico</li>
        </ul>
      </div>

      <div className="componente-card">
        <h4>🛠️ Herramientas Necesarias</h4>
        <ul>
          <li>Node.js 18+ instalado</li>
          <li>VS Code con extensión ES7+ React/Redux/React-Native snippets</li>
          <li>Git para control de versiones</li>
          <li>Navegador moderno (Chrome/Firefox) con DevTools</li>
        </ul>
      </div>
    </div>
  );
}

function TimingClase() {
  const cronograma = [
    {
      tiempo: '0:00 - 0:30',
      seccion: 'Introducción a React',
      actividades: [
        'Presentación (5 min)',
        'SPA vs MPA con ejemplos (10 min)',
        'Características de React (10 min)',
        'Demo estudiantes (5 min)'
      ],
      tips: 'Usar analogías. Mostrar ejemplos reales de SPAs que conocen.'
    },
    {
      tiempo: '0:30 - 1:10',
      seccion: 'Componentes y JSX',
      actividades: [
        'Conceptos de componente (10 min)',
        'JSX vs HTML (15 min)',
        'Props dinámicas demo (10 min)',
        'Ejercicio guiado (5 min)'
      ],
      tips: 'Enfatizar la reutilización. Mostrar transformación JSX->JS.'
    },
    {
      tiempo: '1:10 - 1:20',
      seccion: 'DESCANSO',
      actividades: ['Pausa de 10 minutos'],
      tips: 'Tiempo para preguntas informales y verificar que todos sigan el ritmo.'
    },
    {
      tiempo: '1:20 - 2:10',
      seccion: 'Estado y Hooks',
      actividades: [
        'Concepto de estado (10 min)',
        'useState con ejemplos (20 min)',
        'useEffect básico (15 min)',
        'Ejercicio temporizador (5 min)'
      ],
      tips: 'Analogía del auto. Mostrar React DevTools para ver estado.'
    },
    {
      tiempo: '2:10 - 2:30',
      seccion: 'Formularios',
      actividades: [
        'Controlados vs no controlados (10 min)',
        'Validación en tiempo real (10 min)'
      ],
      tips: 'Mostrar diferencias prácticas. Enfatizar mejores prácticas.'
    }
  ];

  return (
    <div className="seccion">
      <h3>⏰ Cronograma Detallado</h3>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {cronograma.map((bloque, index) => (
          <div key={index} className="componente-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ color: '#007bff' }}>{bloque.tiempo}</h4>
              <span style={{ backgroundColor: '#e7f3ff', padding: '5px 10px', borderRadius: '15px', fontSize: '0.9rem' }}>
                {bloque.seccion}
              </span>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <strong>Actividades:</strong>
              <ul style={{ margin: '5px 0 0 20px' }}>
                {bloque.actividades.map((actividad, i) => (
                  <li key={i}>{actividad}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '5px', borderLeft: '4px solid #ffc107' }}>
              <strong>💡 Tip:</strong> {bloque.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TipsPedagogicos() {
  const tips = [
    {
      categoria: '🎯 Engagement',
      consejos: [
        'Usa preguntas retóricas frecuentes: "¿Qué creen que pasará si...?"',
        'Pide que predigan el resultado antes de ejecutar código',
        'Usa el chat/micrófonos para verificar comprensión',
        'Haz que escriban código junto contigo (live coding)'
      ]
    },
    {
      categoria: '🔧 Técnicas',
      consejos: [
        'Comete errores intencionalmente y corrígelos en vivo',
        'Usa console.log abundantemente para mostrar el flujo',
        'Explica en voz alta tu proceso de pensamiento',
        'Compara constantemente con JavaScript vanilla'
      ]
    },
    {
      categoria: '🎨 Visualización',
      consejos: [
        'Usa React DevTools para mostrar el estado en tiempo real',
        'Dibuja diagramas del flujo de datos en un pizarrón virtual',
        'Usa analogías concretas (auto, casa, fábrica)',
        'Cambia el CSS en vivo para mostrar cambios inmediatos'
      ]
    },
    {
      categoria: '⚡ Troubleshooting',
      consejos: [
        'Siempre revisa la consola del navegador',
        'Enseña a leer mensajes de error desde el día 1',
        'Muestra cómo buscar en Stack Overflow',
        'Ten un "código de emergencia" listo si algo falla'
      ]
    }
  ];

  return (
    <div className="seccion">
      <h3>🧠 Tips Pedagógicos</h3>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {tips.map((categoria, index) => (
          <div key={index} className="componente-card">
            <h4>{categoria.categoria}</h4>
            <ul>
              {categoria.consejos.map((consejo, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{consejo}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="componente-props" style={{ marginTop: '20px' }}>
        <h4>🎪 Mantener la Energía</h4>
        <ul>
          <li>Cambia el tono de voz para enfatizar puntos importantes</li>
          <li>Usa emojis en el código y comentarios para mantener diversión</li>
          <li>Celebra cuando algo funciona: "¡Perfecto!"</li>
          <li>Admite cuando algo es complejo: "Esto puede ser confuso al principio"</li>
          <li>Haz conexiones con cosas que ya conocen</li>
        </ul>
      </div>
    </div>
  );
}

function EjerciciosExtra() {
  const ejercicios = [
    {
      nivel: 'Básico',
      titulo: 'Tarjeta de Perfil',
      descripcion: 'Crear un componente que muestre información de perfil de usuario',
      puntos: [
        'Recibir props: nombre, edad, profesión, foto',
        'Mostrar datos formateados',
        'Incluir estado online/offline'
      ],
      tiempo: '15 min'
    },
    {
      nivel: 'Intermedio',
      titulo: 'Lista de Tareas',
      descripcion: 'Todo list básico con estado',
      puntos: [
        'Agregar nuevas tareas',
        'Marcar como completadas',
        'Filtrar por estado',
        'Contador de pendientes'
      ],
      tiempo: '30 min'
    },
    {
      nivel: 'Avanzado',
      titulo: 'Carrito de Compras',
      descripcion: 'Mini e-commerce con múltiples componentes',
      puntos: [
        'Lista de productos con props',
        'Agregar/quitar del carrito',
        'Calcular total',
        'Persistir en localStorage'
      ],
      tiempo: '45 min'
    }
  ];

  return (
    <div className="seccion">
      <h3>💪 Ejercicios Adicionales</h3>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {ejercicios.map((ejercicio, index) => (
          <div key={index} className="componente-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4>{ejercicio.titulo}</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ 
                  backgroundColor: ejercicio.nivel === 'Básico' ? '#d4edda' : ejercicio.nivel === 'Intermedio' ? '#fff3cd' : '#f8d7da',
                  color: ejercicio.nivel === 'Básico' ? '#155724' : ejercicio.nivel === 'Intermedio' ? '#856404' : '#721c24',
                  padding: '5px 10px', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem' 
                }}>
                  {ejercicio.nivel}
                </span>
                <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                  ⏱️ {ejercicio.tiempo}
                </span>
              </div>
            </div>
            
            <p style={{ marginBottom: '10px' }}>{ejercicio.descripcion}</p>
            
            <ul>
              {ejercicio.puntos.map((punto, i) => (
                <li key={i}>{punto}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="componente-props" style={{ marginTop: '20px' }}>
        <h4>📝 Para Tarea/Proyecto Final</h4>
        <p>
          Combinar todos los conceptos en una aplicación completa:
          <strong> "Agenda Personal"</strong>
        </p>
        <ul>
          <li>Formulario para agregar contactos</li>
          <li>Lista de contactos con búsqueda</li>
          <li>Editar/eliminar contactos</li>
          <li>Persistencia con localStorage</li>
          <li>Validación de formularios</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  );
}

export default GuiaProfesor;
