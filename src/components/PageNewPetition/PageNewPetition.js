import ChoseCategories from "../ChoseCategories/ChoseCategories";
import classes from './PageNewPetition.module.css';
import React, {useState} from "react";
import FormNewPetition from "../FormNewPetition/FormNewPetition";

const PageNewPetition = ({poemsText}) => {

  const [showChoseCategories, setShowChoseCategories] = useState(true);
  const [showFormNewPetition, setShowFormNewPetition] = useState(false);
  const [showPreviewNewPetition, setShowPreviewNewPetition] = useState(false);
  const [dataForSend, setDataForSend] = useState({});

  const handleShowFormNewPetition = () => {
    setShowChoseCategories(false);
    setShowFormNewPetition(true);
  }

  const handleShowSelectCategory = () => {
    setShowChoseCategories(true);
    setShowFormNewPetition(false);
  }

  const handleShowPreviewNewPetition = () => {
    setShowFormNewPetition(false);
    setShowPreviewNewPetition(true);
  }

  const handleAddData = (data) => {
    setDataForSend(Object.assign(dataForSend, data));
  }

  return (
    <div className={classes.page}>
      {showChoseCategories &&
      <ChoseCategories onContinue={handleShowFormNewPetition} onAddData={handleAddData}/>}
      {showFormNewPetition && <FormNewPetition poemsText={poemsText} onBack={handleShowSelectCategory}
                                               onContinue={handleShowPreviewNewPetition} onAddData={handleAddData}/>}
    </div>
  );
}

export default PageNewPetition;
