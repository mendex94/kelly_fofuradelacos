import LeftLeaf from "../LeftLeaf"
import RightLeaf from "../RightLeaf"

function RowTitle() {
    return (
        <div className='flex justify-center'>
            <div className='flex items-center'>
                <LeftLeaf />
                <h1 className='text-h1 text-rosa-200 font-fiona mx-12'>Laços</h1>
                <RightLeaf />
            </div>
        </div>
    )
}

export default RowTitle