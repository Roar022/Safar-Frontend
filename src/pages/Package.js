import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
// import { setupMenu, setupSwiper, setupLoadMore } from './Assets/js/script.js';

// // Call the setup functions
// setupMenu();
// setupSwiper();
// setupLoadMore();

function Package() {
  const [dataa, setData] = React.useState([]);
  const [visibility, setVisibility] = React.useState(3);

  React.useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=tourist%20attraction&client_id=CnwwMAFDZGn9uxKC9bKQUQnc-0c3ANeOls_M9UpY3Z4"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [dataa.id]);

  console.log(dataa);

  const elements = dataa.slice(0, visibility).map((resu) => (
    <div className="box">
      <div className="image">
        <img src={resu.urls.full} alt="" />
      </div>
      <div className="content">
        <h3>{resu.description}</h3>
        <p>{resu.alt_description}</p>
        <NavLink to="/adduser" className="btnnb">
          book now
        </NavLink>
      </div>
    </div>
  ));

  const handleClick = () => {
    setVisibility((prev) => prev + 3);
  };

  return  (
    <Fragment>
      <div
        className="heading"
        style={{ background: "url(Assets/Images/Beach.jpg) no-repeat" }}
      >
        <h1>Packages</h1>
      </div>

      <section className="packages">
        <h1 className="heading-title">top destinations</h1>

        <div className="box-container">{elements}</div>

        <div className="load-more" onClick={handleClick}>
          <span className="btnnb">load more</span>
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="Assets/js/script.js"></script>
    </Fragment>
  );
}
export default Package;
