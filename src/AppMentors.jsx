// import { useReducer, useState } from "react";
import { useReducer } from "react";
import personReducer from "./reducer/person.reducer";

export default function AppMentors() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  // 로직, 초기값;
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꿀거야`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`멘토이름은?`);
    const title = prompt(`직급은?`);
    dispatch({ type: "added", name, title });
  };
  const handleDelte = () => {
    const name = prompt(`누구 삭제할레`);
    dispatch({ type: "deleted", name });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸자</button>
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleDelte}>삭제</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
