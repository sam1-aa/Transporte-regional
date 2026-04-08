function Footer() {
    const yyy = new Date().getFullYear()
    return (
        <div className="footer">
            <p>SUBEEEN &copy; {yyy} | Sistema de Información de Transporte Regional</p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>Información en tiempo real sujeta a cambios</p>
        </div>
    )
}
export default Footer;
