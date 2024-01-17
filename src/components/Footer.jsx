
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>

      <div style={{
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        }}>
        Footer &copy; This is footer
        <br />
        <Link to="/about">About</Link>
      </div>
    </>
  );
};

export default Footer;
