import s from './CatsList.module.css'

export const CatsList = ({ image }) => {
  return (
    <>
      <div className={s.images}>
        <img src={`${image}`} alt={`${image}`} />
      </div>
    </>
  );
};
