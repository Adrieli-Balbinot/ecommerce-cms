import { DataTable } from "@/components/ui/data-table";
import { useBrands } from "../../hooks/use-brand";
import { BrandColumns } from "./brand-columns";

export function BrandDataTable() {
    const { data: brands, isLoading } = useBrands();


    return (
        <div>
            {isLoading ? (<p>Carregando...</p>) : (<DataTable columns={BrandColumns} data={brands!}></DataTable>)}

        </div>
    )
}