'use client';

import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

const UploadPage = () => {
  const [publicId, setpublicId] = useState('');
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="img" />
      )}
      <CldUploadWidget
        uploadPreset="dzkqtfgy"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
        }}
        onSuccess={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as { public_id: string };
          setpublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
