import { useEffect, useState } from "react";
import Usuarios from "./Componentes/Usuarios";
import Buscador from "./Componentes/Buscador";

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [nuevosUsuarios, setNuevosUsuarios] = useState([]);

    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.error("Error al cargar datos", err));
    }, []);

    useEffect(() => {
        const data = localStorage.getItem("usuariosNuevos");
        if (data) setNuevosUsuarios(JSON.parse(data));
    }, []);

    useEffect(() => {
        localStorage.setItem("usuariosNuevos", JSON.stringify(nuevosUsuarios));
    }, [nuevosUsuarios]);

    const usuariosFiltrados = [...usuarios, ...nuevosUsuarios].filter(user =>
        user.name.toLowerCase().includes(filtro.toLowerCase()) ||
        user.email.toLowerCase().includes(filtro.toLowerCase()) ||
        user.address.city.toLowerCase().includes(filtro.toLowerCase())
    );

    const agregarUsuario = () => {
        const nombre = prompt("Nombre:");
        const username = prompt("Username:");
        const email = prompt("Email:");
        const ciudad = prompt("Ciudad:");
        const telefono = prompt("Teléfono:");
        const empresa = prompt("Empresa:");

        if (nombre && email) {
            const nuevo = {
                id: usuarios.length + nuevosUsuarios.length + 1,
                name: nombre,
                username,
                email,
                address: { city: ciudad },
                phone: telefono,
                company: { name: empresa }
            };
            setNuevosUsuarios([...nuevosUsuarios, nuevo]);
        }
    };

    return (
        <div style={{ padding: "10px", fontFamily: "Arial" ,  }}>
            <h1>Lista de Usuarios</h1>
            <Buscador filtro={filtro} setFiltro={setFiltro} />
            <button onClick={agregarUsuario} style={{ marginBottom: "20px" }}>
                Agregar Usuario
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                {usuariosFiltrados.map((user) => (
                    <Usuarios key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;
