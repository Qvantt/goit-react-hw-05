export default function MovieReviewList({ reviews }) {
  return (
    <>
      {reviews.length === 0 && (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
