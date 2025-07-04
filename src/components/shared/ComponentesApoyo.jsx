// Componentes reutilizables para los ejemplos de clase

// Componente para mostrar código
export function CodigoEjemplo({ children, titulo }) {
  return (
    <div style={{ margin: '15px 0' }}>
      {titulo && <h5 style={{ marginBottom: '10px' }}>{titulo}</h5>}
      <div className="codigo-ejemplo">
        {children}
      </div>
    </div>
  );
}

// Componente para mostrar demos interactivos
export function DemoInteractivo({ titulo, children }) {
  return (
    <div className="demo-interactivo">
      {titulo && <h4>{titulo}</h4>}
      {children}
    </div>
  );
}

// Componente para mostrar props/conceptos importantes
export function ConceptoImportante({ titulo, children, tipo = 'info' }) {
  const colores = {
    info: '#e7f3ff',
    warning: '#fff3cd',
    error: '#f8d7da',
    success: '#d4edda'
  };

  const bordes = {
    info: '#007bff',
    warning: '#ffc107',
    error: '#dc3545',
    success: '#28a745'
  };

  return (
    <div className="componente-props" style={{
      backgroundColor: colores[tipo],
      borderLeftColor: bordes[tipo]
    }}>
      {titulo && <h4>{titulo}</h4>}
      {children}
    </div>
  );
}

// Componente para ejercicios
export function Ejercicio({ numero, titulo, descripcion, pistas }) {
  return (
    <div style={{
      border: '2px dashed #6c757d',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h4>🎯 Ejercicio {numero}: {titulo}</h4>
      <p>{descripcion}</p>
      {pistas && (
        <details style={{ marginTop: '10px' }}>
          <summary style={{ cursor: 'pointer', color: '#007bff' }}>
            💡 Mostrar pistas
          </summary>
          <ul style={{ marginTop: '10px' }}>
            {pistas.map((pista, index) => (
              <li key={index}>{pista}</li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

// Componente para mostrar comparaciones lado a lado
export function Comparacion({ izquierda, derecha }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gap: '20px',
      margin: '15px 0'
    }}>
      <div className="componente-card">
        {izquierda}
      </div>
      <div className="componente-card">
        {derecha}
      </div>
    </div>
  );
}

// Componente para mostrar errores comunes
export function ErrorComun({ titulo, codigoMalo, codigoBueno, explicacion }) {
  return (
    <div className="error" style={{ margin: '15px 0' }}>
      <h4>❌ {titulo}</h4>
      {explicacion && <p>{explicacion}</p>}
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
        <div>
          <h5 style={{ color: '#dc3545' }}>❌ Incorrecto:</h5>
          <div className="codigo-ejemplo">
            {codigoMalo}
          </div>
        </div>
        <div>
          <h5 style={{ color: '#28a745' }}>✅ Correcto:</h5>
          <div className="codigo-ejemplo">
            {codigoBueno}
          </div>
        </div>
      </div>
    </div>
  );
}
