import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

import React from 'react';

function ImageModal({ src }) {
  return (
    <Dialog>
      <DialogTrigger className="h-[200px] w-full">
        <Image
          src={src}
          alt={'image'}
          width={400}
          height={400}
          className="object-cover object-center h-full w-full"
          priority
        />
      </DialogTrigger>
      <DialogContent className="overflow-auto">
        <Image
          src={src}
          alt={'image'}
          width={1000}
          height={1000}
          className=" object-contain h-full w-full"
          priority
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImageModal;
