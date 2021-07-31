import React, { FC, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import 'wicg-inert';

import Portal from '@comps/Portal';

import './index.scss';

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  locked?: boolean;
}

const Modal: FC<ModalProps> = ({ children, open, onClose, locked }) => {
  const [active, setActive] = useState(false);
  const backdrop = useRef<any>(null);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open as boolean);

    const keyHandler = (e: any) =>
      !locked && [27].indexOf(e.which) >= 0 && onClose && onClose();

    const clickHandler = (e: any) =>
      !locked && e.target === current && onClose && onClose();

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        (document as any).activeElement.blur();
        setActive(open);
        (document as any).querySelector('#root').setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }

      (document as any).querySelector('#root').removeAttribute('inert');
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, locked, onClose]);

  return open || active ? (
    <Portal className="sr-modal">
      <div className={clsx('modal-container', { active: active && open })}>
        <div className="modal-content">{children}</div>
      </div>
    </Portal>
  ) : null;
};

Modal.defaultProps = {
  open: false,
};

export default Modal;
