"use client";

import { useRouter } from "next/navigation";
import {
    ArrowDownFromLineIcon,
    ArrowUpFromLineIcon,
    AlignStartVerticalIcon,
} from "lucide-react";
import { useQuery } from "react-query";
import { useState } from "react";
import BarChart from "@/components/chart";
import { CashFlowService } from "@/app/(cash)/(routes)/cash/services/cashService";

const HomePage = () => {
    const router = useRouter();
    const [totalCountIn, setTotalCountIn] = useState(0);
    const [totalCountOu, setTotalCountOu] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const { isLoading } = useQuery(
        "cash-flow",
        () => {
            return CashFlowService.getTotal().then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    setTotalCountIn(result.data.sum);
                    setTotalCountOu(result.data.min);
                    setTotalCount(result.data.total);
                }
            });
        },
        {
            retry: 5,
            refetchInterval: 100000,
        },
    );

    if (isLoading) {
        return (
            <div className="text-muted-foreground font-light text-sm md:text-lg text-center">
                <strong>Carregando...</strong>
            </div>
        );
    }

    function numberFormarIntl(valor: number) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(valor);
    }

    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Fluxo de caixa
                </h2>
            </div>

            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                <div className="flex flex-row gap-x-4 ...">
                    <div
                        onClick={() => router.push("/cash")}
                        key="entry"
                        className="p-4 border-black/5 border-r-4 ring-1 rounded-lg flex items-center justify-between hover:shadow-md transition cursor-pointer"
                        id="entry"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-violet-500/10">
                                <ArrowDownFromLineIcon className="w-8 h-8 text-green-700" />
                            </div>
                            <div className="flex flex-col ...">
                                <div className="font-semibold">
                                    Entrada:{" "}
                                    <label className="text-neutral-500">
                                        {numberFormarIntl(totalCountIn)}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => router.push("/cash")}
                        key="exit"
                        className="p-4 border-black/5 border-r-4 ring-1 rounded-lg flex items-center justify-between hover:shadow-md transition cursor-pointer"
                        id="exit"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-violet-500/10">
                                <ArrowUpFromLineIcon className="w-8 h-8 text-red-700" />
                            </div>
                            <div className="flex flex-col ...">
                                <div className="font-semibold">
                                    Saída:{" "}
                                    <label className="text-neutral-500">
                                        {numberFormarIntl(totalCountOu)}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => router.push("/cash")}
                        key="exit"
                        className="p-4 border-black/5 border-r-4 ring-1 rounded-lg flex items-center justify-between hover:shadow-md transition cursor-pointer"
                        id="exit"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-violet-500/10">
                                <AlignStartVerticalIcon className="w-8 h-8 text-violet-500" />
                            </div>
                            <div className="flex flex-col ...">
                                <div className="font-semibold">
                                    Total:{" "}
                                    <label className="text-neutral-500">
                                        {numberFormarIntl(totalCount)}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BarChart />
            </div>
        </div>
    );
};

export default HomePage;
