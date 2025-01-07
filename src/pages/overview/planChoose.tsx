import { AiOutlineCrown } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { FiArrowUpRight } from 'react-icons/fi'

const PlanChoose = () => {
  return (
    <div className='flex justify-between items-center px-3 p-2 rounded-md bg-green-100 border-2 border-green-300'>
        <div className='flex justify-center items-center space-x-1'>
        <AiOutlineCrown size={30} color='purple'/>
        <p className='text-lg'>Upgrade your plan to unlock advanced features</p>
        </div>
        <div className='flex space-x-3'>
            <button className='flex space-x-1 border-2 shadow-sm border-gray-300 bg-white py-1 px-2 rounded-md justify-center items-center'><span className='text-sm'>Select Plan</span> <FiArrowUpRight /> </button>
            <button> <CgClose size={20}/> </button>
        </div>
    </div>
  )
}

export default PlanChoose