const NavBar = ({ handleNext, handlePrevious, showPrevious, showNext }) => {
  return (
    <nav>
      {showNext && <button onClick={handleNext}>Suivant</button>}
      {showPrevious && <button onClick={handlePrevious}>Précédent</button>}
    </nav>
  );
};

export default NavBar;
