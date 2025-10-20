
import headerLogo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-2 py-7'>
            <img src={headerLogo} alt="" />
            <p className='font-normal text-base text-[#706F6F] '>Journalism Without Fear or Favour</p>
            <p className='text-l'><span className='font-semibold'>{format(new Date(), 'EEEE')},</span> {format(new Date(), 'MMMM d, yyyy')} </p>

        </div>
    );
};

export default Header;