export const PortfolioItemPage = ({ props }) => {
  return (
    <>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <img src={props.imageUrl} width="250px" height="250px" />
    </>
  );
};
