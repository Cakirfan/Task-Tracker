import { useState } from "react";

const GorevEkle = ({ addGorev }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== " " && day.trim() !== "") {
      addGorev({ text, day });
      setText("");
      setDay("");
    }
  };


  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          {toggle ? <span className="red">HIDDEN ADD TASK BAR</span> : <span className="green">SHOW ADD TASK BAR</span>  }
        </button>
      </header>
      {toggle && (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              value={text}
              placeholder="Add Task"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              value={day}
              placeholder="Add Task"
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <button className="btn btn-submit" type="submit">
            SUBMİT
          </button>
        </form>
      )}
    </div>
  );
};

export default GorevEkle;
