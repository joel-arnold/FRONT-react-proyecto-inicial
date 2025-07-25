import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hijo from "./componente-hijo";
import "./App.css";

function App() {
  const [count, setCuentita] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const incrementarCuenta = () => {
    setCuentita((count) => count + 1);
  };

  // useEffect para actualizar el contador de segundos cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup: limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // Array vacío significa que solo se ejecuta una vez al montar el componente

  // ? useEffect para hacer fetch de datos de una API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Usando JSONPlaceholder como ejemplo de API pública
        const res = await fetch("https://restcountries.com/v3.1/name/argentina");
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError("Error al cargar los datos");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Solo en el primer render

  // ? useEffect para realizar una acción al montar el componente
  useEffect(() => {
    console.log("El componente se montó");
    // Ejemplo: Llamada a una API
    fetch("https://restcountries.com/v3.1/name/argentina")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []); // Array vacío = solo se ejecuta una vez

  // ? useEffect para realizar una acción cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tic tac");
      // incrementarCuenta(); // Incrementa el contador cada segundo
    }, 1000);

    return () => {
      clearInterval(timer); // Limpia el intervalo al desmontar
      console.log("Intervalo limpiado");
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      console.log("Ventana redimensionada");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Limpieza
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementarCuenta}>count is {count}</button>
        {/* <p>Tiempo transcurrido: {seconds} segundos</p> */}

        {/* Sección para mostrar los datos de la API */}
        <div className="api-data" style={{ margin: "20px 0" }}>
          <h3 style={{ color: "#646cff", marginBottom: "15px" }}>Datos de la API de Países (ejemplo useEffect):</h3>
          {loading && <p style={{ color: "#888", fontSize: "16px" }}>Cargando datos...</p>}
          {error && <p style={{ color: "#ff4444", fontSize: "16px", fontWeight: "bold" }}>{error}</p>}
          {data && !loading && (
            <div
              style={{
                textAlign: "left",
                background: "#1a1a1a",
                color: "#e6e6e6",
                padding: "20px",
                borderRadius: "8px",
                margin: "15px 0",
                border: "1px solid #333",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              <h4 style={{ color: "#646cff", marginBottom: "10px", marginTop: "0", textAlign: "center" }}>{data[0].name.common}</h4>
              <p style={{ margin: "8px 0", color: "#ccc", lineHeight: "1.4" }}>
                <strong style={{ color: "#fff" }}>Región:</strong> {data[0].region}
              </p>
              <p style={{ margin: "8px 0", color: "#ccc", lineHeight: "1.4" }}>
                <strong style={{ color: "#fff" }}>Sub región:</strong> {data[0].subregion}
              </p>
              <p style={{ margin: "8px 0", color: "#ccc", lineHeight: "1.4" }}>
                <strong style={{ color: "#fff" }}>Primer día de la semana:</strong> {data[0].startOfWeek}
              </p>
              <p style={{ margin: "8px 0", color: "#ccc", lineHeight: "1.4" }}>
                <strong style={{ color: "#fff" }}>Zona horaria:</strong> {data[0].timezones[0]}
              </p>
            </div>
          )}
        </div>

        <section className="hijito">
          <Hijo name="Juan" age={25} />
        </section>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
