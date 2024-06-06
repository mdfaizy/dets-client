import { useEffect, useState } from "react";
import axios from "axios";
// ../src/routes/newstudent/newadmission/NewAdmission"
import NewAdmission from "../routes/newstudent/newadmission/NewAdmission"; // Assuming NewAdmission component is in the same directory

function FetchUserData({ id }) {
    console.log("id",id)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/getsigin_By_Id/${id}`);
        console.log("response.data.data",response.data.data)
        setUserData(response.data.data);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  return <NewAdmission userData={userData} />;
}

export default FetchUserData;
