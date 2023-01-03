import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
      </div>
      <button onClick={() => navigate(-1)} className="page-not-found__link">Назад</button>
    </div>
  );
};

export default PageNotFound;
