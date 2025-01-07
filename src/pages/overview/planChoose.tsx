import { AiOutlineCrown } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { PiArrowElbowUpRight } from 'react-icons/pi'

const PlanChoose = () => {
  return (
    <div className='flex justify-between items-center px-3 p-2 rounded-md bg-green-200 border-2 border-green-400'>
        <div className='flex'>
        <AiOutlineCrown />
        <p>Upgrade your plan to unlock advanced features</p>
        </div>
        <div className='flex '>
            <button><span>Select Plan</span> <PiArrowElbowUpRight /> </button>
            <button> <CgClose /> </button>
        </div>
    </div>
  )
}

export default PlanChoose