"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import TablePage from "@/components/table";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { ModalData, useModal } from "@/components/hooks/use-modal-store";
import { routes } from "@/app/constants";
import { CashFlowService } from "./services/cashService";
import { ICashFlowProps } from "./interfaces/iCashFlow.interface";

type TPageProps = {
    searchParams?: { page?: string; limit?: string };
};

const validatePage = (page: string | undefined): number => {
    if (!page || 0) {
        return 0;
    }
    if (Number(page) === 1) {
        return 0;
    }
    if (Number(page) === 2) {
        return 10;
    }
    if (Number(page) === 3) {
        return 20;
    }
    if (Number(page) === 4) {
        return 30;
    }
    if (Number(page) === 5) {
        return 40;
    }
    return 0;
};

const TaskPage = ({ searchParams }: TPageProps) => {
    const page = validatePage(searchParams?.page);
    const limit = Number(searchParams?.limit) || 10;

    const { onOpen } = useModal();
    const [totalCount, setTotalCount] = useState(0);
    const [rows, setRows] = useState<ICashFlowProps[]>([]);

    const { isLoading, refetch } = useQuery(
        "cash-flow",
        () => {
            return CashFlowService.getAll("", "", "", page, limit).then(
                (result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setTotalCount(result.totalCount);
                        setRows(result.data);
                    }
                },
            );
        },
        {
            retry: 5,
            refetchInterval: 100000,
        },
    );

    if (isLoading) {
        return <div className="loading">Carregando...</div>;
    }

    /**
     * Handle delete item
     * @param id
     */
    const handleDelete = (id: number | undefined) => {
        if (confirm("Realmente deseja apagar?")) {
            CashFlowService.deleteById(id).then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    setRows((oldRows) => [
                        ...oldRows.filter((oldRow) => oldRow.id !== id),
                    ]);
                    setTotalCount(rows.length);
                    refetch();
                }
            });
        }
    };

    /**
     * Edit task modal dialog
     */
    function handleEdit(cash: ICashFlowProps) {
        const cashValue: ModalData = {
            server: cash,
        };
        onOpen("editCash", cashValue);
    }

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
                <Sidebar routes={routes} />
            </div>
            <main className="md:pl-72 pb-10">
                <Navbar />
                <TablePage
                    rows={rows}
                    setRows={setRows}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    totalCount={totalCount}
                    page={page}
                    limit={limit}
                />
            </main>
        </div>
    );
};

export default TaskPage;
