import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentListsItem from "./StudentListsItem";
const StudentLists = () => {
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchByTag, setSearchByTag] = useState("");

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await axios.get(
          "https://api.hatchways.io/assessment/students"
        );
        setStudents(res.data.students);
        console.log(res.data.students);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllStudents();
  }, []);

  return (
    <section className="students-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
      </div>

      <div className="search">
        <input
          value={searchByTag}
          type="text"
          placeholder="Search by tag"
          onChange={(e) => {
            setSearchByTag(e.target.value);
          }}
        />
      </div>
      {/* {tagArray.filter((tag) => {
        if (searchTag === "") {
          return tag;
        } else if (tag.toLowerCase().includes(searchTag.toLowerCase())) {
          return tag;
        }
      }).map(tag => {
          return <p>{tag}</p>
      })} */}
      {students
        // eslint-disable-next-line array-callback-return
        .filter((student) => {
          const fullName = student.firstName + student.lastName;
          if (searchName === "") {
            return student;
          } else if (
            fullName.toLowerCase().includes(searchName.toLowerCase())
          ) {
            return student;
          }
        })
        .map((student) => {
          return (
            <StudentListsItem
              key={student.id}
              student={student}
            //   searchTag={searchByTag}
            //   setSearchByTag ={setSea}
              //   tag={tag}
              //   setTag={setTag}
              //   tagArray={tagArray}
              //   setTagArray={setTagArray}
              //   updateTag={updateTag}
              // tagArray={tagArray}
              // setTagArray={}
              //   array={array}
            />
          );
        })}
    </section>
  );
};

export default StudentLists;
