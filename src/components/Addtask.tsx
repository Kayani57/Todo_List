import React, { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";




const AddTask: React.FC = () => {
 
 
  return (
    <div className="flex flex-col items-center">
      

      <Form />
      <List />
     

    </div>
  );
};

export default AddTask;
