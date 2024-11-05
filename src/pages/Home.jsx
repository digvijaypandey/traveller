import { VehicalDescriptionCard } from "./vehicalDescriptionCards";


export const Home = () => {
  return (
    <>
      <div className="bodyContainer container-wrap">
        <div className="bodyimg"></div>
      </div>
      <div className="container ">
        <div className="ineerContainer">
          <form className="row g-3 needs-validation">
            <div className="col-md-4">
              <label name="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Mark"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label name="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Otto"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label name="mobileNo" className="form-label">
                Contact
              </label>
              <input
                type="number"
                className="form-control"
                id="mobileNo"
                required
              />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
      <VehicalDescriptionCard />
    </>
  );
};
