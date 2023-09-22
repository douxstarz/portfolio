import { NavLink } from "react-router-dom";

function Home() {
  const handleMouseOver = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "https://maplestory.io/api/character/%7B%22itemId%22%3A2010%2C%22version%22%3A%22244%22%7D%2C%7B%22itemId%22%3A12010%2C%22version%22%3A%22244%22%7D%2C%7B%22itemId%22%3A51666%2C%22version%22%3A%22244%22%2C%22saturation%22%3A0.8%2C%22brightness%22%3A0.9%7D%2C%7B%22itemId%22%3A39210%2C%22version%22%3A%22244%22%7D%2C%7B%22itemId%22%3A1051693%2C%22version%22%3A%22244%22%7D%2C%7B%22itemId%22%3A1070098%2C%22version%22%3A%22244%22%2C%22hue%22%3A20%7D%2C%7B%22itemId%22%3A1001049%2C%22version%22%3A%22244%22%7D%2C%7B%22itemId%22%3A1012742%2C%22animationName%22%3A%22default%22%2C%22version%22%3A%22244%22%7D/alert/animated?showears=false&showLefEars=false&showHighLefEars=undefined&resize=3&name=&flipX=undefined&bgColor=0,0,0,0";
  };

  const handleMouseOut = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "https://i.pinimg.com/564x/ab/33/f3/ab33f3baf71c0b0f9aeea59dd87c887a.jpg";
  };
  return (
    <>
      <div className="flex justify-center items-center bg-neutral w-full h-full p-32">
        <div className="flex flex-col bg-white rounded-3xl shadow-2xl p-16 space-y-8 w-[50%]">
          <div className="flex flex-row justify-center space-x-16 items-center">
            <img
              className="w-48"
              src="https://i.pinimg.com/564x/ab/33/f3/ab33f3baf71c0b0f9aeea59dd87c887a.jpg"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="space-y-4 text-7xl font-semibold font-poppins">
              <h1>Hello!</h1>
              <h1>I'm Sophia</h1>
            </div>
          </div>

          <div className="flex flex-row space-x-4 justify-center font-unbounded items-center">
            <NavLink
              className="bg-[#f0f8ff] hover:underline rounded-3xl text-sm p-2 decoration-2"
              to="About"
            >
              ABOUT ME
            </NavLink>

            <img
              className="w-[25px]"
              src="https://i.pinimg.com/564x/42/ba/ff/42baff306fcb8178ace942f8e65c0505.jpg"
            />

            <NavLink
              className="bg-[#f0f8ff] hover:underline rounded-3xl text-sm p-2 decoration-2"
              to="Contact"
            >
              CONTACT ME
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
