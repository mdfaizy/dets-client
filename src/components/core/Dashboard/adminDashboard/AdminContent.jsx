import ViewAllShortInfoStudent from "./ViewAllShortInfoStudent"
import Report from "../../ReportPage/ReportPageLink/Report"
import NewStudentTable from "../../Dashboard/newStudentTable/NewStudentTable"
import ExitStudentTableData from "../exitStudentTable/ExitStudentTableData"
import PgStudentDataTable from "../PgStudentDataTable/PgStudentDataTable"
import JobDataTable from "../JobTableData/JobDataTable"
import AllUserInfo from "./AllUserInfo"
const AdminContent = () => {
  return (
    <div className="p-4">

      <ViewAllShortInfoStudent/>
      <NewStudentTable/>

      <ExitStudentTableData/>
      <PgStudentDataTable/>
      <JobDataTable/>
      <Report/>

      <AllUserInfo/>
    </div>
  )
}

export default AdminContent
