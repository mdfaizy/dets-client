import axios from 'axios';

export const getAllNewStudent = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/student/get_new_admission');
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error('Failed to fetch admission data');
    }
  } catch (error) {
    throw new Error(`Error fetching admission data: ${error.message}`);
  }
};





export const deleteNewAdmission = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/student/delete_newadmission/${id}`);
      if (response.data.success) {
        return true;
      } else {
        throw new Error('Failed to delete admission');
      }
    } catch (error) {
      throw new Error(`Error deleting admission: ${error.message}`);
    }
  };


//   const handleDelete = async (id, index) => {
//     try {
//       const responseDelete = await axios.delete(
//         `http://localhost:8000/api/v1/student/delete_newadmission/${id}`
//       );
//       console.log("responseDelete", responseDelete);
//       const updatedFormData = [...formData];
//       updatedFormData.splice(index, 1);
//       setFormData(updatedFormData);
//     } catch (error) {
//       console.log("Error deleting item:", error);
//     }
//   };







// export const updatenewStudent = (index) => {
//     setIsEditing(true);
//     setClickedIndex(index);
//     const inputFields = [
//       'firstName',
//       'lastName',
//       'fatherName',
//       'motherName',
//       'stream',
//       'email',
//       'date_of_birth',
//       'examType',
//       'category',
//       'application_exam_no',
//       'scoure_rank',
//       'cource_name',
//       'phone_no',
//       'schoolName_10th',
//     ];
  
//     const editFormData = inputFields.reduce((formData, field) => {
//       formData[field] = formData[index][field];
//       return formData;
//     }, {});
    
//     setEditFormData(editFormData);
//   };
  