import Avatar from "./Avatar";

export default function Profile({ image, name, title, isnew }) {
  return (
    <div className="profile">
      <Avatar image={image} isnew={isnew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
