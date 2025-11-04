import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
import { EditIcon } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom";

type DataTableActionPropos = {
    itemId: string | number;
}

export function DataTableAction({ itemId }: DataTableActionPropos) {

    const location = useLocation();
    const navigate = useNavigate();

    function hableNavigateToId() {
        const path = location.pathname;
        navigate(`${path}/${itemId}`);
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={hableNavigateToId}>
                    <EditIcon />
                </Button></TooltipTrigger>
            <TooltipContent>
                <p>Editar/remover registro</p>
            </TooltipContent>
        </Tooltip>
    )
}