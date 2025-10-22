import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="ml-5">
            <div>
                <h2 className="font-bold mb-5">Login With</h2>
                {/* Google */}
                <button className="btn bg-white text-black border-black mb-3">
                    <FcGoogle size={24} />  Login with Google
                </button>
                {/* GitHub */}
                <button className="btn text-black  border-black">

                    <IoLogoGithub size={24} />  Login with GitHub
                </button>
            </div>

            <div>
                <h2 className="font-semibold text-2xl my-4">Find Us On</h2>

                <h1 className="border rounded-t-md text-xl flex items-center gap-x-4 p-3 text-[#706F6F]">
                    <FaFacebook />
                    <a
                        href="https://www.facebook.com/nazmul5676/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                </h1>

                <h1 className="border-l border-r text-xl flex items-center gap-x-4 p-3 text-[#706F6F]">
                    <FaTwitter />
                    <a
                        href="https://x.com/hridoyn61"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                </h1>

                <h1 className="border rounded-b-md text-xl flex items-center gap-x-4 p-3 text-[#706F6F]">
                    <FaInstagramSquare />
                    <a
                        href="https://www.instagram.com/nazmul5675/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </h1>
            </div>

        </div>
    );
};

export default SocialLogin;