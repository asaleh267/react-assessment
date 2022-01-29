import { ACCEPTABLE_EXTENSIONS } from "./constants";

export interface DisplayAttachment {
    id: string;
    name: string;
    status: "loading" | "deleting" | "clickable" | "none";
    progress?: number;
  }
  export interface AttachmentPreview {
    id: string;
    name: string;
    fileUrl?: string;
  }
  
  export type AcceptableExtensions = typeof ACCEPTABLE_EXTENSIONS[number];

  
export interface Attachment extends File {
    id: string;
  }

  export interface ImageAttachmentProps {
    fileToPreview: AttachmentPreview;
    attachment?: DisplayAttachment;
    isLoading?: boolean;
    isDisabled?: boolean;
    canRemoveAttachments?: boolean;
    onAttachmentAdd?: (attachments: Attachment[]) => void;
    onAttachmentRemove?: (id: string) => void;
  }
  
  export interface AttachmentsProps {
    attachments?: DisplayAttachment[];
    allowMultiple?: boolean;
    acceptableExtensions?: AcceptableExtensions[];
    isLoading?: boolean;
    isDisabled?: boolean;
    canRemoveAttachments?: boolean;
    tooltipTitle?: string;
    onPreviewOpen?: (id: string) => void;
    onAttachmentAdd?: (attachments: Attachment[]) => void;
    onAttachmentRemove?: (id: string) => void;
  }
  