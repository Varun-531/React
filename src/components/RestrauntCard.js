import { Img_Url } from "../config";

const RestrauntCard = ({ name, cuisines, avgRatingString, cloudinaryImageId }) => {
    return (
        <div className='card p-10 m-4 border-black w-96 flex flex-col h-80 rounded-md bg-pink-100 shadow-lg justify-center text-center items-center'>
            <div className="imageholder">
                <img src={Img_Url+ cloudinaryImageId} alt="burger" className="h-52 w-52 rounded-sm py-1" />
            </div>
            <h2 className="font-bold">{name}</h2>
            <div className="cusholder">
                <h3>{cuisines.join(',')}</h3>
            </div>

            <h4>{avgRatingString}⭐</h4>
        </div>
    );
};

export default RestrauntCard;