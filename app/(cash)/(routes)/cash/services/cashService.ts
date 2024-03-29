import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ApiServiceFactory } from "@/components/axios/axios-config";
import { ICashFlowProps } from "../interfaces/iCashFlow.interface";

export type TTasksWithTotalCount = {
    data: ICashFlowProps[];
    totalCount: number;
};

export type directionOfSort = "ASC" | "DESC" | undefined;

/**
 * Handle api errors
 * @param error
 */
export const HandleApiErrors = (error: any, message: string) => {
    if (error && error.response && error.response.data) {
        switch (error.response.data.statusCode) {
            case 400:
                toast.error(
                    "Erro ao processar a requisição, verifique os dados enviados e tente novamente!",
                );
                break;
            case 403:
                toast.error("Unauthorized, por favor realize o login!!!");
                break;
            case 404:
                toast.error("Tarefa não encontrado");
                break;
            case 500:
                toast.error(
                    "Erro, o servidor não conseguiu processar a requisição, por favor tente novamente mais tarde ou contate o suporte!",
                );
                break;
            default:
                toast.error(message);
                break;
        }
    }
};

const getAll = async (
    observation: string,
    description: string,
    createdAt: string,
): Promise<TTasksWithTotalCount | Error> => {
    try {
        const url = "/cash-flow";
        const cashService = await ApiServiceFactory.create();
        const { data } = await cashService.get(url, {
            params: { skip: 0, take: 10, observation, description, createdAt },
        });
        if (data) {
            return {
                data: data.data,
                totalCount: data.headers,
            };
        }

        return new Error("Erro ao listar os registros.");
    } catch (error) {
        HandleApiErrors(error as AxiosError, "Erro ao listar os registros.");
        throw error;
    }
};

const getTotal = async (): Promise<any | Error> => {
    try {
        const url = "/cash-flow/totalCashFlows";
        const cashService = await ApiServiceFactory.create();
        const { data } = await cashService.get(url);
        if (data) {
            return {
                data: data,
            };
        }

        return new Error("Erro ao listar os registros.");
    } catch (error) {
        HandleApiErrors(error as AxiosError, "Erro ao listar os registros.");
        throw error;
    }
};

const getById = async (id: number): Promise<ICashFlowProps | Error> => {
    try {
        const { data } = await ApiServiceFactory.create().get(
            `/cash-flow/${id}`,
        );

        if (data) {
            return data;
        }

        return new Error("Erro ao consultar o registro.");
    } catch (error) {
        HandleApiErrors(error as AxiosError, "Erro ao consultar o registro.");
        throw error;
    }
};

const create = async (
    dados: Omit<ICashFlowProps, "id">,
): Promise<string | Error> => {
    try {
        const { data } = await ApiServiceFactory.create().post(
            "/cash-flow",
            dados,
        );

        if (data) {
            toast.success("Cash flow criado com sucesso.");
            return data.id;
        }

        return new Error("Erro ao criar o registro.");
    } catch (error) {
        HandleApiErrors(error as AxiosError, "Erro ao criar o registro.");
        throw error;
    }
};

const updateById = async (
    id: number | undefined,
    data: ICashFlowProps,
): Promise<void | Error> => {
    try {
        await ApiServiceFactory.create().put(`/cash-flow/${id}`, data);
        toast.success("Cash flow atualizado com sucesso.");
    } catch (error) {
        HandleApiErrors(error as AxiosError, "Erro ao atualizar o registro.");
        throw error;
    }
};

const deleteById = async (id: number | undefined): Promise<void | Error> => {
    try {
        await ApiServiceFactory.create().delete(`/cash-flow/${id}`, id);
        toast.success("Cash flow removido com sucesso.");
    } catch (error) {
        HandleApiErrors(error as AxiosError, "Erro ao apagar o registro.");
        throw error;
    }
};

export const CashFlowService = {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
    getTotal,
};
