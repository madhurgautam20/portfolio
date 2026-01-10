import project1 from "../../public/database.png";
import project2 from "../../public/reactjs.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: project1,
      name: "UserAuth",
      sourceLink: "https://github.com/madhurgautam20/PROJECT-1.git", // Add your specific link
    },
    {
      id: 2,
      logo: project2,
      name: "Resume Builder",
      sourceLink: "https://github.com/madhurgautam20/resume.git", // Add your specific link
    },
    {
      id: 3,
      logo: project2,
      name: "soon...",
      sourceLink: "https://github.com/yourusername/node-project", // Add your specific link
    },
    {
      id: 4,
      logo: project2,
      name: "soon...",
      sourceLink: "https://github.com/yourusername/html-project", // Add your specific link
    },

    {
      id: 5,
      logo: project2,
      name: "soon...",
      sourceLink: "https://github.com/yourusername/html-project", // Add your specific link
    },

    {
      id: 6,
      logo: project2,
      name: "soon...",
      sourceLink: "https://github.com/yourusername/html-project", // Add your specific link
    },
  ];

  return (
    <div name="Projects">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
          <span className="underline font-semibold text-xl">
            Featured Project
          </span>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
            {cardItem.map(({ id, logo, name, sourceLink }) => (
              <div
                className="w-full h-full border-[2px] rounded-lg shadow-lg p-1 cursor-pointer "
                key={id}
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                />
                <div className="text-center">
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    View Source Code on GitHub.
                  </p>
                </div>
                <div className="flex justify-around px-6 py-4 space-x-4">
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded hover:scale-110 duration-300">
                      Sourcecode
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
