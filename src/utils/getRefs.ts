const root = document.querySelector('#root');
const modalRoot = document.querySelector('#modal-root');

export const getRefs = () => {
  if (!root || !modalRoot) {
    throw new Error('add <div id="root" /> and <div id="modal-root"/> to index.html');
  }

  return {
    root,
    modalRoot,
  };
};
