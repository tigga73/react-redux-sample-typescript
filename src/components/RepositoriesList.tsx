import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(actionCreator.searchRepositorie(term) as any);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
