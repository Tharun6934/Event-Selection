import { useEffect } from "react";

const events = [
  {
    image:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Virupaksha-Temple.jpg",
    Festival: "Kumbh Mela",
    title: " Uttarakhand, India",
  },
  {
    image:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Sree-Padmanabhaswamy-Temple.jpg",
    Festival: "Puthanaikkal Kalavela",
    title: "Karnataka, India",
  },
  {
    image:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Tirupati-Balaji.jpg",
    title: "Andhra Pradesh, India",
    Festival: "Shivam",
  },
  {
    image:
      "https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Rameshwaram-Temple.jpg",
    title: "Tamil Nadu, India",
    Festival: "Janapada Kolatam",
  },
];

function Festival({ isselected, setisSelected }) {
  useEffect(() => {
    console.log(isselected);
  }, [isselected]);
  return (
    <div className="flexcontainer">
      <div className="gridcontainer">
        {events.map((occasion, index) => {
          return (
            <div>
              <div className="imgtransform">
                <img
                  src={occasion.image}
                  className="img"
                  onClick={() => {
                    setisSelected(index);
                  }}
                  // onClick={() => {
                  //   setisSelected(index);
                  //   console.log(isselected);
                  // }}
                />
              </div>
              <h3 className="festival">{occasion.Festival}</h3>
              <p className="title">{occasion.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Festival;
