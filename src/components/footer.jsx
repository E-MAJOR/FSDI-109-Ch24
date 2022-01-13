//jsx allows html language/blocks/sections
// every jsx (component) will have css file
//html is now within jsx
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <h4>Organico Store 2021. All Rights Reserved</h4>
            <h5>Mark Courtright</h5>
        </div>
    );
}
//use somewhere else
export default Footer;