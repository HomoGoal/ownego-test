const Checkbox = ({ data, checked, handleSetFilter }) => {
  return (
    <button className="checkbox" onClick={() => handleSetFilter(data)}>
      <div className={`checkbox__select ${checked && 'active'}`}>
        <span></span>
      </div>
      <p>{data}</p>
    </button>
  );
};

export default Checkbox;
