import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import CardList from "../components/CardList";
import NavBar from "../components/NavBar";

export default function HomePage() {
  // in pages/Homepage.jsx and exported
  return (
    <>
      
     <NavBar/>
     <div className="container HomePage">
     <h1 style={{padding:'20px', color:'grey'}}>Hello</h1>

     <CardList/>
     </div>
    </>
  );
}