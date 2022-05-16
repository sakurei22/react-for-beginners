import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, year, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img alt={title} src={coverImg} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>
        {summary !== undefined
          ? summary.length > 235
            ? `${summary.slice(0, 235)}...`
            : summary
          : null}
      </p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
