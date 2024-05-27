import AccountTypeStudent from "../../core/Auth/Student/Student";
import AccountTypeTeacher from "../../core/Auth/Teacher/Teacher";

const Acoount = () => {
  return (
    <div>
      <div>
        <AccountTypeTeacher />
      </div>
      <div>
        <AccountTypeStudent />
      </div>
    </div>
  );
};

export default Acoount;
