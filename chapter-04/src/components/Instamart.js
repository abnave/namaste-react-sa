import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
const Section = ({
  title,
  description,
  isVisible,
  setVisible,
  setInVisible,
}) => {
  return (
    <div className="border border-black p-2 m-2">
      <h2 className="font-bold text-xl">{title}</h2>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setInVisible()}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setVisible()}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="">
      <input
        value={user.name}
        onChange={(e) => {
          setUser({name : e.target.value, email: user.email});
        }}
      ></input>
      <input
        value={user.email}
        onChange={(e) => {
          setUser({name : user.name ,email : e.target.value});
        }}
      ></input>
      <h2 className="text-lg">This is Instamart</h2>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        setVisible={() => setVisibleSection("about")}
        setInVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "team"}
        setVisible={() => setVisibleSection("team")}
        setInVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Career @ Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "career"}
        setVisible={() => setVisibleSection("career")}
        setInVisible={() => setVisibleSection("")}
      />
    </div>
  );
};

export default Instamart;
