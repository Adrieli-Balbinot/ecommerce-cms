import type { ColumnDef } from "@tanstack/react-table";
import type { BrandDTO } from "../../dto/brand.dto";
import { DataTableAction } from "@/components/layout/data-table-actions";

export const BrandColumns: ColumnDef<BrandDTO>[] = [
    { accessorKey: "id", header: "Id" },
    { accessorKey: "name", header: "Nome da Marca" },
    {
        accessorKey: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const category = row.original;
            return (
                <div className="flex justify-end mr-4">
                    <DataTableAction itemId={category.id!} />
                </div>
            )
        }
    }
]