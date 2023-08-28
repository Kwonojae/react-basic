import New from "./New";
export default function Avatar({ image, isnew }) {
  return (
    <div className="abatar">
      <img className="photo" src={image} alt="avater" />
      {isnew && <New />}
    </div>
  );
}
