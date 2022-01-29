import { AttachmentPreview } from "../../components/ImageAttachment/types";

export interface ConfirmationProps {
    onBack: () => void;
    onDone: () => void;
}

export interface Confirmation {
    imageFile: AttachmentPreview;
    signatureUrl: string;
}