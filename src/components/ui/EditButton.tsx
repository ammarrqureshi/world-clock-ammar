import editIcon from "../../assets/edit-icon-1.png";

export const EditButton = () => {
  return (
    <button className="max-w-6 p-2 box-content hover:bg-black/15 rounded-2xl br-sketch border-2 border-black ">
      <div>
        <img src={editIcon} alt="Edit" />
      </div>
    </button>
  );
};
