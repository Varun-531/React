import Card from "./Card";
const Shimmer = () => {
    return (<>
    <div className='py-5 px-5'>
            <input
                type='text'
                className='search-input bg-grey-200 mx-4 px-3 rounded-md h-7 text-black focus:bg-green-50'
                placeholder='Search' />
            <button className="bg-black w-14 h-8 rounded-md hover:bg-white hover:text-black hover:border-2px text-center text-white">Search</button>
        </div>
        <div className="flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>   
    </>)

};
export default Shimmer;