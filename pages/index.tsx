import type { NextPage } from "next";
import Button from "../src/components/Button";
import Navbar from "../src/components/Navbar";

type DataInfoProps = {
    title: string;
    subtitle: string;
};

const Home: NextPage = () => {
    const DataInfo = ({ title, subtitle }: DataInfoProps) => {
        return (
            <div className="h-14 flex flex-col justify-between">
                <span className="font-bold text-2xl leading-[26px] text-normal-100">
                    {title}
                </span>
                <span className="font-normal text-base leading-[26px] text-normal-600">
                    {subtitle}
                </span>
            </div>
        );
    };

    return (
        <div className="h-72 w-full bg-normal-900">
            <Navbar />

            <div className="flex items-center justify-between mt-8 mx-40">
                <div className="flex items-center gap-10">
                    <DataInfo title="12" subtitle="Projetos ao total" />
                    <DataInfo title="7" subtitle="Em andamento" />
                    <DataInfo title="4" subtitle="Encerrados" />
                </div>

                <Button
                    label="Adicionar novo job"
                    icon="/images/plus.svg"
                    color="warning"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
};

export default Home;
