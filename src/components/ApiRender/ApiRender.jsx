import { useEffect, useState } from "react";

export default function ApiRender() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-render-nkto.onrender.com/api')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  })
  return (
    <div>
      <h1>ApiRender</h1>
      {data && (
        <ul>
          <li>Nombre: {data.nombre}</li>
          <li>Email: {data.email}</li>
        </ul>
      )}
    </div>
  );
}