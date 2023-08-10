import TrendingList from "components/TrendingList";

const Home = () =>{
     //   useEffect(() => {
     //      HTTP request make, if you need
     //   }, [])
     
          return <div>
                   <h1>Trending today</h1>
                   <TrendingList />
                 </div>
     };
     
     export default Home;