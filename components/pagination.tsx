import { usePathname, useSearchParams } from "next/navigation";
import {
    Pagination as ShardsPagination,
    PaginationItem,
    PaginationContent,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    PaginationLink,
} from "@/components/ui/pagination";
import usePagination, {
    ELLIPSIS_LEFT,
    ELLIPSIS_RIGHT,
} from "./hooks/usePagination";

interface PaginationProps {
    page: number;
    limit: number;
    total: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, limit, total }) => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pageCurrent = params.get("page");
    const { pages } = usePagination({ page, limit, total });

    const generateUrl = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.get("page");
        params.set("page", String(page));
        const url = `${pathName}?${params.toString()}`;
        return url;
    };

    return (
        <ShardsPagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="/cash?page=1" />
                </PaginationItem>
                {pages.map((p, index) => {
                    const isEllipsis =
                        p === ELLIPSIS_LEFT || p === ELLIPSIS_RIGHT;

                    if (isEllipsis) {
                        return (
                            <PaginationItem key={p}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    return (
                        <PaginationItem key={p}>
                            <PaginationLink
                                href={generateUrl(p)}
                                isActive={
                                    Number(pageCurrent || 1) === index + 1
                                }
                            >
                                {p}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href={`/cash?page=${pages.length}`} />
                </PaginationItem>
            </PaginationContent>
        </ShardsPagination>
    );
};

export default Pagination;
