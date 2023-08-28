// import { useReducer, useState } from "react";
import { memo, useCallback, useMemo, useReducer } from "react";
import personReducer from "./reducer/person.reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  // 로직, 초기값;
  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꿀거야`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`멘토이름은?`);
    const title = prompt(`직급은?`);
    dispatch({ type: "added", name, title });
  }, []);
  const handleDelte = useCallback(() => {
    const name = prompt(`누구 삭제할레`);
    dispatch({ type: "deleted", name });
  }, []);
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
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate}>
        멘토의 이름을 바꾸자
      </Button>
      <Button text="추가하기" onClick={handleAdd}>
        추가
      </Button>
      <Button text="삭제" onClick={handleDelte}>
        삭제
      </Button>
    </div>
  );
}
const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering");
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});
Button.displayName = "Button";

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("🐶");
  }
  return 10;
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
