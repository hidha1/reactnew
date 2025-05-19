import { useContext } from "react";
import{AppContext} from '../context/AppContext';
function FormDetails() {
  const { formData } = useContext(AppContext);

  return (
    <div>
      <h2>Form Details</h2>
      {formData ? (
        <ul>
          <li>Name: {formData.name}</li>
          <li>Age: {formData.age}</li>
          <li>Address: {formData.address}</li>
          <li>Phone: {formData.phone}</li>
          <li>Email: {formData.email}</li>
          <li>Gender: {formData.gender}</li>
        </ul>
      ) : (
        <p>No data submitted.</p>
      )}
    </div>
  );
}

export default FormDetails;