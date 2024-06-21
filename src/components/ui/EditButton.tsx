import editIcon from "../../assets/edit-icon-1.png";

export const EditButton = () => {
  return (
    <button className="max-w-6 p-2 box-content hover:bg-black/15">
      <div>
        <img src={editIcon} alt="Edit" />
      </div>
    </button>
  );
};
