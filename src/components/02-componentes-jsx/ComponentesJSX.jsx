import { useState } from 'react';

function ComponentesJSX() {
  const [propsDinamicas, setPropsDinamicas] = useState({
    nombre: "Juan",
    edad: 25,
    activo: true
  });

  return (
    <div className="seccion">
      <h2>🧩 Componentes y JSX</h2>
      
      <div className="ejemplo-container">
        <h3>¿Qué es un Componente?</h3>
        <div className="componente-props">
          <p>
            <strong>Un componente</strong> es como una función que devuelve elementos de interfaz de usuario. 
            Es una pieza reutilizable de código que encapsula su propia lógica y presentación.
          </p>
          
          <h4>🏠 Analogía: Componentes como habitaciones de una casa</h4>
          <ul>
            <li><strong>Cocina:</strong> Tiene elementos específicos (estufa, refrigerador)</li>
            <li><strong>Sala:</strong> Tiene sus propios elementos (sofá, TV)</li>
            <li><strong>Baño:</strong> Elementos únicos para su función</li>
          </ul>
          <p>Cada habitación es independiente pero forman parte de la casa completa.</p>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>JSX: JavaScript + XML</h3>
        <p>JSX nos permite escribir HTML dentro de JavaScript de forma natural.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>❌ Sin JSX (React.createElement)</h4>
            <div className="codigo-ejemplo">
{`// Difícil de leer y escribir
function Saludo() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hola'),
    React.createElement('p', null, 'Bienvenido')
  );
}`}
            </div>
          </div>
          
          <div>
            <h4>✅ Con JSX</h4>
            <div className="codigo-ejemplo">
{`// Fácil y natural
function Saludo() {
  return (
    <div>
      <h1>Hola</h1>
      <p>Bienvenido</p>
    </div>
  );
}`}
            </div>
          </div>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>🔄 Diferencias JSX vs HTML</h3>
        <div className="codigo-ejemplo">
{`// HTML tradicional
<div class="container">
  <label for="nombre">Nombre:</label>
  <input type="text" for="nombre" onclick="miFuncion()">
</div>

// JSX
<div className="container">
  <label htmlFor="nombre">Nombre:</label>
  <input type="text" htmlFor="nombre" onClick={miFuncion} />
</div>`}
        </div>
        
        <div className="componente-props">
          <h4>📝 Reglas importantes de JSX:</h4>
          <ul>
            <li><code>className</code> en lugar de <code>class</code></li>
            <li><code>htmlFor</code> en lugar de <code>for</code></li>
            <li>Eventos en camelCase: <code>onClick</code>, <code>onChange</code></li>
            <li>Las etiquetas deben cerrarse: <code>&lt;input /&gt;</code></li>
            <li>Un solo elemento raíz (o Fragment)</li>
          </ul>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>⚙️ Props: Datos de entrada</h3>
        <p>Las props son como los parámetros de una función, permiten pasar datos a los componentes.</p>
        
        <div className="demo-interactivo">
          <h4>🎮 Demo Interactivo: Props Dinámicas</h4>
          
          <div style={{ marginBottom: '20px' }}>
            <div className="form-group">
              <label>Nombre:</label>
              <input 
                type="text" 
                value={propsDinamicas.nombre}
                onChange={(e) => setPropsDinamicas({...propsDinamicas, nombre: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Edad:</label>
              <input 
                type="number" 
                value={propsDinamicas.edad}
                onChange={(e) => setPropsDinamicas({...propsDinamicas, edad: parseInt(e.target.value)})}
              />
            </div>
            
            <div className="form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={propsDinamicas.activo}
                  onChange={(e) => setPropsDinamicas({...propsDinamicas, activo: e.target.checked})}
                />
                Usuario Activo
              </label>
            </div>
          </div>
          
          <div style={{ border: '2px solid #007bff', padding: '15px', borderRadius: '8px' }}>
            <h5>Resultado del Componente:</h5>
            <TarjetaUsuario 
              nombre={propsDinamicas.nombre}
              edad={propsDinamicas.edad}
              activo={propsDinamicas.activo}
            />
          </div>
        </div>
        
        <div className="codigo-ejemplo">
{`// Definición del componente
function TarjetaUsuario({ nombre, edad, activo }) {
  return (
    <div className="usuario-card">
      <h3>{nombre}</h3>
      <p>Edad: {edad} años</p>
      <span style={{
        color: activo ? 'green' : 'red',
        fontWeight: 'bold'
      }}>
        Estado: {activo ? 'Activo' : 'Inactivo'}
      </span>
    </div>
  );
}

// Uso del componente
<TarjetaUsuario nombre="Juan" edad={25} activo={true} />`}
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>🎯 Ejercicio Práctico</h3>
        <div className="componente-props">
          <h4>Crear un componente ProductoCard</h4>
          <p>Crea un componente que reciba las siguientes props:</p>
          <ul>
            <li><code>nombre</code>: string</li>
            <li><code>precio</code>: number</li>
            <li><code>imagen</code>: string (URL)</li>
            <li><code>disponible</code>: boolean</li>
          </ul>
        </div>
        
        <EjemploProductos />
      </div>

      <div className="ejemplo-container">
        <h3>🧪 Playground JSX</h3>
        <div className="componente-props">
          <p>💡 <strong>Para practicar:</strong> Modifica el código en tu editor y observa los cambios en tiempo real.</p>
          <p>🔥 <strong>Hot Module Replacement (HMR):</strong> Vite actualiza automáticamente sin perder el estado.</p>
        </div>
      </div>
    </div>
  );
}

// Componente ejemplo para demostrar props
function TarjetaUsuario({ nombre, edad, activo }) {
  return (
    <div className="usuario-card">
      <h3>👤 {nombre}</h3>
      <p>🎂 Edad: {edad} años</p>
      <span style={{
        color: activo ? 'green' : 'red',
        fontWeight: 'bold',
        fontSize: '0.9rem'
      }}>
        ⚡ Estado: {activo ? '✅ Activo' : '❌ Inactivo'}
      </span>
    </div>
  );
}

// Ejemplo de múltiples componentes
function EjemploProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 50000, imagen: "💻", disponible: true },
    { id: 2, nombre: "Mouse", precio: 2500, imagen: "🖱️", disponible: true },
    { id: 3, nombre: "Teclado", precio: 3000, imagen: "⌨️", disponible: false }
  ];

  return (
    <div>
      <h4>🛍️ Ejemplo: Lista de Productos</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        {productos.map(producto => (
          <ProductoCard 
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            disponible={producto.disponible}
          />
        ))}
      </div>
    </div>
  );
}

function ProductoCard({ nombre, precio, imagen, disponible }) {
  return (
    <div className={`componente-card ${!disponible ? 'opacity-50' : ''}`} style={{
      opacity: disponible ? 1 : 0.6,
      border: disponible ? '1px solid #28a745' : '1px solid #dc3545'
    }}>
      <div style={{ fontSize: '3rem', textAlign: 'center' }}>{imagen}</div>
      <h4>{nombre}</h4>
      <p style={{ fontSize: '1.2rem', color: '#007bff', fontWeight: 'bold' }}>
        ${precio.toLocaleString()}
      </p>
      <span style={{
        color: disponible ? 'green' : 'red',
        fontWeight: 'bold',
        fontSize: '0.9rem'
      }}>
        {disponible ? '✅ Disponible' : '❌ Agotado'}
      </span>
    </div>
  );
}

export default ComponentesJSX;
