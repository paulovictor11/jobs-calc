import cx from "classnames";
import Image from "next/image";

type ButtonProps = {
    label: string;
    icon?: string;
    color: "success" | "warning" | "danger" | "normal";
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, icon, color, onClick }) => {
    return (
        <button
            className={cx(
                "rounded uppercase transition-colors py-3 px-12 font-bold text-sm",
                {
                    "bg-warning-500 hover:bg-warning-300 text-normal-100":
                        color === "warning",
                    "bg-success-500 hover:bg-success-300 text-normal-100":
                        color === "success",
                    "bg-danger-500 hover:bg-danger-300 text-normal-100":
                        color === "danger",
                    "bg-normal-500 hover:bg-normal-300 text-normal-700":
                        color === "normal",
                    "pl-3 pr-8": icon,
                }
            )}
            onClick={onClick}
        >
            <span className="flex items-center gap-8">
                {icon && (
                    <div className="h-8 w-8 rounded bg-white/[.16] flex items-center justify-center">
                        <Image
                            src={icon}
                            alt="Icon svg"
                            width="24px"
                            height="24px"
                        />
                    </div>
                )}
                {label}
            </span>
        </button>
    );
};

export default Button;
