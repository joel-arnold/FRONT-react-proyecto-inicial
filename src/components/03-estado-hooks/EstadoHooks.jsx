import { useState, useEffect } from 'react';

function EstadoHooks() {
  return (
    <div className="seccion">
      <h2>🎛️ Estado y Hooks</h2>
      
      <div className="ejemplo-container">
        <h3>¿Qué es el Estado?</h3>
        <div className="componente-props">
          <h4>🚗 Analogía: El Estado como el Panel de un Auto</h4>
          <p>
            El <strong>estado</strong> es como el panel de control de un auto que muestra información 
            que puede cambiar mientras conduces:
          </p>
          <ul>
            <li><strong>Velocímetro:</strong> Cambia según qué tan rápido vas</li>
            <li><strong>Nivel de combustible:</strong> Disminuye mientras conduces</li>
            <li><strong>Luces:</strong> Pueden estar encendidas o apagadas</li>
            <li><strong>Música:</strong> Puede estar sonando o pausada</li>
          </ul>
          <p>
            En React, el estado son datos que pueden cambiar y cuando lo hacen, 
            la interfaz se actualiza automáticamente.
          </p>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>🪝 useState: Nuestro Primer Hook</h3>
        <p>
          <code>useState</code> es un Hook que nos permite agregar estado a nuestros componentes funcionales.
        </p>
        
        <div className="codigo-ejemplo">
{`import { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada "count"
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
        </div>
        
        <div className="demo-interactivo">
          <h4>🎮 Demo: Contador Interactivo</h4>
          <ContadorDemo />
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>🔧 useState: Diferentes Tipos de Estado</h3>
        <EstadosTiposDemo />
      </div>

      <div className="ejemplo-container">
        <h3>⚡ useEffect: Efectos Secundarios</h3>
        <p>
          <code>useEffect</code> nos permite realizar efectos secundarios en nuestros componentes: 
          llamadas a APIs, suscripciones, manipulación manual del DOM, etc.
        </p>
        
        <div className="componente-props">
          <h4>🔄 Ciclo de Vida del Componente</h4>
          <ul>
            <li><strong>Mount:</strong> Cuando el componente se crea y se añade al DOM</li>
            <li><strong>Update:</strong> Cuando el estado o props cambian</li>
            <li><strong>Unmount:</strong> Cuando el componente se elimina del DOM</li>
          </ul>
        </div>
        
        <div className="codigo-ejemplo">
{`// useEffect sin dependencias - se ejecuta en cada render
useEffect(() => {
  console.log('Se ejecuta en cada render');
});

// useEffect con array vacío - solo se ejecuta en mount
useEffect(() => {
  console.log('Solo se ejecuta una vez');
}, []);

// useEffect con dependencias - se ejecuta cuando cambian
useEffect(() => {
  console.log('Se ejecuta cuando count cambia');
}, [count]);

// useEffect con cleanup - para limpiar recursos
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);
  
  // Función de limpieza
  return () => clearInterval(timer);
}, []);`}
        </div>
        
        <div className="demo-interactivo">
          <h4>🎮 Demo: useEffect en Acción</h4>
          <UsuariosAPIDemo />
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>⏰ Demo: Reloj en Tiempo Real</h3>
        <RelojDemo />
      </div>

      <div className="ejemplo-container">
        <h3>💡 Ejercicio Práctico</h3>
        <div className="componente-props">
          <h4>🎯 Desafío: Crear un Temporizador</h4>
          <p>Crea un componente que:</p>
          <ul>
            <li>Muestre un contador que baje de 10 a 0</li>
            <li>Tenga botones para iniciar, pausar y resetear</li>
            <li>Muestre un mensaje cuando llegue a 0</li>
          </ul>
        </div>
        <TemporizadorDemo />
      </div>

      <div className="ejemplo-container">
        <h3>🚨 Errores Comunes</h3>
        <div className="error">
          <h4>❌ Error 1: Modificar estado directamente</h4>
          <div className="codigo-ejemplo">
{`// ❌ MAL - Nunca hagas esto
count = count + 1;

// ✅ BIEN - Usa la función setter
setCount(count + 1);`}
          </div>
        </div>
        
        <div className="error" style={{ marginTop: '15px' }}>
          <h4>❌ Error 2: useEffect sin dependencias correctas</h4>
          <div className="codigo-ejemplo">
{`// ❌ MAL - Puede causar bucles infinitos
useEffect(() => {
  setCount(count + 1);
}); // Sin array de dependencias

// ✅ BIEN - Con dependencias apropiadas
useEffect(() => {
  // Solo cuando sea necesario
}, [count]);`}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente demo del contador
function ContadorDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="contador-demo">
      <div className="contador-display">
        🔢 Contador: {count}
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>
          ➖ Decrementar
        </button>
        <button onClick={() => setCount(count + 1)}>
          ➕ Incrementar
        </button>
        <button 
          className="btn-secondary" 
          onClick={() => setCount(0)}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

// Demo de diferentes tipos de estado
function EstadosTiposDemo() {
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState(0);
  const [booleano, setBooleano] = useState(false);
  const [lista, setLista] = useState(['React', 'JavaScript']);

  const agregarItem = () => {
    const nuevosItems = ['Vue', 'Angular', 'Svelte', 'TypeScript', 'Node.js'];
    const itemAleatorio = nuevosItems[Math.floor(Math.random() * nuevosItems.length)];
    setLista([...lista, itemAleatorio]);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
      <div className="componente-card">
        <h4>📝 String</h4>
        <input 
          type="text" 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo..."
        />
        <p>Valor: "{texto}"</p>
      </div>
      
      <div className="componente-card">
        <h4>🔢 Number</h4>
        <input 
          type="number" 
          value={numero}
          onChange={(e) => setNumero(parseInt(e.target.value) || 0)}
        />
        <p>Valor: {numero}</p>
        <p>Es par: {numero % 2 === 0 ? '✅' : '❌'}</p>
      </div>
      
      <div className="componente-card">
        <h4>✅ Boolean</h4>
        <label>
          <input 
            type="checkbox" 
            checked={booleano}
            onChange={(e) => setBooleano(e.target.checked)}
          />
          Interruptor
        </label>
        <p>Estado: {booleano ? '🟢 ON' : '🔴 OFF'}</p>
      </div>
      
      <div className="componente-card">
        <h4>📋 Array</h4>
        <button className="btn-primary" onClick={agregarItem}>
          ➕ Agregar
        </button>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Demo de llamada a API con useEffect
function UsuariosAPIDemo() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const cargarUsuarios = async () => {
    setCargando(true);
    setError(null);
    
    try {
      // Simulamos una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Delay de 1.5s
      
      const usuariosFicticios = [
        { id: 1, nombre: "Ana García", email: "ana@email.com", rol: "Desarrolladora" },
        { id: 2, nombre: "Carlos López", email: "carlos@email.com", rol: "Diseñador" },
        { id: 3, nombre: "María Rodríguez", email: "maria@email.com", rol: "Project Manager" }
      ];
      
      setUsuarios(usuariosFicticios);
    } catch {
      setError("Error al cargar usuarios");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []); // Se ejecuta solo una vez al montar el componente

  if (cargando) {
    return <div className="cargando">⏳ Cargando usuarios...</div>;
  }

  if (error) {
    return <div className="error">❌ {error}</div>;
  }

  return (
    <div>
      <button className="btn-primary" onClick={cargarUsuarios}>
        🔄 Recargar Usuarios
      </button>
      <div className="lista-usuarios">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-card">
            <h4>👤 {usuario.nombre}</h4>
            <p>📧 {usuario.email}</p>
            <p>💼 {usuario.rol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente de reloj en tiempo real
function RelojDemo() {
  const [tiempo, setTiempo] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempo(new Date());
    }, 1000);

    // Función de limpieza
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="demo-interactivo">
      <h4>🕐 Reloj en Tiempo Real</h4>
      <div style={{ fontSize: '2rem', textAlign: 'center', margin: '20px 0' }}>
        {tiempo.toLocaleTimeString()}
      </div>
      <p style={{ textAlign: 'center', color: '#6c757d' }}>
        Se actualiza automáticamente cada segundo usando useEffect
      </p>
    </div>
  );
}

// Temporizador como ejercicio
function TemporizadorDemo() {
  const [segundos, setSegundos] = useState(10);
  const [activo, setActivo] = useState(false);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    let intervalo = null;
    if (activo && segundos > 0) {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    } else if (segundos === 0) {
      setTerminado(true);
      setActivo(false);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos]);

  const iniciar = () => {
    setActivo(true);
    setTerminado(false);
  };

  const pausar = () => {
    setActivo(false);
  };

  const resetear = () => {
    setSegundos(10);
    setActivo(false);
    setTerminado(false);
  };

  return (
    <div className="demo-interactivo">
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          fontSize: '4rem', 
          margin: '20px 0',
          color: segundos <= 3 ? 'red' : '#495057'
        }}>
          {terminado ? '🎉' : segundos}
        </div>
        
        {terminado && (
          <div style={{ fontSize: '1.5rem', color: 'green', margin: '10px 0' }}>
            ✅ ¡Tiempo terminado!
          </div>
        )}
        
        <div>
          <button 
            className="btn-primary" 
            onClick={iniciar} 
            disabled={activo || terminado}
          >
            ▶️ Iniciar
          </button>
          <button 
            className="btn-secondary" 
            onClick={pausar} 
            disabled={!activo}
          >
            ⏸️ Pausar
          </button>
          <button 
            className="btn-secondary" 
            onClick={resetear}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default EstadoHooks;
