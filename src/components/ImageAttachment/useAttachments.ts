import React from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ACCEPTABLE_EXTENSIONS } from "./constants";
import { DisplayAttachment, AttachmentsProps } from "./types";

const useAttachments = ({
  acceptableExtensions = ACCEPTABLE_EXTENSIONS,
  // TODO: verify with the business
  allowMultiple = true,
  attachments = [],
  isLoading = false,
  isDisabled = false,
  canRemoveAttachments = true,
  onPreviewOpen = () => {},
  onAttachmentAdd = () => {},
  onAttachmentRemove = () => {},
}: AttachmentsProps) => {
  const dispatch = useDispatch();
  const [isDragOver, setIsDragOver] = React.useState(false);

  const handleFileAccepted = (newFiles: File[]) => {
    setIsDragOver(false);
    onAttachmentAdd(newFiles.map(file => Object.assign(file, { id: uuidv4() })));
  };

  const handleFileRejected = (files: FileRejection[]) => {
    setIsDragOver(false);
    const errorMsg =
      !allowMultiple && files.length > 1
        ? "Only One File Upload at a Time is Allowed"
        : "The file type is not accepted. The following file types are accepted: \n" +
          acceptableExtensions.join(", ");
    console.log(errorMsg)
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: acceptableExtensions.map(extension => `.${extension}`),
    multiple: allowMultiple,
    onDropAccepted: handleFileAccepted,
    onDropRejected: handleFileRejected,
    // Upload when you click on button or when you drop files in the zone
    noClick: true,
    disabled: isDisabled || isLoading,
    onDragEnter: () => setIsDragOver(true),
    onDragLeave: () => setIsDragOver(false),
  });

  const handleAttachmentRemove = (id: string) => () => {
    onAttachmentRemove(id);
  };

  const handlePreviewOpen = (id: string) => () => {
    onPreviewOpen(id);
  };

  const getIsUploadingAttachment = (attachment: DisplayAttachment) => attachment?.progress && attachment?.progress < 100;

  const attachmentsLength = attachments.length;

  return {
    attachments,
    attachmentsLength,
    canRemoveAttachments,
    onFilesExplorerOpen: open,
    onAttachmentRemove: handleAttachmentRemove,
    onPreviewOpen: handlePreviewOpen,
    getIsUploadingAttachment,
    getRootProps,
    getInputProps,
  };
};

export default useAttachments;
