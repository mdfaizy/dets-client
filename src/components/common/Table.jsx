
export default function Tab({ tabData, field, setField }) {
  // Filter tab data based on the field value
  const filteredTabData = tabData.filter(tab => {
    if (field === 'teacher-account') {
      return tab.accountType === 'teacher';
    } else if (field === 'signupfrom') {
      return tab.accountType === 'Student';
    }
    return true; 
  });

  return (
    <div
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
    >
      {filteredTabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  );
}
