import StarRatings from "react-star-ratings/build/star-ratings";

const Stars = ({vote_average}) => {

    const count = vote_average / 2;

    return (
        <div>
            {vote_average &&
                <StarRatings numberOfStars={5} rating={count} starRatedColor={"red"} starEmptyColor={'grey'} name={'rating'} starDimension={"10px"} starSpacing={'10px'}/>}
        </div>
    );
};

export {Stars};