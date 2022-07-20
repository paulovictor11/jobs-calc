import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <nav className="h-[104px] flex items-center justify-between mx-40 border-b-[1.5px] border-normal-800">
            <Image
                src="/images/JobsCalc.svg"
                alt="Jobs Calc Logo"
                width="208px"
                height="48px"
            />

            <div className="flex items-center">
                <Image
                    src="/images/alert-octagon.svg"
                    alt="Jobs Calc Logo"
                    width="20px"
                    height="20px"
                />

                <span className="font-medium text-base leading-[26px] text-normal-100 ml-2">
                    Você tem 2 horas livres no seu dia
                </span>
            </div>

            <div className="flex items-center">
                <div className="flex flex-col mr-5">
                    <span className="font-semibold text-xl leading-[30px] text-normal-100 text-right">
                        Paulo Victor
                    </span>
                    <span className="font-normal text-sm leading-6 text-normal-600 text-right hover:cursor-pointer hover:text-warning-500 hover:underline transition-colors">
                        Ver perfil
                    </span>
                </div>

                <div className="h-16 w-16 rounded-full border-[2.5px] border-warning-500">
                    <Image
                        width="64px"
                        height="64px"
                        src="https://github.com/paulovictor11.png"
                        alt="User profile picture"
                        className="rounded-full"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
