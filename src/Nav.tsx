import React from "react";

interface Props {
  data: Experiences[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const Nav = ({ data, active, setActive }: Props) => {
  console.log(active);
  return (
    <div className="btn-container">
      {data.map((item, index) => {
        return (
          <button
            key={item.id}
            className={`job-btn ${index === active && "active-btn"}`}
            onClick={() => setActive(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
