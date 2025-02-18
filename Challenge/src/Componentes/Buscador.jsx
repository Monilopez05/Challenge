function Buscador({ filtro, setFiltro }) {
    return (
        <input
            type="text"
            placeholder="Buscar por nombre, email o ciudad..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{  padding: "12px", marginBottom: "15px", width: "120%" }}
        />
    );
}

export default Buscador;
