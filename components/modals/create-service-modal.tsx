"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { format } from "date-fns/format";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ICashFlowProps } from "@/app/(cash)/(routes)/cash/interfaces/iCashFlow.interface";
import { CashFlowService } from "@/app/(cash)/(routes)/cash/services/cashService";
import { cn } from "@/app/lib/utils";
import { useModal } from "../hooks/use-modal-store";
import { Button } from "../ui/button";

const formSchema = z.object({
    observation: z.string().optional(),
    paymentedAt: z
        .string()
        .min(1, { message: "Data é obrigatório" })
        .refine((name) => name !== "general", {
            message: "Data não pode ser 'generico'",
        }),
    description: z
        .string()
        .min(1, { message: "Descrição é obrigatório" })
        .refine((name) => name !== "general", {
            message: "Descrição não pode ser 'generico'",
        }),
    value: z
        .string()
        .min(1, { message: "Valor é obrigatório" })
        .refine((name) => name !== "general", {
            message: "Valor não pode ser 'generico'",
        }),
    companyId: z.number().optional(),
    type: z.string().optional(),
});

const types = [
    { id: 1, name: "ENTRADA" },
    { id: 2, name: "SAÍDA" },
];

export const CreateServiceModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const router = useRouter();
    const isModalOpen =
        (isOpen && type === "createCash") || (isOpen && type === "editCash");
    const { server } = data;
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            observation: server?.observation || "",
            description: server?.description || "",
            type: server?.type || "",
            companyId: server?.companyId || 1,
            value: "",
            paymentedAt: "",
        },
    });

    const [isLoading, setIsLoading] = useState(form.formState.isSubmitting);

    /**
     * Define default values list loading
     */
    useEffect(() => {
        setIsLoading(true);
    }, []);

    useEffect(() => {
        if (server) {
            form.setValue("description", server.description);
            form.setValue("observation", server.observation || "");
            form.setValue("companyId", server.companyId);
            form.setValue(
                "type",
                server.type === "ENTRY" ? "ENTRADA" : "SAÍDA",
            );
            form.setValue("value", server.value);
            form.setValue(
                "paymentedAt",
                format(server.paymentedAt, "yyyy-MM-dd"),
            );
        } else {
            form.setValue("description", "");
        }
    }, [server, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const cash: ICashFlowProps = {
                description: values.description,
                observation: values.observation,
                value: values.value,
                type: values.type === "ENTRADA" ? "ENTRY" : "EXIT",
                companyId: 1,
                paymentedAt: values.paymentedAt,
            };
            if (server === undefined) {
                await CashFlowService.create(cash);
            } else {
                await CashFlowService.updateById(server?.id, cash);
            }
            form.reset();
            router.refresh();
            router.push("/cash");
            onClose();
        } catch (error) {}
    };

    const handleClose = () => {
        form.reset();
        onClose();
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Cadastro do controle financeiro
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <div className="space-y-8 px-6">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Descrição</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                placeholder="Descrição"
                                                {...field}
                                                data-testid="description"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="observation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Observação</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                placeholder="Observação"
                                                {...field}
                                                data-testid="observation"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="value"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Valor</FormLabel>
                                        <FormControl>
                                            <NumericFormat
                                                {...field}
                                                className={cn(
                                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0",
                                                )}
                                                onValueChange={(values) =>
                                                    values.value
                                                }
                                                allowLeadingZeros={false}
                                                decimalScale={2}
                                                fixedDecimalScale={true}
                                                decimalSeparator=","
                                                allowedDecimalSeparators={["."]}
                                                prefix="R$ "
                                                //suffix='$'
                                                thousandSeparator="."
                                                //thousandsGroupStyle='thousand'
                                                placeholder="Valor"
                                                isAllowed={(values) => {
                                                    if (values.value.length > 9)
                                                        return false;
                                                    return true;
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="paymentedAt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                type="date"
                                                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                placeholder="Data"
                                                {...field}
                                                data-testid="paymentedAt"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tipo</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            data-testid="type"
                                            name="type"
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {types.map((type) => (
                                                    <SelectItem
                                                        key={type.id}
                                                        id={type.id.toString()}
                                                        value={type.name}
                                                    >
                                                        {type.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant="default" data-testid="save">
                                Salvar
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
