const routes = [
 {
   id:1,
   start:"Main Gate",
   end:"Hostel A",
   distance:"12 KM"
 }
];

export default function Routes() {

 return(
  <div className="p-6">

   <h1 className="text-2xl font-bold">
    Bus Routes
   </h1>

   <table className="w-full mt-5">

    <thead>
      <tr>
       <th>Start</th>
       <th>End</th>
       <th>Distance</th>
      </tr>
    </thead>

    <tbody>

      {routes.map(route=>(
       <tr key={route.id}>
        <td>{route.start}</td>
        <td>{route.end}</td>
        <td>{route.distance}</td>
       </tr>
      ))}

    </tbody>

   </table>

  </div>
 )
}