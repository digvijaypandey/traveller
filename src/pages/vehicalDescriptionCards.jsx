import { useEffect, useState } from "react";
import image1 from "../assets/view-3d-car_23-2150796894.avif";
export const VehicalDescriptionCard = () => {
  const baseAPI = "https://myfakeapi.com/api/cars/";
  const baseAPI2 =
    "https://run.mocky.io/v3/50896b38-be5a-4c15-9f7f-17c9de19bf5c";

  const [carsData, setCars] = useState([]);

  useEffect(() => {
    // Fetching the data from mock API
    fetch(baseAPI2) // Replace with your Mocky or MockAPI URL
      .then((response) => response.json())
      .then((data) => {
        setCars(data), console.log("data", data);
      })
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);
  return (
    <div className="container">
      {/* <h1 className="pt-5">VehicalDescriptionCard</h1> */}
      <div className="col-12 descriptrion pt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <img src={image1} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 imgPara">
            <p>
              Travel Guide Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum.
            </p>
            <p className="text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 pt-5">
        <div className="row">
          {/* <div className="col-md-4 col-sm-12">
            <div className="card-group">
              <div className="card">
                <img src={image1} />
                <div className="card-body">
                  <h5 className="card-title">Car title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card-group">
              <div className="card">
                <img src={image1} />
                <div className="card-body">
                  <h5 className="card-title">Car title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card-group">
              <div className="card">
                <img src={image1} />
                <div className="card-body">
                  <h5 className="card-title">Car title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {carsData.map((car, index) => (
            <div className="col-md-4 col-sm-12 pt-2 pb-2" key={car.id} index>
              <div className="card-group">
                <div className="card">
                  <img src={car?.imageUrl} />
                  <div className="card-body">
                    <h5 className="card-title">{car?.name}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    {/* <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// ====> to gennerate dummy API ====== https://designer.mocky.io/design/confirmation

// https://myfakeapi.com/api/cars/

// https://run.mocky.io/v3/38cbe169-e3db-4ba0-b9ef-16e0558707e4