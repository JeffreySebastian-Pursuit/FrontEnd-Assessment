import React, { useState } from "react";

const StudentListsItem = ({ student, searchTag }) => {
  const [showText, setShowText] = useState(false);
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState([]);
  
  const { pic, firstName, lastName, email, grades, company, skill, id } = student;

  const findAverage = (grades) => {
    return grades.reduce((acc, el) => (acc += Number(el)), 0) / grades.length;
  };

  const handleTagOnChange = (e) => {
    setTag(e.target.value);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    setTagArray([...tagArray, tag]);
    setTag("");
  };

  return (
    <div className="student-row">
      <section className="image">
        <img src={pic} alt="studentPic" />
      </section>
      <section className="info">
        <div className="title-button-container">
          <h2>
            {firstName} {lastName}
          </h2>
          <button
            onClick={() => {
              setShowText((prevShowtext) => !prevShowtext);
            }}
          >
            {showText ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        <div className="student-info">
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {findAverage(grades)}%</p>
        </div>
        <div className="student-info grades-container">
          {showText
            ? grades.map((grade, index) => {
                return (
                  <div key={index} className="grades">
                    <p> Test {index + 1}:&emsp;&ensp;</p>
                    <p>{grade}%</p>
                  </div>
                );
              })
            : null}
        </div>
        <div className="tags">
          {tagArray.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </div>
        <form className="tag-input" id={id} onSubmit={handleTagSubmit}>
          <input
            type="text"
            value={tag}
            placeholder="Add a tag"
            onChange={handleTagOnChange}
          />
        </form>
      </section>
    </div>
  );
};

export default StudentListsItem;
