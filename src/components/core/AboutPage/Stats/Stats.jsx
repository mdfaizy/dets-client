
const Stats = [
    {count: "200+", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "5+", label: "Courses"},
    {count: "20+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section className="bg-gray text-white py-2" style={{backgroundColor:'#C7C8CC',height:'auto'}}>
      <div className="container">
        <div className="row text-center">
          {Stats.map((data, index) => (
            <div key={index} className="col-6 col-md-3 mb-2">
              <div>
                <h1 className="display-4 text-2xl" style={{font:'bold'}}>{data.count}</h1>
                <h2>{data.label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsComponent;
