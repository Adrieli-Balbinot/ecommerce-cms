import { DataTable } from "@/components/ui/data-table";
import { useProducts } from "../../hooks/use-product";
import { ProductColumns } from "./product-columns";

export function ProductDataTable() {
    const { data: products, isLoading } = useProducts();


    return (
        <div>
            {isLoading ? (<p>Carregando...</p>) : (<DataTable columns={ProductColumns} data={products!}></DataTable>)}

        </div>
    )
}