export default function Portfolio(props) {
//   const cardStyle = {
//     width: "25rem",
//     diplay: "flex",
// style={cardStyle}
//   };

  return (
    <div className="card-container my-5">
        <h1 className="text-center mb-5" style={{ fontSize: "3rem" }}>
          Project portfolio!!
        </h1>
        <div className="d-flex flex-row">
          <div className="col-md-6 mb-5">
            <div className="card h-100">
              <a
                href="https://matthewc86.github.io/forecast-machine/">
                <img
                  className="card-img-top"
                  src={require("../Pages/WeatherApp.png")}
                  alt="Weather API"
                  style={{ width: "30%", height: "300px" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Weather API {props.name}
                </h5>
                <p className="card-text text-center">
                  This app was designed to pull specific information from a
                  weather API based on user input.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="card h-100">
              <a
                href="https://travel-forum-p2.herokuapp.com/">
                <img
                  className="card-img-top"
                  src={require("../Pages/TravelApp.png")}
                  alt="Travel Forum"
                  style={{ width: "30%", height: "300px" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Travel Blog {props.name}
                </h5>
                <p className="card-text text-center">
                  Travel forums are used for travelers and vacation seekers to access information on travelled locations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="card h-100">
              <a
                href="https://b-frazier.github.io/dictionary-app/">
                <img
                  className="card-img-top"
                  src={require("../Pages/DictionaryApp.png")}
                  alt="Weather API"
                  style={{ width: "30%", height: "300px" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Dictionary App {props.name}
                </h5>
                <p className="card-text text-center">
                The Dictionary-App gives me a quick easy way to find definition as well as the pronunciation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="card h-100">
              <a
                href="https://matthewc86.github.io/forecast-machine/">
                <img
                  className="card-img-top"
                  src={require("../Pages/WeatherApp.png")}
                  alt="Weather API"
                  style={{ width: "30%", height: "300px" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Weather API {props.name}
                </h5>
                <p className="card-text text-center">
                  This app was designed to pull specific information from a
                  weather API based on user input.{props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
