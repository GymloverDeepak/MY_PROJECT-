import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./Store";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Carousel from "./Components/Carousel";
import Program from "./Components/Program";
import TimeTable from "./TimeTable";
import Facts from "./Facts";
import Team from "./Team";
import Testimonal from "./Testimonal";
import Blog from "./Blog";
import Footer from "./Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import '../src/lib/flaticon/font/flaticon.css';
function App() {
  const { counterVal } = useSelector((store) => store.counter);
  const { name } = useSelector((store) => store.counter);
  useEffect(() => {
    if (counterVal > 5) {
      console.log(counterVal, "counterVal");
    }
  }, [counterVal]);
  let [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const addPlus = () => {
    dispatch(counterAction.increment(counterVal));
  };

  const minus = () => {
    dispatch(counterAction.decrement(counterVal));
  };
  return (
    <>
      {/* <div classNameName="App">
        <header classNameName="App-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={addPlus}>count increce</button>
          <button onClick={minus}>count decrease</button>
          <input
            type="number"
            placeholder="entervalue"
            onChange={(e) => setNum(e.target.value)}
          />
          <button onClick={() => dispatch(counterAction.add(num))}>Add</button>
          <button onClick={() => dispatch(counterAction.subtract(num))}>
            Substract
          </button>
          {counterVal} Raj
          <label>Name :- </label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) =>
              dispatch(counterAction.addName({ event: e.target.value }))
            }
          />
        </header>
      </div> */}

      {/* <Home /> */}
      {/* <!-- Header Start --> */}
      <Header />
      {/* <!-- Header End --> */}

      {/* <!-- Carousel Start --> */}
      <Carousel />
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <About />
      {/* <!-- About End --> */}

      {/* <!-- Programe Start --> */}
      <Program />
      {/* <!-- Programe Start --> */}

      {/* <!-- className Timetable Start --> */}
      <TimeTable />
      {/* <!-- className Timetable Start --> */}

      {/* <!-- Facts Start --> */}
      <Facts />
      {/* <!-- Facts End --> */}

      {/* <!-- Team Start --> */}
      <Team />
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <Testimonal />
      {/* <!-- Testimonial End --> */}

      {/* <!-- Blog Start --> */}
      <Blog />
      {/* <!-- Blog End --> */}

      {/* <!-- Footer Start --> */}
      <Footer />
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      {/* <a href="#" className="btn btn-dark py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></a> */}

      {/* <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript --> */}
      {/* <script src="js/main.js"></script> */}
    </>
  );
}

export default App;
