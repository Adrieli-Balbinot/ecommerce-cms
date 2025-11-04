import type { ColumnDef } from "@tanstack/react-table";
import type { ProductDTO } from "../../dto/product.dto";
import { DataTableAction } from "@/components/layout/data-table-actions";

export const ProductColumns: ColumnDef<ProductDTO>[] = [
    { accessorKey: "id", header: "Id" },
    { accessorKey: "name", header: "Nome do produto" },
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