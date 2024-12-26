const ContentSub = ({ isActive ,title, desc, price ,nameBtn, headtitle, list}) => {
  return (
    <div className={`content-sub-${isActive ? "active" : ""}`}>
      <h1 className={`title-${isActive ? "active" : ""}`}>{title}</h1>
      <p className={`desc-${isActive ? "active" : ""}`}>{desc}</p>
      <span className={`price-${isActive ? "active" : ""}`}>{price}</span>
      <button className={`btn-${isActive ? "active" : ""}`}>{nameBtn} &#62;</button>
      <span className={`headtitle-${isActive ? "active" : ""}`}>{headtitle}</span>
      <ol className="custom-list">
        {list.map((item, index) => (
          <li key={index}>
            <img src="/success.png" alt="icon" />
            {item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ContentSub;
