import Carousel from 'better-react-carousel'
function Slider(){

    return(
        <div>
            <Carousel cols={1} rows={1} gap={5} loop>
      <Carousel.Item>
        <img width="102%" height="500" src="https://st2.depositphotos.com/3591429/7712/i/600/depositphotos_77127743-stock-photo-job-search-qualification-concept.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="102%" height="500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTFGiMihy0IHY8B4F2ILWrr7-GdwaILfs1jXzFRr1oEtwaW-yzfxBMcQi9ND6SunyGzo&usqp=CAU" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="102%" height="500"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsMH4UfNE9SlvygNdxezLPaZ3LTC0nca4UBkT9aY1kshAkvr5RDdmJ6MZrieCBeyZL20&usqp=CAU" />
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
export default Slider