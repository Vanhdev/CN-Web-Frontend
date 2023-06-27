import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useState } from "react";

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
function UploadImage (props) {
    const {imageList, setImageList} = props;

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        );
    };

    const handleChange = (e) => {
        // // console.log(e.fileList);
    }

    const uploadButton = (
        <div>
        <PlusOutlined />
        <div
            style={{
            marginTop: 2,
            }}
        >
            Upload
        </div>
        </div>
    );

    return (
        <>
        <Upload
            action="#"
            listType="picture-card"
            fileList={imageList}
            onPreview={handlePreview}
            onChange={handleChange}
        >
            {imageList.length >= 5 ? null : uploadButton}
        </Upload>
        <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
        >
            <img
            alt="example"
            style={{
                width: "100%",
            }}
            src={previewImage}
            />
        </Modal>
        </>
    );
};
export default UploadImage;
