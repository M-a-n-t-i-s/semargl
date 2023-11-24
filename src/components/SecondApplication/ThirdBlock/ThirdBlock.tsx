import React, { useState } from "react";
import s from "./ThirdBlock.module.css";

const ThirdBlock = () => {

    const [image, setImage] = useState<File | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files && event.dataTransfer.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const formatFileSize = (size: number): string => {
        if (size >= 1000000) {
            return `${(size / 1000000).toFixed(2)} MB`;
        } else if (size >= 1000) {
            return `${(size / 1000).toFixed(2)} KB`;
        } else {
            return `${size} B`;
        }
    };

    return (
        <>
            <div className={s.window}
                 onDrop={handleImageDrop}
                 onDragOver={handleDragOver}
            >
                {image ? (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded Image"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                        }}
                    />
                ) : (
                    <h3>Перетащите изображение или выберите файл</h3>
                )}
            </div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && (
                <div>
                    <h4>Имя файла: {image.name}</h4>
                    <p>Тип MIME: {image.type}</p>
                    <p>Размер: {formatFileSize(image.size)}</p>
                </div>
            )}
        </>
    );
};

export default ThirdBlock;