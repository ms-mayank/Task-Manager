
import { Link } from 'react-router-dom'
const Appfooter = () => {
  return (
    <>

      <div style={{
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
        }}>
        &copy; Get More info About the App &copy;
        <br />
        <Link className='btn btn-primary' to="/Task-Manager/about">Click to know About This App</Link>
      </div>
    </>
  );
};

export default Appfooter;
