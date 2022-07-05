import LeftLeaf from "../LeftLeaf"
import RightLeaf from "../RightLeaf"

interface RowTitleProps {
    title: string;
}

function RowTitle({title}: RowTitleProps) {
    return (
        <div className='flex justify-center mt-20'>
            <div className='flex items-center'>
                <div className='hidden md:inline'>
                <LeftLeaf />
                </div>
                <h1 className='text-h3 font-bold text-rosa-200 font-montserrat mx-12'>{title}</h1>
                <div className='hidden md:inline'>
                <RightLeaf />
                </div>
            </div>
        </div>
    )
}

export default RowTitle