import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Card
        name="Tom"
        phone="11222"
        email="email@gmail.com"
        image={{
          url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
          alt: "cute cat",
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
