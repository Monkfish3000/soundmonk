import Card from './Card';

const CardShowcase = () => {
  return (
    <section className="my-3">
      <div className="flex justify-center flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardShowcase;
