import PropTypes from 'prop-types';

const List = ({ items, style }) => {
  return (
    <>
      <ul className="flex space-x-4 m-4">
        {items.map((item, idx) => (
          <li key={idx}>
            <div className={style}>{item}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  style: PropTypes.string.isRequired,
};

export default List;
