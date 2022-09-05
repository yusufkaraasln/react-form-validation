import React from "react";
import "./form.css"
function FormInput(props) {

  const { label,error, onChange, id, ...inputProps } = props;
    
 const [focused, setFocused] = React.useState(false);

 const handleBlur = (e) => {
    setFocused(true);
    };


  return (
    <div className="form-inputs">

      <label>{label}</label>

      <input {...inputProps} onChange={onChange}  onBlur={handleBlur} 
      
      
      onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
      focused={focused.toString()}
      
      />
      <span>{error}</span>
    </div>
  );
}

export default FormInput;
