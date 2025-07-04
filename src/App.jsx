import { useState } from 'react'
import './App.css'

// Importar componentes de ejemplos
import IntroduccionReact from './components/01-introduccion/IntroduccionReact'
import ComponentesJSX from './components/02-componentes-jsx/ComponentesJSX'
import EstadoHooks from './components/03-estado-hooks/EstadoHooks'
import FormulariosReact from './components/04-formularios/FormulariosReact'
import GuiaProfesor from './components/shared/GuiaProfesor'

function App() {
  const [seccionActiva, setSeccionActiva] = useState('introduccion')

  const secciones = [
    { id: 'introduccion', titulo: '1. Introducción a React', componente: <IntroduccionReact /> },
    { id: 'componentes', titulo: '2. Componentes y JSX', componente: <ComponentesJSX /> },
    { id: 'estado', titulo: '3. Estado y Hooks', componente: <EstadoHooks /> },
    { id: 'formularios', titulo: '4. Formularios en React', componente: <FormulariosReact /> },
    { id: 'guia', titulo: '👩‍🏫 Guía Profesor', componente: <GuiaProfesor /> }
  ]

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎓 Clase de React - UTN Frontend</h1>
        <p>Material didáctico para las clases de React</p>
      </header>

      <nav className="app-nav">
        {secciones.map(seccion => (
          <button 
            key={seccion.id}
            className={`nav-button ${seccionActiva === seccion.id ? 'active' : ''}`}
            onClick={() => setSeccionActiva(seccion.id)}
          >
            {seccion.titulo}
          </button>
        ))}
      </nav>

      <main className="app-main">
        {secciones.find(s => s.id === seccionActiva)?.componente}
      </main>

      <footer className="app-footer">
        <p>📚 Universidad Tecnológica Nacional - Frontend con React</p>
      </footer>
    </div>
  )
}

export default App
