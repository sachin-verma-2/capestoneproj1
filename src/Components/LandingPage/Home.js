import Categories from "./Category"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Search from "./Search"
import Slider from "./Slider"
function Home(){
    return(
        <>
      <NavBar></NavBar>
      <Slider></Slider>
      <Categories></Categories>
      <Search></Search>
       <Footer></Footer>
      </>
    )
}
export default Home