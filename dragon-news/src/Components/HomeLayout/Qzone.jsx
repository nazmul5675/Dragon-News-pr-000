import swim from '../../assets/swimming.png'
import class1 from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const Qzone = () => {
    return (
        <div className='bg-gray-100 p-3 rounded-md mt-5 ml-5'>
            <h2 className='font-semibold text-2xl '>Q-Zone</h2>
            <img className='mb-3' src={swim} alt="" />
            <img className='mb-3' src={class1} alt="" />
            <img className='mb-3' src={playGround} alt="" />
            <img className='mb-3' src={bg} alt="" />
        </div>
    );
};

export default Qzone;