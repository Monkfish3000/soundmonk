import iPhone from '../assets/images/iPhone.jpeg';

const Card = () => {
  return (
    <div>
      <div className="max-w-sm border-2 border-opacity-10 border-custom-green rounded p-3 bg-custom-purple-medium m-4 shadow-2xl">
        <img
          className="rounded m-auto border border-custom-purple-medium shadow-2xl"
          src={iPhone}
          alt="iPhone"
        />
        <h1 className="text-2xl my-5">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          tempora?{' '}
        </p>
      </div>
    </div>
  );
};

export default Card;
