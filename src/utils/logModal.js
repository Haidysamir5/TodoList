
import tingle from "tingle.js";
import "tingle.js/dist/tingle.css";

//form list items of logs 
const renderModal = (logs) => {
  var li = ``;
  var list = ``;
  for (var i = 0; i < logs.length; i++) {
    li += `<li className="">${logs[i]}</li>`;
  }
  if (li != ``) {
    list = `
    <ul className=" modal-list">
      ${li}
    </ul>`;
  } else {
    list = `No Action has been done on this element`;
  }

  return list;
};

//initalize tingle modal 
export const logModal = (logs) => {
  // instanciate new modal
  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ["overlay", "button", "escape"],
    closeLabel: "Close",
    cssClass: ["custom-class-1", "custom-class-2"],
    beforeClose: function () {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
    },
  });

  //if logs is undifiend , form list items content and set it as the modal content
  if (logs)
    // set content
    modal.setContent(renderModal(logs));

  // open modal
  modal.open();
};
