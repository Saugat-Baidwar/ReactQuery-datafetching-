import { useQuery } from "@tanstack/react-query";

function Card() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh">
        website is loding....
      </div>
    );
  }

  if (isError) {
    console.log("error while fetching data");
    return <div>error is feteching</div>;
  }

  if (!data) {
    console.log("data is undefined or null");
    return <div> Data</div>;
  }
  console.log("data....", data);
  return (
    <div className="grid grid-cols-3 gap-12 m-4 bg-yellow-700  ">
      {data.map((item) => (
        <ul
          className="bg-yellow-900 hover:bg-green-400  text-white"
          key={item.id}
        >
          <li>{item.title}</li>
          <li>{item.price}</li>
          <li>{item.description}</li>
        </ul>
      ))}
    </div>
  );
}
export default Card;
