import "./App.css";
import { Carousel } from "./lib";

function App() {
  const data = [
    {
      image:
        "https://img3.stockfresh.com/files/c/coramax/m/14/7539324_stock-photo-number-1.jpg",
      caption: "<div> Number 1 </div>",
    },
    {
      image:
        "https://cdn.w600.comps.canstockphoto.com/3d-human-charcter-holding-number-two-drawings_csp7753069.jpg",
      caption: "<div>Number 2</div>",
    },
    {
      image:
        "https://static8.depositphotos.com/1186701/1037/i/950/depositphotos_10377379-stock-photo-3d-human-character-holding-black.jpg",
      caption: "<div>Number 3</div>",
    },
    {
      image:
        "https://cdn.w600.comps.canstockphoto.com/3d-human-charcter-holding-number-four-drawings_csp7753073.jpg",
      caption: "<div>Number 4</div>",
    },
    {
      image:
        "https://i.gifer.com/7G0U.gif",
      caption: "<div>Number 5</div>",
    },
    {
      image:
        "https://thispersondoesnotexist.com/image",
      caption: "<div>Random Person</div>",
    },
    {
      image:
        "https://thispersondoesnotexist.com/image",
      caption: "<div>Random Person</div>",
    },
    {
      image:
        "https://thispersondoesnotexist.com/image",
      caption: "<div>Random Person</div>",
    },
    {
      image:
        "https://thispersondoesnotexist.com/image",
      caption: "<div>Random Person</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
