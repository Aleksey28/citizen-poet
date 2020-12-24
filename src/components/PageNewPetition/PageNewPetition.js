import ChoseCategories from "../ChoseCategories/ChoseCategories";
import FormNewPetition from "../FormNewPetition/FormNewPetition";
import PreviewNewPetition from "../PreviewNewPetition/PreviewNewPetition";
import classes from './PageNewPetition.module.css';
import React, {useState} from "react";

const PageNewPetition = ({poemsText}) => {

  const [showChoseCategories, setShowChoseCategories] = useState(true);
  const [showFormNewPetition, setShowFormNewPetition] = useState(false);
  const [showPreviewNewPetition, setShowPreviewNewPetition] = useState(false);
  const [dataForSend, setDataForSend] = useState({});

  const handleShowSelectCategory = () => {
    setShowChoseCategories(true);
    setShowFormNewPetition(false);
  }

  const handleShowFormNewPetition = () => {
    setShowChoseCategories(false);
    setShowFormNewPetition(true);
    setShowPreviewNewPetition(false);
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
      {showFormNewPetition &&
      <FormNewPetition poemsText={poemsText} defaultValue={dataForSend} onBack={handleShowSelectCategory}
                       onContinue={handleShowPreviewNewPetition} onAddData={handleAddData}/>}
      {showPreviewNewPetition &&
      <PreviewNewPetition data={dataForSend} onBack={handleShowFormNewPetition}/>
      }
    </div>
  );
}

export default PageNewPetition;
