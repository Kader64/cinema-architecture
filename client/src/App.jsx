import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://localhost:7261/api/test");
        
        if (!response.ok) {
          throw new Error(`Błąd HTTP! Stan: ${response.status}`);
        }

        const result = await response.json();
        console.log("Pobrane dane:", result);
        setData(result);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    getData();
  }, []);

  return <div>Hello Cinema App! {data && JSON.stringify(data)}</div>;
}

export default App;