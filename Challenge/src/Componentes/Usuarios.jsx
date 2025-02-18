function Usuarios({ user , onDelete }) {
    return (
        <div style={{
            
            border: "1px solid #ddd",
            padding: "12px",
            width: "250px",
            backgroundColor: "#c8f5f5",
            borderRadius: "10px",
        }}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Ciudad:</strong> {user.address.city}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Empresa:</strong> {user.company.name}</p>

            <button onClick={onDelete}>Eliminar</button>
        </div>
    );
}

export default Usuarios;
