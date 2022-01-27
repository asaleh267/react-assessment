import { DialogProps } from "@mui/material";

export interface SuccessSubmitionDialogProps {
    isOpen: DialogProps['open'];
    onClose: () => void;
}