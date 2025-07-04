import { useState } from 'react';

function FormulariosReact() {
  return (
    <div className="seccion">
      <h2>📝 Formularios en React</h2>
      
      <div className="ejemplo-container">
        <h3>Formularios Controlados vs No Controlados</h3>
        <div className="componente-props">
          <h4>🎮 Formularios Controlados (Recomendado)</h4>
          <p>
            En un formulario controlado, React controla el valor de los elementos del formulario 
            a través del estado del componente. Es como tener un "control remoto" para cada campo.
          </p>
          
          <h4>🆓 Formularios No Controlados</h4>
          <p>
            Los elementos del formulario mantienen su propio estado interno, 
            similar a como funcionan en HTML vanilla.
          </p>
        </div>
        
        <ComparacionFormularios />
      </div>

      <div className="ejemplo-container">
        <h3>✅ Formulario Controlado Completo</h3>
        <FormularioContacto />
      </div>

      <div className="ejemplo-container">
        <h3>🔍 Validación en Tiempo Real</h3>
        <FormularioValidacion />
      </div>

      <div className="ejemplo-container">
        <h3>📋 Formulario Dinámico</h3>
        <FormularioDinamico />
      </div>

      <div className="ejemplo-container">
        <h3>💡 Mejores Prácticas</h3>
        <div className="componente-props">
          <h4>✅ Do's (Qué hacer)</h4>
          <ul>
            <li>Usa formularios controlados para mejor control</li>
            <li>Valida en tiempo real para mejor UX</li>
            <li>Usa nombres descriptivos para los estados</li>
            <li>Prevén el envío por defecto con <code>preventDefault()</code></li>
            <li>Proporciona feedback visual del estado</li>
          </ul>
          
          <h4>❌ Don'ts (Qué evitar)</h4>
          <ul>
            <li>No mezcles formularios controlados y no controlados</li>
            <li>No olvides manejar todos los tipos de input</li>
            <li>No hagas validación solo en el cliente</li>
            <li>No uses <code>value</code> sin <code>onChange</code></li>
          </ul>
        </div>
      </div>

      <div className="ejemplo-container">
        <h3>🚨 Errores Comunes</h3>
        <div className="error">
          <h4>❌ Error 1: Input controlado sin onChange</h4>
          <div className="codigo-ejemplo">
{`// ❌ MAL - Input de solo lectura no intencionado
<input value={nombre} />

// ✅ BIEN - Con onChange
<input value={nombre} onChange={(e) => setNombre(e.target.value)} />`}
          </div>
        </div>
        
        <div className="error" style={{ marginTop: '15px' }}>
          <h4>❌ Error 2: No prevenir el comportamiento por defecto</h4>
          <div className="codigo-ejemplo">
{`// ❌ MAL - La página se recarga
const handleSubmit = () => {
  // procesar datos
};

// ✅ BIEN - Prevenir recarga
const handleSubmit = (e) => {
  e.preventDefault();
  // procesar datos
};`}
          </div>
        </div>
      </div>
    </div>
  );
}

// Comparación entre formularios controlados y no controlados
function ComparacionFormularios() {
  const [valorControlado, setValorControlado] = useState('');

  const handleSubmitControlado = (e) => {
    e.preventDefault();
    alert(`Valor controlado: ${valorControlado}`);
  };

  const handleSubmitNoControlado = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const valor = formData.get('inputNoControlado');
    alert(`Valor no controlado: ${valor}`);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div className="componente-card">
        <h4>🎮 Controlado</h4>
        <form onSubmit={handleSubmitControlado}>
          <div className="form-group">
            <label>Nombre:</label>
            <input 
              type="text"
              value={valorControlado}
              onChange={(e) => setValorControlado(e.target.value)}
              placeholder="React controla este input"
            />
          </div>
          <p>Valor actual: <strong>"{valorControlado}"</strong></p>
          <button type="submit" className="btn-primary">Enviar</button>
        </form>
        
        <div className="codigo-ejemplo" style={{ marginTop: '15px' }}>
{`const [valor, setValor] = useState('');

<input 
  value={valor}
  onChange={(e) => setValor(e.target.value)}
/>`}
        </div>
      </div>
      
      <div className="componente-card">
        <h4>🆓 No Controlado</h4>
        <form onSubmit={handleSubmitNoControlado}>
          <div className="form-group">
            <label>Nombre:</label>
            <input 
              type="text"
              name="inputNoControlado"
              placeholder="HTML controla este input"
            />
          </div>
          <p>Valor: <em>Solo disponible al enviar</em></p>
          <button type="submit" className="btn-primary">Enviar</button>
        </form>
        
        <div className="codigo-ejemplo" style={{ marginTop: '15px' }}>
{`// Acceso con FormData o refs
const formData = new FormData(e.target);
const valor = formData.get('inputName');`}
        </div>
      </div>
    </div>
  );
}

// Formulario de contacto completo
function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    categoria: 'consulta',
    newsletter: false
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        categoria: 'consulta',
        newsletter: false
      });
    }, 3000);
  };

  if (enviado) {
    return (
      <div className="demo-interactivo">
        <div style={{ textAlign: 'center', color: 'green' }}>
          <h3>✅ ¡Mensaje enviado exitosamente!</h3>
          <p>Gracias por contactarnos, {formData.nombre}.</p>
          <p>Te responderemos a {formData.email} pronto.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-interactivo">
      <form onSubmit={handleSubmit} className="formulario-demo">
        <div className="form-group">
          <label>Nombre completo *</label>
          <input 
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input 
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+54 11 1234-5678"
          />
        </div>

        <div className="form-group">
          <label>Categoría</label>
          <select 
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            <option value="consulta">Consulta General</option>
            <option value="soporte">Soporte Técnico</option>
            <option value="ventas">Ventas</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mensaje *</label>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <div className="form-group">
          <label>
            <input 
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Suscribirme al newsletter
          </label>
        </div>

        <button type="submit" className="btn-primary">
          📨 Enviar Mensaje
        </button>
      </form>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h4>📊 Estado del Formulario:</h4>
        <pre style={{ fontSize: '0.9rem', overflow: 'auto' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

// Formulario con validación
function FormularioValidacion() {
  const [datos, setDatos] = useState({
    usuario: '',
    password: '',
    confirmarPassword: ''
  });

  const [errores, setErrores] = useState({});

  const validarCampo = (nombre, valor) => {
    const nuevosErrores = { ...errores };

    switch (nombre) {
      case 'usuario':
        if (valor.length < 3) {
          nuevosErrores.usuario = 'El usuario debe tener al menos 3 caracteres';
        } else if (!/^[a-zA-Z0-9_]+$/.test(valor)) {
          nuevosErrores.usuario = 'Solo letras, números y guiones bajos';
        } else {
          delete nuevosErrores.usuario;
        }
        break;

      case 'password':
        if (valor.length < 6) {
          nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(valor)) {
          nuevosErrores.password = 'Debe contener mayúscula, minúscula y número';
        } else {
          delete nuevosErrores.password;
        }
        break;

      case 'confirmarPassword':
        if (valor !== datos.password) {
          nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden';
        } else {
          delete nuevosErrores.confirmarPassword;
        }
        break;
    }

    setErrores(nuevosErrores);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos(prev => ({ ...prev, [name]: value }));
    validarCampo(name, value);
  };

  const esFormularioValido = Object.keys(errores).length === 0 && 
                           datos.usuario && datos.password && datos.confirmarPassword;

  return (
    <div className="demo-interactivo">
      <div className="formulario-demo">
        <div className="form-group">
          <label>Usuario</label>
          <input 
            type="text"
            name="usuario"
            value={datos.usuario}
            onChange={handleChange}
            placeholder="minimo 3 caracteres"
            style={{ borderColor: errores.usuario ? 'red' : datos.usuario ? 'green' : '' }}
          />
          {errores.usuario && <span style={{ color: 'red', fontSize: '0.9rem' }}>❌ {errores.usuario}</span>}
          {!errores.usuario && datos.usuario && <span style={{ color: 'green', fontSize: '0.9rem' }}>✅ Usuario válido</span>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input 
            type="password"
            name="password"
            value={datos.password}
            onChange={handleChange}
            placeholder="mínimo 6 caracteres, mayús, minús, número"
            style={{ borderColor: errores.password ? 'red' : datos.password && !errores.password ? 'green' : '' }}
          />
          {errores.password && <span style={{ color: 'red', fontSize: '0.9rem' }}>❌ {errores.password}</span>}
          {!errores.password && datos.password && <span style={{ color: 'green', fontSize: '0.9rem' }}>✅ Contraseña segura</span>}
        </div>

        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input 
            type="password"
            name="confirmarPassword"
            value={datos.confirmarPassword}
            onChange={handleChange}
            placeholder="repite la contraseña"
            style={{ borderColor: errores.confirmarPassword ? 'red' : datos.confirmarPassword && !errores.confirmarPassword ? 'green' : '' }}
          />
          {errores.confirmarPassword && <span style={{ color: 'red', fontSize: '0.9rem' }}>❌ {errores.confirmarPassword}</span>}
          {!errores.confirmarPassword && datos.confirmarPassword && <span style={{ color: 'green', fontSize: '0.9rem' }}>✅ Contraseñas coinciden</span>}
        </div>

        <button 
          type="submit" 
          className="btn-primary"
          disabled={!esFormularioValido}
          style={{ opacity: esFormularioValido ? 1 : 0.5 }}
        >
          {esFormularioValido ? '✅ Registrarse' : '❌ Completar campos'}
        </button>
      </div>
    </div>
  );
}

// Formulario dinámico con campos que se agregan/quitan
function FormularioDinamico() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: '', email: '', telefono: '' }
  ]);

  const agregarContacto = () => {
    const nuevoId = Math.max(...contactos.map(c => c.id)) + 1;
    setContactos([...contactos, { id: nuevoId, nombre: '', email: '', telefono: '' }]);
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter(c => c.id !== id));
  };

  const actualizarContacto = (id, campo, valor) => {
    setContactos(contactos.map(contacto => 
      contacto.id === id ? { ...contacto, [campo]: valor } : contacto
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contactos:', contactos);
    alert(`Se guardaron ${contactos.length} contactos`);
  };

  return (
    <div className="demo-interactivo">
      <form onSubmit={handleSubmit}>
        <h4>👥 Lista de Contactos</h4>
        
        {contactos.map((contacto, index) => (
          <div key={contacto.id} className="componente-card" style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h5>Contacto #{index + 1}</h5>
              {contactos.length > 1 && (
                <button 
                  type="button"
                  className="btn-secondary"
                  onClick={() => eliminarContacto(contacto.id)}
                  style={{ padding: '5px 10px' }}
                >
                  🗑️ Eliminar
                </button>
              )}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <input 
                type="text"
                placeholder="Nombre"
                value={contacto.nombre}
                onChange={(e) => actualizarContacto(contacto.id, 'nombre', e.target.value)}
              />
              <input 
                type="email"
                placeholder="Email"
                value={contacto.email}
                onChange={(e) => actualizarContacto(contacto.id, 'email', e.target.value)}
              />
              <input 
                type="tel"
                placeholder="Teléfono"
                value={contacto.telefono}
                onChange={(e) => actualizarContacto(contacto.id, 'telefono', e.target.value)}
              />
            </div>
          </div>
        ))}
        
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button 
            type="button"
            className="btn-secondary"
            onClick={agregarContacto}
            style={{ marginRight: '10px' }}
          >
            ➕ Agregar Contacto
          </button>
          <button type="submit" className="btn-primary">
            💾 Guardar Todos
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormulariosReact;
