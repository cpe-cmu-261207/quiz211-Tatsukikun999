function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Traiphob 620610788",
      gender: "male",
      age: "21"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>
      {/* Convert me to a component! */}
      {persons.forEach(function (name, gender, age) {
        console.log(name, gender, age);
      })}
      ;
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <button>-</button>
      <button>reset</button>
      <button>+</button>
    </div>
  );
}

export default App;
