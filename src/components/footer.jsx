import "../style/footer.css"

const footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="product-footer">
                    <h3 className="titulo-footer">PRODUCT</h3>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Email Signature</a>
                    <a href="#">Side Hustlers</a>
                </div>
                <div className="company-footer">
                    <h3 className="titulo-footer">COMPANY</h3>
                    <a href="#">Press</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Legal</a>

                </div>
            </div>

            <p className="copy-footer">© 2024 GuiaPin™</p>

        </footer>

    )
}

export default footer