import React, { FC, memo, useState, useEffect } from 'react';
import clsx from 'clsx';
import 'wicg-inert';

import Portal from '@comps/Portal';

import './index.scss';

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  className?: string;
}

const Modal: FC<ModalProps> = ({ children, open, onClose, className }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => {
        (document as any).activeElement.blur();
        setActive(open);
        (document as any).querySelector('#root').setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      (document as any).querySelector('#root').removeAttribute('inert');
    };
  }, [open]);

  const handleClose = () => {
    onClose && onClose();
  };

  return open || active ? (
    <Portal className={clsx('sr-modal', className)}>
      <div className={clsx('modal-container', { active: active && open })}>
        <div className="modal-content">
          <i className="close" onClick={handleClose} />
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

Modal.defaultProps = {
  open: false,
};

export default memo(Modal);
