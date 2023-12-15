import React from "react";

const ModalAddNew = ({ isRun, onClose, children }) =>  {
    if (!isRun) return null;

  const handleClick = (event) => {
    // Ngăn chặn sự kiện lan truyền lên để tránh đóng modal khi click bên trong modal
    event.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={handleClick}
        style={{
          background: "transparent",
          height: 150,
          width: 240,
          margin: "auto",
          padding: "2%",
          border: "2px solid transparent",
          borderRadius: "10px",
          boxShadow: "2px solid transparent",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalAddNew