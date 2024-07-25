/* eslint-disable react/prop-types */
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import AddButton from '../AddButton/AddButton';
import './OtherServices.css';

function OtherServices({ handleOpenModal }) {
  return (
    <>
      <Title text="Autres prestations non comprises dans les rubriques ci-dessus :" />
      <Content>
        <div>
          <p className="subtitle">Elements ajoutés :</p>
          <AddButton
            handleOpenModal={handleOpenModal}
            text="Ajouter un élément"
          />
        </div>
      </Content>
    </>
  );
}

export default OtherServices;
