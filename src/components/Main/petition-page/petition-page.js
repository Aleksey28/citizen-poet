import './petition-page.css';
import Petition from './__petition/petition-page__petition';
import Legend from './__legend/petition-page__legend';

const PetitionPage = () => {
  return (
    <div className="petition-page">
      <Petition />
      <Legend />
    </div>
  );
}

export default PetitionPage;