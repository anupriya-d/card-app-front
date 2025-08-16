import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "../components/NavBar";

export default function AboutPage() {
  // in pages/Homepage.jsx and exported
  return (
    <>
      
     <NavBar/>
     <div className="container AboutPage">
     <h1 style={{padding:'20px', color:'grey'}}>About Me</h1>
     </div>
    </>
  );
}