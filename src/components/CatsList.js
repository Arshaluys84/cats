export const CatsList = ({ image }) => {
  return (
    <>
      <div className="images">
        <img src={`${image}`} alt={`${image}`} />
      </div>
    </>
  );
};
